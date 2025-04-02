import React from "react";
import { useNavigate } from "react-router-dom";
import { DesignStyle } from "@/types/designStyles";
import { getStyleClasses } from "@/data/designStyles";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface StyleCardProps {
  style: DesignStyle;
}

const StyleCard: React.FC<StyleCardProps> = ({ style }) => {
  const navigate = useNavigate();
  const styleClasses = getStyleClasses(style.id);
  const { language, t } = useLanguage();
  const isCodeUI = style.id === 'codeUI';
  
  const handleClick = () => {
    navigate(`/style/${style.id}`);
  };

  const displayName = language === "zh" && style.nameChinese ? style.nameChinese : style.name;
  const secondaryName = language === "zh" ? style.name : style.nameChinese;

  return (
    <div 
      className={cn(
        "style-card p-6 cursor-pointer",
        isCodeUI ? "rounded-none border border-[#0c7b46]" : "rounded-lg", 
        styleClasses
      )}
      onClick={handleClick}
    >
      <h3 className="text-xl font-bold mb-1">
        {displayName} 
        {secondaryName && <span className={cn(
          "text-sm ml-1",
          isCodeUI ? "text-[#00ff9d]" : "text-muted-foreground"
        )}>({secondaryName})</span>}
      </h3>
      <p className={cn(
        "text-sm mb-4",
        isCodeUI ? "text-[#00ff9d]" : "text-muted-foreground"
      )}>{style.shortDescription}</p>
      
      <div className="flex space-x-2 mt-3">
        <div className={cn(
          "style-swatch",
          isCodeUI ? "rounded-none" : ""
        )} style={{ backgroundColor: style.colorPalette.primary }}></div>
        <div className={cn(
          "style-swatch",
          isCodeUI ? "rounded-none" : ""
        )} style={{ backgroundColor: style.colorPalette.secondary }}></div>
        <div className={cn(
          "style-swatch",
          isCodeUI ? "rounded-none" : ""
        )} style={{ backgroundColor: style.colorPalette.accent }}></div>
      </div>
    </div>
  );
};

export default StyleCard;
