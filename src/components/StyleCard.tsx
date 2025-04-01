
import React from "react";
import { useNavigate } from "react-router-dom";
import { DesignStyle } from "@/types/designStyles";
import { getStyleClasses } from "@/data/designStyles";
import { useLanguage } from "@/contexts/LanguageContext";

interface StyleCardProps {
  style: DesignStyle;
}

const StyleCard: React.FC<StyleCardProps> = ({ style }) => {
  const navigate = useNavigate();
  const styleClasses = getStyleClasses(style.id);
  const { language, t } = useLanguage();
  
  const handleClick = () => {
    navigate(`/style/${style.id}`);
  };

  const displayName = language === "zh" && style.nameChinese ? style.nameChinese : style.name;
  const secondaryName = language === "zh" ? style.name : style.nameChinese;

  return (
    <div 
      className={`style-card rounded-lg p-6 cursor-pointer ${styleClasses}`}
      onClick={handleClick}
    >
      <h3 className="text-xl font-bold mb-1">
        {displayName} 
        {secondaryName && <span className="text-sm text-muted-foreground ml-1">({secondaryName})</span>}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{style.shortDescription}</p>
      
      <div className="flex space-x-2 mt-3">
        <div className="style-swatch" style={{ backgroundColor: style.colorPalette.primary }}></div>
        <div className="style-swatch" style={{ backgroundColor: style.colorPalette.secondary }}></div>
        <div className="style-swatch" style={{ backgroundColor: style.colorPalette.accent }}></div>
      </div>
    </div>
  );
};

export default StyleCard;
