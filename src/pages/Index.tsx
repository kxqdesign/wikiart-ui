
import React from "react";
import { Link } from "react-router-dom";
import { designStyles } from "@/data/designStyles";
import StyleCard from "@/components/StyleCard";
import { useStyle } from "@/contexts/StyleContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Layout, ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const { currentStyle } = useStyle();
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{t("UI Design Style Explorer", "UI 设计风格探索")}</h1>
        <p className="text-lg text-muted-foreground mb-6">
          {t(
            "Browse, learn, and test different UI design styles. Get inspiration and design prompts for your next project.", 
            "浏览、学习和测试不同的 UI 设计风格。为您的下一个项目获取灵感和设计提示。"
          )}
        </p>
        <div className="flex justify-center">
          <Link to="/demo">
            <Button className="bg-black text-white hover:bg-black/90 flex items-center gap-2 shadow-md">
              <Layout className="h-4 w-4" />
              {t("View Interactive Style Demo", "查看交互式风格示例")}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
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
