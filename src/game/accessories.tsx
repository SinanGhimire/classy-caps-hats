/**
 * Layered accessory art — painted head gear.
 *
 * Every accessory is a hand-painted PNG served from the CDN and placed inside
 * the shared 200x240 character space used by `CharacterBase`
 * (see components/ClassPortrait.tsx). Classes are built by stacking accessories
 * on the same base character, so any new class is just a new combination.
 *
 * Head geometry (for placing new pieces):
 *   head ellipse  cx 100  cy 104  rx 52  ry 60   -> head top y = 44, width 104
 *   eyes          (84,112) and (116,112)
 *   torso top     y 152
 *
 * Placement fields:
 *   w    drawn width in the 200x240 space (height follows the natural aspect)
 *   top  y of the image's top edge in the 200x240 space (may be negative)
 */
import featherBandUrl from "@/assets/accessories/featherBand.png";
import antlersUrl from "@/assets/accessories/antlers.png";
import beanieUrl from "@/assets/accessories/beanie.png";
import hoodUrl from "@/assets/accessories/hood.png";
import baseballCapUrl from "@/assets/accessories/baseballCap.png";
import redBandanaUrl from "@/assets/accessories/redBandana.png";
import redHeadwrapUrl from "@/assets/accessories/redHeadwrap.png";
import greenBandanaUrl from "@/assets/accessories/greenBandana.png";
import greenHeadwrapUrl from "@/assets/accessories/greenHeadwrap.png";
import armyHelmetUrl from "@/assets/accessories/armyHelmet.png";
import knightHelmUrl from "@/assets/accessories/knightHelm.png";
import gladiatorHelmUrl from "@/assets/accessories/gladiatorHelm.png";
import vikingHelmUrl from "@/assets/accessories/vikingHelm.png";
import cowboyHatUrl from "@/assets/accessories/cowboyHat.png";
import fedoraUrl from "@/assets/accessories/fedora.png";
import pirateHatUrl from "@/assets/accessories/pirateHat.png";
import jesterHatUrl from "@/assets/accessories/jesterHat.png";
import crownUrl from "@/assets/accessories/crown.png";
import witchHatUrl from "@/assets/accessories/witchHat.png";
import wizardHatUrl from "@/assets/accessories/wizardHat.png";
import gogglesUrl from "@/assets/accessories/goggles.png";
import engineerGogglesUrl from "@/assets/accessories/engineerGoggles.png";
import headMirrorUrl from "@/assets/accessories/headMirror.png";

export type AccessorySlot = "hair" | "hat" | "face";

interface Piece {
  name: string;
  slot: AccessorySlot;
  url: string;
  /** natural pixel size of the art, used to keep the aspect ratio */
  nw: number;
  nh: number;
  /** drawn width in the 200x240 character space */
  w: number;
  /** top edge of the drawn art in the 200x240 character space */
  top: number;
  /** optional horizontal nudge when the painted art is not centred */
  dx?: number;
}

const PIECES = {
  featherBand: {
    name: "Feather Band",
    slot: "hair",
    url: featherBandUrl,
    nw: 422,
    nh: 512,
    w: 88,
    top: -38,
  },
  antlers: {
    name: "Antlers",
    slot: "hair",
    url: antlersUrl,
    nw: 512,
    nh: 368,
    w: 140,
    top: -38,
  },
  beanie: {
    name: "Knit Beanie",
    slot: "hat",
    url: beanieUrl,
    nw: 512,
    nh: 432,
    w: 112,
    top: -14,
  },
  hood: {
    name: "Plain Hood",
    slot: "hat",
    url: hoodUrl,
    nw: 465,
    nh: 512,
    w: 126,
    top: -44,
  },
  baseballCap: {
    name: "Baseball Cap",
    slot: "hat",
    url: baseballCapUrl,
    nw: 512,
    nh: 449,
    w: 118,
    top: -18,
  },
  redBandana: {
    name: "Red Bandana",
    slot: "hat",
    url: redBandanaUrl,
    nw: 512,
    nh: 241,
    w: 128,
    top: 34,
  },
  redHeadwrap: {
    name: "Red Headwrap",
    slot: "hat",
    url: redHeadwrapUrl,
    nw: 512,
    nh: 499,
    w: 104,
    top: 20,
  },
  greenBandana: {
    name: "Green Bandana",
    slot: "hat",
    url: greenBandanaUrl,
    nw: 512,
    nh: 398,
    w: 112,
    top: 8,
  },
  greenHeadwrap: {
    name: "Green Headwrap",
    slot: "hat",
    url: greenHeadwrapUrl,
    nw: 492,
    nh: 512,
    w: 100,
    top: -20,
  },
  armyHelmet: {
    name: "Combat Helmet",
    slot: "hat",
    url: armyHelmetUrl,
    nw: 512,
    nh: 386,
    w: 122,
    top: -14,
  },
  knightHelm: {
    name: "Knight Helm",
    slot: "hat",
    url: knightHelmUrl,
    nw: 332,
    nh: 512,
    w: 110,
    top: 6,
  },
  gladiatorHelm: {
    name: "Gladiator Helm",
    slot: "hat",
    url: gladiatorHelmUrl,
    nw: 313,
    nh: 512,
    w: 104,
    top: 4,
    dx: -6,
  },
  vikingHelm: {
    name: "Viking Helm",
    slot: "hat",
    url: vikingHelmUrl,
    nw: 512,
    nh: 496,
    w: 122,
    top: -22,
  },
  cowboyHat: {
    name: "Cowboy Hat",
    slot: "hat",
    url: cowboyHatUrl,
    nw: 512,
    nh: 340,
    w: 142,
    top: -4,
  },
  fedora: {
    name: "Detective Fedora",
    slot: "hat",
    url: fedoraUrl,
    nw: 512,
    nh: 325,
    w: 126,
    top: 6,
  },
  pirateHat: {
    name: "Pirate Tricorn",
    slot: "hat",
    url: pirateHatUrl,
    nw: 512,
    nh: 278,
    w: 144,
    top: -2,
  },
  jesterHat: {
    name: "Jester Cap",
    slot: "hat",
    url: jesterHatUrl,
    nw: 512,
    nh: 326,
    w: 138,
    top: -4,
  },
  crown: {
    name: "Golden Crown",
    slot: "hat",
    url: crownUrl,
    nw: 512,
    nh: 403,
    w: 100,
    top: -6,
  },
  witchHat: {
    name: "Witch Hat",
    slot: "hat",
    url: witchHatUrl,
    nw: 512,
    nh: 306,
    w: 138,
    top: -6,
  },
  wizardHat: {
    name: "Wizard Hat",
    slot: "hat",
    url: wizardHatUrl,
    nw: 512,
    nh: 498,
    w: 124,
    top: -26,
  },
  goggles: {
    name: "Round Goggles",
    slot: "face",
    url: gogglesUrl,
    nw: 512,
    nh: 339,
    w: 110,
    top: 52,
  },
  engineerGoggles: {
    name: "Engineer Goggles",
    slot: "face",
    url: engineerGogglesUrl,
    nw: 512,
    nh: 262,
    w: 110,
    top: 54,
  },
  headMirror: {
    name: "Head Mirror",
    slot: "face",
    url: headMirrorUrl,
    nw: 512,
    nh: 467,
    w: 62,
    top: 32,
  },
} as const satisfies Record<string, Piece>;

export type AccessoryId = keyof typeof PIECES;

export interface AccessoryDef extends Piece {
  id: AccessoryId;
  /** drawn height in the 200x240 character space */
  h: number;
  /** left edge of the drawn art in the 200x240 character space */
  x: number;
}

export const CHAR_CX = 100;

export const ACCESSORIES: Record<AccessoryId, AccessoryDef> = Object.fromEntries(
  (Object.keys(PIECES) as AccessoryId[]).map((id) => {
    const p = PIECES[id] as Piece;
    const h = (p.w * p.nh) / p.nw;
    return [id, { ...p, id, h, x: CHAR_CX - p.w / 2 + (p.dx ?? 0) }];
  }),
) as Record<AccessoryId, AccessoryDef>;

export const ACCESSORY_IDS = Object.keys(ACCESSORIES) as AccessoryId[];

/** Bands sit under hats, face gear paints last. */
const ORDER: Record<AccessorySlot, number> = { hair: 0, hat: 1, face: 2 };

export function sortAccessories(ids: readonly AccessoryId[]): AccessoryId[] {
  return [...ids].sort((a, b) => ORDER[ACCESSORIES[a].slot] - ORDER[ACCESSORIES[b].slot]);
}

/** One accessory as an SVG <image>, placed in the shared 200x240 space. */
export function AccessoryArt({ id }: { id: AccessoryId }) {
  const a = ACCESSORIES[id];
  return (
    <image
      href={a.url}
      x={a.x}
      y={a.top}
      width={a.w}
      height={a.h}
      preserveAspectRatio="xMidYMid meet"
    />
  );
}
