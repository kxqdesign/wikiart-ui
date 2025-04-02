import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <SEO 
        title="Page Not Found - WikiArt UI"
        description="The page you are looking for does not exist."
      />
      <h1 className="text-4xl font-bold mb-6">{t("404 - Page Not Found", "404 - 页面未找到")}</h1>
      <p className="text-lg text-muted-foreground mb-8">
        {t(
          "The page you are looking for does not exist or has been moved.", 
          "您要查找的页面不存在或已被移动。"
        )}
      </p>
      <Button 
        onClick={() => navigate("/")} 
        className="flex items-center gap-2"
      >
        <Home className="h-4 w-4" />
        {t("Return to Home", "返回首页")}
      </Button>
    </div>
  );
};

export default NotFound;
