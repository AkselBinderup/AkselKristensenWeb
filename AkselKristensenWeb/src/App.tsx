import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import WaveDivider from "./components/WaveDivider";

function App() {

  
  return (
    <div>
      <Hero />
      <div className="relative ">
        <WaveDivider />
      </div>

      <About />

      <WaveDivider className="rotate-180" />
      <Projects />

      <WaveDivider />
      <Contacts />

      <section></section><Footer />
    </div>
  );
}

export default App;
