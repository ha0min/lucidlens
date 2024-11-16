"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmojiButton from "@/components/emoji-button";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface Fragment {
  location: string;
  interaction: string;
  person: string;
  relation: string;
}

export default function CreatePage() {
  const [customMood, setCustomMood] = useState("");
  const [customProtagonist, setCustomProtagonist] = useState("");
  const [fragments, setFragments] = useState<Fragment[]>([
    {
      location: "",
      interaction: "",
      person: "",
      relation: "",
    },
  ]);
  const [selectedMood, setSelectedMood] = useState("happy");
  const [selectedProtagonist, setSelectedProtagonist] = useState("human");

  const updateFragment = useCallback(
    (index: number, field: keyof Fragment, value: string) => {
      setFragments((prev) =>
        prev.map((fragment, i) =>
          i === index ? { ...fragment, [field]: value } : fragment
        )
      );
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const memoryData = {
        mood: selectedMood === "custom" ? customMood : selectedMood,
        protagonist:
          selectedProtagonist === "custom"
            ? customProtagonist
            : selectedProtagonist,
        fragments,
      };

      try {
        // Add your API call here
        console.log("Submitting memory:", memoryData);
      } catch (error) {
        console.error("Error submitting memory:", error);
      }
    },
    [
      selectedMood,
      customMood,
      selectedProtagonist,
      customProtagonist,
      fragments,
    ]
  );

  const moodEmojis = {
    happy: { emoji: "😊", text: "Happy" },
    sad: { emoji: "😢", text: "Sad" },
    angry: { emoji: "😠", text: "Angry" },
    custom: { emoji: "✨", text: "Custom" },
  };

  const protagonistEmojis = {
    human: { emoji: "👤", text: "Human" },
    dog: { emoji: "🐕", text: "Dog" },
    custom: { emoji: "✨", text: "Custom" },
  };

  const handleMoodSelect = useCallback((value: string) => {
    setSelectedMood(value);
    if (value !== "custom") {
      setCustomMood("");
    }
  }, []);

  const handleProtagonistSelect = useCallback((value: string) => {
    setSelectedProtagonist(value);
    if (value !== "custom") {
      setCustomProtagonist("");
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
        <h1 className="text-4xl font-bold">Create Memory</h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="rounded-lg border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Mood Selection */}
              <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Mood</h2>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(moodEmojis).map(
                    ([value, { emoji, text }]) => (
                      <EmojiButton
                        key={value}
                        emoji={emoji}
                        text={text}
                        isSelected={selectedMood === value}
                        onClick={() => handleMoodSelect(value)}
                      />
                    )
                  )}
                </div>
                {selectedMood === "custom" && (
                  <input
                    type="text"
                    className="w-full rounded-md border bg-background px-3 py-2"
                    placeholder="Enter custom mood"
                    value={customMood}
                    onChange={(e) => setCustomMood(e.target.value)}
                  />
                )}
              </div>

              {/* Protagonist Selection */}
              <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Protagonist</h2>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(protagonistEmojis).map(
                    ([value, { emoji, text }]) => (
                      <EmojiButton
                        key={value}
                        emoji={emoji}
                        text={text}
                        isSelected={selectedProtagonist === value}
                        onClick={() => handleProtagonistSelect(value)}
                      />
                    )
                  )}
                </div>
                {selectedProtagonist === "custom" && (
                  <input
                    type="text"
                    className="w-full rounded-md border bg-background px-3 py-2"
                    placeholder="Enter custom protagonist"
                    value={customProtagonist}
                    onChange={(e) => setCustomProtagonist(e.target.value)}
                  />
                )}
              </div>

              {/* Memory Fragments */}
              <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Memory Fragments</h2>
                <AnimatePresence>
                  {fragments.map((fragment, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="space-y-4 p-4 border rounded-md"
                    >
                      <input
                        placeholder="Location"
                        className="w-full rounded-md border bg-background px-3 py-2"
                        value={fragment.location}
                        onChange={(e) =>
                          updateFragment(index, "location", e.target.value)
                        }
                      />
                      <input
                        placeholder="Interaction"
                        className="w-full rounded-md border bg-background px-3 py-2"
                        value={fragment.interaction}
                        onChange={(e) =>
                          updateFragment(index, "interaction", e.target.value)
                        }
                      />
                      <input
                        placeholder="Person"
                        className="w-full rounded-md border bg-background px-3 py-2"
                        value={fragment.person}
                        onChange={(e) =>
                          updateFragment(index, "person", e.target.value)
                        }
                      />
                      <input
                        placeholder="Relation"
                        className="w-full rounded-md border bg-background px-3 py-2"
                        value={fragment.relation}
                        onChange={(e) =>
                          updateFragment(index, "relation", e.target.value)
                        }
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <RainbowButton
                type="submit"
                className="w-full bg-primary px-8 py-2 text-primary-foreground hover:opacity-90"
              >
                Create Memory
              </RainbowButton>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
