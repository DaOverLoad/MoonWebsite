"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ldn = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
      });
      setTime(ldn);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-void border-b border-surface">
      <div className="flex justify-between items-center px-5 py-2.5 text-[9px] font-medium tracking-[2px]">
        {/* Left: brand + version */}
        <div className="flex gap-4 items-center">
          <span className="text-acid">●</span>
          <span className="text-moon-cream">
            MOONSDATA<span className="text-acid">/</span>SYS
          </span>
          <span className="text-faint">|</span>
          <span className="text-muted">v.2026.05</span>
        </div>

        {/* Center: system readouts */}
        <div className="hidden md:flex gap-4 text-muted">
          <span>[ N51.5074° / W0.1278° ]</span>
          <span>[ LDN {time} ]</span>
          <span className="text-acid">[ TRANSMITTING ]</span>
          <span>[ /HOME ]</span>
        </div>

        {/* Right: nav */}
        <nav className="flex gap-3.5 text-moon-cream items-center">
          <a href="/work" className="hover:text-acid transition-colors">
            WORK
          </a>
          <span className="text-faint">/</span>
          <a href="/about" className="hover:text-acid transition-colors">
            ABOUT
          </a>
          <span className="text-faint">/</span>
          <a href="/writing" className="hover:text-acid transition-colors">
            WRITING
          </a>
          <span className="text-faint">/</span>
          <a href="/contact" className="text-acid hover:text-voltage transition-colors">
            CONTACT↗
          </a>
        </nav>
      </div>
    </header>
  );
}
