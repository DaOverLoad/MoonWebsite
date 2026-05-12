"use client";

const items = [
  { text: "DATA SCIENCE", italic: false },
  { text: "★", italic: false, separator: true },
  { text: "vibe coding", italic: true },
  { text: "★", italic: false, separator: true },
  { text: "BUILDING IN PUBLIC", italic: false },
  { text: "★", italic: false, separator: true },
  { text: "shipping soon", italic: true },
  { text: "★", italic: false, separator: true },
];

export function Marquee() {
  // Repeat 4 times so the loop never shows a gap
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-acid border-y border-deep-acid overflow-hidden py-[18px]">
      <div className="marquee-container flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`text-[14px] font-black tracking-[6px] mr-7 text-void ${
              item.italic ? "serif-italic" : ""
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
