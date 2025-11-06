import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import WaveDivider from "./components/WaveDivider";

function App() {
  return (
        <div className="relative min-h-screen bg-[#001220] text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#fa7268,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#c62368,transparent_70%)]" />
      </div>
      <div className="relative overflow-visible min-h-[120vh] sm:min-h-[130vh] flex flex-col justify-end">
        <div className="grow">
          <Hero />
        </div>

        <div className="relative z-20 scale-125 sm:scale-150 translate-y-[10%] origin-bottom animate-wave">
          <WaveDivider />
        </div>
      </div>

      <About className="relative z-10" />
      <WaveDivider className="rotate-180" />
      <Projects className="bg-[#001220]" />

      <WaveDivider />
      <Contacts className="bg-[#da3f67]/10" />

      <Footer />
    </div>
  );
}

export default App;
