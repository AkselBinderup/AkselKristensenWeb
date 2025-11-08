import { useEffect, useState } from "react";
import WaveDivider from "./WaveDivider";
import profileImg from "../assets/aksel.jpg";

export const TechIntro = () => {
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setIsLit(scrollTop > 120);  
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center text-white">
      <div
        className={`absolute top-[10%] sm:top-[8%] md:top-[6%] lg:top-[5%] translate-y-[0%] flex flex-col lg:flex-row items-center gap-10 sm:gap-14 px-8 sm:px-16 transition-all duration-[1200ms] ${
          isLit
            ? "opacity-100 translate-y-[45%]"
            : "opacity-60 translate-y-[60%]"
        }`}
      >
       
        <img
          src={profileImg}
          alt="Aksel Kristensen"
          className={`w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 transition-all duration-[1200ms] ${
            isLit
              ? "border-[#fa7268] shadow-[0_0_45px_rgba(250,114,104,0.8)] scale-105"
              : "border-[#3a1418] shadow-[0_0_10px_rgba(50,0,0,0.3)] scale-95"
          }`}
        />

    
        <div className="max-w-3xl text-left">
          <h2
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight transition-all duration-[2000ms] ${
              isLit
                ? "text-[#fa7268] drop-shadow-[0_0_40px_rgba(250,114,104,0.8)]"
                : "text-[#2b0f10] drop-shadow-[0_0_5px_rgba(0,0,0,0.3)]"
            }`}
          >
            Hej, navnet er Aksel.
          </h2>
          <p
            className={`text-lg sm:text-2xl lg:text-3xl leading-relaxed font-medium transition-all duration-[2000ms] ${
              isLit
                ? "text-gray-200 drop-shadow-[0_0_25px_rgba(250,114,104,0.5)]"
                : "text-[#1a0a0a]"
            }`}
          >
            Jeg er nysgerrig på, hvordan teknologi kan skabe mening{" "}
            <span className="text-[#fa7268] font-semibold">
              — ikke bare funktion.{" "}
            </span>{" "}
            <span className="text-white font-semibold">
              Hvad får mennesker til at engagere sig digitalt?{" "}
            </span>
            <span className="text-[#fa7268] font-semibold">
              Hvordan bygger man noget, der faktisk bliver husket?{" "}
            </span>{" "}
            <br/>
              Det er de spørgsmål, jeg prøver at besvare gennem mit arbejde.
          </p>
        </div>
      </div>

      <WaveDivider />
    </div>
  );
};
