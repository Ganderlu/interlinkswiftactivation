"use client";

import Image from "next/image";

export default function WalletSection() {
  const features = [
    {
      title: "Spend crypto like cash",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3 10h18M7 15h.01M11 15h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Instant transfer",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Automated earnings",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Unparalleled security",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
              ITLX Wallet
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl leading-[1.1]">
              Crypto made simple, secure, and seamless.
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-500">
              A non-custodial wallet to store assets, manage payments, and
              interact with the InterLink ecosystem.
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

            {/* Explore Wallet / Demo */}
            <div className="mt-12 flex items-center gap-4">
              <div className="relative h-12 w-10 overflow-hidden rounded-lg border border-neutral-100 shadow-sm">
                <Image
                  src="/crypto.jpg"
                  alt="Wallet Demo Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-black">
                  Explore wallet
                </span>
                <span className="text-xs text-neutral-500">Watch the demo</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Mockup Container */}
            <div className="relative rounded-[2.5rem] bg-brand-50/50 p-6 sm:p-8 overflow-hidden">
              {/* Tabs UI */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 rounded-full bg-white/60 p-1.5 backdrop-blur-md">
                  <button className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20">
                    Token exchange
                  </button>
                  <button className="px-4 py-2.5 text-sm font-bold text-neutral-400">
                    Card
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
                    src="/crypto.jpg"
                    alt="ITLX Wallet Interface"
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
