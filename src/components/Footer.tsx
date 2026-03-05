import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/bucket/6e4fb0e0-91cb-4dee-9ca9-69e70d54e9bf.png"
              alt="СервисОК"
              className="h-14 w-auto object-contain mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-white/60 text-sm">
              Профессиональный ремонт пластиковых окон в вашем городе.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+79016208985"
                className="flex flex-col gap-1 text-white/80 hover:text-white transition-colors text-sm"
              >
                <span className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (901) 620-89-85
                </span>
                <span className="flex items-center gap-1.5 ml-6 text-xs text-white/50">
                  <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot inline-block" />
                  Звоните, мы работаем
                </span>
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Icon name="Clock" size={16} />
                Ежедневно 10:00–22:00
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <Link
              to="/privacy"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          &copy; 2025 СервисОК. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;