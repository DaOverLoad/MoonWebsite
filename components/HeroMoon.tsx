"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

export function HeroMoon() {
  const moonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(Draggable);

    const moon = moonRef.current;
    const container = containerRef.current;
    if (!moon || !container) return;

    // Idle floating animation
    const float = gsap.to(moon, {
      y: -4,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Hover scale
    const handleEnter = () => {
      gsap.to(moon, { scale: 1.05, duration: 0.4, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(moon, { scale: 1, duration: 0.4, ease: "power2.out" });
    };
    moon.addEventListener("mouseenter", handleEnter);
    moon.addEventListener("mouseleave", handleLeave);

    // Draggable
    const draggable = Draggable.create(moon, {
      type: "x,y",
      bounds: container,
      inertia: false,
      onDragStart: () => {
        float.pause();
        gsap.to(moon, { scale: 1.1, duration: 0.2 });
      },
      onDragEnd: () => {
        // Snap back to origin
        gsap.to(moon, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
          onComplete: () => float.resume(),
        });
      },
    });

    return () => {
      float.kill();
      draggable[0].kill();
      moon.removeEventListener("mouseenter", handleEnter);
      moon.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-20 top-[-8px] z-30"
      style={{ width: 200, height: 200 }}
    >
      {/* Outer dashed rings */}
      <div className="absolute -inset-5 border border-dashed border-acid/40 rounded-full pointer-events-none" />
      <div className="absolute -inset-9 border-[0.5px] border-dashed border-acid/20 rounded-full pointer-events-none" />

      {/* The moon body — draggable */}
      <div
        ref={moonRef}
        className="relative w-40 h-40 rounded-full cursor-grab active:cursor-grabbing"
        style={{
          background: "radial-gradient(circle at 35% 35%, #F4FF7A 0%, #E5FF3D 40%, #B8CC1F 100%)",
          boxShadow: "0 0 80px rgba(229,255,61,0.45)",
        }}
      >
        {/* Craters */}
        <div className="absolute top-[30px] right-[40px] w-[14px] h-[14px] bg-black/20 rounded-full" />
        <div className="absolute top-[65px] left-[30px] w-[8px] h-[8px] bg-black/20 rounded-full" />
        <div className="absolute bottom-[50px] right-[50px] w-[10px] h-[10px] bg-black/15 rounded-full" />

        {/* Center crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] border-[0.5px] border-dashed border-black/35 rounded-full" />

        {/* Top/bottom marker lines */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-2 bg-acid/50" />
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-2 bg-acid/50" />

        {/* Label inside */}
        <div className="absolute bottom-3.5 left-3.5">
          <span className="block text-[8px] font-bold tracking-[2px] text-black/75">
            ★ MOON
          </span>
          <span className="block text-[7px] font-semibold tracking-[1px] text-black/55">
            .001
          </span>
        </div>
      </div>

      {/* Connection line annotation */}
      <div className="absolute -top-1.5 -right-32 flex items-center gap-1 pointer-events-none">
        <div className="w-20 h-px bg-acid" />
        <span className="text-[8px] tracking-[1px] font-semibold text-acid">
          ★ HOVER
        </span>
      </div>
    </div>
  );
}
