
export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface DesignPrompt {
  title: string;
  description: string;
  template: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  nameChinese: string;
  description: string; 
  shortDescription: string;
  keywords: string[];
  colorPalette: ColorPalette;
  recommendedFonts: string[];
  visualTechniques: string[];
  useCases: string[];
  prompts: DesignPrompt[];
}
