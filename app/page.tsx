import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Certifications />
      <Interests />
      <Contact />
    </>
  );
}
