import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Quiz from "@/components/Quiz";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Prices from "@/components/Prices";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import PromoCountdown from "@/components/PromoCountdown";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Problems />
      <Quiz />
      <Advantages />
      <Process />
      <Prices />
      <Faq />
      <Reviews />
      <PromoCountdown />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;