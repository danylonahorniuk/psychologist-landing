import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Topics from "@/components/Topics";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Topics />
        <About />
        <Manifesto />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
