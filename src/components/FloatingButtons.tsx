import { useState } from "react";
import Icon from "@/components/ui/icon";
import PhoneModal from "@/components/PhoneModal";

const FloatingButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={() => setModalOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Оставить номер телефона"
        >
          <Icon name="Phone" size={24} />
        </button>
      </div>

      <PhoneModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default FloatingButtons;
