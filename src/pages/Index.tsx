
import React from "react";
import { Link } from "react-router-dom";
import { designStyles } from "@/data/designStyles";
import StyleCard from "@/components/StyleCard";
import { useStyle } from "@/contexts/StyleContext";
import { Button } from "@/components/ui/button";
import { Layout, ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const { currentStyle } = useStyle();
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">UI Design Style Explorer</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Browse, learn, and test different UI design styles. Get inspiration and design prompts for your next project.
        </p>
        <Link to="/demo">
          <Button className="flex items-center gap-2 shadow-md">
            <Layout className="h-4 w-4" />
            查看交互式风格示例
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up mt-12">
        {designStyles.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
};

export default Index;
