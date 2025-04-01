
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Palette, Layout } from "lucide-react";
import StyleSwitcher from "@/components/StyleSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Header: React.FC = () => {
  const location = useLocation();
  const isDemo = location.pathname === '/demo';
  const { t } = useLanguage();

  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
            <Palette className="h-6 w-6" />
            <span>Design Insight</span>
          </Link>
          <Link to="/demo">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Layout className="h-4 w-4" />
              <span>{t("Demo Page", "示例页面")}</span>
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {isDemo && <StyleSwitcher />}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
