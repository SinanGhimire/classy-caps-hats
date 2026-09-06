import { AccessoryArt, sortAccessories, type AccessoryId } from "@/game/accessories";
import { CLASSES, type ClassKey } from "@/game/classes";
import type { CharacterKey } from "@/game/types";

const OUTLINE = "#0d0b0a";
const o = {
  stroke: OUTLINE,
  strokeWidth: 7,
  strokeLinejoin: "round",
  strokeLinecap: "round",
} as const;

/**
 * The shared base character every class is built on, drawn to match the
 * in-arena hero sprite: one huge outlined head, chunky black eyes and tiny
 * dark limbs. Accessories are layered on top of it.
 */
function CharacterBase({ shirt }: { shirt: string }) {
  return (
    <>
      <ellipse cx="100" cy="221" rx="44" ry="9" fill="#000" opacity="0.25" />
      {/* feet */}
      <ellipse cx="80" cy="211" rx="17" ry="9" fill="#17161b" {...o} strokeWidth={5} />
      <ellipse cx="120" cy="211" rx="17" ry="9" fill="#17161b" {...o} strokeWidth={5} />
      {/* stubby legs */}
      <rect x="82" y="176" width="15" height="30" rx="7" fill="#17161b" {...o} strokeWidth={5} />
      <rect x="103" y="176" width="15" height="30" rx="7" fill="#17161b" {...o} strokeWidth={5} />
      {/* small torso in the class colour */}
      <path d="M80 150 L120 150 L124 186 L76 186 Z" fill={shirt} {...o} strokeWidth={6} />
      {/* mitt hands hanging beside the head */}
      <ellipse cx="52" cy="164" rx="16" ry="14" fill="#17161b" {...o} strokeWidth={5} />
      <ellipse cx="148" cy="164" rx="16" ry="14" fill="#17161b" {...o} strokeWidth={5} />
      {/* big head */}
      <ellipse cx="100" cy="104" rx="52" ry="60" fill="#e0bb92" {...o} strokeWidth={8} />
      {/* soft cheek shading + highlight */}
      <ellipse cx="112" cy="118" rx="38" ry="42" fill="#000" opacity="0.10" />
      <ellipse cx="80" cy="76" rx="20" ry="12" fill="#fff" opacity="0.28" />
      {/* eyes */}
      <ellipse cx="86" cy="110" rx="17" ry="18" fill="#17161b" />
      <ellipse cx="121" cy="107" rx="12" ry="13" fill="#17161b" />
      <circle cx="80" cy="103" r="4" fill="#fff" opacity="0.55" />
      {/* frown */}
      <path
        d="M92 142 q12 -9 24 -1"
        fill="none"
        stroke={OUTLINE}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  );
}


export function CharacterFigure({
  accessories,
  shirt,
  className,
}: {
  accessories: readonly AccessoryId[];
  shirt: string;
  className?: string;
}) {
  const sorted = sortAccessories(accessories);
  return (
    <svg
      viewBox="0 -70 200 310"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }}
      aria-hidden
      role="presentation"
    >
      <CharacterBase shirt={shirt} />
      {sorted.map((id) => (
        <AccessoryArt key={id} id={id} />
      ))}

    </svg>
  );
}

/**
 * Class portrait: the base character wearing that class's accessory stack,
 * always at its natural 200x240 ratio so nothing is stretched.
 */
export function ClassPortrait({
  cls,
  className,
}: {
  cls: ClassKey;
  /** kept for callers; the figure already shows the class look */
  skin?: CharacterKey;
  className?: string;
}) {
  const def = CLASSES[cls];
  return (
    <div
      className={className}
      style={{ position: "relative", alignSelf: "stretch", justifySelf: "stretch" }}
    >
      <CharacterFigure
        accessories={def.accessories}
        shirt={def.shirt}
        className="h-full w-full"
      />
    </div>
  );
}
