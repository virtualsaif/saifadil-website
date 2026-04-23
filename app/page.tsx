import Hero from "@/components/sections/Hero";
import Thesis from "@/components/sections/Thesis";
import About from "@/components/sections/About";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Watch from "@/components/sections/Watch";
import FeaturedWriting from "@/components/sections/FeaturedWriting";
import Certifications from "@/components/sections/Certifications";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Thesis />
      <About />
      <FeaturedWork />
      <Watch />
      <FeaturedWriting />
      <Certifications />
      <Interests />
      <Contact />
    </>
  );
}
