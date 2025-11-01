import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const loadingMessages = [
  "Analisando suas respostas...",
  "Conectando com seu perfil energético...",
  "Revelando seu caminho místico...",
  "Preparando sua revelação...",
];

export const LoadingScreen = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 100);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-md mx-auto text-center px-4"
    >
      <div className="relative mb-12">
        <div className="absolute inset-0 animate-pulse-mystic bg-primary/20 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative z-10"
        >
          <div className="w-32 h-32 mx-auto border-4 border-primary/30 border-t-primary rounded-full" />
        </motion.div>
        <Sparkles className="w-12 h-12 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-mystic" />
      </div>

      <motion.p
        key={messageIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-xl font-medium mb-8"
      >
        {loadingMessages[messageIndex]}
      </motion.p>

      <div className="w-full bg-card rounded-full h-2 overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-sm text-muted-foreground">{progress}%</p>
    </motion.div>
  );
};
