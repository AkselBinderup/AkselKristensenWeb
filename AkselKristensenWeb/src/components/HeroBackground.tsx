import GridScan from "@/components/ui/Grid-Scan"

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <GridScan
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#001220"
        gridScale={0.1}
        scanColor="#c62368"
        scanOpacity={0.1}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
      />
    </div>
  )
}
