
import React from "react";
import { Link } from "react-router-dom";
import { Palette, Layout } from "lucide-react";
import StyleSwitcher from "@/components/StyleSwitcher";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
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
              <span>示例页面</span>
            </Button>
          </Link>
        </div>
        <StyleSwitcher />
      </div>
    </header>
  );
};

export default Header;
