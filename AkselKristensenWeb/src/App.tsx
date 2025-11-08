import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import { Projects } from "./components/Projects";
import { TechIntro } from "./components/TechIntro";
import WaveDivider from "./components/WaveDivider";

function App() {
  return (
    <div>
      <NavigationBar />

      <div className="relative ">
        <div className="sticky top-0 h-screen">
          <Hero />
        </div>
      </div>

      <section className="relative z-10  ">
        <TechIntro />
      </section>

      <section className="  ">
        <About />
      </section>

      <section className=" ">
        <WaveDivider className="rotate-180" />
      </section>

      <section className="">
        <Projects />
      </section>

      <section className=" ">
        <WaveDivider />
      </section>

      <section className="bg-[#c62368]">
        <Contacts />
      </section>
      <section className="bg-[#c62368]">
        <Footer />
      </section>
    </div>
  );
}

export default App;
