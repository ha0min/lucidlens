"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useGetMCQs } from "@/hooks/use-get-mcqs";
import { Skeleton } from "@/components/ui/skeleton";

function QuestionSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-8 space-y-6">
      {/* Emoji and Question Skeleton */}
      <div className="text-center space-y-4">
        <Skeleton className="h-16 w-16 rounded-full mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
      </div>

      {/* Options Skeleton */}
      <div className="grid gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>

      {/* Button Skeleton */}
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function MCQPage({
  params,
}: {
  params: { id: string }
}) {
  const { fetch, data, isLoading, isError } = useGetMCQs();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Array<{question: string, answer: string}>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch(params.id);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
        {/* Progress Bar Skeleton */}
        <div className="w-full max-w-2xl h-2 bg-gray-200 rounded-full overflow-hidden">
          <Skeleton className="h-full w-1/3" />
        </div>

        <main className="w-full max-w-2xl space-y-8">
          <QuestionSkeleton />
          
          {/* Question Counter Skeleton */}
          <div className="text-center">
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>
        </main>
      </div>
    );
  }

  if (isError || !data?.success || !data.data) {
    return <div>Error loading questions</div>;
  }

  const questions = data?.data;

  const handleOptionSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNavigation = () => {
    if (selectedAnswer) {
      // Check if this question's answer is already recorded
      if (answers.some(a => a.question === questions[currentQuestion].question)) {
        return;
      }

      const newAnswers = [...answers, {
        question: questions[currentQuestion].question,
        answer: selectedAnswer
      }];
      
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        console.log("Quiz completed!", newAnswers);
        // Here you can call your submission hook
        // submitAnswers(newAnswers);
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <main className="w-full max-w-2xl space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="rounded-lg border bg-card p-8 space-y-6"
          >
            {/* Emoji and Question */}
            <div className="text-center space-y-4">
              <span className="text-6xl">
                {questions[currentQuestion].emoji}
              </span>
              <h2 className="text-xl font-semibold">
                {questions[currentQuestion].question}
              </h2>
            </div>

            {/* Options */}
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option) => (
                <Button
                  key={option}
                  variant={selectedAnswer === option ? "default" : "outline"}
                  className={`w-full p-4 text-left transition-colors ${
                    selectedAnswer === option
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Navigation Button */}
            <Button
              className="w-full rounded-full"
              disabled={!selectedAnswer || isSubmitting}
              onClick={handleNavigation}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </Button>
          </motion.div>
        </AnimatePresence>

        {/* Question Counter */}
        <p className="text-center text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </main>
    </div>
  );
}
