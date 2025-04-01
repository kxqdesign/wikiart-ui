
import React from "react";
import { Link } from "react-router-dom";
import { Palette } from "lucide-react";
import StyleSwitcher from "@/components/StyleSwitcher";

const Header: React.FC = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <Palette className="h-6 w-6" />
          <span>Design Insight</span>
        </Link>
        <StyleSwitcher />
      </div>
    </header>
  );
};

export default Header;
