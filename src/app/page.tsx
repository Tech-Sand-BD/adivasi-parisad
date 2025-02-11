import About from "@/pages/about/About";
import AboutFour from "@/pages/about/AboutFour";
import AboutThree from "@/pages/about/AboutThree";
import AboutTwo from "@/pages/about/AboutTwo";
import Hero from "@/pages/Hero";
import HeroSection from "@/pages/HeroSection";
import JoinUs from "@/pages/JoinUs";
import StrategicPartnerships from "@/pages/StrategicPartnerships";
import WorkTestimonial from "@/pages/WorkTestimonial";

export default function page() {
  return (
    <>
      <HeroSection />
      <Hero />
      <About />
      <AboutTwo />
      <AboutThree />
      <AboutFour />
      <StrategicPartnerships />
      <WorkTestimonial />
      <JoinUs />
    </>
  );
}
