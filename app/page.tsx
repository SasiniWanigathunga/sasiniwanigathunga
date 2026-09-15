import { CommandPaletteProvider } from "@/components/site/CommandPalette";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Header } from "@/components/sections/Header";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";
import { Updates } from "@/components/sections/Updates";

export default function Home() {
  return (
    <CommandPaletteProvider>
      <ScrollProgress />
      <Nav />

      <main id="main">
        <Header />
        <About />
        <Updates />
        <Publications />
        <Experience />
        <Projects />
        <Awards />
        <Education />
        <Skills />
      </main>

      <Footer />
    </CommandPaletteProvider>
  );
}
