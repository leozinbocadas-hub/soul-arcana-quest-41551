import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Lock, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-3xl mx-auto text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="mb-8 flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-mystic bg-primary/20 rounded-full blur-xl" />
          <BookOpen className="w-24 h-24 text-primary relative z-10 animate-float" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Descubra Seu Perfil Místico</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent break-words leading-tight px-2"
      >
        Descubra Seu Caminho Místico em 3 Minutos ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto break-words leading-relaxed px-2"
      >
        Responda 10 perguntas e descubra se você está pronto para acessar
        conhecimentos ancestrais reservados apenas para iniciados
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
      >
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="break-words">Apenas 3 minutos</span>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Lock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="break-words">Acesso Limitado</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="px-2"
      >
        <Button
          variant="mystic-hero"
          size="xl"
          onClick={onStart}
          className="w-full md:w-auto min-w-[280px]"
        >
          Começar Jornada Mística
          <Sparkles className="w-5 h-5" />
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-xs md:text-sm text-muted-foreground break-words mt-6"
      >
        Mais de <span className="text-primary font-semibold">2.847 buscadores</span> já
        descobriram seu perfil místico
      </motion.p>
    </motion.div>
  );
};
