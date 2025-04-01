
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleCopy}
      className={cn("transition-all", className)}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 mr-1" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 mr-1" />
          <span>Copy</span>
        </>
      )}
    </Button>
  );
};

export default CopyButton;
