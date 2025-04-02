import React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStyle } from "@/contexts/StyleContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { designStyles } from "@/data/designStyles";
import { cn } from "@/lib/utils";

const StyleSwitcher: React.FC = () => {
  const { currentStyle, setStyleById } = useStyle();
  const { t, language } = useLanguage();
  const isCodeUI = currentStyle.id === 'codeUI';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={cn(
            "flex items-center gap-2",
            isCodeUI && "codeUI-button"
          )}
        >
          <span>{t("Style: ", "Style: ")}{language === "zh" && currentStyle.nameChinese ? currentStyle.nameChinese : currentStyle.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className={cn(
          isCodeUI && "bg-[#031e11] border-[#0c7b46] rounded-none text-[#00ff9d]"
        )}
      >
        {designStyles.map((style) => (
          <DropdownMenuItem
            key={style.id}
            onClick={() => setStyleById(style.id)}
            className={cn(
              "flex items-center justify-between",
              isCodeUI && "hover:bg-[#052e1a] focus:bg-[#052e1a]"
            )}
          >
            {language === "zh" && style.nameChinese ? style.nameChinese : style.name}
            {currentStyle.id === style.id && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StyleSwitcher;
