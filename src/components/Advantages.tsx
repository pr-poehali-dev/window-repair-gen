import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Building",
      title: "Работаем официально",
      description: "Договор, чек, акт выполненных работ.",
    },
    {
      icon: "Users",
      title: "Собственный штат специалистов",
      description: "Опытные мастера с профильным образованием.",
    },
    {
      icon: "Award",
      title: "Оригинальная фурнитура",
      description: "Используем только сертифицированные комплектующие.",
    },
    {
      icon: "CreditCard",
      title: "Оплата по факту",
      description: "Платите только после приёмки выполненных работ.",
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия до 3 лет",
      description: "Письменная гарантия на все виды работ и материалы.",
    },
  ];

  return (
    <section id="advantages" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
          Почему выбирают нас
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <Card
              key={item.title}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={item.icon}
                    size={28}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
