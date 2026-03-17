import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

declare const ym: (...args: unknown[]) => void;

const PROXY_URL =
  "https://functions.poehali.dev/89c9c165-6f43-45cf-b46a-bd3a91ae9eb6";

interface PhoneModalProps {
  open: boolean;
  onClose: () => void;
}

const PhoneModal = ({ open, onClose }: PhoneModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").replace(/^8/, "7").replace(/^7?/, "7").slice(0, 11);
    const d = digits.slice(1);
    if (d.length === 0) return "+7";
    if (d.length <= 3) return `+7 (${d}`;
    if (d.length <= 6) return `+7 (${d.slice(0, 3)}) ${d.slice(3)}`;
    if (d.length <= 8) return `+7 (${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
    return `+7 (${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 8)}-${d.slice(8, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const isPhoneComplete = phone.replace(/\D/g, "").length === 11;
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneComplete) return;
    setSubmitting(true);

    try {
      const params = new URLSearchParams();
      params.append("fullname", name || "Не указано");
      params.append("phone", phone);
      params.append("work", "Заявка на скидку 20% — оставил номер телефона");
      params.append("branch_id", "0");
      params.append("is_pm", "false");
      params.append("thread_id", "51414");
      params.append("thread_type", "3");
      params.append("sub_id1", "");
      params.append("sub_id2", "");
      params.append("sub_id3", "");
      params.append("direction_id", "6");
      params.append("offer_id", "60");

      const urlParams = new URLSearchParams(window.location.search);
      const utmMap: Record<string, string> = {
        utm_source: "utm1",
        utm_medium: "utm2",
        utm_campaign: "utm3",
        utm_content: "utm4",
        utm_term: "utm5",
      };
      for (const [key, val] of Object.entries(utmMap)) {
        const v = urlParams.get(key);
        if (v) params.append(val, v);
      }

      const win = window as unknown as Record<string, string>;
      if (win.view_id) {
        params.append("view_id", win.view_id);
        params.append("hash", win.view_id);
      }

      const body: Record<string, string> = {};
      for (const [k, v] of params.entries()) body[k] = v;

      const res = await fetch(PROXY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "fail");

      if (typeof ym !== "undefined") {
        ym(107023144, "reachGoal", "send_form");
      }

      onClose();
      navigate("/submitted");
    } catch {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте ещё раз или позвоните нам.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm p-0 overflow-hidden rounded-2xl border-0">
        <DialogTitle className="sr-only">Получить скидку 20%</DialogTitle>
        <div className="bg-primary px-6 py-5 text-white text-center relative">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Tag" size={24} />
          </div>
          <div className="text-3xl font-extrabold mb-1">Скидка 20%</div>
          <div className="text-white/90 text-sm leading-snug">
            Оставьте номер телефона — мы перезвоним<br />и применим скидку на ваш заказ
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-3">
          <Input
            placeholder="Ваше имя (необязательно)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11"
          />
          <Input
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={handlePhoneChange}
            required
            type="tel"
            inputMode="numeric"
            className="h-11"
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold h-12 text-base"
            disabled={submitting || !isPhoneComplete}
          >
            {submitting ? (
              <>
                <Icon name="Loader2" size={18} className="animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                Получить скидку 20%
                <Icon name="ArrowRight" size={18} />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="/privacy" className="underline hover:text-foreground transition-colors">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PhoneModal;