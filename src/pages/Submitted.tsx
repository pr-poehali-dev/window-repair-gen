import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

declare const ym: (...args: unknown[]) => void;

const Submitted = () => {
  useEffect(() => {
    ym(107023144, 'reachGoal', 'send_form');
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start py-12 px-4">
      <div className="max-w-2xl w-full">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <Icon name="CheckCircle" size={48} className="text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Мы получили ваш запрос на ремонт окна
          </h1>
          <p className="text-muted-foreground text-lg">
            Наш специалист свяжется с вами в ближайшее время для уточнения деталей и согласования удобного времени выезда.
          </p>
        </div>

        {/* Phone CTA */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center mb-8">
          <p className="text-foreground font-medium mb-3">
            📞 Если вопрос срочный — позвоните нам прямо сейчас:
          </p>
          <a
            href="tel:+79016208985"
            className="text-2xl font-bold text-primary hover:underline"
          >
            +7 (901) 620-89-85
          </a>
        </div>

        {/* Steps */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-5">Что будет дальше?</h2>
          <div className="space-y-4">
            {[
              "Мастер уточнит проблему и задаст несколько вопросов",
              "Назовёт предварительную стоимость",
              "Согласует удобное время приезда",
              "Приедет с необходимыми инструментами и комплектующими",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-muted-foreground text-sm">
            ⏱ В большинстве случаев ремонт выполняется в день обращения.
          </p>
        </div>

        {/* Trust */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-foreground mb-5">Почему нам доверяют</h2>
          <ul className="space-y-3">
            {[
              "Бесплатный выезд специалиста",
              "Работаем без предоплаты",
              "Гарантия до 5 лет",
              "Более 7000 выполненных заказов",
              "Оригинальная фурнитура и комплектующие",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon name="Check" size={18} className="text-green-600 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preparation */}
        <div className="bg-card border rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">Подготовка к приезду мастера</h2>
          <p className="text-muted-foreground mb-4">Чтобы ускорить ремонт:</p>
          <ul className="space-y-3">
            {[
              "Освободите доступ к окну",
              "Уберите предметы с подоконника",
              "По возможности опишите проблему в деталях при звонке",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon name="ChevronRight" size={18} className="text-primary shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer message */}
        <div className="text-center mb-10">
          <p className="text-lg font-semibold text-foreground mb-1">До связи!</p>
          <p className="text-muted-foreground">
            Мы ценим ваше доверие и сделаем всё, чтобы окно снова работало идеально.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Submitted;