import { CommandPaletteProvider } from "@/components/site/CommandPalette";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Honors } from "@/components/sections/Honors";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Toolkit } from "@/components/sections/Toolkit";

export default function Home() {
  return (
    <CommandPaletteProvider>
      <ScrollProgress />
      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Toolkit />
        <Honors />
        <Education />
        <Contact />
      </main>

      <Footer />
    </CommandPaletteProvider>
  );
}
