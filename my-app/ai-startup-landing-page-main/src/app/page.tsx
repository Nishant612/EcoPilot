import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import LogoTicker from "@/components/home/LogoTicker";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
