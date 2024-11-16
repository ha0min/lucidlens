"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  question: string;
  emoji: string;
  options: string[];
  correctAnswer: string;
}

// Sample quiz data
const quizData: Question[] = [
  {
    question: "What is the capital of France?",
    emoji: "🗼",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    emoji: "🔴",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
];

export default function MCQPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNavigation = () => {
    if (selectedAnswer) {
      setAnswers([...answers, selectedAnswer]);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Handle quiz completion
        console.log("Quiz completed!", answers);
      }
    }
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

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
                {quizData[currentQuestion].emoji}
              </span>
              <h2 className="text-xl font-semibold">
                {quizData[currentQuestion].question}
              </h2>
            </div>

            {/* Options */}
            <div className="grid gap-4">
              {quizData[currentQuestion].options.map((option) => (
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
              disabled={!selectedAnswer}
              onClick={handleNavigation}
            >
              {currentQuestion === quizData.length - 1 ? "Submit" : "Next"}
            </Button>
          </motion.div>
        </AnimatePresence>

        {/* Question Counter */}
        <p className="text-center text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {quizData.length}
        </p>
      </main>
    </div>
  );
}
