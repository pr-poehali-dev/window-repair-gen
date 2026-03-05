import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Услуги", href: "#services" },
    { label: "Расчёт стоимости", href: "#quiz" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#faq" },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex items-center"
        >
          <img
            src="https://cdn.poehali.dev/projects/c06e890d-dd38-4f55-966e-d5291c47e535/bucket/6e4fb0e0-91cb-4dee-9ca9-69e70d54e9bf.png"
            alt="СервисОК"
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+79016208985"
          className="hidden md:flex flex-col items-start gap-0"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Icon name="Phone" size={16} />
            +7 (901) 620-89-85
          </span>
          <span className="flex items-center gap-1.5 ml-6 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot inline-block" />
            Звоните, мы работаем
          </span>
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+79016208985"
              className="flex flex-col gap-0 py-2"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon name="Phone" size={16} />
                +7 (901) 620-89-85
              </span>
              <span className="flex items-center gap-1.5 ml-6 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot inline-block" />
                Звоните, мы работаем
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;