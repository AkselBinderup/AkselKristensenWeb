interface TechItem {
  name: string;
  label: string;
  color: string;
}

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className = "" }) => {
  const techs: TechItem[] = [
    { name: "C#", label: "C#", color: "#B9AFFF" },
    { name: "ASP.NET", label: ".NET", color: "#6C63FF" },
    { name: "JavaScript", label: "JS", color: "#FFDD55" },
    { name: "TypeScript", label: "TS", color: "#46A2FF" },
    { name: "React", label: "⚛", color: "#7AEFFF" },
    { name: "TailwindCSS", label: "TW", color: "#5FE1D4" },
    { name: "HTML", label: "HTML", color: "#FF7744" },
    { name: "CSS", label: "CSS", color: "#4FAAFF" },
    { name: "Kotlin", label: "KT", color: "#D9A9FF" },
    { name: "Python", label: "Py", color: "#FFE97D" },
    { name: "SQL", label: "SQL", color: "#66B3FF" },
    { name: "Azure", label: "☁", color: "#00B4FF" },
    { name: "APIs", label: "API", color: "#7BFF9E" },
    { name: "Java", label: "☕", color: "#FFB366" },
    { name: "Github", label: "GIT", color: "#5FE1D4" },
  ];
 
  
  return (
    <section
      className={`relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#c62368] text-white ${className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c62368_0%,#c62368_25%,transparent_80%)] opacity-40 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#c62368_0%,transparent_80%)] opacity-30" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 mb-16">
        <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-[0_0_25px_rgba(198,35,104,0.7)]">
          Min Teknologi-Stack
        </h2>
        <p className="text-gray-100 text-lg leading-relaxed">
          Jeg bygger komplette løsninger fra frontend til backend — fra idé til
          deployment i skyen. Her er teknologierne, jeg bruger til at få det
          hele til at ske.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl w-[90%] px-6">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_45px_rgba(198,35,104,0.4)] transition-all duration-500 hover:scale-[1.05]"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
              style={{
                background: `${tech.color}20`,
                color: tech.color,
                boxShadow: `0 0 20px ${tech.color}55`,
              }}
            >
              {tech.label}  
            </div>
            <p className="mt-4 font-medium text-white tracking-wide opacity-90 group-hover:opacity-100 transition">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
