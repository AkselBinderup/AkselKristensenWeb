import { ChevronDown } from "lucide-react";
import Background from "./HeroBackground";

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <section className="relative z-0 overflow-hidden flex flex-col justify-center items-center h-screen text-white">
  <Background />

      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-in-up">
        <h1 className="relative text-[4em] md:text-[7em] lg:text-[10em] font-extrabold tracking-tight text-[#fa7268] drop-shadow-[0_0_25px_rgba(250,114,104,0.4)] leading-none mb-6 overflow-hidden">
          <div className="flex justify-start w-full">
            <span className="block animate-slide-in-left">
              Software&nbsp;&amp;
            </span>
          </div>
          <div className="flex justify-end w-full">
            <span className="block animate-slide-in-right animation-delay-200">
              Fullstack
            </span>
          </div>
          <div className="flex justify-start w-full">
            <span className="block animate-slide-in-left animation-delay-400">
              Udvikler
            </span>
          </div>
        </h1>

        <div className="flex justify-start w-full max-w-5xl">
          <p className="text-lg sm:text-2xl lg:text-[1.8em] xl:text-[2em] font-bold text-gray-300 text-left leading-relaxed animate-fade-up opacity-0 mb-16">
            Velkommen til mit galleri af projekter, som indeholder blandt andet
            projekter bygget med:{" "}
            <span className="text-[#fa7268] font-semibold">
              C#, .NET, React, TailwindCSS, TypeScript, Kotlin
            </span>{" "}
            og <span className="text-[#fa7268] font-semibold">Azure</span>{" "}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-[#fa7268] hover:text-[#eb5967] transition-colors"
        >
          <span className="text-sm tracking-widest uppercase">Scroll ned</span>
          <ChevronDown
            size={36}
            className="animate-bounce drop-shadow-[0_0_10px_rgba(250,114,104,0.5)]"
          />
        </button>
      </div>
    </section>
  );
};
