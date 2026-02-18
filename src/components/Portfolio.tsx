import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const works = [
    {
      image:
        "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/b1fea076-0e9b-4610-9adf-2da81b8af098.jpg",
      title: "Регулировка и замена уплотнителя",
      description:
        "Устранили продувание балконной двери. Заменили изношенный уплотнитель и отрегулировали прижим створки.",
    },
    {
      image:
        "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/d36de456-88a5-4886-a3e4-712e24c54b93.jpg",
      title: "Комплексное обслуживание",
      description:
        "Провели полную диагностику, смазку фурнитуры и герметизацию швов. Окна как новые.",
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
          Наши работы
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {works.map((work) => (
            <Card
              key={work.title}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-56 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-base font-semibold mb-2">{work.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
