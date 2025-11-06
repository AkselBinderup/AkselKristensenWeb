import { ChevronDown } from "lucide-react"; 

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-0 text-white overflow-hidden flex flex-col justify-center items-center min-h-[90vh] sm:min-h-screen ">

      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-in-up">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#fa7268] drop-shadow-[0_0_25px_rgba(250,114,104,0.4)] mb-6">
          Aksel Binderup Kristensen
        </h1>
        <p className="text-lg sm:text-xl max-w-xl text-gray-300 mb-6">
          Velkommen til min personlige hjemmeside! Jeg er Aksel Kristensen, en passioneret udvikler med en kærlighed for at skabe innovative digitale løsninger.
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
