import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Topics from "@/components/Topics";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
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
        <HowItWorks />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      {/* Shared mountain background for Contact + Footer */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <Image
            src="/footer-mountains.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 35%", opacity: 0.38 }}
            sizes="100vw"
          />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
