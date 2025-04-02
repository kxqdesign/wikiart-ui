import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useStyle } from "@/contexts/StyleContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getDesignStyleById, getStyleClasses } from "@/data/designStyles";
import ColorPalette from "@/components/ColorPalette";
import PromptCard from "@/components/PromptCard";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import { BreadcrumbStructuredData, DesignStyleStructuredData } from "@/components/StructuredData";

const StyleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setStyleById } = useStyle();
  const { t, language } = useLanguage();
  
  const style = id ? getDesignStyleById(id) : undefined;
  const styleClasses = id ? getStyleClasses(id) : '';
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;
  
  useEffect(() => {
    if (id) {
      setStyleById(id);
    }
  }, [id, setStyleById]);
  
  if (!style) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <SEO 
          title="Style Not Found - Design Insight"
          description="The requested design style could not be found."
        />
        <h2 className="text-2xl font-bold">{t("Style not found", "Style not found")}</h2>
        <Button onClick={() => navigate("/")} className="mt-4">
          {t("Return to Home", "Return to Home")}
        </Button>
      </div>
    );
  }

  const displayName = language === "zh" && style.nameChinese ? style.nameChinese : style.name;
  const secondaryName = language === "zh" ? style.name : style.nameChinese;

  const isCodeUI = style.id === 'codeUI';
  const cardClassName = cn(
    "mb-8", 
    styleClasses,
    isCodeUI && "bg-[#031e11] border-[#0c7b46] rounded-none"
  );

  const breadcrumbItems = [
    { name: 'Home', url: `${siteUrl}/` },
    { name: displayName, url: currentUrl }
  ];

  return (
    <div className={cn(
      "container mx-auto px-4 py-8 max-w-4xl animate-fade-in",
      isCodeUI && "bg-[#021208] text-[#00ff9d]"
    )}>
      <SEO 
        title={`${displayName} - Design Insight`}
        description={style.description}
        ogType="article"
      />
      <DesignStyleStructuredData 
        styleName={displayName}
        description={style.description}
        url={currentUrl}
        keywords={style.keywords}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className={cn(
          "mb-6 flex items-center gap-1",
          isCodeUI && "codeUI-button"
        )}
      >
        <ArrowLeft className="h-4 w-4" /> 
        {t("Back to Styles", "Back to Styles")}
      </Button>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">{displayName}</h1>
          {secondaryName && <p className="text-xl text-muted-foreground">{secondaryName}</p>}
        </div>
      </div>

      <Card className={cardClassName}>
        <CardContent className={cn("pt-6", isCodeUI && "bg-[#031e11]")}>
          <p className="text-lg mb-6">{style.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {style.keywords.map((keyword) => (
              <Badge 
                key={keyword} 
                variant="outline"
                className={cn(
                  "badge",
                  styleClasses,
                  style.id === 'minimal' && "border-2 border-gray-400 bg-gray-50 text-gray-900",
                  style.id === 'skeuomorphism' && "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 border-2 border-gray-400"
                )}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <h2 className={cn("text-2xl font-bold mb-4", isCodeUI && "text-[#00ff9d]")}>{t("Color Palette", "Color Palette")}</h2>
      <ColorPalette palette={style.colorPalette} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className={cn("text-2xl font-bold mb-4", isCodeUI && "text-[#00ff9d]")}>{t("Recommended Fonts", "Recommended Fonts")}</h2>
          <ul className="space-y-2">
            {style.recommendedFonts.map((font) => (
              <li key={font} className="flex items-center">
                <span className={cn(
                  "mr-2",
                  style.id === 'brutalism' && "w-3 h-3 bg-black rotate-45 transform",
                  style.id === 'minimal' && "w-2 h-2 rounded-sm border-2 border-gray-400",
                  style.id === 'glassmorphism' && "block w-3 h-3 rounded-full bg-[#8A2BE2]/80 backdrop-blur-md border-2 border-white shadow-[0_0_10px_rgba(138,43,226,0.7),inset_0_0_6px_rgba(255,255,255,0.5)] mr-2 flex-shrink-0",
                  style.id === 'neumorphism' && "w-3 h-3 rounded-full bg-gray-100 shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]",
                  style.id === 'skeuomorphism' && "w-3 h-3 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-300 shadow-sm",
                  style.id === 'retroFuturism' && "w-2 h-2 bg-[#05D9E8] mr-3 shadow-[0_0_10px_rgba(5,217,232,0.7),0_0_15px_rgba(5,217,232,0.4),0_0_20px_rgba(5,217,232,0.2)]",
                  style.id === 'neobrutalism' && "w-3 h-3 bg-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                  style.id === 'claymorphism' && "w-3 h-3 rounded-full bg-white shadow-[2px_2px_4px_rgba(145,192,255,0.3),inset_-1px_-1px_2px_rgba(145,192,255,0.4)]",
                  style.id === 'cyberpunkDark' && "w-3 h-3 bg-[#000000] border-2 border-[#FF00FF] rounded-none shadow-[0_0_10px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.5)] rotate-45 transform hover:rotate-90 transition-transform",
                  style.id === 'japaneseMinimalism' && "w-2 h-2 rounded-none border border-[#A67F5D] rotate-45 transform",
                  isCodeUI && "w-2 h-2 border border-[#00ff9d]"
                )}></span>
                {font}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className={cn("text-2xl font-bold mb-4", isCodeUI && "text-[#00ff9d]")}>{t("Typical Use Cases", "Typical Use Cases")}</h2>
          <ul className="space-y-2">
            {style.useCases.map((useCase) => (
              <li key={useCase} className="flex items-center">
                <span className={cn(
                  "mr-2",
                  style.id === 'brutalism' && "w-3 h-3 bg-black rotate-45 transform",
                  style.id === 'minimal' && "w-2 h-2 rounded-sm border-2 border-gray-400",
                  style.id === 'glassmorphism' && "block w-3 h-3 rounded-full bg-[#8A2BE2]/80 backdrop-blur-md border-2 border-white shadow-[0_0_10px_rgba(138,43,226,0.7),inset_0_0_6px_rgba(255,255,255,0.5)] mr-2 flex-shrink-0",
                  style.id === 'neumorphism' && "w-3 h-3 rounded-full bg-gray-100 shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]",
                  style.id === 'skeuomorphism' && "w-3 h-3 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-300 shadow-sm",
                  style.id === 'retroFuturism' && "w-2 h-2 bg-[#05D9E8] mr-3 shadow-[0_0_10px_rgba(5,217,232,0.7),0_0_15px_rgba(5,217,232,0.4),0_0_20px_rgba(5,217,232,0.2)]",
                  style.id === 'neobrutalism' && "w-3 h-3 bg-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                  style.id === 'claymorphism' && "w-3 h-3 rounded-full bg-white shadow-[2px_2px_4px_rgba(145,192,255,0.3),inset_-1px_-1px_2px_rgba(145,192,255,0.4)]",
                  style.id === 'cyberpunkDark' && "w-3 h-3 bg-[#000000] border-2 border-[#FF00FF] rounded-none shadow-[0_0_10px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.5)] rotate-45 transform hover:rotate-90 transition-transform",
                  style.id === 'japaneseMinimalism' && "w-2 h-2 rounded-none border border-[#A67F5D] rotate-45 transform",
                  isCodeUI && "w-2 h-2 border border-[#00ff9d]"
                )}></span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <h2 className={cn("text-2xl font-bold mb-4", isCodeUI && "text-[#00ff9d]")}>{t("Visual Techniques", "Visual Techniques")}</h2>
      <div className="mb-12">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {style.visualTechniques.map((technique) => (
            <li key={technique} className="flex items-center">
                <span className={cn(
                  "mr-2",
                  style.id === 'brutalism' && "w-3 h-3 bg-black rotate-45 transform",
                  style.id === 'minimal' && "w-2 h-2 rounded-sm border-2 border-gray-400",
                  style.id === 'glassmorphism' && "block w-3 h-3 rounded-full bg-[#8A2BE2]/80 backdrop-blur-md border-2 border-white shadow-[0_0_10px_rgba(138,43,226,0.7),inset_0_0_6px_rgba(255,255,255,0.5)] mr-2 flex-shrink-0",
                  style.id === 'neumorphism' && "w-3 h-3 rounded-full bg-gray-100 shadow-[1px_1px_2px_#d1d1d1,-1px_-1px_2px_#ffffff]",
                  style.id === 'skeuomorphism' && "w-3 h-3 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-300 shadow-sm",
                  style.id === 'retroFuturism' && "w-2 h-2 bg-[#05D9E8] mr-3 shadow-[0_0_10px_rgba(5,217,232,0.7),0_0_15px_rgba(5,217,232,0.4),0_0_20px_rgba(5,217,232,0.2)]",
                  style.id === 'neobrutalism' && "w-3 h-3 bg-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                  style.id === 'claymorphism' && "w-3 h-3 rounded-full bg-white shadow-[2px_2px_4px_rgba(145,192,255,0.3),inset_-1px_-1px_2px_rgba(145,192,255,0.4)]",
                  style.id === 'cyberpunkDark' && "w-3 h-3 bg-[#000000] border-2 border-[#FF00FF] rounded-none shadow-[0_0_10px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.5)] rotate-45 transform hover:rotate-90 transition-transform",
                  style.id === 'japaneseMinimalism' && "w-2 h-2 rounded-none border border-[#A67F5D] rotate-45 transform",
                  isCodeUI && "w-2 h-2 border border-[#00ff9d]"
                )}></span>
              {technique}
            </li>
          ))}
        </ul>
      </div>
      
      <h2 className={cn("text-2xl font-bold mb-4", isCodeUI && "text-[#00ff9d]")}>{t("Design Prompts", "Design Prompts")}</h2>
      <div className="mb-8">
        {style.prompts.map((prompt) => (
          <PromptCard key={prompt.title} prompt={prompt} styleId={style.id} />
        ))}
      </div>
    </div>
  );
};

export default StyleDetail;
