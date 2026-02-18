import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToQuiz = () => {
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  const trustItems = [
    { value: "8+", label: "лет опыта" },
    { value: "7000+", label: "заказов" },
    { value: "3 года", label: "гарантия" },
  ];

  return (
    <section id="hero" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground mb-4">
              Ремонт пластиковых окон{" "}
              <span className="text-primary">за 1 день</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Бесплатный выезд специалиста. Работаем без предоплаты.
            </p>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-base font-semibold px-8 py-6 mb-6"
              onClick={scrollToQuiz}
            >
              Рассчитать стоимость ремонта
              <Icon name="ArrowRight" size={20} />
            </Button>

            <div className="flex items-center gap-3 mb-8">
              <Icon name="Phone" size={20} className="text-primary" />
              <div>
                <a
                  href="tel:+78005553535"
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                >
                  +7 (800) 555-35-35
                </a>
                <p className="text-sm text-muted-foreground">
                  Ежедневно 10:00–22:00
                </p>
              </div>
            </div>

            <div className="flex gap-6 md:gap-8">
              {trustItems.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up order-first md:order-last">
            <img
              src="https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/26dc20cc-0fe9-4796-b48f-a5bdb6d68334.jpg"
              alt="Специалист по ремонту окон"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
