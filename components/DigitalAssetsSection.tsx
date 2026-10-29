"use client";

import Image from "next/image";

export default function DigitalAssetsSection() {
  const features = [
    {
      title: "Free to start",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path
            d="m21 21-4.3-4.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "No hardware",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Mobile mining",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <rect
            x="5"
            y="2"
            width="14"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 18h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "No setup needed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 3v3M12 18v3M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M3 12h3M18 12h3M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Interlink App
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl leading-[1.1]">
              Digital assets for everyone.
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-500">
              Making digital asset ownership accessible to everyone.
              <br />
              InterLink never charges mining fees or sells tokens.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <span className="text-brand-600">{feature.icon}</span>
                  <span className="text-lg font-semibold text-brand-900">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-12 rounded-full bg-neutral-950 px-10 py-4 text-base font-bold text-white transition-all hover:bg-neutral-900 active:scale-95">
              Learn more
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Mockup Container */}
            <div className="relative rounded-[2.5rem] bg-brand-50/50 p-6 sm:p-8 overflow-hidden">
              {/* Tabs UI */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 rounded-full bg-white/60 p-1.5 backdrop-blur-md">
                  <button className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20">
                    Solo mining
                  </button>
                  <button className="px-4 py-2.5 text-sm font-bold text-neutral-400">
                    Group mining
                  </button>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-neutral-100 transition-all hover:bg-neutral-50">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-neutral-900"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Frame */}
              <div className="relative mx-auto max-w-[320px]">
                <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-8 ring-white">
                  <Image
                    src="/building.jpg"
                    alt="Interlink App Interface"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
