import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Check,
  Lock,
  Sparkles,
  Star,
  Users,
  Zap,
  Shield,
  MessageCircle,
} from "lucide-react";

interface ResultScreenProps {
  profile: {
    name: string;
    description: string;
    characteristics: string[];
  };
  onRestart: () => void;
}

const benefits = [
  {
    icon: BookOpen,
    text: "Mais de 600 grimórios digitais exclusivos sobre esoterismo, ocultismo, magia ancestral, rituais e práticas místicas",
  },
  {
    icon: Lock,
    text: "Acesso vitalício e ilimitado a todo acervo de conhecimento — estude no seu ritmo, quando e onde quiser",
  },
  {
    icon: Users,
    text: "Comunidade pública ativa para trocar experiências, compartilhar magias, estudos, rituais e conhecimentos com outros praticantes sérios",
  },
  {
    icon: Zap,
    text: "Feed diário atualizado com conteúdos aprofundados sobre esoterismo, ocultismo, magia prática, rituais, proteções e muito mais",
  },
  {
    icon: Sparkles,
    text: "Aprenda do zero ao avançado: desde conceitos básicos até técnicas avançadas de alta magia",
  },
  {
    icon: Shield,
    text: "Descubra feitiços, rituais poderosos, proteções energéticas e técnicas de manifestação validadas por séculos",
  },
  {
    icon: Star,
    text: "Compreenda os mistérios do tarot, astrologia, numerologia, runas, radiestesia e dezenas de outros sistemas místicos",
  },
  {
    icon: MessageCircle,
    text: "Suporte direto via WhatsApp para tirar dúvidas e orientações sobre sua jornada",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "Incrível! Finalmente encontrei conteúdo sério e profundo. A comunidade é super ativa e o acervo é gigantesco. Já aprendi mais em 1 mês do que em anos buscando sozinha.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Eu estava perdido sem saber por onde começar. A Biblioteca Mística mudou isso! Conteúdo organizado, desde o básico até práticas avançadas. Vale cada centavo!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "A comunidade é o diferencial! Poder compartilhar experiências com pessoas sérias e trocar conhecimento é valioso demais. Recomendo muito!",
    rating: 5,
  },
];

export const ResultScreen = ({ profile, onRestart }: ResultScreenProps) => {
  const handleCheckout = () => {
    window.location.href = "https://pay.cakto.com.br/3du3hsn_618390";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto px-4 md:px-6 pb-20"
    >
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Seu Perfil Místico Revelado</span>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 animate-pulse-mystic bg-primary/20 rounded-full blur-2xl" />
          <BookOpen className="w-20 h-20 text-primary mx-auto relative z-10 animate-float" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent break-words leading-tight px-2">
          {profile.name}
        </h2>

        <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto break-words leading-relaxed px-2">
          {profile.description}
        </p>

        <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 break-words">Características do Seu Perfil:</h3>
          <ul className="space-y-2 md:space-y-3">
            {profile.characteristics.map((char, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-left text-sm md:text-base break-words leading-relaxed">{char}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 break-words leading-relaxed px-2">
          Baseado no seu perfil, identificamos que você está pronto para acessar
          conhecimentos que poucos têm o privilégio de conhecer. A Biblioteca Mística foi
          criada exatamente para pessoas como você...
        </p>
      </motion.div>

      {/* Offer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-card to-primary/5 border-2 border-primary/50 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_0_40px_hsl(265_59%_46%/0.3)]"
      >
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 break-words leading-tight px-2">
            🔮 Acesse Agora a Biblioteca Mística Completa
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground break-words leading-relaxed px-2">
            O maior acervo digital de conhecimento esotérico e oculto em um só lugar
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3 md:gap-4 bg-background/50 rounded-lg md:rounded-xl p-3 md:p-4"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <p className="text-left flex-1 text-sm md:text-base break-words leading-relaxed">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Price */}
        <div className="bg-background/80 rounded-xl md:rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 rounded-full px-3 py-1.5 md:px-4 md:py-2">
              <Zap className="w-4 h-4 text-destructive" />
              <span className="text-xs md:text-sm font-semibold text-destructive break-words">
                🔥 62% DE DESCONTO
              </span>
            </div>
          </div>

          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <p className="text-muted-foreground line-through text-sm md:text-base lg:text-lg text-center break-words">
              De R$ 97,00
            </p>
            
            {/* DESTAQUE MÁXIMO - Parcelamento */}
            <div className="mb-3 text-center">
              <p className="text-base md:text-lg lg:text-xl text-secondary font-medium mb-1 break-words">
                6x de
              </p>
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-none break-words">
                R$ 7,30
              </p>
            </div>

            {/* Preço à vista - Secundário */}
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/90 text-center break-words">
              ou R$ 37,00 à vista
            </p>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8 text-center break-words leading-relaxed">
            ⚡ Últimas vagas com desconto — Oferta por tempo limitado
          </p>

          <Button
            variant="mystic-hero"
            size="xl"
            onClick={handleCheckout}
            className="w-full mb-4 md:mb-6 text-base md:text-lg animate-pulse-mystic"
          >
            Quero acessar agora
          </Button>

          {/* Card de Garantia - DESTAQUE */}
          <div className="relative mb-4 md:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-md animate-pulse-mystic" />
            <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/40 rounded-lg p-4 md:p-5 text-center">
              <p className="text-sm md:text-base font-semibold text-foreground break-words leading-relaxed">
                💳 <span className="text-primary">Garantia de 7 dias</span> — Se não gostar, devolvemos 100% do seu dinheiro sem perguntas
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center break-words leading-relaxed">
            🔒 Seus dados estão seguros | 💳 Pagamento processado por Cakto
          </p>
        </div>
      </motion.div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 break-words leading-tight px-2">
          O Que Dizem Nossos Membros Iniciados
        </h3>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6"
            >
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 break-words leading-relaxed">{testimonial.text}</p>
              <p className="font-semibold text-sm md:text-base break-words">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xs md:text-sm text-muted-foreground break-words">
          ✨ Mais de <span className="text-primary font-semibold">2.847 membros ativos</span>{" "}
          | ⭐ Avaliação <span className="text-primary font-semibold">4.9/5.0</span>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center space-y-4"
      >
        <Button
          variant="mystic-hero"
          size="xl"
          onClick={handleCheckout}
          className="w-full md:w-auto min-w-[280px] md:min-w-[320px] text-base md:text-lg"
        >
          Quero acessar agora
        </Button>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button variant="mystic-secondary" onClick={onRestart} className="text-sm md:text-base">
            🔄 Refazer o Quiz
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
