import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Settings",
      title: "Регулировка окон",
      price: "от 500 ₽",
      description:
        "Настройка прижима створки, устранение провисания и перекоса.",
    },
    {
      icon: "ShieldCheck",
      title: "Замена уплотнителя",
      price: "от 1 200 ₽",
      description:
        "Установка нового уплотнителя для устранения сквозняков и продувания.",
    },
    {
      icon: "Wrench",
      title: "Замена фурнитуры",
      price: "от 1 500 ₽",
      description:
        "Замена ручек, петель, запорных механизмов и ножниц.",
    },
    {
      icon: "Droplets",
      title: "Герметизация швов",
      price: "от 700 ₽",
      description:
        "Заделка монтажных швов для защиты от влаги и холода.",
    },
    {
      icon: "Square",
      title: "Замена стеклопакета",
      price: "от 1 800 ₽",
      description:
        "Установка нового стеклопакета при трещинах или запотевании.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
          Наши услуги
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon
                    name={service.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <span className="text-xl font-bold text-secondary">
                  {service.price}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Окончательная стоимость определяется после диагностики.
        </p>
      </div>
    </section>
  );
};

export default Services;
