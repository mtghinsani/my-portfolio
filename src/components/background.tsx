"use client";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="animate-grid absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#00e5ff12,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,#a855f710,transparent)]" />

      {/* Floating blobs */}
      <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] animate-float rounded-full bg-[#00e5ff] opacity-[0.04] blur-[120px]" />
      <div className="absolute -right-32 top-2/3 h-[400px] w-[400px] animate-float-delayed rounded-full bg-[#a855f7] opacity-[0.05] blur-[100px]" />
      <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] animate-float rounded-full bg-[#00e5ff] opacity-[0.03] blur-[80px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[250px] w-[250px] animate-float-delayed rounded-full bg-[#a855f7] opacity-[0.03] blur-[100px]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
