import Icon from "@/components/ui/icon";

const advantages = [
  {
    num: "01",
    icon: "Briefcase",
    title: "Ремонт в день обращения",
    description:
      "Ближайший мастер готов выехать к вам уже в течение 30 минут и оперативно устранить неисправность.",
  },
  {
    num: "02",
    icon: "ShieldCheck",
    title: "Гарантия до 5 лет",
    description:
      "Для ремонта используем только качественные оригинальные комплектующие. На изделия и работу даём фирменную гарантию.",
  },
  {
    num: "03",
    icon: "BadgeCheck",
    title: "100% гарантия возврата денег",
    description:
      "Мы полностью уверены в качестве оказываемых услуг. Если вас что-то не устроит — мы вернём вам деньги.",
  },
  {
    num: "04",
    icon: "CreditCard",
    title: "Работаем без предоплаты",
    description:
      "Даже в случае сложного ремонта оплата производится только по факту. Мы доверяем своим клиентам.",
  },
  {
    num: "05",
    icon: "ThumbsUp",
    title: "Качество по ГОСТ",
    description:
      "Наши мастера имеют официальные сертификаты и колоссальный опыт в оконной сфере.",
  },
  {
    num: "06",
    icon: "ClipboardList",
    title: "Соблюдение КоАП РФ",
    description:
      "Все оказываемые нашими специалистами услуги согласовываются в муниципальных органах.",
  },
];

const Advantages = () => (
  <section id="advantages" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">Преимущества</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {advantages.map((item) => (
          <div key={item.num} className="flex flex-col gap-3">
            {/* Номер + иконка */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-200 leading-none select-none">
                {item.num}
              </span>
              <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} size={18} className="text-primary" />
              </div>
            </div>
            {/* Заголовок */}
            <h3 className="font-semibold text-base leading-snug">{item.title}</h3>
            {/* Описание */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
