interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className = "" }) => {
  return (
    <section className={`w-full min-h-screen bg-[#c62368] text-white ${className}`}>
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-4 text-[#fa7268]">Om mig</h2>
        <p className="text-gray-300 leading-relaxed">
          Jeg er Aksel, en udvikler med fokus på moderne, intuitive og æstetiske
          digitale oplevelser.
        </p>
      </div>
    </section>
  );
};
