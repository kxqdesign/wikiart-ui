
import React from "react";
import { designStyles } from "@/data/designStyles";
import StyleCard from "@/components/StyleCard";
import { useStyle } from "@/contexts/StyleContext";

const Index: React.FC = () => {
  const { currentStyle } = useStyle();
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">UI Design Style Explorer</h1>
        <p className="text-lg text-muted-foreground">
          Browse, learn, and test different UI design styles. Get inspiration and design prompts for your next project.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {designStyles.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
};

export default Index;
