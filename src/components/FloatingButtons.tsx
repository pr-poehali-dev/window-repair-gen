import Icon from "@/components/ui/icon";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/78005553535"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={24} />
      </a>
      <a
        href="tel:+78005553535"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
