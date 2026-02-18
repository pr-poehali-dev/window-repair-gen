import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Problems = () => {
  const problems = [
    "Дует из окна",
    "Появился сквозняк",
    "Окно запотевает",
    "Промерзают откосы",
    "Заклинила ручка",
  ];

  const scrollToQuiz = () => {
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50/60">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in">
            Знакомая ситуация?
          </h2>

          <div className="space-y-4 mb-8 text-left inline-block">
            {problems.map((problem) => (
              <div key={problem} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Icon
                    name="Check"
                    size={14}
                    className="text-secondary"
                  />
                </div>
                <span className="text-base font-medium">{problem}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold text-primary mb-6">
            Мы устраним проблему в день обращения!
          </p>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-base"
            onClick={scrollToQuiz}
          >
            Вызвать мастера
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
