
import React from "react";
import { useStyle } from "@/contexts/StyleContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getStyleClasses } from "@/data/designStyles";
import { 
  Home, 
  Search, 
  User, 
  Settings, 
  Bell, 
  Mail, 
  Heart, 
  MessageSquare 
} from "lucide-react";

const DemoContent: React.FC = () => {
  const { currentStyle } = useStyle();
  const styleClasses = getStyleClasses(currentStyle.id);

  // 根据不同的风格应用不同的类
  const getButtonClass = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return "border-4 border-black font-bold hover:translate-x-1 hover:translate-y-1 transition-transform";
      case "neumorphism":
        return "bg-gray-100 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none";
      case "glassmorphism":
        return "bg-white/70 backdrop-blur-md border border-white/20";
      case "skeuomorphism":
        return "bg-gradient-to-b from-white to-gray-200 border border-gray-300 shadow-md";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2" style={{ color: currentStyle.colorPalette.primary }}>
          欢迎来到个人主页
        </h1>
        <p className="text-muted-foreground">
          这是一个基于 {currentStyle.name} 设计风格的页面演示
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-3 py-4">
        <Button className={getButtonClass()}>
          开始探索
        </Button>
        <Button variant="outline" className={getButtonClass()}>
          了解更多
        </Button>
      </div>

      <div className="max-w-md mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="搜索..." 
            className={`pl-8 ${styleClasses}`}
          />
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Home size={18} />, label: "首页" },
          { icon: <User size={18} />, label: "个人" },
          { icon: <Bell size={18} />, label: "通知" },
          { icon: <Settings size={18} />, label: "设置" }
        ].map((item, index) => (
          <Card key={index} className={`${styleClasses} cursor-pointer hover:scale-105 transition-transform`}>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="mb-2" style={{ color: currentStyle.colorPalette.accent }}>
                {item.icon}
              </div>
              <span style={{ color: currentStyle.colorPalette.text }}>{item.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: "设计理念", 
            content: "简洁、高效、用户友好的界面设计",
            icon: <Heart size={18} style={{ color: currentStyle.colorPalette.accent }} />
          },
          { 
            title: "交互体验", 
            content: "流畅、直观、符合用户心智模型",
            icon: <MessageSquare size={18} style={{ color: currentStyle.colorPalette.accent }} />
          },
          { 
            title: "视觉表达", 
            content: "一致性、层次分明、重点突出",
            icon: <Mail size={18} style={{ color: currentStyle.colorPalette.accent }} />
          }
        ].map((item, index) => (
          <Card key={index} className={styleClasses}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold" style={{ color: currentStyle.colorPalette.primary }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          © 2023 设计风格展示. 版权所有
        </p>
      </div>
    </div>
  );
};

export default DemoContent;
