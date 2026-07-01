import About from "@/components/About";
import Contact from "@/components/Contact";
import CurrentFocus from "@/components/CurrentFocus";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CurrentFocus />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Highlights />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
