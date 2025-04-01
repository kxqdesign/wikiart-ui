
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useStyle } from "@/contexts/StyleContext";
import { getDesignStyleById, getStyleClasses } from "@/data/designStyles";
import ColorPalette from "@/components/ColorPalette";
import PromptCard from "@/components/PromptCard";
import { cn } from "@/lib/utils";

const StyleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setStyleById } = useStyle();
  
  const style = id ? getDesignStyleById(id) : undefined;
  const styleClasses = id ? getStyleClasses(id) : '';
  
  useEffect(() => {
    if (id) {
      setStyleById(id);
    }
  }, [id, setStyleById]);
  
  if (!style) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Style not found</h2>
        <Button onClick={() => navigate("/")} className="mt-4">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className="mb-6 flex items-center gap-1"
      >
        <ArrowLeft className="h-4 w-4" /> 
        Back to Styles
      </Button>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">{style.name}</h1>
          <p className="text-xl text-muted-foreground">{style.nameChinese}</p>
        </div>
      </div>

      <Card className={cn("mb-8", styleClasses)}>
        <CardContent className="pt-6">
          <p className="text-lg mb-6">{style.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {style.keywords.map((keyword) => (
              <Badge key={keyword} variant="secondary" className="text-sm">
                {keyword}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
      <ColorPalette palette={style.colorPalette} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended Fonts</h2>
          <ul className="space-y-2">
            {style.recommendedFonts.map((font) => (
              <li key={font} className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                {font}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Typical Use Cases</h2>
          <ul className="space-y-2">
            {style.useCases.map((useCase) => (
              <li key={useCase} className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Visual Techniques</h2>
      <div className="mb-12">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {style.visualTechniques.map((technique) => (
            <li key={technique} className="flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
              {technique}
            </li>
          ))}
        </ul>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Design Prompts</h2>
      <div className="mb-8">
        {style.prompts.map((prompt) => (
          <PromptCard key={prompt.title} prompt={prompt} styleId={style.id} />
        ))}
      </div>
    </div>
  );
};

export default StyleDetail;
