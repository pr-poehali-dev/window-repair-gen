import { useEffect, useState } from "react";

const TARGET_DAYS = 9;
const TARGET_HOURS = 1;
const TARGET_MINUTES = 54;
const TARGET_SECONDS = 53;

const getInitialSeconds = () => {
  const stored = localStorage.getItem("promo_end_ts");
  if (stored) return Math.max(0, Math.floor((Number(stored) - Date.now()) / 1000));
  const total =
    TARGET_DAYS * 86400 +
    TARGET_HOURS * 3600 +
    TARGET_MINUTES * 60 +
    TARGET_SECONDS;
  localStorage.setItem("promo_end_ts", String(Date.now() + total * 1000));
  return total;
};

const PromoCountdown = () => {
  const [total, setTotal] = useState(getInitialSeconds);

  useEffect(() => {
    const id = setInterval(() => setTotal((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[280px]">
        {/* Левая часть — тёмная с фото */}
        <div
          className="relative flex-1 flex items-center px-8 md:px-16 py-12"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/files/4457adbf-7a61-4c8f-817c-a8a364161f0d.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Тёмный оверлей */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Диагональный срез справа */}
          <div
            className="hidden md:block absolute right-0 top-0 h-full w-24 bg-primary z-10"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 40% 0)" }}
          />

          <div className="relative z-20 max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
              Отремонтируйте свои окна у нас
            </h2>
            <p className="text-white/80 text-base mb-6">
              и получите скидку 20% при первом обращении
            </p>
            <a
              href="#quiz"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Вызвать мастера
            </a>
            <p className="text-white/50 text-xs mt-4">
              Нажимая кнопку "Вызвать мастера", я даю согласие на обработку
              персональных данных
            </p>
          </div>
        </div>

        {/* Правая часть — зелёная с таймером */}
        <div className="bg-primary flex items-center justify-center px-8 md:px-16 py-12 md:w-[45%]">
          <div className="text-center text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-8">
              До конца акции осталось:
            </h3>

            <div className="flex items-center justify-center gap-3 md:gap-4">
              <TimeUnit value={days} label="дней" />
              <Colon />
              <TimeUnit value={hours} label="часов" />
              <Colon />
              <TimeUnit value={minutes} label="минут" />
              <Colon />
              <TimeUnit value={seconds} label="секунд" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center">
      <span className="text-primary font-bold text-xl md:text-2xl leading-none">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-white/90 text-xs">{label}</span>
  </div>
);

const Colon = () => (
  <span className="text-white font-bold text-2xl mb-5">:</span>
);

export default PromoCountdown;
