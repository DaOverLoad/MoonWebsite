import { HeroMoon } from "@/components/HeroMoon";
import { Marquee } from "@/components/Marquee";
import { GhostNumeral } from "@/components/GhostNumeral";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[720px] overflow-hidden pt-6">
        {/* Ghost 001 background numeral */}
        <GhostNumeral number="001" position="left-bottom" size={380} />

        {/* Floating left-side rotated label */}
        <div
          className="absolute left-2 top-32 z-30"
          style={{ transform: "rotate(-90deg)", transformOrigin: "left top" }}
        >
          <span className="text-acid text-[9px] tracking-[4px] font-semibold">
            — TRANSMISSION 001 / DARREN MOUNGANGA / PORTFOLIO
          </span>
        </div>

        {/* Right edge — drag instruction box */}
        <div className="absolute right-4 top-20 text-right z-30 hidden lg:block">
          <div
            className="border border-acid px-3 py-2"
            style={{ background: "rgba(229,255,61,0.05)" }}
          >
            <span className="block text-acid text-[8px] tracking-[2px] font-semibold">
              [ INTERACTIVE ]
            </span>
            <span className="block text-acid text-[8px] tracking-[2px] font-semibold mt-0.5">
              ↻ HOLD AND DRAG
            </span>
          </div>
          <span className="block text-faint text-[8px] tracking-[2px] font-medium mt-3">
            FILE: HERO.MOON.001
          </span>
          <span className="block text-faint text-[8px] tracking-[2px] font-medium">
            SIZE: 160×160
          </span>
          <span className="block text-faint text-[8px] tracking-[2px] font-medium">
            RGB: 229,255,61
          </span>
        </div>

        {/* Big type */}
        <div className="relative pt-20 px-8 z-10">
          {/* DATA. */}
          <div className="relative pl-15">
            <h1
              className="font-black text-moon-cream"
              style={{
                fontSize: "clamp(72px, 14vw, 168px)",
                lineHeight: 0.85,
                letterSpacing: "-8px",
              }}
            >
              D<span className="serif-italic font-normal">A</span>TA
              <span className="serif-italic font-light text-acid">.</span>
            </h1>
          </div>

          {/* PRODUCTS. with the moon crashing through */}
          <div className="relative -mt-4">
            <h1
              className="font-black text-moon-cream pl-44 lg:pl-56 relative z-20"
              style={{
                fontSize: "clamp(72px, 14vw, 168px)",
                lineHeight: 0.85,
                letterSpacing: "-8px",
              }}
            >
              PR<span className="serif-italic font-normal">O</span>DUC
              <span className="serif-italic font-normal">T</span>S
              <span className="serif-italic font-light text-acid">.</span>
            </h1>

            {/* The interactive moon — overlapping the type */}
            <HeroMoon />
          </div>

          {/* in progress. */}
          <div className="relative mt-3 pl-32 lg:pl-80">
            <span
              className="absolute serif-italic font-light text-acid"
              style={{
                left: "calc(20rem - 40px)",
                top: "-20px",
                fontSize: "80px",
                lineHeight: 1,
              }}
            >
              &ldquo;
            </span>
            <h1
              className="serif-italic font-light text-moon-cream"
              style={{
                fontSize: "clamp(64px, 12vw, 152px)",
                lineHeight: 0.9,
                letterSpacing: "-5px",
              }}
            >
              in pro
              <span
                className="font-black not-italic"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                G
              </span>
              ress<span className="text-acid">.</span>
            </h1>
          </div>

          {/* Status columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 px-10">
            <div className="hidden lg:block" />
            <div className="border-l border-acid pl-3">
              <span className="block text-acid text-[8px] font-bold tracking-[2px] mb-1.5">
                /STATUS.001
              </span>
              <p className="text-body text-xs leading-[1.5] m-0 font-medium">
                Building HELM. App that decides your next task.
              </p>
            </div>
            <div className="border-l border-acid pl-3">
              <span className="block text-acid text-[8px] font-bold tracking-[2px] mb-1.5">
                /STATUS.002
              </span>
              <p className="text-body text-xs leading-[1.5] m-0 font-medium">
                Open to data analyst & data science roles.
              </p>
            </div>
            <div className="border-l border-acid pl-3">
              <span className="block text-acid text-[8px] font-bold tracking-[2px] mb-1.5">
                /STATUS.003
              </span>
              <p className="text-body text-xs leading-[1.5] m-0 font-medium">
                Writing publicly. Documenting the build.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-between items-center px-6 pt-14 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-acid text-[8px] tracking-[3px] font-bold">
              [ ★ ]
            </span>
            <span className="text-muted text-[8px] tracking-[3px] font-semibold">
              SCROLL TO EXPLORE
            </span>
            <div
              className="w-15 h-px"
              style={{
                background: "linear-gradient(90deg, #E5FF3D, transparent)",
                width: 60,
              }}
            />
          </div>
          <span className="text-faint text-[8px] tracking-[3px] font-medium">
            ▼ ▼ ▼
          </span>
        </div>
      </section>

      {/* MARQUEE — full bleed */}
      <Marquee />

      {/* WORK SECTION */}
      <section className="relative px-6 py-20 z-10">
        {/* Ghost 002 */}
        <GhostNumeral number="002" position="right-top" size={280} />

        {/* Section header */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-acid text-[9px] font-bold tracking-[3px]">
                [ TRANSMISSION 002 ]
              </span>
              <div className="flex-1 h-px bg-acid" />
            </div>
            <span className="block text-muted text-[9px] font-medium tracking-[2px]">
              — SELECTED WORK / 04 PROJECTS
            </span>
          </div>
          <div className="lg:col-span-2">
            <h2
              className="font-black text-moon-cream"
              style={{
                fontSize: "clamp(40px, 8vw, 88px)",
                lineHeight: 0.88,
                letterSpacing: "-3px",
              }}
            >
              Things I&apos;ve
              <br />
              <span className="serif-italic font-light text-acid">actually</span>{" "}
              <span className="serif-italic font-light">shipped</span>
              <span className="text-acid">.</span>
            </h2>
          </div>
        </div>

        {/* HELM Featured Card */}
        <article className="relative bg-acid border border-deep-acid mb-2 overflow-hidden">
          {/* Corner brackets */}
          <span className="absolute top-3 left-3 text-void text-[9px] font-bold tracking-[2px]">
            ┌
          </span>
          <span className="absolute top-3 right-3 text-void text-[9px] font-bold tracking-[2px]">
            ┐
          </span>
          <span className="absolute bottom-3 left-3 text-void text-[9px] font-bold tracking-[2px]">
            └
          </span>
          <span className="absolute bottom-3 right-3 text-void text-[9px] font-bold tracking-[2px]">
            ┘
          </span>

          {/* Featured badge */}
          <span className="absolute top-4 right-8 text-void text-[9px] font-bold tracking-[2px]">
            [ ★ FEATURED / 001 ]
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center p-10 pt-14 min-h-[360px]">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-void text-acid px-2.5 py-1 text-[9px] font-bold tracking-[2px]">
                  PRODUCT
                </span>
                <span className="bg-void text-moon-cream px-2.5 py-1 text-[9px] font-bold tracking-[2px]">
                  iOS
                </span>
                <span className="bg-void text-moon-cream px-2.5 py-1 text-[9px] font-bold tracking-[2px]">
                  2026
                </span>
                <span className="bg-void text-moon-cream px-2.5 py-1 text-[9px] font-bold tracking-[2px] serif-italic">
                  vibe coded
                </span>
              </div>

              {/* HELM. */}
              <h3
                className="font-black text-void mb-4"
                style={{
                  fontSize: "clamp(64px, 10vw, 112px)",
                  lineHeight: 0.85,
                  letterSpacing: "-5px",
                }}
              >
                HE<span className="serif-italic font-normal">L</span>M
                <span className="serif-italic font-light">.</span>
              </h3>

              <p className="text-void text-[15px] leading-[1.5] mb-6 max-w-[360px] font-medium">
                A productivity app for multi-passionate people. Custom scoring
                algorithm decides your next move.{" "}
                <span className="serif-italic">Built using vibe coding.</span>
              </p>

              <a
                href="/work/helm"
                className="text-void text-[11px] font-bold tracking-[2px] border-b-2 border-void pb-0.5 hover:opacity-70 transition-opacity"
              >
                READ THE CASE STUDY ↗
              </a>
            </div>

            {/* Preview area */}
            <div className="bg-void h-[280px] flex items-center justify-center relative border border-deep-acid">
              <span className="absolute top-2.5 left-2.5 text-acid text-[8px] tracking-[2px] font-semibold">
                [ PREVIEW.001 ]
              </span>
              <span className="absolute top-2.5 right-2.5 text-muted text-[8px] tracking-[2px]">
                375×812
              </span>
              <span className="absolute bottom-2.5 left-2.5 text-muted text-[8px] tracking-[2px]">
                ↻ INTERACTIVE
              </span>
              <span className="absolute bottom-2.5 right-2.5 text-acid text-[8px] tracking-[2px]">
                ●REC
              </span>
              <div className="text-center">
                <div className="w-16 h-16 bg-acid mx-auto mb-3 flex items-center justify-center relative">
                  <span className="text-void text-[28px] font-black">H</span>
                  <div className="absolute -inset-2 border border-dashed border-acid/40" />
                </div>
                <span className="text-moon-cream text-[10px] font-bold tracking-[2px]">
                  [ HELM.APP ]
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ProjectCard
            number="002"
            tag="DATA"
            year="2024"
            title="Survival"
            italicTitle="analysis"
            description="Kaplan-Meier and Cox regression on ICU patient data. Dissertation project."
            href="/work/survival-analysis"
          />
          <ProjectCard
            number="003"
            tag="SQL"
            year="2025"
            title="Shipping"
            italicTitle="database"
            description="Schema design and reporting pipeline for a fictional shipping company."
            href="/work/shipping-database"
          />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative px-6 py-20 border-t border-surface z-10">
        {/* Ghost 003 */}
        <span
          className="absolute serif-italic font-black leading-[0.8] pointer-events-none select-none left-[-20px] bottom-[-40px]"
          style={{
            fontSize: "320px",
            color: "rgba(229,255,61,0.05)",
            zIndex: 0,
          }}
        >
          003
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 z-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-acid text-[9px] font-bold tracking-[3px]">
                [ TRANSMISSION 003 ]
              </span>
            </div>
            <span className="block text-muted text-[9px] font-medium tracking-[2px]">
              — ABOUT
            </span>
          </div>
          <div>
            <p
              className="text-moon-cream font-bold mb-7"
              style={{
                fontSize: "clamp(20px, 3vw, 38px)",
                lineHeight: 1.15,
                letterSpacing: "-1px",
              }}
            >
              I&apos;m Darren<span className="text-acid">.</span>{" "}
              <span className="text-faint">Data science graduate.</span>{" "}
              <span className="serif-italic font-light text-acid">Builder.</span>{" "}
              <span className="text-faint">London-based.</span> Currently
              shipping a product I designed{" "}
              <span className="serif-italic font-light">with AI</span>
              <span className="text-acid">.</span>
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-acid hover:gap-3 transition-all"
            >
              <span className="text-[11px] font-bold tracking-[2px]">
                FULL STORY
              </span>
              <div className="w-8 h-px bg-acid" />
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ProjectCard component (inline since it's only used here for now)
function ProjectCard({
  number,
  tag,
  year,
  title,
  italicTitle,
  description,
  href,
}: {
  number: string;
  tag: string;
  year: string;
  title: string;
  italicTitle: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative bg-void border border-surface p-7 min-h-[220px] flex flex-col justify-between hover:border-acid transition-colors"
    >
      <span className="absolute top-2 right-3 text-faint text-[8px] tracking-[2px]">
        [ /{number} ]
      </span>
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-acid text-[9px] font-bold tracking-[2px]">
            {tag}
          </span>
          <span className="text-faint">/</span>
          <span className="text-muted text-[9px] font-semibold tracking-[2px]">
            {year}
          </span>
        </div>
        <h4
          className="font-black text-moon-cream mb-2.5"
          style={{
            fontSize: "38px",
            lineHeight: 0.9,
            letterSpacing: "-1.5px",
          }}
        >
          {title}
          <br />
          <span className="serif-italic font-light">{italicTitle}</span>
          <span className="text-acid">.</span>
        </h4>
        <p className="text-subtle text-xs leading-[1.5] m-0">{description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-moon-cream text-[10px] font-bold tracking-[2px]">
          READ
        </span>
        <div className="w-6 h-px bg-acid group-hover:w-12 transition-all" />
        <span className="text-acid">↗</span>
      </div>
    </a>
  );
}
