const prices = [
  { title: "Замена уплотнителя", price: "от 1200 ₽" },
  { title: "Регулировка створки окна винтовая", price: "от 1200 ₽" },
  { title: "Герметизация стыков изнутри", price: "от 600 ₽" },
  { title: "Пропенивание швов или под отливом", price: "от 700 ₽" },
  { title: "Переустановка фурнитуры", price: "от 950 ₽" },
  { title: "Установка детского замка на окно", price: "от 1200 ₽" },
  { title: "Москитная сетка на окно", price: "от 800 ₽" },
  { title: "Установка пластикового подоконника", price: "от 1490 ₽" },
  { title: "Удаление грибка", price: "от 1850 ₽" },
  { title: "Замена стеклопакета", price: "от 1800 ₽" },
  { title: "Регулировка балконной двери", price: "от 900 ₽" },
  { title: "Замена ручки окна", price: "от 500 ₽" },
];

const Prices = () => (
  <section id="prices" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Цены</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {prices.map((item) => (
          <div
            key={item.title}
            className="bg-gray-100 rounded-lg px-5 py-4 flex items-center justify-between gap-4"
          >
            <span className="text-sm text-gray-600 leading-snug">{item.title}</span>
            <span className="text-primary font-bold text-sm whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="#quiz"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-3 rounded-full transition-colors text-sm"
        >
          Вызвать мастера
        </a>
      </div>
    </div>
  </section>
);

export default Prices;
