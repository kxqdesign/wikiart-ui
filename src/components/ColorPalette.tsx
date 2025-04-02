import React from "react";
import { ColorPalette as ColorPaletteType } from "@/types/designStyles";
import { useStyle } from "@/contexts/StyleContext";
import { cn } from "@/lib/utils";

interface ColorPaletteProps {
  palette: ColorPaletteType;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ palette }) => {
  const { currentStyle } = useStyle();
  const isCodeUI = currentStyle.id === 'codeUI';

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
            className={cn(
              "w-16 h-16 shadow-md border",
              isCodeUI ? "rounded-none border-[#0c7b46]" : "rounded-lg"
            )}
            style={{ backgroundColor: color.value }}
          ></div>
          <div className="mt-2 text-sm">
            <p className="font-medium">{color.name}</p>
            <p className={cn(
              "text-xs font-mono",
              isCodeUI ? "text-[#00ff9d]" : "text-muted-foreground"
            )}>
              {color.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
