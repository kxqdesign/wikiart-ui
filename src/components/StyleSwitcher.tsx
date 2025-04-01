
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
import { designStyles } from "@/data/designStyles";

const StyleSwitcher: React.FC = () => {
  const { currentStyle, setStyleById } = useStyle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Style: {currentStyle.name}</span>
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
            {style.name}
            {currentStyle.id === style.id && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StyleSwitcher;
