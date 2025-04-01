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

const DemoContent: React.FC = () => {
  const { currentStyle } = useStyle();
  const { t, language } = useLanguage();
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
      case "minimal":
        return "border border-gray-200 shadow-sm hover:border-gray-300 transition-colors";
      default:
        return "";
    }
  };

  const getCardClass = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return "border-4 border-black font-bold transform rotate-0";
      case "neumorphism":
        return "bg-gray-100 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none rounded-xl";
      case "glassmorphism":
        return "bg-white/70 backdrop-blur-md border border-white/20 rounded-xl";
      case "skeuomorphism":
        return "bg-gradient-to-b from-white to-gray-200 border border-gray-300 shadow-md rounded-lg";
      case "minimal":
        return "border border-gray-200 shadow-sm rounded-md";
      default:
        return "";
    }
  };

  const getInputClass = () => {
    switch (currentStyle.id) {
      case "brutalism":
        return "border-4 border-black font-bold focus:translate-x-1 focus:translate-y-1 transition-transform";
      case "neumorphism":
        return "bg-gray-100 shadow-[inset_2px_2px_5px_#d9d9d9,inset_-2px_-2px_5px_#ffffff] border-none rounded-xl";
      case "glassmorphism":
        return "bg-white/50 backdrop-blur-sm border border-white/20 rounded-xl";
      case "skeuomorphism":
        return "bg-gradient-to-b from-gray-50 to-white border border-gray-300 shadow-inner rounded-lg";
      case "minimal":
        return "border border-gray-200 focus:border-gray-400 transition-colors rounded-md";
      default:
        return "";
    }
  };

  const displayStyleName = language === "zh" && currentStyle.nameChinese ? currentStyle.nameChinese : currentStyle.name;

  return (
    <div className="space-y-8">
      {/* 头部 */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold" style={{ color: currentStyle.colorPalette.primary }}>
          {t("Welcome to Personal Homepage", "欢迎来到个人主页")}
        </h1>
        <p className="text-muted-foreground">
          {t(`This is a page demonstration based on ${displayStyleName} design style`, 
             `这是一个基于 ${displayStyleName} 设计风格的页面演示`)}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {currentStyle.keywords.slice(0, 3).map((keyword, i) => (
            <Badge 
              key={i} 
              variant="outline"
              className="text-xs"
              style={{ borderColor: currentStyle.colorPalette.accent + '66' }}
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* 主要按钮 */}
      <div className="flex flex-wrap justify-center items-center gap-3 py-4">
        <Button className={getButtonClass()} style={{ 
          backgroundColor: currentStyle.colorPalette.primary,
          color: currentStyle.colorPalette.background
        }}>
          {t("Start Exploring", "开始探索")}
        </Button>
        <Button variant="outline" className={getButtonClass()} style={{ 
          borderColor: currentStyle.colorPalette.primary, 
          color: currentStyle.colorPalette.primary 
        }}>
          {t("Learn More", "了解更多")}
        </Button>
      </div>

      {/* 搜索栏 */}
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder={t("Search...", "搜索...")} 
            className={`pl-8 ${getInputClass()}`}
          />
        </div>
      </div>

      <Separator style={{ backgroundColor: currentStyle.colorPalette.primary + '33' }} />

      {/* 功能卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Home size={18} />, label: t("Home", "首页") },
          { icon: <User size={18} />, label: t("Profile", "个人") },
          { icon: <Bell size={18} />, label: t("Notifications", "通知") },
          { icon: <Settings size={18} />, label: t("Settings", "设置") }
        ].map((item, index) => (
          <Card key={index} className={`${getCardClass()} cursor-pointer hover:scale-105 transition-transform`}>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="mb-2" style={{ color: currentStyle.colorPalette.accent }}>
                {item.icon}
              </div>
              <span style={{ color: currentStyle.colorPalette.text }}>{item.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator style={{ backgroundColor: currentStyle.colorPalette.primary + '33' }} />

      {/* 特色内容卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: t("Design Philosophy", "设计理念"), 
            content: t("Simple, efficient, user-friendly interface design focusing on the balance between user experience and visual aesthetics.", 
                      "简洁、高效、用户友好的界面设计，专注于用户体验和视觉美感的平衡。"),
            icon: <Heart size={18} style={{ color: currentStyle.colorPalette.accent }} />
          },
          { 
            title: t("Interactive Experience", "交互体验"), 
            content: t("Smooth, intuitive, and aligned with user mental models, reducing cognitive load and improving operational efficiency.", 
                      "流畅、直观、符合用户心智模型，减少认知负担，提高操作效率。"),
            icon: <MessageSquare size={18} style={{ color: currentStyle.colorPalette.accent }} />
          },
          { 
            title: t("Visual Expression", "视觉表达"), 
            content: t("Consistent, hierarchical, and focused, conveying brand value through carefully designed visual elements.", 
                      "一致性、层次分明、重点突出，通过精心设计的视觉元素传达品牌价值。"),
            icon: <Image size={18} style={{ color: currentStyle.colorPalette.accent }} />
          }
        ].map((item, index) => (
          <Card key={index} className={getCardClass()}>
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

      {/* 资源推荐 */}
      <div className="rounded-lg overflow-hidden" style={{ 
        backgroundColor: currentStyle.colorPalette.primary + '10',
        borderColor: currentStyle.colorPalette.primary + '33',
        borderWidth: currentStyle.id === 'brutalism' ? '4px' : '1px',
        borderStyle: 'solid'
      }}>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4" style={{ color: currentStyle.colorPalette.primary }}>
            {t("Recommended Resources", "推荐资源")}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FileText size={16} />, label: t("Design Documents", "设计文档") },
              { icon: <BookOpen size={16} />, label: t("Tutorials", "学习教程") },
              { icon: <Coffee size={16} />, label: t("Inspiration", "灵感来源") },
              { icon: <Star size={16} />, label: t("Best Practices", "最佳实践") }
            ].map((item, index) => (
              <div key={index} className={`p-3 ${getCardClass()} flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform text-sm`}>
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
      <Card className={`${getCardClass()} overflow-hidden`}>
        <CardHeader className={currentStyle.id === 'brutalism' ? 'border-b-4 border-black' : 'border-b'}>
          <CardTitle style={{ color: currentStyle.colorPalette.primary }}>{t("User Comments", "用户评论")}</CardTitle>
          <CardDescription>{t("Feedback from design enthusiasts", "来自设计爱好者的反馈")}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {[
            { 
              user: t("Designer A", "设计师小A"), 
              content: t("This style is perfect for the app I'm developing, simple yet distinctive!", 
                        "这种风格非常适合我正在开发的应用，简洁又不失个性！"), 
              time: t("2 days ago", "2天前"), 
              icon: <ThumbsUp size={14} /> 
            },
            { 
              user: t("Developer B", "开发者小B"), 
              content: t("Easier to implement than I imagined, documentation is clear, recommended it to my team.", 
                        "实现起来比想象中容易，文档很清晰，推荐给团队使用了。"), 
              time: t("1 week ago", "1周前"), 
              icon: <Star size={14} /> 
            }
          ].map((comment, index) => (
            <div key={index} className={`p-3 ${getCardClass()} space-y-2`}>
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
                <span>{t("Recommended", "推荐")}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          © 2023 {t("Design Style Showcase", "设计风格展示")}. {t("All Rights Reserved", "版权所有")}
        </p>
      </div>
    </div>
  );
};

export default DemoContent;
