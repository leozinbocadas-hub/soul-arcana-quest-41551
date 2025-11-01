import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  text: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  selectedAnswer?: string | string[];
  onSelect: (answerId: string) => void;
  multipleChoice?: boolean;
}

export const QuestionCard = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  multipleChoice = false,
}: QuestionCardProps) => {
  const isSelected = (optionId: string) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(optionId);
    }
    return selectedAnswer === optionId;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto px-4 md:px-6"
    >
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 leading-relaxed break-words">
          {question}
        </h2>
        {multipleChoice && (
          <p className="text-muted-foreground text-xs md:text-sm break-words">
            Selecione uma ou mais opções
          </p>
        )}
      </div>

      <div className="space-y-3 md:space-y-4">
        {options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(option.id)}
            className={cn(
              "w-full max-w-full p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 text-left relative group",
              isSelected(option.id)
                ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(265_59%_46%/0.3)]"
                : "border-border bg-card hover:border-primary/50 hover:bg-card/80"
            )}
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div
                className={cn(
                  "flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all",
                  isSelected(option.id)
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/30 bg-transparent"
                )}
              >
                {isSelected(option.id) && <Check className="w-4 h-4 md:w-5 md:h-5" />}
              </div>
              <p className="text-sm md:text-base lg:text-lg font-medium flex-1 break-words leading-relaxed">
                {option.text}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
