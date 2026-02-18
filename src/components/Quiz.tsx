import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface Answers {
  problem: string;
  count: string;
  timing: string;
  name: string;
  phone: string;
}

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    problem: "",
    count: "",
    timing: "",
    name: "",
    phone: "",
  });
  const { toast } = useToast();

  const totalSteps = 4;
  const progressValue = ((currentStep + 1) / totalSteps) * 100;

  const problems = [
    { label: "Дует / сквозняк", icon: "Wind" },
    { label: "Не закрывается / заклинило", icon: "Lock" },
    { label: "Замена уплотнителя", icon: "Shield" },
    { label: "Сломалась фурнитура", icon: "Wrench" },
    { label: "Треснул стеклопакет", icon: "AlertTriangle" },
    { label: "Нужна диагностика", icon: "Search" },
  ];

  const counts = ["1", "2", "3 и более", "Не знаю"];
  const timings = [
    "Срочно (сегодня)",
    "В течение 1–2 дней",
    "В удобное время",
  ];

  const selectOption = (field: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.name.trim() || !answers.phone.trim()) return;
    toast({
      title: "Заявка отправлена!",
      description:
        "Наш специалист перезвонит вам в течение 5 минут.",
    });
    setCurrentStep(0);
    setAnswers({ problem: "", count: "", timing: "", name: "", phone: "" });
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 animate-fade-in">
          Рассчитайте стоимость ремонта за 30 секунд
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Шаг {currentStep + 1} из {totalSteps}
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <Progress value={progressValue} className="h-2 bg-border" />
        </div>

        <div className="max-w-2xl mx-auto">
          {currentStep === 0 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-center mb-6">
                Какая проблема с окном?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {problems.map((item) => (
                  <Card
                    key={item.label}
                    className={`p-4 cursor-pointer hover:border-primary hover:shadow-md transition-all text-center ${
                      answers.problem === item.label
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                    onClick={() => selectOption("problem", item.label)}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon
                        name={item.icon}
                        size={28}
                        className="text-primary"
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-center mb-6">
                Сколько окон требуют ремонта?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {counts.map((item) => (
                  <Card
                    key={item}
                    className={`p-5 cursor-pointer hover:border-primary hover:shadow-md transition-all text-center ${
                      answers.count === item
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                    onClick={() => selectOption("count", item)}
                  >
                    <span className="text-base font-medium">{item}</span>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-center mb-6">
                Когда нужен выезд?
              </h3>
              <div className="grid gap-3">
                {timings.map((item) => (
                  <Card
                    key={item}
                    className={`p-5 cursor-pointer hover:border-primary hover:shadow-md transition-all text-center ${
                      answers.timing === item
                        ? "border-primary bg-primary/5"
                        : ""
                    }`}
                    onClick={() => selectOption("timing", item)}
                  >
                    <span className="text-base font-medium">{item}</span>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in">
              <Card className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-center mb-2">
                  Оставьте номер — специалист перезвонит за 5 минут
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Консультация бесплатна
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Имя"
                    value={answers.name}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={answers.phone}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 text-base"
                  >
                    Получить консультацию
                  </Button>
                </form>
              </Card>
            </div>
          )}

          {currentStep > 0 && (
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              <Icon name="ArrowLeft" size={16} />
              Назад
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
