export function Footer() {
  return (
    <footer className="relative bg-acid px-6 pt-20 pb-8 overflow-hidden">
      {/* Ghost 004 numeral */}
      <span
        className="absolute serif-italic font-black leading-[0.8] pointer-events-none select-none right-[-40px] bottom-[-60px]"
        style={{
          fontSize: "320px",
          color: "rgba(0,0,0,0.06)",
        }}
      >
        004
      </span>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Section label */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] font-bold tracking-[3px] text-void">
              [ TRANSMISSION 004 ]
            </span>
            <div className="w-16 h-px bg-void" />
            <span className="text-[9px] font-bold tracking-[3px] text-void">
              LET'S TALK
            </span>
          </div>

          {/* Massive headline */}
          <h2
            className="font-black text-void leading-[0.88]"
            style={{
              fontSize: "clamp(48px, 10vw, 116px)",
              letterSpacing: "-5px",
            }}
          >
            Let&apos;s build
            <br />
            <span className="serif-italic font-light">something</span>{" "}
            <span>weird</span>
            <span className="text-moon-cream">.</span>
          </h2>
        </div>

        {/* Contact row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pt-8 border-t-2 border-void">
          <div>
            <span className="block text-[9px] font-bold tracking-[3px] text-void mb-2">
              — EMAIL ↘
            </span>
            <a
              href="mailto:darren@moonsdata.com"
              className="text-[18px] md:text-[22px] font-black text-void hover:underline"
              style={{ letterSpacing: "-0.5px" }}
            >
              DARREN@MOONSDATA.COM{" "}
              <span className="serif-italic font-normal">↗</span>
            </a>
          </div>
          <div className="flex gap-5">
            <a
              href="https://linkedin.com/in/darren-mounganga"
              target="_blank"
              rel="noopener"
              className="text-[11px] font-bold tracking-[2px] text-void hover:underline"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://github.com/DaOverLoad"
              target="_blank"
              rel="noopener"
              className="text-[11px] font-bold tracking-[2px] text-void hover:underline"
            >
              GITHUB ↗
            </a>
            <a
              href="/cv.pdf"
              className="text-[11px] font-bold tracking-[2px] text-void hover:underline"
            >
              CV ↘
            </a>
          </div>
        </div>

        {/* Sign-off */}
        <div className="mt-10 pt-4 border-t border-black/25 flex flex-col md:flex-row md:justify-between gap-2 text-[9px] font-semibold tracking-[2px] text-void">
          <span>© MOONSDATA / 2026</span>
          <span>★ TRANSMISSION END</span>
          <span className="serif-italic font-normal">built by darren</span>
        </div>
      </div>
    </footer>
  );
}
