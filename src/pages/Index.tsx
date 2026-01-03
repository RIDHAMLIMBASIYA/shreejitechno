import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import AlgoTrading from "@/components/AlgoTrading";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Courses />
      <AlgoTrading />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
