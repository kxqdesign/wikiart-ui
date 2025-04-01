
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useStyle } from "@/contexts/StyleContext";
import { getStyleClasses } from "@/data/designStyles";
import DemoContent from "@/components/DemoContent";

const Demo: React.FC = () => {
  const { currentStyle } = useStyle();
  const styleClasses = getStyleClasses(currentStyle.id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">当前风格:</span>
          <Badge 
            className="px-3 py-1"
            style={{ 
              backgroundColor: currentStyle.colorPalette.primary,
              color: currentStyle.colorPalette.background 
            }}
          >
            {currentStyle.nameChinese || currentStyle.name}
          </Badge>
        </div>
      </div>

      <Card className={`mb-8 overflow-hidden ${styleClasses}`}
        style={{ 
          borderColor: currentStyle.id === 'brutalism' ? 'black' : currentStyle.colorPalette.primary + '33'
        }}
      >
        <CardHeader className="pb-0">
          <CardTitle className="text-center text-2xl">
            {currentStyle.nameChinese || currentStyle.name} 设计风格展示
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <DemoContent />
        </CardContent>
      </Card>
    </div>
  );
};

export default Demo;
