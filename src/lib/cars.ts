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
  {
    slug: "supra-a90",
    index: "04",
    make: "Toyota",
    model: "GR Supra",
    chassis: "A90",
    year: "2019 – Present",
    tagline:
      "The BMW-powered resurrection. The B58 platform is a modern-day 2JZ, capable of massive power increases on stock internals with just a downpipe and a flash tune.",
    image: "/Toyota_GR_Supra_(A90)_Washington_DC_Metro_Area,_USA_(8).jpg",
    engine: "B58B30O1",
    displacement: "3.0L Straight-6 Turbo",
    layout: "Front-engine, RWD",
    stockHp: "382 hp",
    stockTorque: "500 Nm",
    weight: "1495 kg",
    drivetrain: "8-speed automatic · 6-speed manual",
    redline: "6,500 rpm",
    maintenance: [
      { name: "Top Tec 6600 0W-20 Full Service", brand: "Liqui Moly" },
      { name: "Aluminum Chargepipe Upgrade", brand: "FTP Performance", note: "Replaces brittle plastic factory pipe before it cracks under elevated boost." },
      { name: "Laser Iridium Spark Plugs (Gapped down)", brand: "NGK" },
      { name: "High-Performance Brake Fluid", brand: "Castrol SRF" },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Software Wake-Up",
        subtitle: "The factory B58 configuration is heavily dialled back. A simple ECU recalibration transforms the vehicle into a different animal.",
        power: "420–440 crank hp",
        torque: "+100–120 Nm",
        note: "2021+ model years require a bench unlock (often requiring shipping the ECU to Femto) before any OBD flashing is possible.",
        parts: [
          { name: "MHD / BootMod3 Flashing License", brand: "MHD / ProTuningFreaks" },
          { name: "Drop-In Panel Air Filter", brand: "BMC" },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Thermal Management & High Flow",
        subtitle: "Open up the exhaust restriction directly behind the turbo scroll and optimize fuel flow to allow high-torque map variations.",
        power: "480–510 crank hp",
        torque: "+160–180 Nm",
        parts: [
          { name: "4-inch Catted/Catless Downpipe", brand: "Active Autowerke / VRSF" },
          { name: "Stage 2 High-Pressure Fuel Pump (HPFP)", brand: "Dorch Engineering", note: "Mandatory step if you intend to run high ethanol contents like E50 blends." },
          { name: "TCU Flashing Software", brand: "xHP Flashtool", note: "Raises torque limits inside the ZF8 transmission to stop electronic clutch slipping." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Hybrid Turbo & Flex Fuel",
        subtitle: "The stock twin-scroll turbo runs out of breath past 500 hp. Swap the core for a modified compressor footprint to crack supercar numbers.",
        power: "650–700+ crank hp",
        torque: "+280–320 Nm",
        parts: [
          { name: "Pure800 / Pure750 Hybrid Turbocharger", brand: "Pure Turbos" },
          { name: "Plug-and-Play Flex Fuel Kit", brand: "Visconti Tuning", note: "Allows seamless adjustments between standard pump gas and raw E85 fuel." },
          { name: "Custom Calibration Map", brand: "Marek / Cedar Performance", note: "Highly tailored tune mapping to balance load and safely protect stock engine internals." },
        ],
      },
    ],
  },
  {
    slug: "civic-type-r-fk8",
    index: "05",
    make: "Honda",
    model: "Civic Type R",
    chassis: "FK8",
    year: "2017 – 2021",
    tagline:
      "The K20C1 masterclass. Hyper-capable out of the box, but hamstrung by intensive front-end thermal limits. Fix the heat, clear the path, and unleash the torque.",
    image: "/Honda_Civic_Type_R_(FK8)_Greater_Toronto_Area,_Canada.jpg",
    engine: "K20C1",
    displacement: "2.0L Inline-4 Turbo",
    layout: "Front-engine, FWD",
    stockHp: "306 hp",
    stockTorque: "400 Nm",
    weight: "1380 kg",
    drivetrain: "6-speed manual",
    redline: "7,000 rpm",
    maintenance: [
      { name: "Synchromesh MTF Gearbox Fluid", brand: "Amsoil", note: "Helps alleviate the notorious 1st-to-2nd gear notchiness and high-rpm lockouts." },
      { name: "8100 Eco-lite 0W-20 Service", brand: "Motul" },
      { name: "Street/Track Rear Motor Mount (RMM)", brand: "Hasport (62A)", note: "Controls aggressive engine pitch under hard acceleration to eliminate wheel hop." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Induction & Calibration",
        subtitle: "Uncork the intake tract and manipulate target boost curves via the factory engine management system.",
        power: "340–350 crank hp",
        torque: "+60–70 Nm",
        parts: [
          { name: "Hondata FlashPro / KTuner V2", brand: "Hondata / KTuner", note: "Requires jailbreaking or unlocking the factory ECU before installation." },
          { name: "High-Volume Intake System", brand: "PRL Motorsports" },
          { name: "Upgraded Intercooler Core", brand: "PRL Motorsports", note: "Crucial early modification. The stock intercooler heat-soaks after a single hard pull." },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Full Exhaust Unification",
        subtitle: "Clear out the heavy factory restriction at the downpipe level to minimize backpressure and drop exhaust gas temperatures.",
        power: "370–385 crank hp",
        torque: "+100–110 Nm",
        parts: [
          { name: "Cast High-Flow Downpipe & Frontpipe", brand: "PRL Motorsports / RV6" },
          { name: "Triple-Tip Cat-Back Exhaust System", brand: "Invidia R400 / Milltek" },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Turbo Upgrades & Fuel System Expansion",
        subtitle: "The factory direct injection system peaks early. Upgrading the fuel delivery allows a larger compressor unit to shine.",
        power: "460–500 crank hp",
        torque: "+150–170 Nm",
        parts: [
          { name: "MHI Stage 2 Upgrade Turbocharger", brand: "Mitsubishi Heavy Industries", note: "An ideal factory-location upgrade designed by Honda's original turbo supplier." },
          { name: "Hondata Fuel System Upgrade Kit", brand: "Hondata", note: "Includes higher-flow injectors, low-pressure lines, and an uprated high-pressure mechanical pump." },
          { name: "Stage 3 Performance Clutch Kit", brand: "Clutch Masters / Action Clutch", note: "The stock pressure plate will slip instantly when subjected to Stage 3 torque." },
        ],
      },
    ],
  },
  {
    slug: "golf-gti-mk7",
    index: "06",
    make: "Volkswagen",
    model: "Golf GTI",
    chassis: "Mk7",
    year: "2013 – 2017",
    tagline:
      "The EA888 Gen 3 standard. Absurdly responsive to software changes, the MQB platform transforms from a quiet daily commuter into a true giant-killer.",
    image: "/VOLKSWAGEN_GOLF_GTI_(Mk7,_Typ_5G)_MACAU.jpg",
    engine: "EA888 Gen 3",
    displacement: "2.0L Inline-4 Turbo",
    layout: "Front-engine, FWD",
    stockHp: "220 hp",
    stockTorque: "350 Nm",
    weight: "1350 kg",
    drivetrain: "6-speed DSG · 6-speed manual",
    redline: "6,500 rpm",
    maintenance: [
      { name: "Dual-Clutch Transmission Fluid Service", brand: "Liqui Moly DSG", note: "Strictly required every 40,000 miles to preserve fast clutch clamping speeds." },
      { name: "Upgraded Water Pump & Thermostat Housing", brand: "OEM VW (Latest Revision)", note: "The notorious failure point of this block; inspect constantly for slow coolant weeping." },
      { name: "Racing Spark Plugs (Non-Projected)", brand: "NGK R7437-9", note: "Gapped tightly to prevents spark blowout under elevated boost profiles." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "The Baseline Flash",
        subtitle: "VAG intentionally left an enormous amount of performance headroom on the table. Bring it to light with software alone.",
        power: "290–300 crank hp",
        torque: "+110–130 Nm",
        note: "If equipped with a manual gearbox, the factory clutch will begin slipping within weeks at this torque level.",
        parts: [
          { name: "Accessport V3 with EQT Custom Tunes", brand: "Cobb / Equilibrium Tuning" },
          { name: "Cold Air Intake System", brand: "Integrated Engineering" },
          { name: "DSG TCU Software Tune (If automatic)", brand: "EQT / APR", note: "Crucial modification to increase oil pressure clamp forces across the clutch packs." },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Unrestricted Exfiltration",
        subtitle: "Free up backpressure directly at the exhaust turbine face and expand cooling capabilities to withstand repeated back-to-back pulls.",
        power: "330–345 crank hp",
        torque: "+150–170 Nm",
        parts: [
          { name: "Cast Downpipe with High-Flow Catalyst", brand: "Integrated Engineering" },
          { name: "Direct-Fit FDS Intercooler Upgrade", brand: "Wagner Tuning / APR" },
          { name: "Stage 2 Daily Clutch Kit (If manual)", brand: "South Bend", note: "Upgrades to a single-mass flywheel format to handle heavy mid-range torque hits." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "The Golf R Conversion (IS38 or Hybrid)",
        subtitle: "Ditch the small factory IS20 turbocharger architecture in favor of the larger factory unit pulled from the AWD Golf R, or choose a custom core.",
        power: "390–450 crank hp",
        torque: "+200–240 Nm",
        parts: [
          { name: "IS38 OEM Turbocharger Swap / Vortex Standard", brand: "IHI / EQT" },
          { name: "Brushless Low-Pressure Fuel Pump Upgrade", brand: "EQT / Fuel-It" },
          { name: "4-Bar PUT & MAP Sensor Kit", brand: "Bosch / OEM VAG", note: "Allows the engine control unit to accurately read boost ranges stretching well north of 29 psi." },
        ],
      },
    ],
  },
  {
    slug: "toyota-86-zn6",
    index: "07",
    make: "Toyota",
    model: "86 / BRZ",
    chassis: "ZN6 / ZC6",
    year: "2012 – 2020",
    tagline:
      "Pure cornering bliss, starved of intermediate torque. The infamous 4,000 rpm 'torque dip' defines this platform — fix it with headers or give it forced induction.",
    image: "/Tuned_Toyota_86_GT_(DBA-ZN6-G2E8)_rear.jpg",
    engine: "FA20D",
    displacement: "2.0L Boxer-4 NA",
    layout: "Front-engine, RWD",
    stockHp: "200 hp",
    stockTorque: "205 Nm",
    weight: "1250 kg",
    drivetrain: "6-speed manual",
    redline: "7,450 rpm",
    maintenance: [
      { name: "Gear 300 75W-90 Transmission Fluid", brand: "Motul" },
      { name: "Rear Shifter Bushing Combo Kit", brand: "Whiteline", note: "Improves loose shifter gate feel and mechanical tracking accuracy under side load." },
      { name: "19-Row Track Oil Cooler Kit", brand: "Jackson Racing", note: "Crucial insurance policy — boxer engines naturally subject oil to immense friction heat." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Flattening the Torque Curve",
        subtitle: "The dip in the middle of the rev range is artificial, caused by primary catalytic layout. Swap the header configuration to kill it.",
        power: "210–215 crank hp",
        torque: "+15–20 Nm",
        parts: [
          { name: "Unequal Length (UEL) Exhaust Header", brand: "Tomei Expreme / JDL", note: "Returns the classic offset boxer rumble while filling the mid-range power gap." },
          { name: "OpenFlash Tablet V2 / EcuTek Interface", brand: "OpenFlash Performance / EcuTek" },
          { name: "Cat-Back Exhaust System", brand: "Invidia N1 / Q300" },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Ethanol Liberation",
        subtitle: "The FA20 high compression ratio (12.5:1) thrives on high-octane alternatives. Add real-time flex-fuel mapping to squeeze the NA engine dry.",
        power: "225–235 crank hp",
        torque: "+25–35 Nm",
        parts: [
          { name: "Flex Fuel Sensor & Controller Kit", brand: "Delicious Tuning" },
          { name: "Overpipe & Dual Resonated Frontpipe", brand: "JDL Design" },
          { name: "Series 500 Performance Coilovers", brand: "Fortune Auto", note: "Complements power upgrades with high-fidelity control adjustments." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Forced Induction Framework",
        subtitle: "With bolt-on limits reached, the engine needs real atmosphere packing. Opt for a highly responsive supercharger or a broad-spectrum turbo setup.",
        power: "290–350 crank hp",
        torque: "+100–160 Nm",
        note: "Limit torque targets below 340 Nm on a stock engine block to protect factory connecting rods from snapping.",
        parts: [
          { name: "Rotrex C30/C38 Centrifugal Supercharger Kit", brand: "Jackson Racing", note: "Delivers a completely linear, high-revving power delivery that maintains original NA character." },
          { name: "Heavy Duty Performance Clutch Kit", brand: "ACT", note: "Mandatory choice to grip against rapid forced induction torque curves." },
          { name: "700cc Fuel Injectors & DW300c Pump", brand: "DeatschWerks" },
        ],
      },
    ],
  },
  {
    slug: "335i-e92",
    index: "08",
    make: "BMW",
    model: "335i",
    chassis: "E92",
    year: "2006 – 2010",
    tagline:
      "The legendary, high-maintenance N54. Famously dubbed the German 2JZ because its forged bottom-end handles massive loads, provided you keep it well-maintained.",
    image: "/BMW_335i_Coupé_E92_(9857806916).jpg",
    engine: "N54B30",
    displacement: "3.0L Straight-6 Twin-Turbo",
    layout: "Front-engine, RWD",
    stockHp: "300 hp",
    stockTorque: "400 Nm",
    weight: "1600 kg",
    drivetrain: "6-speed manual · 6-speed automatic",
    redline: "7,000 rpm",
    maintenance: [
      { name: "Index 12 Fuel Injectors (x6)", brand: "OEM BMW", note: "Mandatory fix. Early index revisions suffer from terminal leaking that can destroy cylinders." },
      { name: "Walnut Blasting Valve Service", brand: "Independent BMW Specialist", note: "Crucial direct injection maintenance required to scrub away severe carbon choking every 40k miles." },
      { name: "Upgraded Electric Water Pump + Thermostat", brand: "Continental / Pierburg" },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "The Initial Boost Spike",
        subtitle: "The stock twin-turbos are barely working from factory. Unshackle target load ceilings using standard hand-held flashing frameworks.",
        power: "360–380 crank hp",
        torque: "+120–140 Nm",
        parts: [
          { name: "MHD Wireless Flashing Adapter & License", brand: "MHD Tuning" },
          { name: "Dual Cone Intake (DCI) Upgrade", brand: "Burger Tuning (BMS)" },
          { name: "Aluminum Chargepipe with TiAL Blow-Off Valve", brand: "VRSF", note: "Replaces the fragile OEM plastic pipe, which will instantly blow apart on increased boost pressure." },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Thermal Drop & High Flow Downpipes",
        subtitle: "The restrictive factory catalytic converters trap immense heat right next to the engine blocks. Swap them out to safely increase fuel scaling.",
        power: "400–430 crank hp",
        torque: "+180–210 Nm",
        parts: [
          { name: "3-inch Stainless Steel Catless Downpipes", brand: "VRSF" },
          { name: "7.5-inch High-Density Stepped Intercooler", brand: "VRSF / ARM Motorsports" },
          { name: "Low-Pressure Fuel Pump Upgrade (Walbro 450)", brand: "TI Automotive / Fuel-It", note: "Ensures the fueling infrastructure doesn't lean out on high-load requests." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Upgraded Twins or Single-Turbo Conversion",
        subtitle: "The factory small-frame turbos cannot hold boost past 5,500 rpm. Upgrade to larger twin cores or structural top-mount single turbo arrays.",
        power: "550–700+ crank hp",
        torque: "+300–400 Nm",
        parts: [
          { name: "N54 Top Mount Single Turbo System (6266 Gen2)", brand: "Doc Race", note: "Converts the twin layout to a massive single wheel for endless top-end acceleration pull." },
          { name: "Reflex Motoring Advanced Fuel Controller", brand: "Motiv", note: "Handles auxiliary controller sequences to fire secondary port injection fuel rails safely." },
          { name: "Twin-Disc Performance Clutch Kit", brand: "Spec Clutch / Clutch Masters" },
        ],
      },
    ],
  },
  {
    slug: "gt-r-r35",
    index: "09",
    make: "Nissan",
    model: "GT-R",
    chassis: "R35",
    year: "2009 – Present",
    tagline:
      "Godzilla. The VR38DETT combined with the GR6 transmission changed the tuning world. Massive power is easily accessible, but transmission upgrades become mandatory quickly.",
    image: "/Nissan_GT-R_Nismo_(R35),_2022,_rear.jpg",
    engine: "VR38DETT",
    displacement: "3.8L V6 Twin-Turbo",
    layout: "Front-mid engine, AWD",
    stockHp: "565 hp (DBA/EBA generation)",
    stockTorque: "633 Nm",
    weight: "1750 kg",
    drivetrain: "6-speed dual-clutch (GR6)",
    redline: "7,100 rpm",
    maintenance: [
      { name: "GR6 Transmission Fluid Service", brand: "Dodson Motorsport / Motul", note: "Crucial service. The GR6 fluid degrades quickly under launch control and track conditions." },
      { name: "Bellhousing Rattle Fix / Bearing Housing", brand: "Litchfield / AMS", note: "The factory bellhousing shaft bearing wears out, causing a loud idle rattle." },
      { name: "High-Carbon Brake Rotors", brand: "Alcon / AP Racing", note: "The heavy R35 chassis notoriously cracks OEM drilled rotors under track abuse." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Breathing & Mapping",
        subtitle: "The factory tune is conservative. Uncorking the exhaust Y-pipe and recalibrating the ECU yields massive improvements in mid-range punch.",
        power: "590–600 crank hp",
        torque: "+100–120 Nm",
        parts: [
          { name: "EcuTek / COBB Pro-Tune", brand: "EcuTek / COBB Tuning" },
          { name: "90mm Stainless Steel Y-Pipe", brand: "Litchfield / ETS", note: "Removes the restrictive secondary catalytic converters." },
          { name: "High-Flow Drop-In Air Filters", brand: "K&N / BMC" },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Full Exhaust & E85 Flex Fuel",
        subtitle: "Maxing out the stock turbochargers requires more fuel. Switching to an E85 blend unlocks the true limit of the factory rotating assembly.",
        power: "640–660 crank hp",
        torque: "+180–220 Nm",
        note: "This torque level is the generally accepted safe limit for the stock GR6 transmission clutches and factory connecting rods.",
        parts: [
          { name: "Flex Fuel Kit + Custom Calibration", brand: "Visconti / Cobb" },
          { name: "1050cc Injectors", brand: "Injector Dynamics (ID1050x)" },
          { name: "Twin High-Flow Fuel Pumps", brand: "Walbro / ASNU" },
          { name: "3-inch to 3.5-inch Turbo-Back Exhaust", brand: "Titanium / ETS" },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Hybrid Turbos & Built GR6",
        subtitle: "To push past 700hp safely, you must upgrade the turbochargers and physically rebuild the transmission with increased clutch counts.",
        power: "800–850+ crank hp",
        torque: "+350–400 Nm",
        note: "Pushing past 650 lb-ft (880 Nm) of torque heavily risks bending the factory VR38 connecting rods. A forged bottom-end is recommended.",
        parts: [
          { name: "Alpha 9 / Pure1000 Turbo Upgrade", brand: "AMS Performance / Pure Turbos" },
          { name: "Sportsman GR6 Transmission Build", brand: "Dodson Motorsport / ShepTrans", note: "Upgraded clutch packs, billet baskets, and reinforced gearsets to hold the torque." },
          { name: "Race Front Mount Intercooler", brand: "ETS / AMS" },
        ],
      },
    ],
  },
  {
    slug: "mustang-gt-s550",
    index: "10",
    make: "Ford",
    model: "Mustang GT",
    chassis: "S550 (Gen 3)",
    year: "2018 – 2023",
    tagline:
      "The modern American muscle formula. The Gen 3 Coyote V8 features dual fuel injection (Port + DI) and a screaming 7,500 rpm redline. It loves E85 and forced induction.",
    image: "/Ford_MUSTANG_SHELBY_GT350_(S550).jpg",
    engine: "5.0L Coyote V8 (Gen 3)",
    displacement: "5.0L NA V8",
    layout: "Front-engine, RWD",
    stockHp: "460 hp",
    stockTorque: "569 Nm",
    weight: "1720 kg",
    drivetrain: "10-speed automatic (10R80) · 6-speed manual (MT82)",
    redline: "7,500 rpm",
    maintenance: [
      { name: "Billet Oil Pump Gears (OPG) & Crank Sprocket", brand: "Boundary / TSS", note: "Mandatory insurance before adding a supercharger or revving past 7,800 rpm to prevent engine failure." },
      { name: "5W-50 Synthetic Oil Upgrade", brand: "Amsoil / Motul", note: "Factory 5W-20 is too thin for heavy track abuse or forced induction setups." },
      { name: "MT82 Transmission Fluid + Shifter Bracket", brand: "BG Syncro Shift / Barton", note: "Fixes the infamous high-RPM lockout issues on manual cars." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "E85 Calibration & Induction",
        subtitle: "The Gen 3 Coyote has a high 12.0:1 compression ratio, meaning it gains massive power simply from switching to E85 fuel and a calibration.",
        power: "500–515 crank hp",
        torque: "+40–50 Nm",
        parts: [
          { name: "HP Tuners Custom E85 Tune", brand: "Lund Racing / PBM" },
          { name: "Cold Air Intake (120mm)", brand: "JLT Performance / PMAS" },
          { name: "Axle-Back Exhaust", brand: "Corsa / Borla", note: "Fixes the muted factory exhaust note without causing excessive drone." },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Full Exhaust & Manifold Flow",
        subtitle: "Removing the factory catalytic converters and opening up the exhaust manifolds allows the V8 to breathe efficiently at the top of the rev range.",
        power: "530–545 crank hp",
        torque: "+60–70 Nm",
        parts: [
          { name: "1-7/8\" or 2\" Long Tube Headers", brand: "Kooks / Stainless Works" },
          { name: "Ported 2018+ Intake Manifold", brand: "Brett Barber / Steeda", note: "Maintains low-end torque while drastically increasing airflow above 6,000 rpm." },
          { name: "Stop the Hop Suspension Kit", brand: "Steeda", note: "Crucial IRS subframe bracing to eliminate extreme wheel hop under hard acceleration." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Positive Displacement Supercharger",
        subtitle: "The Coyote architecture is legendary for handling boost. Bolting a massive twin-screw supercharger on top yields hypercar power levels on a stock engine.",
        power: "750–800+ crank hp",
        torque: "+300–350 Nm",
        note: "Ensure Billet OPG and Crank Sprocket are installed. The 10R80 automatic holds this power well, but the MT82 manual will require a twin-disc clutch immediately.",
        parts: [
          { name: "Gen 5 3.0L Supercharger Kit", brand: "Whipple Superchargers" },
          { name: "1000cc Fuel Injectors", brand: "Injector Dynamics (ID1050x)" },
          { name: "Boost-a-Pump (BAP) or Dual Pump Return System", brand: "JMS / Fore Innovations" },
        ],
      },
    ],
  },
  {
    slug: "evo-x-cz4a",
    index: "11",
    make: "Mitsubishi",
    model: "Lancer Evolution X",
    chassis: "CZ4A",
    year: "2008 – 2015",
    tagline:
      "The final evolution. The all-aluminum 4B11T engine replaced the legendary 4G63, offering better spool and response, paired with a highly advanced AWD system.",
    image: "/Mitsubishi_Lancer_Evolution_X_CZ4A_Graphite_Gray_Metallic_(4).jpg",
    engine: "4B11T",
    displacement: "2.0L Inline-4 Turbo",
    layout: "Front-engine, AWD",
    stockHp: "291 hp",
    stockTorque: "406 Nm",
    weight: "1600 kg",
    drivetrain: "5-speed manual · 6-speed SST (Twin-Clutch)",
    redline: "7,000 rpm",
    maintenance: [
      { name: "AYC / ACD Pump Relocation & Rebuild", brand: "OEM / Custom", note: "The factory pump is located behind the rear wheel and fails due to corrosion. Relocate to the trunk." },
      { name: "SST Transmission Fluid & Filter (For automatics)", brand: "Castrol Transmax / SSP", note: "The SST transmission will slip and fail if fluid is not changed religiously every 15k miles." },
      { name: "Upgraded Fuel Pump Relay", brand: "Mitsubishi OEM (Black Relay)", note: "The factory relay fails, causing a lean condition that can blow the engine." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Boost Control & Mapping",
        subtitle: "The factory ECU tune runs incredibly rich and the boost control is sloppy. A simple 3-port solenoid and tune transforms the power delivery.",
        power: "340–350 crank hp",
        torque: "+60–80 Nm",
        parts: [
          { name: "OpenSource / Cobb Accessport Tune", brand: "Tactrix / COBB" },
          { name: "3-Port Electronic Boost Control Solenoid", brand: "Grimmspeed / MAC" },
          { name: "Drop-in Panel Air Filter", brand: "K&N / Cosworth" },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Airflow Liberation",
        subtitle: "Replacing the restrictive factory exhaust system and intercooler piping allows the stock MHI turbo to work much more efficiently.",
        power: "370–390 crank hp",
        torque: "+100–120 Nm",
        parts: [
          { name: "3-inch Turbo-Back Exhaust System", brand: "ETS / AMS" },
          { name: "Upper & Lower Intercooler Piping", brand: "ETS / MAPerformance", note: "Replaces the factory rubber hoses which expand and balloon under high boost." },
          { name: "Upgraded Metal Blow-Off Valve (MR Style)", brand: "OEM Mitsubishi / Turbosmart", note: "The plastic BOV on early GSR models leaks boost above 18psi." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "E85 & Fuel System Overhaul",
        subtitle: "To max out the stock turbo, switch to ethanol. The torque output must be capped carefully by the tuner to prevent the factory connecting rods from snapping.",
        power: "420–440 crank hp",
        torque: "+140–160 Nm",
        note: "Tuners will intentionally shape the torque curve to stay below 350 wtq (approx 470 Nm at crank) to save the stock block.",
        parts: [
          { name: "1300cc Fuel Injectors", brand: "Injector Dynamics (ID1300x)" },
          { name: "340lph In-Tank Fuel Pump", brand: "AEM / DeatschWerks" },
          { name: "Flex Fuel Kit", brand: "Driven Fab / Cobb" },
          { name: "SST Upgraded Clutch Packs (If Automatic)", brand: "SSP Performance / Dodson", note: "The factory SST clutches will slip heavily at this power level." },
        ],
      },
    ],
  },
  {
    slug: "wrx-sti-va",
    index: "12",
    make: "Subaru",
    model: "WRX STI",
    chassis: "VA",
    year: "2015 – 2021",
    tagline:
      "The rumble of the EJ257. An incredibly capable chassis paired with an old-school, character-filled engine that requires meticulous tuning to stay reliable.",
    image: "/Subaru_WRX_STI_(48647894292).jpg",
    engine: "EJ257",
    displacement: "2.5L Boxer-4 Turbo",
    layout: "Front-engine, AWD",
    stockHp: "305 hp",
    stockTorque: "393 Nm",
    weight: "1535 kg",
    drivetrain: "6-speed manual",
    redline: "7,100 rpm",
    maintenance: [
      { name: "Billet Oil Pickup Tube & Baffle", brand: "Killer B Motorsport", note: "The factory brazed oil pickup tube is prone to cracking, causing immediate oil starvation and engine death." },
      { name: "Air / Oil Separator (AOS)", brand: "IAG Performance", note: "Prevents oil vapors from re-entering the intake tract, which lowers fuel octane and causes ringland-killing detonation." },
      { name: "Cylinder 4 Cooling Mod", brand: "Getadomtune", note: "Improves coolant flow to the hottest cylinder on the EJ block to prevent localized overheating." },
    ],
    stages: [
      {
        id: 1,
        code: "Stage 1",
        title: "Smoothing the Curve",
        subtitle: "The factory Subaru tune is notorious for a sudden burst of boost followed by a massive dip in power. A reflash smooths this out completely.",
        power: "320–330 crank hp",
        torque: "+30–40 Nm",
        parts: [
          { name: "Accessport V3", brand: "COBB Tuning" },
          { name: "SF Cold Air Intake + Airbox", brand: "COBB Tuning / Grimmspeed" },
        ],
      },
      {
        id: 2,
        code: "Stage 2",
        title: "Downpipe & Boost Control",
        subtitle: "Removing the heavy restriction directly behind the turbo lowers exhaust gas temperatures and allows the VF48 turbo to spool much earlier.",
        power: "350–365 crank hp",
        torque: "+70–90 Nm",
        parts: [
          { name: "Catted Downpipe (GESi)", brand: "Grimmspeed / COBB", note: "Modern tuning regulations require high-quality GESi catalytic converters to prevent check engine lights." },
          { name: "Cat-Back Exhaust", brand: "Invidia Q300 / Tomei Expreme Ti" },
          { name: "3-Port Electronic Boost Control Solenoid", brand: "Grimmspeed", note: "Fixes boost spiking issues present with the factory 2-port bleeder system." },
        ],
      },
      {
        id: 3,
        code: "Stage 3",
        title: "Fueling Upgrades & Flex Fuel",
        subtitle: "The EJ257 is highly susceptible to detonation on pump gas. E85 fuel is the ultimate safety and power upgrade for this engine.",
        power: "410–430 crank hp",
        torque: "+130–160 Nm",
        note: "This is the generally accepted limit of the factory cast pistons (ringlands). Pushing further requires a forged shortblock.",
        parts: [
          { name: "Flex Fuel Sensor Kit", brand: "COBB Tuning" },
          { name: "1050cc Top Feed Injectors", brand: "Injector Dynamics" },
          { name: "AEM 340lph Fuel Pump + FPR", brand: "AEM / Cobb", note: "An upgraded fuel pressure regulator (FPR) is required to fix the 'stumble' issue around 3,000 RPM." },
          { name: "Upgraded Top Mount Intercooler (TMIC)", brand: "Grimmspeed", note: "The plastic end-tanks on the factory intercooler will separate under higher boost pressures." },
        ],
      },
    ],
  },
];

export const getCar = (slug: string) => CARS.find((c) => c.slug === slug);
