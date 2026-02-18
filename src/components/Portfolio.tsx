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
    {
      image:
        "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/1461575a-34c2-427c-a131-0c45bf3a4f4c.jpg",
      title: "Замена уплотнителя на 4 окнах",
      description:
        "Клиент жаловался на сквозняки. Заменили уплотнительную резину на всех окнах в квартире за 3 часа.",
    },
    {
      image:
        "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/684c70e3-1986-4b60-96e4-e351005b6444.jpg",
      title: "Ремонт фурнитуры балконной двери",
      description:
        "Дверь не закрывалась плотно. Заменили ножницы и петли, отрегулировали прижим — теперь работает идеально.",
    },
    {
      image:
        "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/013a2b2c-d4ce-414a-ae3b-b698c849c088.jpg",
      title: "Герметизация монтажных швов",
      description:
        "Промерзали откосы на кухне. Полностью переделали герметизацию — проблема решена, тепло сохраняется.",
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
          Наши работы
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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