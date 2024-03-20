import HeroSection from "@/components/hero-section";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Contact from "@/components/contact";
import ProductCard from "@/components/product-card";
import { coffee_types } from "@/lib/data";
import SectionGroup from "@/components/section-group";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <HeroSection />
      <SectionGroup Component={ProductCard} />
      {/* <SectionDivider/> */}
      <About />
      <Contact />
    </main>
  );
}
