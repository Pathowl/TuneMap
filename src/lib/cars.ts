import focusImg from "@/assets/car-focusrs.jpg.asset.json";
import z33Img from "@/assets/car-350z-new.jpg.asset.json";
import silviaImg from "@/assets/car-silvia-s15.png.asset.json";

export type PartLink = { label: string; url: string };

export type Part = {
  name: string;
  brand: string;
  price?: string;
  note?: string;
  links?: PartLink[];
};

export type Stage = {
  id: 1 | 2 | 3;
  code: string;
  title: string;
  subtitle: string;
  power: string;
  torque: string;
  note?: string;
  parts: Part[];
};

export type Car = {
  slug: string;
  index: string;
  make: string;
  model: string;
  chassis: string;
  year: string;
  tagline: string;
  image: string;
  engine: string;
  displacement: string;
  layout: string;
  stockHp: string;
  stockTorque: string;
  weight: string;
  drivetrain: string;
  redline: string;
  maintenance: Part[];
  stages: Stage[];
};

export const CARS: Car[] = [
  {
    slug: "350z-z33",
    index: "01",
    make: "Nissan",
    model: "350Z",
    chassis: "Z33",
    year: "2002 – 2008",
    tagline:
      "VQ35 muscle. Naturally aspirated from the factory, restricted by emissions — the roadmap is unlock, then decide NA or boost.",
    image: "/Nissan_CBA-Z33_Fairlady_Z_-_Nissan_XXA-Z33_Fairlady_Z_(23100111182).jpg",
    engine: "VQ35DE / VQ35HR",
    displacement: "3.5L V6 NA",
    layout: "Front-engine, RWD",
    stockHp: "287 hp",
    stockTorque: "363 Nm",
    weight: "1520 kg",
    drivetrain: "6-speed manual",
    redline: "7,000 rpm (DE) · 7,500 (HR)",
    maintenance: [
      { name: "Coilpack Set (x6)", brand: "Hitachi OEM" },
      { name: "Clutch Slave + Master Cylinder", brand: "Nismo" },
      { name: "Diff & Trans Fluid Service", brand: "Motul 300V" },
      { name: "Motul 8100 5W-40 Full Service", brand: "Motul" },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Breathing & Calibration",
        subtitle:
          "VQ35 is choked from the factory to meet emissions. Open the intake, exhaust, plenum and let the ECU see it.",
        power: "250–260 crank hp",
        torque: "+20–30 Nm",
        note: "Plenum spacer is DE-only — the HR head fixed the front-cylinder starvation issue.",
        parts: [
          { name: "Cold Air Intake", brand: "Z1 Motorsports / JWT PopCharger" },
          {
            name: '5/16" Plenum Spacer (VQ35DE only)',
            brand: "Motordyne",
            note: "Fixes front-cylinder air starvation on the DE head.",
          },
          { name: "Gemini Cat-Back Exhaust", brand: "Invidia" },
          { name: "Expreme Ti Cat-Back", brand: "Tomei", note: "Louder alternative." },
          {
            name: "Custom Dyno Tune",
            brand: "UpRev / EcuTek",
            note: "AFR optimisation and a small rev-limiter raise.",
          },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Flow & Heat Management",
        subtitle:
          "Get exhaust gas out faster and control the oil temps the VQ struggles with under load. Mandatory before any track work.",
        power: "270–285 crank hp",
        torque: "+30–40 Nm",
        parts: [
          { name: "Long Tube Headers", brand: "ISR Performance" },
          { name: "Test Pipes / High-Flow Cats", brand: "Tomei" },
          {
            name: "19-Row Thermostatic Oil Cooler Kit",
            brand: "Mishimoto",
            note: "Pair with an enlarged oil pan spacer. Mandatory for track use.",
          },
          { name: "BR Series Coilovers", brand: "BC Racing" },
          { name: "Front & Rear Sway Bars", brand: "Whiteline" },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "NA Cams or Forced Induction",
        subtitle:
          "Bolt-ons are done. Pick a path: high-revving NA build, or supercharge / turbo it for 400+ whp.",
        power: "300+ hp NA · 400+ hp boosted",
        torque: "+80 Nm NA · +250 Nm boosted",
        note: "The stock clutch will slip the moment you add boost — do it in the same job.",
        parts: [
          {
            name: "S2 Camshafts + Valve Springs (NA path)",
            brand: "JWT",
          },
          { name: "DW200 Fuel Pump", brand: "DeatschWerks" },
          { name: "R35 GT-R 570cc Injectors", brand: "Nismo / OEM R35" },
          {
            name: "Single Turbo Kit (FI path)",
            brand: "Soho Motorsports",
          },
          {
            name: "V-3 Supercharger Kit (FI path)",
            brand: "Vortech",
          },
          {
            name: "Performance Clutch + Lightweight Flywheel",
            brand: "Z1 Motorsports",
            note: "Stock clutch will slip under boost.",
          },
        ],
      },
    ],
  },
  {
    slug: "focus-st-mk2",
    index: "02",
    make: "Ford",
    model: "Focus ST",
    chassis: "Mk2 (ST225)",
    year: "2005 – 2010",
    tagline:
      "Volvo-sourced 2.5L turbo five. Torque monster, but heat and cylinder-liner strength cap the party at 300 hp.",
    image: "/Ford_Focus_RS_Mk_II_IMG_2508.jpg",
    engine: "Duratec RS (B5254T)",
    displacement: "2.5L I5 Turbo",
    layout: "Front-engine, FWD",
    stockHp: "225 hp",
    stockTorque: "320 Nm",
    weight: "1437 kg",
    drivetrain: "6-speed manual",
    redline: "6,500 rpm",
    maintenance: [
      { name: "Uprated Silicone Boost Hoses", brand: "Airtec" },
      { name: "BKR7EIX Spark Plugs", brand: "NGK" },
      { name: "Motul 8100 Service Kit", brand: "Motul" },
      { name: "Rear Motor Mount Insert", brand: "Pumaspeed" },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "The Basics",
        subtitle:
          "Stock ECU is conservative and the plastic diverter valve leaks boost. Fix both, add an intake.",
        power: "260–275 hp",
        torque: "~490 Nm (360 ft·lb)",
        parts: [
          {
            name: "Group A Induction Kit",
            brand: "Dreamscience",
          },
          {
            name: "Enclosed Intake",
            brand: "Airtec Motorsport",
            note: "Alternative to the Dreamscience kit.",
          },
          {
            name: "Stratagem iMap Handset",
            brand: "Dreamscience",
            note: "Plug-and-play with off-the-shelf maps.",
          },
          {
            name: "Stage 1 Custom Flash",
            brand: "Revo",
            note: "Alternative to the iMap.",
          },
          {
            name: "Recirculating Valve",
            brand: "Forge Motorsport",
            note: "Stock plastic diverter cracks and leaks boost.",
          },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Heat Management & Exhaust",
        subtitle:
          "The factory intercooler heat-soaks after one hard pull — you can't hold Stage 2 power safely without replacing it.",
        power: "300–320 hp",
        torque: "~570 Nm (420 ft·lb)",
        note: "OEM ST clutch will start slipping at this torque — swap to the RS Mk2 unit in the same job.",
        parts: [
          {
            name: "Stage 2 Front Mount Intercooler",
            brand: "Airtec Motorsport",
          },
          {
            name: '3" Turbo-Back Exhaust',
            brand: "Cobra Sport / Milltek",
            note: "With 200-cell sports cat or decat.",
          },
          {
            name: "Focus RS Mk2 OEM Clutch + LUK Dual Mass Flywheel",
            brand: "Ford / LUK",
            note: "Mandatory — factory ST clutch slips at this torque.",
          },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: 'Big Turbo & the "Block Mod"',
        subtitle:
          "Past 300 hp the cylinder liners are the weak link. Machine steel shims between the liners before adding a bigger turbo.",
        power: "350–400+ hp",
        torque: "600+ Nm",
        note: "Without the block mod, pushing past 300 hp risks cracking a liner and destroying the engine.",
        parts: [
          {
            name: "The Block Mod (stainless liner shims)",
            brand: "Machine work",
            note: "Non-negotiable at this power level.",
          },
          {
            name: "K06 Hybrid Turbo",
            brand: "Turbo Technics",
          },
          {
            name: "BorgWarner K16 Turbo (Focus RS Mk2 swap)",
            brand: "BorgWarner",
            note: "Direct upgrade path from the RS platform.",
          },
          { name: "550cc Injectors", brand: "Bosch" },
          { name: "Focus RS Mk2 Fuel Pump", brand: "Ford OEM" },
          {
            name: "Cast Inlet Plenum",
            brand: "Auto Specialists (AS)",
            note: "Stock plastic plenum can burst at higher boost.",
          },
        ],
      },
    ],
  },
  {
    slug: "silvia-s15",
    index: "03",
    make: "Nissan",
    model: "Silvia",
    chassis: "S15",
    year: "1999 – 2002",
    tagline:
      "Last of the Silvias. SR20DET responds violently to bolt-ons — but the valvetrain needs protection the second you raise the limiter.",
    image: "/Nissan_Silvia_S15_Spec_R_in_Europe.png",
    engine: "SR20DET",
    displacement: "2.0L I4 Turbo",
    layout: "Front-engine, RWD",
    stockHp: "247 hp",
    stockTorque: "275 Nm",
    weight: "1240 kg",
    drivetrain: "6-speed manual, Helical LSD",
    redline: "7,500 rpm",
    maintenance: [
      { name: "Timing Chain + Guides Kit", brand: "OSK" },
      { name: "Coilpack Upgrade", brand: "Splitfire" },
      { name: "Full Bushing Refresh", brand: "SuperPro" },
      { name: "MX72 Pads + Fluid", brand: "Endless" },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "BPU — Basic Performance Upgrades",
        subtitle:
          "Free the T28 spool, dump the restrictive factory boost controller, and get on a modern ECU before you touch anything else.",
        power: "280–300 hp",
        torque: "+80–100 Nm",
        note: "Do the Link ECU early. The 1990s factory computer has no modern engine protection.",
        parts: [
          { name: "Power Intake", brand: "Apexi" },
          { name: "Super Power Flow", brand: "HKS", note: "Alternative filter." },
          { name: 'Expreme Ti 3" Turbo-Back', brand: "Tomei" },
          { name: "Hi-Power Exhaust", brand: "HKS" },
          {
            name: "Profec Boost Controller",
            brand: "GReddy",
            note: "Target ~1.0 bar / 14.5 psi.",
          },
          { name: "e-Boost2 Boost Controller", brand: "Turbosmart" },
          {
            name: "G4X S15 Plug-In ECU",
            brand: "Link",
            note: "Replaces the aging factory ECU, adds engine protection.",
          },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Turbo Efficiency & Fueling",
        subtitle:
          "The stock T28 ball-bearing turbo runs out of breath here. Feed it more fuel, cool the charge, swap the snail.",
        power: "320–350 hp",
        torque: "+130 Nm",
        parts: [
          {
            name: "LS Spec Front Mount Intercooler Kit",
            brand: "GReddy",
          },
          { name: "740cc Injectors", brand: "Nismo" },
          { name: "255lph Fuel Pump", brand: "Walbro" },
          { name: "340lph Fuel Pump", brand: "AEM", note: "Alternative to Walbro." },
          {
            name: "GT2871R Ball-Bearing Turbo",
            brand: "Garrett",
            note: "Direct-fit to the factory turbo location.",
          },
          { name: "Stage 2 Cerametallic Clutch", brand: "Exedy" },
          { name: "Super Coppermix Clutch", brand: "Nismo" },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Built Internals & Big Power",
        subtitle:
          "Past 400 hp reliably means opening the block, upgrading the valvetrain, and modernising the ignition.",
        power: "400–500+ hp",
        torque: "+200 Nm",
        note: "SR20 is notorious for throwing rocker arms at high RPM — the Tomei stoppers are cheap insurance against catastrophic failure.",
        parts: [
          { name: "Forged Pistons", brand: "CP" },
          { name: "H-Beam Connecting Rods", brand: "Manley" },
          { name: "Head Studs", brand: "ARP" },
          {
            name: "PonCams 256° Duration",
            brand: "Tomei",
          },
          {
            name: "Rocker Arm Stoppers",
            brand: "Tomei",
            note: "Prevents the SR20's famous rocker-arm throw at high RPM.",
          },
          {
            name: "R35 GT-R Smart Coilpack Conversion Kit",
            brand: "Wiring Specialties",
            note: "Stock S15 coilpacks cause spark blowout at high boost.",
          },
          {
            name: "G25-550 Turbo",
            brand: "Garrett",
          },
          {
            name: "Twin-Scroll Exhaust Manifold",
            brand: "6Boost",
          },
          {
            name: "45mm External Wastegate",
            brand: "Turbosmart",
          },
        ],
      },
    ],
  },
];

export const getCar = (slug: string) => CARS.find((c) => c.slug === slug);
