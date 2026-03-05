import Icon from "@/components/ui/icon";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+79016208985"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;