const services = [
  {
    title: "Ремонт окон",
    price: "от 900 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/727e64d7-da69-4aad-814c-9382c7765dad.jpg",
  },
  {
    title: "Регулировка окон",
    price: "от 500 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/748af6ef-6d60-4959-bd98-78113eba6b44.jpg",
  },
  {
    title: "Замена фурнитуры",
    price: "от 800 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/f5cc8ed0-040a-4a30-8f58-9d4fdfcfd90f.jpg",
  },
  {
    title: "Герметизация окон",
    price: "от 500 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/82d57326-744f-41da-8f1c-563fcbd97a1c.jpg",
  },
  {
    title: "Замена стеклопакета",
    price: "от 1500 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/8e64ca4c-ec09-49e3-8ade-3539feb182fe.jpg",
  },
  {
    title: "Противовзломная система",
    price: "от 900 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/e3db6e84-e5d8-4dd9-b712-9c65f8c3cfe9.jpg",
  },
  {
    title: "Ручка с замком",
    price: "от 700 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/e2cbe1b6-da44-4598-a242-8bd6a6030481.jpg",
  },
  {
    title: "Замена уплотнителя",
    price: "от 600 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/f88446ac-9212-4867-8cef-32cdf2236644.jpg",
  },
  {
    title: "Москитные сетки",
    price: "от 1000 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/290daf68-118d-4921-8bf7-2d52bd1edd20.jpg",
  },
  {
    title: "Жалюзи",
    price: "от 900 ₽",
    image: "https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/0b31f0a2-08f5-47ea-9092-b029e5d4a5fe.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 animate-fade-in">
          Наши услуги
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 rounded-sm overflow-hidden">
          {/* Первая ячейка — зелёная с заголовком */}
          <div className="bg-primary text-white p-5 flex flex-col justify-center">
            <p className="font-bold text-base uppercase mb-3">Опыт</p>
            <p className="text-sm leading-snug opacity-90">
              У нас работают только высококвалифицированные специалисты
            </p>
          </div>

          {/* Услуги 1–3 (первый ряд, ячейки 2–4) */}
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          {/* Второй ряд — все 4 */}
          {services.slice(3, 7).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          {/* Третий ряд — 3 услуги + зелёная ячейка */}
          {services.slice(7, 10).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          {/* Последняя ячейка — зелёная с гарантией */}
          <div className="bg-primary text-white p-5 flex flex-col justify-center">
            <p className="font-bold text-base uppercase leading-snug">
              Предоставляем гарантию на все виды работ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, price, image }: { title: string; price: string; image: string }) => (
  <div className="bg-white border border-gray-200 p-4 flex flex-col justify-between min-h-[140px] relative overflow-hidden group hover:bg-gray-50 transition-colors">
    <div>
      <p className="text-sm font-medium text-gray-800 leading-snug mb-2">{title}</p>
      <p className="text-sm font-bold text-primary">{price}</p>
    </div>
    <img
      src={image}
      alt={title}
      className="absolute right-2 bottom-2 w-20 h-16 object-contain opacity-90"
    />
  </div>
);

export default Services;
