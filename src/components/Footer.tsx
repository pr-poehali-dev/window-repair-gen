import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold mb-4 block">ОкнаСервис</span>
            <p className="text-white/60 text-sm">
              Профессиональный ремонт пластиковых окон в вашем городе.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+78005553535"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Icon name="Phone" size={16} />
                +7 (800) 555-35-35
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Icon name="Clock" size={16} />
                Ежедневно 10:00–22:00
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          &copy; 2025 ОкнаСервис. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
