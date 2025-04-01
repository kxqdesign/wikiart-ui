
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { designStyles, getDesignStyleById } from "@/data/designStyles";
import { DesignStyle } from "@/types/designStyles";

interface StyleContextType {
  currentStyle: DesignStyle;
  setStyleById: (id: string) => void;
  styleIds: string[];
}

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const [currentStyle, setCurrentStyle] = useState<DesignStyle>(designStyles[0]);
  const styleIds = designStyles.map(style => style.id);

  const setStyleById = (id: string) => {
    const style = getDesignStyleById(id);
    
    if (style) {
      // Add transitioning class to html for smooth style changes
      document.documentElement.classList.add('transitioning');
      setCurrentStyle(style);
      
      // Update document root with style colors
      const root = document.documentElement;
      
      // Remove transitioning class after transition is complete
      setTimeout(() => {
        document.documentElement.classList.remove('transitioning');
      }, 600);
    }
  };

  // Check URL for style parameter on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const styleParam = urlParams.get('style');
    
    if (styleParam && getDesignStyleById(styleParam)) {
      setStyleById(styleParam);
    }
  }, []);

  return (
    <StyleContext.Provider value={{ currentStyle, setStyleById, styleIds }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
};
