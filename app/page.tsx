import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WalletSection from "@/components/WalletSection";
import DigitalAssetsSection from "@/components/DigitalAssetsSection";
import StatsRow from "@/components/StatsRow";
import RedemptionSection from "@/components/RedemptionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PhoneDisplaySection from "@/components/PhoneDisplaySection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#fafafe] text-brand-900 overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-mining-grid bg-mining-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[620px] bg-hero-glow" />
        <div className="absolute left-1/2 top-[520px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-brand-200/30 blur-[140px]" />
        <div className="absolute left-[10%] bottom-0 h-[520px] w-[520px] rounded-full bg-brand-300/20 blur-[120px]" />
      </div>

      <Header />

      <main>
        <Hero />
        <WalletSection />
        <StatsRow />
        <RedemptionSection />
        <DigitalAssetsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <PhoneDisplaySection />
      </main>

      <footer className="border-t border-brand-100 mt-12 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="relative h-8 w-24">
                <Image
                  src="/interswift.png"
                  alt="Interlink Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-600 max-w-xs">
                Redeem your ITL tokens for BEP-20 USDT. Manually-verified
                payouts, a transparent fixed rate, and a fast 4-step process.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black">Product</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <a
                    href="#redeem"
                    className="hover:text-black transition-colors"
                  >
                    Redeem ITL
                  </a>
                </li>
                <li>
                  <a
                    href="/wallet"
                    className="hover:text-black transition-colors"
                  >
                    Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="#stats"
                    className="hover:text-black transition-colors"
                  >
                    Live stats
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black">Company</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-black transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-black transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black">Legal</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">
              &copy; {new Date().getFullYear()} Interlink. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <span>Built on InterlinkChain</span>
              <span className="hidden sm:inline text-brand-300">·</span>
              <a href="#redeem" className="hover:text-black transition-colors">
                Redeem now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
