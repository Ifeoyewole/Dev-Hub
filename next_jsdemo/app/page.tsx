import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-65px)] flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-700/20 blur-[128px] animate-float" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/20 blur-[128px] animate-float [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-amber-300/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-amber-700/40 bg-amber-700/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-300 uppercase">
          Open-Source Resources
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Your Go-To <span className="gradient-text">Developer Resource</span> Hub
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Discover curated tools, frameworks, and platforms that help you ship
          faster, write cleaner code, and level up your developer workflow.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/resources"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-700 to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-700/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/40 hover:-translate-y-0.5 animated-gradient"
          >
            Explore Resources
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <a
            href="https://github.com/Ifeoyewole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-20 grid w-full max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
        {[
          { value: "8+", label: "Resources" },
          { value: "100%", label: "Free & Open" },
          { value: "∞", label: "Possibilities" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold gradient-text sm:text-3xl">{stat.value}</span>
            <span className="text-xs text-gray-500 sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
