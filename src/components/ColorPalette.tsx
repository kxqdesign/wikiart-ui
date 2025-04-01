
import React from "react";
import { ColorPalette as ColorPaletteType } from "@/types/designStyles";

interface ColorPaletteProps {
  palette: ColorPaletteType;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ palette }) => {
  const colors = [
    { name: "Primary", value: palette.primary },
    { name: "Secondary", value: palette.secondary },
    { name: "Accent", value: palette.accent },
    { name: "Background", value: palette.background },
    { name: "Text", value: palette.text },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {colors.map((color) => (
        <div key={color.name} className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded-lg shadow-md border"
            style={{ backgroundColor: color.value }}
          ></div>
          <div className="mt-2 text-sm">
            <p className="font-medium">{color.name}</p>
            <p className="text-xs font-mono text-muted-foreground">{color.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
