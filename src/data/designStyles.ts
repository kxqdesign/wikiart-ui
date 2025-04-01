
import { DesignStyle } from "@/types/designStyles";

export const designStyles: DesignStyle[] = [
  {
    id: "minimal",
    name: "Minimalism",
    nameChinese: "极简主义",
    shortDescription: "Less is more. Clean, functional, and purposeful design.",
    description: "Minimalism strips away excessive elements and focuses on what's essential. It uses ample whitespace, limited color palettes, and simplified forms to create clarity and elegance.",
    keywords: ["Simple", "Clean", "Whitespace", "Functional", "Elegant"],
    colorPalette: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#FF5252",
      background: "#FFFFFF",
      text: "#333333"
    },
    recommendedFonts: ["Helvetica Neue", "San Francisco", "Inter", "Roboto"],
    visualTechniques: [
      "Use ample whitespace",
      "Employ simple, flat colors",
      "Focus on typography hierarchy",
      "Remove decorative elements",
      "Use subtle animations"
    ],
    useCases: [
      "Premium product websites",
      "Portfolio sites",
      "Documentation",
      "Editorial websites",
      "Mobile applications"
    ],
    prompts: [
      {
        title: "Minimalist UI Design",
        description: "Generate a clean and simple UI with focus on content",
        template: "Create a minimalist UI design for a [purpose] website with a focus on typography and whitespace. Use a monochromatic color scheme based on [color], with a single accent color for important elements. Prioritize content hierarchy and remove all decorative elements that don't serve a functional purpose."
      },
      {
        title: "Minimalist Navigation",
        description: "Create a clean and unobtrusive navigation system",
        template: "Design a minimalist navigation menu for a [type] website that is unobtrusive yet accessible. Use subtle animations for state changes, and ensure the typography is clean and easy to read. The navigation should use minimal visual elements and rely primarily on typography and spacing."
      }
    ]
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    nameChinese: "玻璃态",
    shortDescription: "Frosted glass effect with transparency and blur.",
    description: "Glassmorphism creates a frosted glass visual effect using transparency, blur, and subtle borders to create depth. Elements appear to float above backgrounds with an ethereal quality.",
    keywords: ["Transparent", "Frosted", "Blur", "Depth", "Light"],
    colorPalette: {
      primary: "#8A2BE2",
      secondary: "#4CC9F0",
      accent: "#F72585",
      background: "#FFFFFF",
      text: "#333333"
    },
    recommendedFonts: ["Poppins", "Montserrat", "SF Pro Display", "Futura"],
    visualTechniques: [
      "Apply backdrop blur effects",
      "Use subtle transparency",
      "Add thin, light borders",
      "Create depth with layering",
      "Incorporate subtle light effects"
    ],
    useCases: [
      "Modern dashboards",
      "iOS and macOS interfaces",
      "Creative portfolios",
      "Media applications",
      "Futuristic interfaces"
    ],
    prompts: [
      {
        title: "Glassmorphic Card Components",
        description: "Create translucent card elements with depth",
        template: "Design a set of glassmorphic card components for a [type] interface. Use a background blur of 10-20px, 70-80% opacity, and very subtle light borders. The cards should appear to float above a colorful background with [primary color] and [secondary color]. Include proper lighting effects to enhance the glass appearance."
      },
      {
        title: "Glassmorphic Navigation",
        description: "Create a translucent navigation bar with blur effects",
        template: "Create a glassmorphic navigation bar for a [purpose] website. The navbar should have 80% transparency with a 15px backdrop blur, subtle white border (1px), and floating appearance. Ensure text remains highly readable against complex backgrounds by using appropriate contrast and possibly text shadows."
      }
    ]
  },
  {
    id: "neumorphism",
    name: "Neumorphism",
    nameChinese: "新拟态",
    shortDescription: "Soft UI with subtle shadows creating tactile elements.",
    description: "Neumorphism (or Soft UI) creates a soft, extruded plastic look using subtle shadow techniques. Elements appear to be pressed out from or into the background, creating a tactile experience.",
    keywords: ["Soft", "Shadows", "Subtle", "Monochromatic", "Tactile"],
    colorPalette: {
      primary: "#E0E5EC",
      secondary: "#D1D9E6",
      accent: "#4D7CFE",
      background: "#E0E5EC",
      text: "#666666"
    },
    recommendedFonts: ["Nunito", "Quicksand", "Comfortaa", "SF Pro Rounded"],
    visualTechniques: [
      "Use shadow pairs (light and dark)",
      "Keep low color contrast",
      "Apply subtle rounded corners",
      "Maintain consistent background color",
      "Use gentle state transitions"
    ],
    useCases: [
      "Music player interfaces",
      "Settings screens",
      "IoT device controls",
      "Calculator apps",
      "Toggle controls and buttons"
    ],
    prompts: [
      {
        title: "Neumorphic Controls",
        description: "Create soft, tactile controls with shadow effects",
        template: "Design neumorphic UI controls (buttons, sliders, and toggles) for a [purpose] interface. Use a light base color (#E0E5EC or similar) with dual shadows - one light (#FFFFFF at 30% opacity) and one dark (#A3B1C6 at 30% opacity). Apply a 20px blur to shadows, and use rounded corners (10px radius). For active states, use inset shadows to create a pressed effect."
      },
      {
        title: "Neumorphic Dashboard",
        description: "Create a full soft UI dashboard with depth",
        template: "Create a neumorphic dashboard for [purpose]. Use a soft gray background (#E0E5EC) with elements that appear carved out or extruded from the surface. Apply consistent dual shadows (light and dark) with 15-25px blur. Use subtle color accents for important information and maintain consistent light source direction. Include toggle elements, charts, and navigation that all follow the same neumorphic style."
      }
    ]
  },
  {
    id: "brutalism",
    name: "Brutalism",
    nameChinese: "野蛮主义",
    shortDescription: "Raw, unapologetic design with bold elements.",
    description: "Brutalism embraces raw, unfiltered design aesthetics with bold colors, asymmetric layouts, and unpolished elements. It breaks conventional design rules to create memorable, distinctive experiences.",
    keywords: ["Bold", "Raw", "Asymmetric", "Unconventional", "Experimental"],
    colorPalette: {
      primary: "#FF0000",
      secondary: "#0000FF",
      accent: "#FFFF00",
      background: "#FFFFFF",
      text: "#000000"
    },
    recommendedFonts: ["Courier New", "Times New Roman", "Arial Black", "Impact"],
    visualTechniques: [
      "Use unrefined, raw elements",
      "Apply jarring color combinations",
      "Create asymmetrical layouts",
      "Use oversized typography",
      "Embrace visual 'errors' and glitches"
    ],
    useCases: [
      "Art and culture websites",
      "Portfolio sites for creatives",
      "Experimental web projects",
      "Music and entertainment sites",
      "Fashion brand websites"
    ],
    prompts: [
      {
        title: "Brutalist Web Design",
        description: "Create raw, unfiltered web design with bold elements",
        template: "Design a brutalist website for [purpose] that breaks conventional design rules. Use stark contrasts, deliberately misaligned elements, and oversized typography (preferably monospaced or serif fonts). Incorporate raw HTML-like elements, visible grids, and unrefined borders. Use bold, clashing colors like [color1], [color2], and [color3]. Add elements that feel intentionally 'undesigned' or raw."
      },
      {
        title: "Neo-Brutalist Interface",
        description: "Create a modern take on brutalist design for applications",
        template: "Create a neo-brutalist interface for a [type] application. Combine raw brutalist elements with some modern usability. Use stark black borders (3-5px), primary colors, deliberately 'unrefined' shapes, and visible grids or baselines. Typography should be bold and oversized, mixing serif and sans-serif fonts. Include some 'digital artifacts' like visible pixels or glitch effects for visual interest."
      }
    ]
  },
  {
    id: "skeuomorphism",
    name: "Skeuomorphism",
    nameChinese: "拟物化",
    shortDescription: "Digital objects that mimic their real-world counterparts.",
    description: "Skeuomorphism designs digital interfaces to mimic their real-world counterparts, using textures, shadows, and realistic details to create familiar, intuitive experiences.",
    keywords: ["Realistic", "Textured", "3D", "Familiar", "Detailed"],
    colorPalette: {
      primary: "#A67C52",
      secondary: "#8A9BA8",
      accent: "#D4AF37",
      background: "#F2F2F2",
      text: "#333333"
    },
    recommendedFonts: ["Georgia", "Baskerville", "Garamond", "SF Pro Text"],
    visualTechniques: [
      "Replicate real materials and textures",
      "Use realistic shadows and lighting",
      "Create 3D effects and depth",
      "Add detailed surface properties",
      "Imitate physical interactions"
    ],
    useCases: [
      "Book readers and educational apps",
      "Calendar and planning tools",
      "Audio equipment controls",
      "Gaming interfaces",
      "Creative tools"
    ],
    prompts: [
      {
        title: "Skeuomorphic App Interface",
        description: "Create realistic interface elements resembling physical objects",
        template: "Design a skeuomorphic interface for a [type] application that resembles its real-world counterpart. Use realistic textures like [material] (leather, wood, metal, paper), accurate shadows with proper light source direction, and three-dimensional elements. Include details such as stitching, embossing, reflections, and wear patterns where appropriate. Buttons should appear pressable, sliders should look movable, and surfaces should have tangible qualities."
      },
      {
        title: "Skeuomorphic Icon Set",
        description: "Create detailed, realistic icons resembling physical objects",
        template: "Create a set of skeuomorphic icons for a [purpose] application. Each icon should be highly detailed with realistic textures, proper lighting and shadows, and accurate representations of physical objects. Use gradient effects, reflections, and appropriate material textures (metal, glass, paper, etc.). Ensure the icons have a consistent light source and level of detail. The icons should represent [list functions] functionality."
      }
    ]
  }
];

export const getDesignStyleById = (id: string): DesignStyle | undefined => {
  return designStyles.find(style => style.id === id);
};

export const getStyleClasses = (styleId: string): string => {
  switch (styleId) {
    case 'glassmorphism':
      return 'glassmorphism';
    case 'neumorphism':
      return 'neumorphism';
    case 'brutalism':
      return 'border-4 border-black font-bold';
    case 'skeuomorphism':
      return 'shadow-lg bg-gradient-to-b from-white to-gray-200 border border-gray-300';
    case 'minimal':
    default:
      return 'bg-white shadow border';
  }
};
