import React from "react";
import { useStyle } from "@/contexts/StyleContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getStyleClasses } from "@/data/designStyles";
import { 
  Home, 
  Search, 
  User, 
  Settings, 
  Bell, 
  Mail, 
  Heart, 
  MessageSquare,
  Image,
  FileText,
  Calendar,
  Music,
  ShoppingCart,
  Star,
  ThumbsUp,
  Map,
  BookOpen,
  Coffee
} from "lucide-react";
import { cn } from "@/lib/utils";

// 定义新拟态的基础变量
const neumorphismVars = {
  bgColor: '#E0E5EC',
  textColor: '#2D3748',
  whiteShadow: 'rgba(255, 255, 255, 0.8)',
  blackShadow: 'rgba(185, 193, 207, 0.4)'
};

const DemoContent: React.FC = () => {
  const { currentStyle } = useStyle();
  const { t, language } = useLanguage();
  const styleClasses = getStyleClasses(currentStyle.id);

  // 根据不同的风格应用不同的类
  const getButtonClass = () => {
    const baseClass = "!h-auto !transition-all !duration-200";
    
    switch (currentStyle.id) {
      case "brutalism":
        return `${baseClass} !border-4 !border-black !font-bold !bg-white hover:!bg-gray-100 active:!translate-x-1 active:!translate-y-1`;
      case "neumorphism":
        return `
          ${baseClass}
          !relative
          !bg-[#E0E5EC] 
          !text-[#1A202C]
          !font-bold
          !rounded-xl 
          !px-6 
          !py-2 
          !border-none
          !shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]
          hover:!bg-[#E0E5EC]
          hover:!shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]
          hover:!translate-y-[-2px]
          active:!shadow-[inset_6px_6px_12px_#b8bec7,inset_-6px_-6px_12px_#ffffff]
          active:!translate-y-[1px]
        `;
      case "glassmorphism":
        return `
          ${baseClass}
          !relative
          !px-6 
          !py-2.5
          !bg-white/20
          !backdrop-blur-md
          !border
          !border-white/30
          !rounded-lg
          !text-purple-500
          !font-semibold
          !shadow-[0_4px_12px_rgba(0,0,0,0.1)]
          !transition-all
          !duration-300
          before:!absolute
          before:!inset-0
          before:!rounded-lg
          before:!bg-gradient-to-r
          before:!from-white/10
          before:!to-transparent
          before:!opacity-0
          before:!transition-opacity
          hover:!bg-white/25
          hover:!border-white/40
          hover:!text-purple-400
          hover:!shadow-[0_8px_20px_rgba(0,0,0,0.15)]
          hover:before:!opacity-100
          active:!transform
          active:!scale-[0.98]
          active:!bg-white/15
          active:!shadow-[0_2px_8px_rgba(0,0,0,0.1)]
        `;
      case "skeuomorphism":
        return `${baseClass} !bg-gradient-to-b !from-white !to-gray-200 !border !border-gray-300 !shadow-md !rounded-lg hover:!from-gray-50 hover:!to-gray-100 active:!shadow-inner active:!from-gray-200 active:!to-white`;
      case "minimalism":
        return `
          ${baseClass} 
          !px-4 
          !py-2
          !bg-white 
          !border
          !border-neutral-200
          !rounded-md
          !text-neutral-800
          !font-normal
          !shadow-none
          !transition-colors
          !duration-200
          hover:!bg-neutral-50
          hover:!border-neutral-300
          active:!bg-neutral-100
          active:!border-neutral-400
        `;
      case "neobrutalism":
        return `${baseClass} !border-[3px] !border-black !px-4 !py-2 !shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:!shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:!translate-x-[-2px] hover:!translate-y-[-2px] active:!shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:!translate-x-[5px] active:!translate-y-[5px]`;
      case "claymorphism":
        return "bg-white/100 backdrop-blur-[5px] rounded-[26px] px-8 py-4 font-medium text-lg shadow-[25px_25px_50px_0px_rgba(145,192,255,0.4),inset_-6px_-6px_12px_0px_rgba(145,192,255,0.5),inset_0px_8px_20px_0px_rgb(255,255,255)] hover:shadow-[30px_30px_60px_0px_rgba(145,192,255,0.5),inset_-8px_-8px_16px_0px_rgba(145,192,255,0.6),inset_0px_11px_28px_0px_rgb(255,255,255)] hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-[15px_15px_30px_0px_rgba(145,192,255,0.3),inset_-4px_-4px_8px_0px_rgba(145,192,255,0.4),inset_0px_6px_16px_0px_rgb(255,255,255)] transition-all duration-300";
      case "cyberpunkDark":
        return "bg-[#181820] border border-[#FF00FF]/40 px-6 py-2 shadow-[0_0_8px_rgba(255,0,255,0.3)] hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:border-[#FF00FF]/70 active:shadow-[0_0_5px_rgba(255,0,255,0.5)_inset] transition-all";
      case "japaneseMinimalism":
        return `
          ${baseClass}
          !px-6 
          !py-2.5
          !bg-[#A67F5D]
          !text-[#F7F4F0]
          !border
          !border-[#A67F5D]
          !rounded-none
          !font-normal
          !transition-all
          !duration-300
          hover:!bg-[#F7F4F0]
          hover:!text-[#A67F5D]
          active:!bg-[#E0C8B2]
          active:!border-[#A67F5D]
          active:!text-[#2C2824]
        `;
      case "retroFuturism":
        return "retroFuturism-button px-4 py-2 text-sm transition-all";
      case "codeUI":
        return "codeUI-button rounded-none px-4 py-2 text-sm";
      default:
        return baseClass;
    }
  };

  const getCardClass = (index: number) => {
    if (currentStyle.id === 'japaneseMinimalism') {
      // 根据索引返回不同的卡片样式
      switch (index) {
        case 0:
          return `
            bg-[#F7F4F0] 
            border border-[#A67F5D]/20 
            p-6
            transition-all
            duration-300
            hover:border-[#A67F5D]/40
          `;
        case 1:
          return `
            bg-[#7C9A92]/10
            border border-[#7C9A92]/20
            p-6
            transition-all
            duration-300
            hover:border-[#7C9A92]/40
          `;
        case 2:
          return `
            bg-[#E0C8B2]/20
            border border-[#A67F5D]/20
            p-6
            transition-all
            duration-300
            hover:border-[#A67F5D]/40
          `;
        default:
          return `
            bg-[#F7F4F0]
            border border-[#2C2824]/10
            p-6
          `;
      }
    }
    switch (currentStyle.id) {
      case "brutalism":
        return "border-4 border-black font-bold transform rotate-1 hover:rotate-0 transition-transform bg-white";
      case "neumorphism":
        return "bg-gray-100 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] border-none rounded-xl hover:shadow-[12px_12px_20px_#d1d1d1,-12px_-12px_20px_#ffffff] transition-shadow";
      case "glassmorphism":
        return "relative bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent";
      case "skeuomorphism":
        return "bg-gradient-to-b from-white to-gray-200 border border-gray-300 shadow-md rounded-lg transform hover:translate-y-[-2px] transition-transform";
      case "minimal":
        return "bg-white border border-gray-200 p-6 rounded-sm transition-shadow duration-200 hover:border-gray-300";
      case "neobrutalism":
        return "border-[3px] border-black bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all";
      case "claymorphism":
        return `
          bg-white/100 
          backdrop-blur-[5px] 
          rounded-[26px] 
          p-8 
          shadow-[35px_35px_68px_0px_rgba(145,192,255,0.5),inset_-8px_-8px_16px_0px_rgba(145,192,255,0.6),inset_0px_11px_28px_0px_rgb(255,255,255)] 
          hover:shadow-[40px_40px_78px_0px_rgba(145,192,255,0.6),inset_-10px_-10px_20px_0px_rgba(145,192,255,0.65),inset_0px_13px_32px_0px_rgb(255,255,255)] 
          transition-all 
          duration-300
          group
          relative
          overflow-hidden
          before:absolute
          before:content-['']
          before:w-full
          before:h-8
          before:bg-gradient-to-r
          before:from-transparent
          before:via-white/60
          before:to-transparent
          before:top-0
          before:left-0
          hover:before:translate-y-full
          before:transition-transform
          before:duration-700
        `;
      case "cyberpunkDark":
        return "bg-[#181820] border border-[#FF00FF]/40 rounded-md p-6 shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] hover:border-[#FF00FF]/70 transition-all";
      case "codeUI":
        return "bg-[#021208] border border-[#0c7b46] text-[#00ff9d] rounded-none codeUI-card p-4";
      case "retroFuturism":
        return `
          bg-[#000721]/80
          border 
          border-[#05D9E8]
          text-[#05D9E8]
          relative
          p-4
          mb-2
          overflow-hidden
          shadow-[0_0_15px_rgba(5,217,232,0.3)]
          hover:shadow-[0_0_25px_rgba(5,217,232,0.5)]
          transition-all
          duration-300
          after:absolute
          after:content-['']
          after:h-[1px]
          after:w-full
          after:bg-gradient-to-r
          after:from-transparent
          after:via-[#FF2A6D]
          after:to-transparent
          after:left-0
          after:bottom-0
          before:absolute
          before:content-['']
          before:h-[1px]
          before:w-[80%]
          before:bg-[#05D9E8]
          before:left-[10%]
          before:top-0
          before:opacity-50
        `;
      default:
        return "";
    }
  };

  const getInputClass = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return "border-4 border-black font-bold focus:translate-x-1 focus:translate-y-1 transition-transform outline-none";
      case "neumorphism":
        return "bg-gray-100 shadow-[inset_3px_3px_6px_#d9d9d9,inset_-3px_-3px_6px_#ffffff] border-none rounded-xl px-4 py-2 focus:shadow-[inset_4px_4px_8px_#d9d9d9,inset_-4px_-4px_8px_#ffffff] transition-shadow";
      case "glassmorphism":
        return "bg-white/30 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 text-gray-800 shadow-inner focus:bg-white/40 focus:border-white/50 transition-all duration-300 outline-none";
      case "skeuomorphism":
        return "bg-gradient-to-b from-gray-100 to-white border border-gray-300 shadow-inner rounded-lg px-4 py-2 focus:from-white focus:to-gray-50 transition-colors";
      case "minimal":
        return "border border-gray-300 focus:border-gray-500 bg-white px-4 py-2 rounded-sm transition-colors duration-200 outline-none";
      case "neobrutalism":
        return "border-[3px] border-black bg-white px-4 py-2 focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-1px] focus:translate-y-[-1px] transition-all outline-none";
      case "claymorphism":
        return "w-full bg-white/100 backdrop-blur-[5px] rounded-[26px] px-6 py-4 text-lg shadow-[20px_20px_40px_0px_rgba(145,192,255,0.4),inset_-6px_-6px_12px_0px_rgba(145,192,255,0.5),inset_0px_8px_20px_0px_rgb(255,255,255)] hover:shadow-[25px_25px_50px_0px_rgba(145,192,255,0.45),inset_-7px_-7px_14px_0px_rgba(145,192,255,0.55),inset_0px_9px_24px_0px_rgb(255,255,255)] focus:shadow-[30px_30px_60px_0px_rgba(145,192,255,0.5),inset_-8px_-8px_16px_0px_rgba(145,192,255,0.6),inset_0px_10px_28px_0px_rgb(255,255,255)] focus:outline-none transition-all duration-300 placeholder:text-gray-400";
      case "cyberpunkDark":
        return "bg-[#0D0D14] border border-[#00FFFF]/40 rounded-sm px-4 py-2 text-white shadow-[0_0_5px_rgba(0,255,255,0.3)] focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] focus:border-[#00FFFF]/70 transition-all outline-none";
      case "japaneseMinimalism":
        return "bg-transparent border-b-[1px] border-[#A67F5D] px-4 py-2 focus:outline-none focus:border-[#2C2824] transition-colors";
      case "retroFuturism":
        return "retroFuturism-input px-4 py-2 rounded-sm font-mono";
      case "codeUI":
        return `
          w-full
          bg-[#021208]
          border-2
          border-[#0c7b46]
          text-[#00ff9d]
          font-['VCR_OSD_Mono',monospace]
          px-4
          py-2
          rounded-none
          placeholder:text-[#00ff9d]/50
          focus:outline-none
          focus:border-[#00ff9d]
          transition-colors
          duration-200
        `;
      default:
        return "";
    }
  };

  const getContainerClass = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return "relative before:absolute before:content-[''] before:w-full before:h-full before:border-4 before:border-black before:top-2 before:left-2 before:-z-10";
      case "neumorphism":
        return "p-8 bg-gray-100 rounded-2xl";
      case "glassmorphism":
        return "relative p-8 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-secondary/5 before:-z-10";
      case "skeuomorphism":
        return "p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl";
      case "minimal":
        return "p-8 space-y-8 bg-gray-50";
      case "neobrutalism":
        return "relative p-8 bg-white";
      case "claymorphism":
        return "p-10 bg-gradient-to-br from-[#EEF2FF] to-[#E6EFFE] rounded-3xl relative overflow-hidden";
      case "cyberpunkDark":
        return "p-6 bg-[#0D0D14] text-white relative overflow-hidden before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0ic2NhbmxpbmVzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMCAwIEwgNCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDAsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+Cjwvc3ZnPg==')] before:opacity-20 before:-z-10";
      case "japaneseMinimalism":
        return "p-12 bg-[#F7F4F0] flex flex-col space-y-12 text-[#2C2824]";
      case "retroFuturism":
        return "p-12 bg-[#000721] text-white relative overflow-hidden before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0ic2NhbmxpbmVzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMCAwIEwgNCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDAsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+Cjwvc3ZnPg==')] before:opacity-20 before:-z-10";
      default:
        return "";
    }
  };

  const getTypographyClass = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return "font-mono font-bold";
      case "neumorphism":
        return "text-gray-700";
      case "glassmorphism":
        return "font-sans tracking-wide text-gray-800";
      case "skeuomorphism":
        return "font-serif";
      case "minimal":
        return "font-sans tracking-tight";
      case "neobrutalism":
        return "font-mono font-bold tracking-tight";
      case "claymorphism":
        return "font-sans font-medium tracking-wide";
      case "cyberpunkDark":
        return "font-mono tracking-wider";
      case "japaneseMinimalism":
        return "font-sans tracking-widest";
      case "retroFuturism":
        return "font-sans tracking-wider";
      default:
        return "";
    }
  };

  const renderDecorativeElements = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return (
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 border-4 border-black transform rotate-12 z-10"></div>
        );
      case "glassmorphism":
        return (
          <>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/20 blur-xl"></div>
          </>
        );
      case "skeuomorphism":
        return (
          <div className="absolute top-0 right-0 w-full h-6 bg-gradient-to-b from-white/80 to-transparent"></div>
        );
      case "neobrutalism":
        return (
          <>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFE800] border-[3px] border-black rotate-12 z-10"></div>
            <div className="absolute bottom-8 -left-6 w-12 h-12 bg-[#FF5F1F] border-[3px] border-black -rotate-12 z-10"></div>
          </>
        );
      case "claymorphism":
        return (
          <>
            <div className="absolute -bottom-8 right-10 w-24 h-24 rounded-full bg-[#8B5CF6]/10 blur-xl"></div>
            <div className="absolute top-10 -left-8 w-32 h-32 rounded-full bg-[#38BDF8]/10 blur-xl"></div>
            <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-[#FB7185]/10 blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-36 h-36 rounded-full bg-[#34D399]/10 blur-xl"></div>
            
            {/* 3D decorative elements */}
            <div className="hidden md:block absolute bottom-8 right-8 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwLjUgODkuNWMxMi41LTEwIDI2LjUtNi41IDMzLTE1LjVzMTAtMjYuNS0yLjUtMjkuNS0yMSA0LTIzLjUgOS01LjUgMTIuNS0xMyAxM2MtNy41LjUtMTQtNC41LTE2LTExcy0xMC41LTE1LjUtMTkuNS04LjVjLTkgNy0zLjUgMjAuNS0xIDI3LjVzMjkuNSAyNCA0Mi41IDE1eiIgZmlsbD0iI0ZGQ0NBOSIvPjxwYXRoIGQ9Ik00My41IDQzLjVjMi0zLjUgNi42LTQgMTAuNS0yLjVzOSA1LjUgNi41IDkuNS02LjEgMy0xMCAyLTktNS41LTctOXoiIGZpbGw9IiM5MEJERkYiLz48L3N2Zz4=')] opacity-90 transform -rotate-12 z-10"></div>
            
            {/* Floating 3D shapes */}
            <div className="hidden md:block absolute top-20 right-16 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FB7185]/70 to-[#F9A8D4]/70 shadow-lg transform rotate-12 animate-float"></div>
            <div className="hidden md:block absolute bottom-32 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8]/70 to-[#7DD3FC]/70 shadow-lg transform -rotate-6 animate-float-slow"></div>
            <div className="hidden md:block absolute top-40 left-16 w-10 h-10 rounded-xl bg-gradient-to-br from-[#34D399]/70 to-[#A7F3D0]/70 shadow-lg transform rotate-45 animate-float-medium"></div>
          </>
        );
      case "cyberpunkDark":
        return (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0ic2NhbmxpbmVzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMCAwIEwgNCAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDAsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+Cjwvc3ZnPg==')] opacity-10 pointer-events-none"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FF00FF]/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#00FFFF]/10 blur-3xl"></div>
          </>
        );
      case "japaneseMinimalism":
        return (
          <>
            <div className="absolute top-10 right-10 w-40 h-[1px] bg-[#A67F5D]/30"></div>
            <div className="absolute bottom-10 left-10 w-40 h-[1px] bg-[#A67F5D]/30"></div>
            <div className="absolute top-10 left-10 w-[1px] h-40 bg-[#7C9A92]/20"></div>
          </>
        );
      case "retroFuturism":
        return (
          <>
            {/* 背景网格 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none retroFuturism-grid"></div>
            
            {/* 扫描线效果 */}
            <div className="absolute top-0 left-0 w-full h-full retroFuturism-scanlines opacity-10 pointer-events-none"></div>
            
            {/* 全息风格的装饰元素 */}
            <div className="absolute top-10 right-10 h-24 w-24 border border-[#FF2A6D] rounded-full opacity-20
                 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-20 left-20 h-40 w-40 border border-[#05D9E8] opacity-10
                 retroFuturism-rotate pointer-events-none"></div>
                 
            {/* 霓虹色光晕 */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#FF2A6D]/10 blur-3xl
                 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#05D9E8]/10 blur-3xl
                 pointer-events-none"></div>
          </>
        );
      default:
        return null;
    }
  };

  const displayStyleName = language === "zh" && currentStyle.nameChinese ? currentStyle.nameChinese : currentStyle.name;

  // 添加玻璃态背景效果
  const getBackgroundStyle = () => {
    if (currentStyle.id === 'glassmorphism') {
      return {
        position: 'relative',
        overflow: 'hidden',
      } as React.CSSProperties;
    }
    return {};
  };

  // 添加光晕效果
  const getGlowEffects = () => {
    if (currentStyle.id === 'glassmorphism') {
      return (
        <>
          {/* 左上角大型紫色光晕 */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[100px]" />
          
          {/* 右侧蓝色光晕 */}
          <div className="absolute top-20 -right-32 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px]" />
          
          {/* 左下角粉色光晕 */}
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[90px]" />
          
          {/* 中央偏右的青色光晕 */}
          <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[100px]" />
        </>
      );
    }
    return null;
  };

  // 为 RetroFuturism 添加自定义样式类
  const getNavIconClass = (index: number) => {
    if (currentStyle.id === 'retroFuturism') {
      return `
        w-20 h-20
        rounded-full
        flex flex-col items-center justify-center
        bg-[#000721]
        border border-[#05D9E8]
        shadow-[0_0_10px_rgba(5,217,232,0.4)]
        text-[#05D9E8]
        cursor-pointer
        transition-all duration-300
        hover:shadow-[0_0_20px_rgba(5,217,232,0.6)]
        hover:scale-110
        ${index % 2 === 0 ? 'hover:border-[#FF2A6D] hover:text-[#FF2A6D] hover:shadow-[0_0_20px_rgba(255,42,109,0.6)]' : ''}
      `;
    }
    return '';
  };

  // 定义新的动画类，添加到顶部
  // Add these to your CSS or add them inline through styles
  const floatingAnimationStyles = currentStyle?.id === 'claymorphism' ? `
    @keyframes float {
      0% { transform: translateY(0px) rotate(12deg); }
      50% { transform: translateY(-10px) rotate(15deg); }
      100% { transform: translateY(0px) rotate(12deg); }
    }
    @keyframes float-slow {
      0% { transform: translateY(0px) rotate(-6deg); }
      50% { transform: translateY(-15px) rotate(-2deg); }
      100% { transform: translateY(0px) rotate(-6deg); }
    }
    @keyframes float-medium {
      0% { transform: translateY(0px) rotate(45deg); }
      50% { transform: translateY(-12px) rotate(50deg); }
      100% { transform: translateY(0px) rotate(45deg); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }
    .animate-float-medium {
      animation: float-medium 7s ease-in-out infinite;
    }
  ` : '';

  return (
    <div style={getBackgroundStyle()} className="relative min-h-[600px]">
      {floatingAnimationStyles && <style>{floatingAnimationStyles}</style>}
      {getGlowEffects()}
      <div className="relative z-10 pt-4">
        <div className={cn("relative", getContainerClass(), getTypographyClass())}>
          {renderDecorativeElements()}
          
          <div className="space-y-8 mt-4">
            {/* 头部 */}
            <div className="text-center space-y-3">
              <h1 
                className="text-3xl font-bold"
                style={{ 
                  color: currentStyle.id === 'neumorphism' 
                    ? neumorphismVars.textColor
                    : currentStyle.colorPalette.primary,
                  textShadow: currentStyle.id === 'neumorphism'
                    ? `1px 1px 1px ${neumorphismVars.whiteShadow}, -1px -1px 1px ${neumorphismVars.blackShadow}`
                    : 'none'
                }}
              >
                {t("Welcome to Personal Homepage", "Welcome to Personal Homepage")}
              </h1>
              <p className="text-muted-foreground">
                {t(`This is a page demonstration based on ${displayStyleName} design style`, 
                   `This is a page demonstration based on ${displayStyleName} design style`)}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {currentStyle.keywords.slice(0, 3).map((keyword, i) => (
                  <Badge 
                    key={i} 
                    variant="outline"
                    className={cn(
                      "badge",
                      styleClasses
                    )}
                    style={{ borderColor: currentStyle.colorPalette.accent + '66' }}
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* 主要按钮 */}
            <div className="flex flex-wrap justify-center items-center gap-3 py-4">
              <Button
                className={getButtonClass()}
                style={{ 
                  ...(currentStyle.id === 'neumorphism' && {
                    color: '#1A202C',
                    fontWeight: 'bold'
                  })
                }}
                variant="ghost"
              >
                {t("Start Exploring", "Start Exploring")}
              </Button>
              <Button
                className={getButtonClass()}
                style={{ 
                  ...(currentStyle.id === 'neumorphism' && {
                    color: '#1A202C',
                    fontWeight: 'bold'
                  })
                }}
                variant="ghost"
              >
                {t("Learn More", "Learn More")}
              </Button>
            </div>

            {/* 搜索栏 */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="relative flex items-center">
                  <Search 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" 
                    style={{ 
                      color: currentStyle.id === 'codeUI' 
                        ? '#00ff9d' 
                        : currentStyle.id === 'cyberpunkDark'
                          ? '#00FFFF'
                          : currentStyle.id === 'retroFuturism'
                            ? '#05D9E8'
                            : currentStyle.id === 'claymorphism'
                              ? '#6366F1'
                              : currentStyle.colorPalette.accent
                    }}
                  />
                  <Input 
                    type="text" 
                    placeholder={t("Search...", "Search...")} 
                    className={cn(
                      getInputClass(),
                      "pl-10"
                    )} 
                  />
                </div>
              </div>
            </div>

            <Separator style={{ backgroundColor: currentStyle.colorPalette.primary + '33' }} />

            {/* 功能卡片 - 圆形一排 */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {[
                { icon: <Home size={24} />, label: t("Home", "Home") },
                { icon: <User size={24} />, label: t("Profile", "Profile") },
                { icon: <Bell size={24} />, label: t("Notifs", "Notifs") },
                { icon: <Settings size={24} />, label: t("Settings", "Settings") }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`
                    w-24 h-24 
                    rounded-full 
                    flex flex-col items-center justify-center 
                    cursor-pointer 
                    transition-all duration-300
                    hover:scale-110
                    ${currentStyle.id === 'japaneseMinimalism' ? 
                      `bg-[${index % 2 === 0 ? '#F7F4F0' : '#E0C8B2'}] border border-[#A67F5D]/20 hover:border-[#A67F5D]/50` : 
                      currentStyle.id === 'retroFuturism' ? 
                      getNavIconClass(index) :
                      getCardClass(index)}
                  `}
                >
                  <div 
                    className={`mb-1 ${currentStyle.id === 'retroFuturism' ? 'text-[#05D9E8]' : ''}`}
                    style={{ 
                      color: currentStyle.id !== 'retroFuturism' ? currentStyle.colorPalette.accent : undefined,
                      opacity: currentStyle.id === 'japaneseMinimalism' ? 0.8 : 1
                    }}
                  >
                    {item.icon}
                  </div>
                  <span 
                    className={`text-sm ${currentStyle.id === 'retroFuturism' ? 'text-[#05D9E8]' : ''}`}
                    style={{ 
                      color: currentStyle.id !== 'retroFuturism' ? currentStyle.colorPalette.text : undefined,
                      letterSpacing: currentStyle.id === 'japaneseMinimalism' ? '0.05em' : 
                                   currentStyle.id === 'retroFuturism' ? '0.1em' : 'normal'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Separator style={{ backgroundColor: currentStyle.colorPalette.primary + '33' }} />

            {/* 特色内容卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: t("Design Philosophy", "Design Philosophy"), 
                  content: t("Simple, efficient, user-friendly interface design focusing on the balance between user experience and visual aesthetics.", 
                            "Simple, efficient, user-friendly interface design focusing on the balance between user experience and visual aesthetics."),
                  icon: <Heart size={18} style={{ color: currentStyle.colorPalette.accent }} />
                },
                { 
                  title: t("Interactive Experience", "Interactive Experience"), 
                  content: t("Smooth, intuitive, and aligned with user mental models, reducing cognitive load and improving operational efficiency.", 
                            "Smooth, intuitive, and aligned with user mental models, reducing cognitive load and improving operational efficiency."),
                  icon: <MessageSquare size={18} style={{ color: currentStyle.colorPalette.accent }} />
                },
                { 
                  title: t("Visual Expression", "Visual Expression"), 
                  content: t("Consistent, hierarchical, and focused, conveying brand value through carefully designed visual elements.", 
                            "Consistent, hierarchical, and focused, conveying brand value through carefully designed visual elements."),
                  icon: <Image size={18} style={{ color: currentStyle.colorPalette.accent }} />
                }
              ].map((item, index) => (
                <Card key={index} className={getCardClass(index)}>
                  <CardContent className={`p-6 ${currentStyle.id === 'claymorphism' ? 'relative z-10 flex flex-col items-center text-center' : ''}`}>
                    {currentStyle.id === 'claymorphism' && (
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-100 shadow-[5px_5px_10px_0px_rgba(145,192,255,0.4),inset_-2px_-2px_4px_0px_rgba(145,192,255,0.3),inset_0px_2px_8px_0px_rgb(255,255,255)] mb-4">
                        {item.icon}
                      </div>
                    )}
                    
                    {currentStyle.id !== 'claymorphism' ? (
                      <div className="flex items-center gap-2 mb-3">
                        {item.icon}
                        <h3 
                          className="text-lg font-semibold"
                          style={{ 
                            color: currentStyle.id === 'neumorphism' 
                              ? '#4A5568'
                              : currentStyle.colorPalette.primary 
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    ) : (
                      <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                    )}
                    
                    <p className={`text-sm ${currentStyle.id === 'claymorphism' ? 'text-gray-600' : 'text-muted-foreground'}`}>
                      {item.content}
                    </p>
                    
                    {currentStyle.id === 'claymorphism' && (
                      <div className="mt-4 w-full pt-4 border-t border-blue-100/60 flex justify-center">
                        <div className="px-3 py-1 rounded-full text-xs bg-white text-blue-500 shadow-[3px_3px_6px_0px_rgba(145,192,255,0.3),inset_-1px_-1px_2px_0px_rgba(145,192,255,0.2),inset_0px_1px_4px_0px_rgb(255,255,255)] cursor-pointer hover:shadow-[4px_4px_8px_0px_rgba(145,192,255,0.4),inset_-2px_-2px_4px_0px_rgba(145,192,255,0.3),inset_0px_2px_6px_0px_rgb(255,255,255)] transition-all">
                          Learn more →
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 资源推荐 */}
            <div className="rounded-lg overflow-hidden" style={{ 
              backgroundColor: currentStyle.colorPalette.primary + '10',
              borderColor: currentStyle.colorPalette.primary + '33',
              borderWidth: currentStyle.id === 'brutalism' ? '4px' : '1px',
              borderStyle: 'solid'
            }}>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4" style={{ color: currentStyle.colorPalette.primary }}>
                  {t("Recommended Resources", "Recommended Resources")}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: <FileText size={16} />, label: t("Design Documents", "Design Documents") },
                    { icon: <BookOpen size={16} />, label: t("Tutorials", "Tutorials") },
                    { icon: <Coffee size={16} />, label: t("Inspiration", "Inspiration") },
                    { icon: <Star size={16} />, label: t("Best Practices", "Best Practices") }
                  ].map((item, index) => (
                    <div key={index} className={`p-3 ${getCardClass(index)} flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform text-sm`}>
                      <span style={{ color: currentStyle.colorPalette.accent }}>
                        {item.icon}
                      </span>
                      <span style={{ color: currentStyle.colorPalette.text }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 评论区 */}
            <Card className={`${getCardClass(0)} overflow-hidden`}>
              <CardHeader className={currentStyle.id === 'brutalism' ? 'border-b-4 border-black' : 'border-b'}>
                <CardTitle style={{ color: currentStyle.colorPalette.primary }}>{t("User Comments", "User Comments")}</CardTitle>
                <CardDescription>{t("Feedback from design enthusiasts", "Feedback from design enthusiasts")}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {[
                  { 
                    user: t("Designer A", "Designer A"), 
                    content: t("This style is perfect for the app I'm developing, simple yet distinctive!", 
                              "This style is perfect for the app I'm developing, simple yet distinctive!"), 
                    time: t("2 days ago", "2 days ago"), 
                    icon: <ThumbsUp size={14} /> 
                  },
                  { 
                    user: t("Developer B", "Developer B"), 
                    content: t("Easier to implement than I imagined, documentation is clear, recommended it to my team.", 
                              "Easier to implement than I imagined, documentation is clear, recommended it to my team."), 
                    time: t("1 week ago", "1 week ago"), 
                    icon: <Star size={14} /> 
                  }
                ].map((comment, index) => (
                  <div key={index} className={`p-3 ${getCardClass(index)} space-y-2`}>
                    <div className="flex justify-between items-center">
                      <div className="font-medium flex items-center gap-1.5">
                        <User size={14} style={{ color: currentStyle.colorPalette.accent }} />
                        {comment.user}
                      </div>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {comment.icon}
                      <span>{t("Recommended", "Recommended")}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                © 2023 {t("Design Style Showcase", "Design Style Showcase")}. {t("All Rights Reserved", "All Rights Reserved")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoContent;
