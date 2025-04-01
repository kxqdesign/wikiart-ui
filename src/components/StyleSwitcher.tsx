
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

const StyleSwitcher: React.FC = () => {
  const { currentStyle, setStyleById } = useStyle();
  const { t, language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span>{t("Style: ", "风格: ")}{language === "zh" && currentStyle.nameChinese ? currentStyle.nameChinese : currentStyle.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {designStyles.map((style) => (
          <DropdownMenuItem
            key={style.id}
            onClick={() => setStyleById(style.id)}
            className="flex items-center justify-between"
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
