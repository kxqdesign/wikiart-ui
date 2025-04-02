import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DesignPrompt } from "@/types/designStyles";
import CopyButton from "@/components/CopyButton";
import { getStyleClasses } from "@/data/designStyles";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface PromptCardProps {
  prompt: DesignPrompt;
  styleId: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, styleId }) => {
  const styleClasses = getStyleClasses(styleId);
  const isCodeUI = styleId === 'codeUI';
  const isCyberpunkDark = styleId === 'cyberpunkDark';
  
  return (
    <Card 
      className={cn(
        "mb-4", 
        styleClasses, 
        isCodeUI && "rounded-none bg-[#031e11] border-[#0c7b46]",
        isCyberpunkDark && "bg-[#181820] border border-[#FF00FF]/40 rounded-md shadow-[0_0_15px_rgba(255,0,255,0.3)]"
      )}
    >
      <CardHeader 
        className={cn(
          "pb-2", 
          isCodeUI && "border-b border-[#0c7b46]",
          isCyberpunkDark && "border-b border-[#FF00FF]/30"
        )}
      >
        <CardTitle className="text-lg font-semibold flex justify-between items-start">
          <span className={isCyberpunkDark ? "text-[#FF00FF]" : ""}>{prompt.title}</span>
          <CopyButton 
            text={prompt.template} 
            className={cn("mt-1", isCyberpunkDark && "text-[#00FFFF]")} 
          />
        </CardTitle>
        <CardDescription 
          className={cn(
            isCodeUI ? "text-[#00ff9d]/70" : "",
            isCyberpunkDark && "text-[#00FFFF]/70"
          )}
        >
          {prompt.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className={cn(
            "text-sm font-mono overflow-x-auto p-3",
            isCodeUI ? "bg-[#021208] border border-[#0c7b46] rounded-none" : 
            isCyberpunkDark ? "bg-[#0D0D14] border border-[#00FFFF]/30 rounded-sm text-white" :
            "bg-muted rounded-md"
          )}
        >
          {prompt.template}
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptCard;
