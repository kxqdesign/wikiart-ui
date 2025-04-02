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
  },
  {
    id: "neobrutalism",
    name: "Neobrutalism",
    nameChinese: "新野蛮主义",
    shortDescription: "Bold colors, thick borders, high contrast, and geometric shapes.",
    description: "Neobrutalism embraces bold colors, thick borders, and high contrast elements with a raw, unrefined aesthetic. It features geometric shapes, playful elements, and intentionally 'undesigned' appearances.",
    keywords: ["Bold", "Thick Borders", "High Contrast", "Playful", "Raw"],
    colorPalette: {
      primary: "#FF5F1F",
      secondary: "#7000FF",
      accent: "#FFE800",
      background: "#FFFFFF",
      text: "#000000"
    },
    recommendedFonts: ["Roboto Mono", "Inter", "Work Sans", "Arial Black"],
    visualTechniques: [
      "Use thick black borders",
      "Apply vibrant, unnatural colors",
      "Create oversized elements",
      "Employ high contrast combinations",
      "Include playful geometric shapes"
    ],
    useCases: [
      "Developer portfolios",
      "NFT platforms",
      "Creative showcase websites",
      "Design agency sites",
      "Digital art platforms"
    ],
    prompts: [
      {
        title: "Neobrutalist Hero Section",
        description: "Create a bold, high-contrast hero section",
        template: "Design a neobrutalist hero section with thick black borders (3-5px), oversized elements, and a bright color palette using [primary color] as the background with black text. Include at least one geometric shape in [accent color] with a slight rotation and a drop shadow offset."
      },
      {
        title: "Neobrutalist Navigation",
        description: "Create a distinctive navigation menu with neobrutalist aesthetics",
        template: "Create a neobrutalist navigation menu with thick black borders, sharp corners, and button elements that use [primary color] and [secondary color] with high contrast. Include hover states that change the background color completely and add a 2-3px offset to simulate a 'clicked' appearance."
      }
    ]
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    nameChinese: "黏土拟态",
    shortDescription: "Soft, dimensional UI with clay-like depth and shadows.",
    description: "Claymorphism creates a soft, dimensional interface with elements that appear molded from clay. It combines precise shadow layering with subtle blur effects to achieve a tactile, almost touchable quality. The style uses both outer and inner shadows to create depth, along with backdrop blur for enhanced dimensionality.",
    keywords: ["Soft", "Dimensional", "Clay-like", "Tactile", "Layered Shadows"],
    colorPalette: {
      primary: "#91C0FF", // Adjusted to match shadow color
      secondary: "#EEF2FF",
      accent: "#6366F1",
      background: "#F8FAFF",
      text: "#4B5563"
    },
    recommendedFonts: ["Plus Jakarta Sans", "Quicksand", "Nunito", "SF Pro Display"],
    visualTechniques: [
      "Apply multi-layered shadows with precise values",
      "Use backdrop blur for enhanced depth",
      "Maintain consistent 26px border radius",
      "Combine outer shadows (35px offset) with inner shadows",
      "Implement subtle gradient backgrounds",
      "Add smooth transitions for interactive states"
    ],
    useCases: [
      "Modern web applications",
      "Mobile app interfaces",
      "Dashboard designs",
      "Form elements",
      "Interactive components",
      "Card-based layouts"
    ],
    prompts: [
      {
        title: "Clay Element Shadows",
        description: "Precise clay morphism shadow effects",
        template: "Create clay-like elements using precise shadow values: outer shadow (35px 35px 68px rgba(145,192,255,0.5)), inner shadows (inset -8px -8px 16px rgba(145,192,255,0.6) and inset 0px 11px 28px white). Apply backdrop-filter: blur(5px) and maintain consistent 26px border radius."
      },
      {
        title: "Interactive Clay States",
        description: "Clay morphism effects in interactive states",
        template: "Design interactive states with dynamic shadows. On hover, increase shadow values by ~15% (40px offset). On active/pressed states, reduce shadow intensity by ~40% and adjust inner shadows accordingly. Maintain smooth transitions with 300ms duration."
      }
    ]
  },
  {
    id: "cyberpunkDark",
    name: "Cyberpunk Dark",
    nameChinese: "赛博朋克暗色",
    shortDescription: "Dark themes with neon accents and dystopian tech aesthetics.",
    description: "Cyberpunk Dark style combines dark backgrounds with vibrant neon accents, creating a futuristic, dystopian atmosphere. It features tech-inspired elements, glitchy effects, and edgy typography.",
    keywords: ["Neon", "Dark", "Futuristic", "Dystopian", "Edgy"],
    colorPalette: {
      primary: "#FF00FF",
      secondary: "#00FFFF",
      accent: "#FFFF00",
      background: "#0D0D14",
      text: "#FFFFFF"
    },
    recommendedFonts: ["Orbitron", "Blade Runner", "Cyberpunk", "Rajdhani"],
    visualTechniques: [
      "Use dark backgrounds with neon accents",
      "Apply glow effects to key elements",
      "Incorporate tech-inspired patterns and grid lines",
      "Add glitch or distortion effects",
      "Include futuristic UI elements like HUDs"
    ],
    useCases: [
      "Gaming platforms",
      "Tech products",
      "Web3 and cryptocurrency sites",
      "Digital art galleries",
      "Futuristic applications"
    ],
    prompts: [
      {
        title: "Cyberpunk Navigation",
        description: "Create a futuristic navigation with neon highlights",
        template: "Design a cyberpunk-style navigation bar with a dark background (#0D0D14) and neon accents in [primary color] and [secondary color]. Use angular, tech-inspired shapes and include subtle scanning/loading animations. Add glow effects to interactive elements and incorporate thin grid lines to enhance the futuristic feel."
      },
      {
        title: "Cyberpunk Dashboard",
        description: "Create a dystopian future-inspired dashboard layout",
        template: "Create a cyberpunk dashboard with a dark theme (#0D0D14 background), holographic/HUD-inspired UI elements, and neon highlights in [primary color] and [secondary color]. Include angular card components with thin borders that glow, glitch effects on hover, and tech-inspired icons. Add scanlines or noise texture overlays for the dystopian aesthetic."
      }
    ]
  },
  {
    id: "japaneseMinimalism",
    name: "Japanese Minimalism",
    nameChinese: "日式极简主义",
    shortDescription: "Clean spaces, natural colors, and balanced asymmetry.",
    description: "Japanese Minimalism embodies the concepts of 'Ma' (negative space) and 'Wabi-sabi' (imperfect beauty). It features clean layouts with intentional asymmetry, natural colors, and a sense of calm.",
    keywords: ["Zen", "Negative Space", "Calm", "Balanced", "Natural"],
    colorPalette: {
      primary: "#A67F5D",
      secondary: "#7C9A92",
      accent: "#E0C8B2",
      background: "#F7F4F0",
      text: "#2C2824"
    },
    recommendedFonts: ["Noto Sans JP", "Zen Kaku Gothic", "Sawarabi Mincho", "Helvetica Neue"],
    visualTechniques: [
      "Embrace negative space (Ma)",
      "Use natural, muted color palettes",
      "Create subtle, balanced asymmetry",
      "Incorporate minimal, purposeful elements",
      "Apply subtle texture for depth"
    ],
    useCases: [
      "Art portfolios",
      "Photography sites",
      "Luxury brands",
      "Wellness applications",
      "Editorial content"
    ],
    prompts: [
      {
        title: "Japanese Minimalist Layout",
        description: "Create a zen-inspired minimal layout",
        template: "Design a Japanese minimalist layout with ample negative space, using a natural color palette with [primary color] as accent. Create asymmetrical balance with minimal elements, and incorporate subtle texture for depth. Use typography with clear hierarchy and consider the principle of 'Ma' (space between elements) as an active design element."
      },
      {
        title: "Zen-Inspired Navigation",
        description: "Create a calm, minimal navigation experience",
        template: "Create a zen-inspired navigation menu using the principle of 'Ma' (negative space). Use a minimal color palette with [background color] and subtle [primary color] accents. Employ thin lines for separation, and create a horizontal navigation with generous spacing between items. Transitions should be subtle and smooth, embodying the calm aesthetic."
      }
    ]
  },
  {
    id: "retroFuturism",
    name: "Retro Futurism",
    nameChinese: "复古科幻",
    shortDescription: "80s vision of the future with neon, chrome, and grid aesthetics.",
    description: "Retro Futurism combines 1980s aesthetics with futuristic visions, featuring synth-wave colors, pixel fonts, chrome effects, and geometric grids. It evokes nostalgia while imagining an alternative technological future.",
    keywords: ["Synthwave", "Chrome", "Grid", "Pixel Art", "Neon"],
    colorPalette: {
      primary: "#FF2A6D",
      secondary: "#05D9E8",
      accent: "#D1F7FF",
      background: "#01012B",
      text: "#FFFFFF"
    },
    recommendedFonts: ["VCR OSD Mono", "Blade Runner", "Outrun Future", "Press Start 2P", "Lazer 84"],
    visualTechniques: [
      "Use neon glow effects and light trails",
      "Incorporate geometric grids and wireframes",
      "Apply chrome and metallic textures",
      "Feature sunset gradients and starfields",
      "Include pixel art and scan lines"
    ],
    useCases: [
      "Game homepages",
      "Future fantasy showcases",
      "Music and entertainment sites",
      "Tech product launches",
      "Digital art galleries"
    ],
    prompts: [
      {
        title: "Retro Futuristic UI",
        description: "Create an 80s-inspired futuristic interface",
        template: "Design a retro-futuristic interface for a [purpose] with a synthwave color palette featuring neon pink (#FF2A6D) and cyan (#05D9E8). Include chrome metallic elements, a perspective grid background, and pixel typography. Add scan lines and glow effects to create the feel of an 80s vision of the future."
      },
      {
        title: "Retro Futuristic Hero Section",
        description: "Design a striking header with neon and chrome aesthetics",
        template: "Create a striking hero section for a [type] website using retro-futuristic aesthetics. Feature a horizon line with a digital sunset gradient, chrome typography with neon glow effects, and geometric grid elements. The design should evoke 1980s science fiction while maintaining modern usability."
      }
    ]
  },
  {
    id: "codeUI",
    name: "Code UI",
    nameChinese: "代码界面",
    shortDescription: "Terminal-style text-oriented interface designed for developers.",
    description: "Code UI is a terminal-based interface style that uses monospace fonts and minimalist design, focusing on functionality and content to provide developers and technical users with a familiar code editor-like experience.",
    keywords: ["Terminal", "Command Line", "Monospace Font", "Code", "Hacker"],
    colorPalette: {
      primary: "#0c7b46",
      secondary: "#00ff9d",
      accent: "#031e11",
      background: "#031e11",
      text: "#00ff9d"
    },
    recommendedFonts: ["Fira Code", "JetBrains Mono", "Source Code Pro", "Consolas", "Courier New"],
    visualTechniques: [
      "Use monospace fonts to enhance code readability",
      "Dark backgrounds to reduce eye strain",
      "Add terminal flicker and scan line effects",
      "Appropriate use of symbols and control characters",
      "Reduce graphical elements, focus on text content"
    ],
    useCases: [
      "Developer tools and IDEs",
      "Technical documentation websites",
      "Code showcase platforms",
      "Web interfaces for command-line tools",
      "Code tutorials and learning platforms"
    ],
    prompts: [
      {
        title: "Terminal Style Interface",
        description: "Create an interface that simulates a command line",
        template: "Design a terminal-style interface for [purpose] using a black background (#031e11) and green text (#00ff9d). Use monospace fonts like JetBrains Mono or Fira Code, add subtle scan lines and flickering effects. Design interactive elements in command prompt style, with menus using CLI-like syntax. Ensure cursor blinking animations and appropriate text spacing for readability."
      },
      {
        title: "Code Display Component",
        description: "Code UI component for displaying code snippets",
        template: "Create a code display component for [target audience] using a dark background with syntax highlighting. Implement line numbers, code folding, and copy functionality. The design should mimic the appearance of modern code editors, including monospace fonts and appropriate indentation. Consider adding a tab system to allow switching between different code examples, similar to file tabs in an IDE."
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
    case 'retroFuturism':
      return 'retroFuturism retroFuturism-glow retroFuturism-scanlines';
    case 'codeUI':
      return 'codeUI rounded-none border-[#0c7b46] bg-[#031e11] text-[#00ff9d]';
    case 'neobrutalism':
      return 'neobrutalism';
    case 'claymorphism':
      return 'claymorphism';
    case 'cyberpunkDark':
      return 'cyberpunkDark';
    case 'japaneseMinimalism':
      return 'japaneseMinimalism';
    case 'minimal':
    default:
      return 'bg-white shadow border';
  }
};
