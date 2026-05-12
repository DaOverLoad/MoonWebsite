interface GhostNumeralProps {
  number: string;
  position?: "left-bottom" | "right-top" | "left-top" | "right-bottom";
  size?: number;
}

export function GhostNumeral({
  number,
  position = "left-bottom",
  size = 380,
}: GhostNumeralProps) {
  const positionClasses = {
    "left-bottom": "left-[-20px] bottom-20",
    "right-top": "right-[-10px] top-[-40px]",
    "left-top": "left-[-20px] top-[-40px]",
    "right-bottom": "right-[-40px] bottom-[-60px]",
  };

  return (
    <span
      className={`absolute serif-italic font-black leading-[0.8] pointer-events-none select-none ${positionClasses[position]}`}
      style={{
        fontSize: `${size}px`,
        color: "rgba(229,255,61,0.05)",
        letterSpacing: "-20px",
        zIndex: 0,
      }}
    >
      {number}
    </span>
  );
}
