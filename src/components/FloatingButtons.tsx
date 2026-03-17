import { useEffect } from "react";
import Icon from "@/components/ui/icon";
import { useModal } from "@/context/ModalContext";

const FloatingButtons = () => {
  const { openModal } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => openModal(), 40000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={openModal}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Оставить номер телефона"
      >
        <Icon name="MessageCircle" size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;
