import Hero from "./Components/hero";
import Contact from "./Components/contact";
import About from "./Components/about";
import Projects from "./Components/projects";
import Skills from "./Components/skills";
import Footer from "./Components/footer";
export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
