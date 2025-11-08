import GlassSurface from "@/components/ui/GlassSurfaceProps"

export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex  justify-center px-[20%] py-2">
      <GlassSurface
        width="95%"
        height={70}
        borderRadius={16}
        displace={10}
        distortionScale={-120}
        brightness={60}
        opacity={0.85}
        mixBlendMode="screen"
        className="flex items-center justify-between px-8"
      >
        <nav className="flex gap-[20%] text-base">
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </GlassSurface>
    </div>
  )
}
