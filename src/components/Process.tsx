const Process = () => {
  const steps = [
    { number: 1, title: "Вы оставляете заявку" },
    { number: 2, title: "Менеджер уточняет детали" },
    { number: 3, title: "Согласовываем удобное время" },
    { number: 4, title: "Специалист выполняет ремонт" },
    { number: 5, title: "Вы оплачиваете работу" },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">
          Как мы работаем
        </h2>

        <div className="hidden md:flex items-start justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start flex-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-3 flex-shrink-0">
                  {step.number}
                </div>
                <p className="text-sm font-medium max-w-[120px]">
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-primary/30 mt-6 mx-2" />
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-0 max-w-sm mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-primary/30" />
                )}
              </div>
              <p className="text-sm font-medium pt-2.5">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
