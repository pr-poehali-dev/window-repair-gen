import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useModal } from "@/context/ModalContext";

const CtaBanner = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Получите скидку 10% при обращении сегодня
        </h2>
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-primary hover:bg-white/90 border-white font-semibold px-8 py-6 text-base"
          onClick={openModal}
        >
          Вызвать специалиста
          <Icon name="ArrowRight" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;