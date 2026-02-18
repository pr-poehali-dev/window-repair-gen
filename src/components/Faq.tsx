import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const questions = [
    {
      q: "Сколько стоит выезд мастера?",
      a: "Выезд и диагностика — бесплатно. Вы оплачиваете только выполненные работы.",
    },
    {
      q: "Какая гарантия на работы?",
      a: "Мы предоставляем гарантию до 3 лет на все виды работ.",
    },
    {
      q: "Работаете ли вы в выходные?",
      a: "Да, мы работаем ежедневно с 10:00 до 22:00, включая выходные и праздники.",
    },
    {
      q: "Как быстро приедет мастер?",
      a: "При срочном вызове — в течение 2-3 часов. В обычном режиме — в удобное для вас время.",
    },
    {
      q: "Какие окна вы ремонтируете?",
      a: "Мы ремонтируем все типы пластиковых окон: KBE, Rehau, Veka, ВЕКА и другие.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
