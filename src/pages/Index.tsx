import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { StarField } from "@/components/StarField";
import { WelcomeScreen } from "@/components/quiz/WelcomeScreen";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { LoadingScreen } from "@/components/quiz/LoadingScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface Answers {
  [key: number]: string | string[];
}

const questions = [
  {
    id: 1,
    question: "🌟 Qual nível você se enquadra quando falamos de espiritualidade?",
    options: [
      { id: "a", text: "🌱 Estou buscando conhecimento agora" },
      { id: "b", text: "📚 Já busquei conhecimento, mas não me agregou muito" },
      { id: "c", text: "✨ Tenho muita curiosidade, mas nunca corri atrás" },
    ],
  },
  {
    id: 2,
    question: "🎯 Qual sua maior dificuldade nesse meio?",
    options: [
      { id: "a", text: "🔍 Achar conteúdos que realmente ensinem de verdade" },
      { id: "b", text: "🧭 Não saber por onde eu posso começar" },
      { id: "c", text: "⚠️ Aprender da forma errada e acabar atraindo coisas que não quero" },
    ],
  },
  {
    id: 3,
    question: "👥 Você tem contato com pessoas que fazem parte desse meio?",
    options: [
      { id: "a", text: "❌ Não tenho contato com pessoas que praticam ou estudam sobre" },
      {
        id: "b",
        text: "⚡ Tenho, mas não são pessoas de confiança ou que possam ensinar de verdade",
      },
      {
        id: "c",
        text: "💫 Tenho vontade de ter conexões com pessoas que estudam e praticam sobre",
      },
    ],
  },
  {
    id: 4,
    question:
      "🔮 Qual dessas práticas você mais sente afinidade ou já estudou profundamente?",
    options: [
      { id: "a", text: "🥁 Umbanda, Candomblé, Quimbanda, Kimbanda, Jurema, etc." },
      { id: "b", text: "👼 Magia Angelical, Cerimonial, Goetia, Alta Magia, etc." },
      { id: "c", text: "🔯 Radiestesia, Runas, Mesa Radiônica, Oráculos no geral" },
      { id: "d", text: "🌙 Numerologia, Astrologia, Projeção Astral, etc." },
      { id: "e", text: "🧘 Reiki, Budismo, Taoísmo, etc." },
      { id: "f", text: "🌹 Tantra e Magia Sexual" },
      { id: "g", text: "🌿 Ervas, Banhos, Incensos, Cristais, etc." },
      { id: "h", text: "⚜️ Deuses e Deidades" },
    ],
    multipleChoice: true,
  },
  {
    id: 5,
    question: "👁️ Você acredita ou já teve experiências espirituais?",
    options: [
      { id: "a", text: "✅ Sim, já tive algumas experiências, mas não estudei muito o porquê" },
      { id: "b", text: "❌ Nunca tive nenhuma experiência espiritual" },
      { id: "c", text: "💭 Acredito, mas nunca tive nenhuma experiência espiritual" },
    ],
  },
  {
    id: 6,
    question: "📖 Quando lê um grimório ou livro antigo de magia, o que sente?",
    options: [
      { id: "a", text: "🔥 Como se algo dentro de mim despertasse" },
      { id: "b", text: "⚡ Curiosidade e desejo de praticar" },
      { id: "c", text: "🌟 Fascínio, mas ainda não compreendo tudo" },
      { id: "d", text: "🤔 Dúvida — não sei se isso é real" },
    ],
  },
  {
    id: 7,
    question:
      "🕯️ Você já criou ou participou de algum ritual, círculo mágico ou trabalho energético coletivo?",
    options: [
      { id: "a", text: "✨ Sim, algumas vezes" },
      { id: "b", text: "📚 Apenas estudos teóricos" },
      { id: "c", text: "🌙 Ainda não, mas quero vivenciar" },
    ],
  },
  {
    id: 8,
    question: "🌌 Qual dessas afirmações mais descreve o seu momento espiritual atual?",
    options: [
      { id: "a", text: "🔮 Estou em busca de conhecimento oculto profundo" },
      { id: "b", text: "⚡ Já trilho meu caminho, mas quero evoluir mais" },
      { id: "c", text: "🗝️ Sinto que há segredos que ainda não encontrei" },
      { id: "d", text: "🌱 Estou começando e quero entender melhor esse universo" },
    ],
  },
  {
    id: 9,
    question:
      "📜 Se houvesse um lugar secreto com grimórios, rituais e livros que quase ninguém tem acesso, você...",
    options: [
      { id: "a", text: "🔓 Entraria sem hesitar — o conhecimento é sagrado" },
      { id: "b", text: "🙏 Entraria, mas com respeito e cautela" },
      { id: "c", text: "⚠️ Talvez não — isso parece perigoso demais" },
    ],
  },
  {
    id: 10,
    question:
      "🚪 Por fim: a Biblioteca Mística abre suas portas apenas por tempo limitado. Você quer ser um dos poucos a ter acesso a esse acervo e à comunidade dos iniciados?",
    options: [
      { id: "a", text: "💜 Sim, quero entrar antes que feche" },
      { id: "b", text: "🌙 Talvez, preciso sentir o chamado" },
      { id: "c", text: "⏳ Ainda não estou pronto" },
    ],
  },
];

const getProfile = (answers: Answers) => {
  const experienceLevel = answers[1];
  const hasExperiences = answers[5] === "a";
  const deepSeeker = answers[8] === "a" || answers[8] === "b";
  const ready = answers[10] === "a";

  if (ready && deepSeeker && hasExperiences) {
    return {
      name: "O Guardião do Conhecimento",
      description:
        "Você é um buscador experiente, com vivências reais no campo espiritual. Sua jornada demonstra maturidade e profundidade, e você está pronto para acessar conhecimentos que poucos conseguem compreender. Você não apenas busca teoria — você quer prática, transformação e domínio real.",
      characteristics: [
        "Já possui experiências espirituais significativas",
        "Busca conhecimento profundo e prático",
        "Pronto para acessar grimórios e técnicas avançadas",
        "Valoriza a transmissão correta de conhecimento ancestral",
      ],
    };
  }

  if (deepSeeker || experienceLevel === "b") {
    return {
      name: "O Praticante Nato",
      description:
        "Você já trilhou caminhos místicos e sabe que há muito mais a descobrir. Sua intuição te guia, mas você sente que precisa de um acervo sólido e uma comunidade séria para evoluir ainda mais. Você está no momento ideal para aprofundar seus estudos e práticas.",
      characteristics: [
        "Já teve contato com práticas esotéricas",
        "Sente o chamado para evoluir espiritualmente",
        "Busca conteúdo que vá além do superficial",
        "Pronto para mergulhar em conhecimentos mais profundos",
      ],
    };
  }

  if (experienceLevel === "a" || experienceLevel === "c") {
    return {
      name: "O Buscador Avançado",
      description:
        "Você está em busca ativa de conhecimento místico e sente que este é o momento de mergulhar fundo. Sua curiosidade é genuína e você está pronto para absorver ensinamentos que transformarão sua jornada espiritual. O caminho está se abrindo para você.",
      characteristics: [
        "Grande curiosidade sobre o ocultismo e esoterismo",
        "Busca uma base sólida de conhecimento",
        "Quer aprender da forma correta desde o início",
        "Pronto para se conectar com uma comunidade de praticantes",
      ],
    };
  }

  return {
    name: "O Iniciado Curioso",
    description:
      "Você está no começo de uma jornada fascinante. Sua abertura para o desconhecido e sua vontade de aprender são os primeiros passos para uma transformação profunda. A Biblioteca Mística oferece exatamente o que você precisa: conhecimento desde o básico até o avançado, tudo em um só lugar.",
    characteristics: [
      "Interesse genuíno pelo mundo místico",
      "Vontade de aprender de forma estruturada",
      "Aberto a explorar diferentes práticas espirituais",
      "Pronto para começar sua jornada com o pé direito",
    ],
  };
};

const Index = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [profile, setProfile] = useState<ReturnType<typeof getProfile> | null>(null);

  const currentQuestion = questions[step - 1];
  const isMultipleChoice = currentQuestion?.multipleChoice || false;

  const handleStart = () => {
    setStep(1);
  };

  const handleAnswer = (answerId: string) => {
    if (isMultipleChoice) {
      const currentAnswers = (answers[step] as string[]) || [];
      const newAnswers = currentAnswers.includes(answerId)
        ? currentAnswers.filter((id) => id !== answerId)
        : [...currentAnswers, answerId];
      setAnswers({ ...answers, [step]: newAnswers });
    } else {
      setAnswers({ ...answers, [step]: answerId });
      // Auto-advance for single choice
      setTimeout(() => {
        if (step < questions.length) {
          setStep(step + 1);
        } else {
          setStep(11); // Loading screen
        }
      }, 300);
    }
  };

  const handleContinue = () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(11); // Loading screen
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setProfile(null);
  };

  const canContinue = isMultipleChoice
    ? Array.isArray(answers[step]) && (answers[step] as string[]).length > 0
    : !!answers[step];

  useEffect(() => {
    if (step === 11) {
      const timer = setTimeout(() => {
        setProfile(getProfile(answers));
        setStep(12);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, answers]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <AnimatePresence mode="wait">
          {step === 0 && <WelcomeScreen key="welcome" onStart={handleStart} />}

          {step >= 1 && step <= 10 && (
            <div key={`question-${step}`} className="w-full max-w-4xl">
              <ProgressBar current={step} total={10} />

              <QuestionCard
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedAnswer={answers[step]}
                onSelect={handleAnswer}
                multipleChoice={isMultipleChoice}
              />

              <div className="flex justify-between items-center mt-6 md:mt-8 max-w-2xl mx-auto px-4 md:px-6">
                {step > 1 ? (
                  <Button variant="ghost" onClick={handleBack} size="lg" className="text-sm md:text-base">
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    Voltar
                  </Button>
                ) : (
                  <div />
                )}

                {isMultipleChoice && (
                  <Button
                    variant="mystic-hero"
                    onClick={handleContinue}
                    disabled={!canContinue}
                    size="lg"
                    className="text-sm md:text-base"
                  >
                    Continuar
                  </Button>
                )}
              </div>
            </div>
          )}

          {step === 11 && <LoadingScreen key="loading" />}

          {step === 12 && profile && (
            <ResultScreen key="result" profile={profile} onRestart={handleRestart} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
