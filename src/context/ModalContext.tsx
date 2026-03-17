import { createContext, useContext, useState, ReactNode } from "react";
import PhoneModal from "@/components/PhoneModal";

interface ModalContextType {
  openModal: () => void;
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} });

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <PhoneModal open={open} onClose={() => setOpen(false)} />
    </ModalContext.Provider>
  );
};
