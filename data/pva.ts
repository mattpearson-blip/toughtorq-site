import type { ProductCardItem } from "../components/product-card";

export const pvaDrivePlatforms: ProductCardItem[] = [
  {
    title: "MC89 Battery Valve Actuator",
    model: "MC89",
    kind: "Product",
    category: "Portable Valve Actuation",
    badge: "Battery",
    description:
      "Battery-powered portable valve actuator for elevated, obstructed, or difficult-to-reach valves.",
    specs: [
      {
        label: "Power",
        value: "Battery",
      },
      {
        label: "Max Torque",
        value: "Up to 740 ft-lb",
      },
    ],
    features: [
      "Portable battery operation",
      "Fast field deployment",
      "Electronic torque and power limiting",
      "Designed for difficult valve access",
    ],
  },
  {
    title: "JA73 Battery Valve Actuator",
    model: "JA73",
    kind: "Product",
    category: "Portable Valve Actuation",
    badge: "Battery",
    description:
      "Portable battery valve actuator platform for difficult valves requiring controlled force and stable positioning.",
    specs: [
      {
        label: "Power",
        value: "Battery",
      },
      {
        label: "Max Torque",
        value: "Up to 740 ft-lb",
      },
    ],
    features: [
      "Battery powered",
      "Excellent operating autonomy",
      "Smoke-free operation",
      "Electronic torque and power limiting",
    ],
  },
  {
    title: "HL83 Pneumatic Valve Actuator",
    model: "HL83",
    kind: "Product",
    category: "Portable Valve Actuation",
    badge: "Pneumatic",
    description:
      "Pneumatic portable valve actuator for high-cycle operation and applications where spark-free operation is required.",
    specs: [
      {
        label: "Power",
        value: "Pneumatic",
      },
      {
        label: "Max Torque",
        value: "Up to 740 ft-lb",
      },
    ],
    features: [
      "No heat, spark, or smoke",
      "High torque and speed",
      "Compact and blockage resistant",
      "Designed for demanding industrial environments",
    ],
  },
  {
    title: "PY68 Gas Valve Actuator",
    model: "PY68",
    kind: "Product",
    category: "Portable Valve Actuation",
    badge: "Gas",
    description:
      "Independent fuel-powered portable actuator designed for remote environments and extended field operation.",
    specs: [
      {
        label: "Power",
        value: "Gas",
      },
      {
        label: "Max Torque",
        value: "Up to 740 ft-lb",
      },
    ],
    features: [
      "Independent fuel-powered operation",
      "Extended operating autonomy",
      "Designed for remote locations",
      "No external electrical supply required",
    ],
  },
  {
    title: "H2O Water Network Kit",
    model: "H2O KIT",
    kind: "Product",
    category: "Portable Valve Actuation",
    badge: "Water Network",
    description:
      "Portable valve operating system specifically configured for underground water-distribution valves.",
    specs: [
      {
        label: "Application",
        value: "Water Networks",
      },
      {
        label: "Max Torque",
        value: "Up to 630 ft-lb",
      },
    ],
    features: [
      "Designed for underground valves",
      "Easy transport and setup",
      "Stable portable operation",
      "Water-network configuration",
    ],
  },
];

export const pvaHeads: ProductCardItem[] = [
  {
    title: "Straight Head",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Straight actuator geometry for direct valve access.",
  },
  {
    title: "Right-Angle Head",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Right-angle configuration for valves where direct inline access is limited.",
  },
  {
    title: "Standard-Duty Banjo Head",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Banjo-style actuator head for compatible rising-stem valve applications.",
  },
  {
    title: "Heavy-Duty Banjo Head",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Heavy-duty banjo-style actuator head for more demanding rising-stem valve applications.",
  },
];

export const pvaAdaptors: ProductCardItem[] = [
  {
    title: "Fixed Finger Adaptor",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Fixed interface for compatible valve handwheel configurations.",
  },
  {
    title: "Self-Centering Spoke Adaptor",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Adjustable interface for different handwheel spoke patterns.",
  },
  {
    title: "Square Drive Adaptor",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Socket-driven interface for valves operated through a square-drive connection.",
  },
  {
    title: "Variable Valve Adaptor",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Adaptable interface for varying handwheel, spoke, and valve configurations.",
  },
  {
    title: "Flat-Spoke Adaptor",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Adaptor configuration for compatible flat-spoke valve handwheels.",
  },
  {
    title: "Tapered-Spoke Adaptor",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Adaptor configuration for compatible tapered-spoke valve handwheels.",
  },
];

export const pvaReactionDevices: ProductCardItem[] = [
  {
    title: "Reaction Arm",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Standard reaction support for controlled portable valve operation.",
  },
  {
    title: "Bipod",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Stable supported reaction configuration for demanding valve positions.",
  },
  {
    title: "Reaction Finger",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Compact reaction interface for specific valve and access configurations.",
  },
  {
    title: "Articulated Reaction Arm",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Articulated reaction support for applications requiring flexible positioning.",
  },
  {
    title: "Custom Mounting Flange",
    kind: "Custom Tooling",
    category: "Portable Valve Actuation",
    description:
      "Made-to-order mounting interface for application-specific valve configurations.",
  },
];

export const pvaAccessories: ProductCardItem[] = [
  {
    title: "Torque Limiter",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Torque-control accessory for supported PVA system configurations.",
  },
  {
    title: "Extension",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Extension component for applications requiring additional operating reach.",
  },
  {
    title: "Air Hose",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Air supply hose for compatible pneumatic PVA systems.",
  },
  {
    title: "Counter",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Counting accessory for supported valve operating applications.",
  },
  {
    title: "Storage Case",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Protective transport and storage case for PVA components.",
  },
  {
    title: "Battery Pack",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Battery pack for compatible battery-powered PVA systems.",
  },
  {
    title: "Universal Joint",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Universal joint for applications requiring angular flexibility.",
  },
  {
    title: "Safety Unit",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Safety component for supported portable valve actuation configurations.",
  },
  {
    title: "Reaction Accessory",
    kind: "Accessory",
    category: "Portable Valve Actuation",
    description:
      "Supporting reaction component for application-specific system configurations.",
  },
];