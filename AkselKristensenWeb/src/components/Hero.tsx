import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-0 text-white overflow-hidden flex flex-col justify-center items-center min-h-[90vh] sm:min-h-screen text-[1em] sm:text-[1.2em] md:text-[1.5em]">
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

        <p className="text-lg sm:text-2xl lg:text-[2em] xl:text-[2.5em] text-gray-300 max-w-4xl text-center leading-relaxed animate-fade-up opacity-0 mb-10">
          Jeg bygger digitale oplevelser, hvor design og funktionalitet smelter
          sammen. Som{" "}
          <span className="text-[#fa7268] font-semibold">
            software- og fullstack-udvikler
          </span>
          brænder jeg for at skabe løsninger, der både føles smukke og fungerer
          problemfrit.
        </p>

        <p className="text-base sm:text-lg text-gray-400 italic">
          "Denne hjemmeside er bygget af APTDIGITAL-SOLUTIONS”
        </p>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[#fa7268] hover:text-[#eb5967] transition-colors"
      >
        <span className="text-sm tracking-widest uppercase">Scroll ned</span>
        <ChevronDown
          size={36}
          className="animate-bounce drop-shadow-[0_0_10px_rgba(250,114,104,0.5)]"
        />
      </button>
    </section>
  );
};
