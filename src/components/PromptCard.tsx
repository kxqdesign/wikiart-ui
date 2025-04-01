
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DesignPrompt } from "@/types/designStyles";
import CopyButton from "@/components/CopyButton";
import { getStyleClasses } from "@/data/designStyles";

interface PromptCardProps {
  prompt: DesignPrompt;
  styleId: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, styleId }) => {
  const styleClasses = getStyleClasses(styleId);
  
  return (
    <Card className={cn("mb-4", styleClasses)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex justify-between items-start">
          <span>{prompt.title}</span>
          <CopyButton text={prompt.template} className="mt-1" />
        </CardTitle>
        <CardDescription>{prompt.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
          {prompt.template}
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptCard;

// Import cn from utils
import { cn } from "@/lib/utils";
