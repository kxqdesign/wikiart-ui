import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStyle } from "@/contexts/StyleContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getStyleClasses } from "@/data/designStyles";
import DemoContent from "@/components/DemoContent";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import "./CodeUIMonitor.css";

const Demo: React.FC = () => {
  const { currentStyle } = useStyle();
  const { t, language } = useLanguage();
  const styleClasses = getStyleClasses(currentStyle.id);
  const displayStyleName = language === "zh" && currentStyle.nameChinese ? currentStyle.nameChinese : currentStyle.name;
  const navigate = useNavigate();
  const isCodeUI = currentStyle.id === 'codeUI';
  
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const screenRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isCodeUI && isPowerOn) {
      setIsBooting(true);
      
      // 根据语言设置启动序列
      const bootTexts = language === "zh" 
        ? ["cd design-styles", "load style --name=\"Code UI\"", "npm run demo"] 
        : ["cd design-insight", "load style --name=\"Code UI\"", "npm run demo"];
      
      setBootSequence([]);
      
      let index = 0;
      let charIndex = 0;
      let currentText = "";
      
      const typeInterval = setInterval(() => {
        if (index >= bootTexts.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsBooting(false);
          }, 1000);
          return;
        }
        
        if (charIndex === 0) {
          currentText = "$ ";
        }
        
        if (charIndex < bootTexts[index].length) {
          currentText += bootTexts[index][charIndex];
          charIndex++;
          setBootSequence(prev => [...prev.slice(0, -1), currentText]);
        } else {
          charIndex = 0;
          index++;
          setBootSequence(prev => [...prev, currentText, ""]);
          currentText = "";
        }
      }, 75);
      
      return () => clearInterval(typeInterval);
    }
  }, [isCodeUI, isPowerOn, language]);
  
  // 如果是 Code UI 风格，使用老式显示器布局
  if (isCodeUI) {
    return (
      <>
        <SEO 
          title="Interactive Demo - Design Insight"
          description="Explore and interact with different UI design styles in this interactive demo."
        />
        
        {/* 添加复古显示器的 CSS 和像素风格字体 */}
        <style>{`
          @font-face {
            font-family: "EnterCommand";
            src: url("https://manz.dev/assets/fonts/entercommand.woff2") format("woff2"),
                 url("https://manz.dev/assets/fonts/entercommand.woff") format("woff");
            font-display: swap;
          }
          
          @font-face {
            font-family: "VCR OSD Mono";
            src: url("https://cdn.jsdelivr.net/npm/@fontsource/vt323/files/vt323-latin-400-normal.woff2") format("woff2");
            font-display: swap;
          }
          
          @font-face {
            font-family: "Press Start 2P";
            src: url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
            font-display: swap;
          }
          
          .computer-container {
            --width-monitor: 800px;
            --height-monitor: 650px;
            --monitor-light-color: #d3ccbc;
            --monitor-dark-color: #ccc5b3;
            --monitor-shadow-light: #d7d4c1;
            --monitor-shadow-medium: #b7b19b;
            --monitor-shadow-dark: #908e7a;
            --monitor-shadow-very-dark: #6e6d5f;
            --monitor-gradient: linear-gradient(to bottom, var(--monitor-light-color), var(--monitor-dark-color));
            --monitor-shadow-texture: 2px -2px 30px #493e2a33 inset, -2px -2px 30px #493e2a33 inset, 1px -1px 1px #493e2a33 inset, -1px -1px 1px #493e2a33 inset, 0 2px 30px #ddd inset;
          }
          
          /* CRT屏幕扫描线效果 */
          .crt-effect {
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
            background-size: 100% 4px;
            position: relative;
          }
          
          /* 像素风格文字和元素 */
          .pixel-text {
            font-family: 'VCR OSD Mono', 'Press Start 2P', monospace;
            color: #00ff9d;
            letter-spacing: 0.05em;
            line-height: 1.2;
            text-shadow: 0 0 5px rgba(0, 255, 157, 0.7);
          }
          
          .pixel-card {
            border: 2px solid #0c7b46;
            box-shadow: 
              0 0 0 1px #000, 
              0 0 0 3px #0c7b46, 
              0 0 5px 3px rgba(0, 255, 157, 0.3) inset;
          }
          
          .pixel-button {
            background-color: #031e11;
            color: #00ff9d;
            border: 2px solid #0c7b46;
            padding: 0.5em 1em;
            font-family: 'VCR OSD Mono', monospace;
            text-transform: uppercase;
            position: relative;
            transition: all 0.1s ease;
          }
          
          .pixel-button:before {
            content: '';
            position: absolute;
            left: -2px;
            top: -2px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            background: transparent;
            border: 1px solid rgba(0, 255, 157, 0.3);
            pointer-events: none;
          }
          
          .pixel-button:hover {
            background-color: #052e1a;
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(0, 255, 157, 0.4);
          }
          
          .pixel-button:active {
            transform: translateY(1px);
          }
          
          .pixel-nav-icon {
            background-color: #031e11;
            color: #00ff9d;
            border: 2px solid #0c7b46;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1em;
            transition: all 0.2s ease;
          }
          
          .pixel-nav-icon:hover {
            background-color: #052e1a;
            box-shadow: 0 0 12px rgba(0, 255, 157, 0.5);
          }
          
          /* CRT开关动画 */
          .crt-on {
            animation: crtOn 0.5s ease-in;
          }
          
          @keyframes crtOn {
            0% { opacity: 0; transform: scale(0.98); filter: brightness(3) blur(2px); }
            40% { opacity: 1; transform: scale(1.02); filter: brightness(6) blur(1px); }
            60% { transform: scale(0.99); filter: brightness(1.5) blur(0.5px); }
            80% { transform: scale(1.01); filter: brightness(2) blur(0px); }
            100% { transform: scale(1); filter: brightness(1); }
          }
          
          @keyframes blinkEye {
            0%, 80% { transform: translateY(0); }
            80%, 100% { transform: translateY(-90%); }
          }
          
          @keyframes blink {
            0%, 19% { background: #ed9940; }
            20%, 99% { background: #333; }
          }
          
          @keyframes cursor-blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          
          .cursor-typed::after {
            content: "_";
            animation: cursor-blink 1s infinite;
          }
          
          /* 像素风格滚动条 */
          .pixel-scrollbar::-webkit-scrollbar {
            width: 12px;
          }
          
          .pixel-scrollbar::-webkit-scrollbar-track {
            background: #031e11;
            border-left: 1px solid #0c7b46;
          }
          
          .pixel-scrollbar::-webkit-scrollbar-thumb {
            background: #0c7b46;
            border: 2px solid #021208;
          }
          
          .pixel-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #0a6a3d;
          }
        `}</style>
        
        <div className="min-h-screen bg-[#031e11] flex flex-col items-center justify-center py-8">
          <div className="computer-container flex flex-col items-center">
            <div className="monitor flex flex-col justify-center relative items-center" style={{
              width: 'var(--width-monitor)',
              height: 'var(--height-monitor)',
              background: 'var(--monitor-gradient)',
              borderRadius: '8px',
              boxShadow: 'var(--monitor-shadow-texture)'
            }}>
              <div className="monitor-inner" style={{
                width: 'calc(var(--width-monitor) * 0.78)',
                height: 'calc(var(--height-monitor) * 0.75)',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#000',
                border: '18px solid var(--monitor-shadow-medium)',
                borderTop: '18px solid var(--monitor-shadow-dark)',
                borderBottom: '18px solid var(--monitor-shadow-light)'
              }}>
                <div className="screen-container relative" style={{
                  width: 'calc(var(--width-monitor) * 0.75)',
                  height: 'calc(var(--height-monitor) * 0.72)',
                  background: '#021208',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '3px solid #000',
                  boxShadow: '10px 10px 20px 14px #0008 inset, -10px -10px 20px 14px #0008 inset',
                  overflow: 'hidden'
                }}>
                  {/* 屏幕内容 */}
                  <div 
                    ref={screenRef}
                    className={cn(
                      "screen w-full h-full overflow-auto text-[#00ff9d] p-6 pixel-scrollbar crt-effect",
                      isPowerOn ? "crt-on" : "opacity-0"
                    )}
                    style={{
                      fontFamily: "'VCR OSD Mono', 'Press Start 2P', monospace",
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      lineHeight: 1.3,
                      textShadow: '0 0 5px rgba(0, 255, 157, 0.7)',
                      transition: 'opacity 0.5s'
                    }}
                  >
                    {isBooting ? (
                      <div className="boot-sequence pixel-text">
                        {bootSequence.map((line, index) => (
                          <div key={index} className={index === bootSequence.length - 1 ? "cursor-typed" : ""}>
                            {line}
                          </div>
                        ))}
                      </div>
                    ) : isPowerOn ? (
                      <div className="terminal-content">
                        {language === "zh" ? (
                          <>
                            <div className="pixel-text mb-1">$ cd ~/design-styles/codeUI</div>
                            <div className="pixel-text mb-1">$ cat info.txt</div>
                            
                            <div className="pixel-card bg-[#031e11] p-4 mb-4 mt-2">
                              <div className="text-xl font-bold mb-3 text-[#00ff9d]"># {displayStyleName}</div>
                              <p className="mb-4 text-[#00ff9d]/90">Terminal-style interface with monospace fonts and minimalist design. Focused on functionality and content presentation for developers and technical users.</p>
                            </div>
                            
                            <div className="pixel-text mb-2">$ ./demo.sh --interactive</div>
                          </>
                        ) : (
                          <>
                            <div className="pixel-text mb-1">$ cd ~/design-styles/codeUI</div>
                            <div className="pixel-text mb-1">$ cat info.txt</div>
                            
                            <div className="pixel-card bg-[#031e11] p-4 mb-4 mt-2">
                              <div className="text-xl font-bold mb-3 text-[#00ff9d]"># {displayStyleName} Design Style</div>
                              <p className="mb-4 text-[#00ff9d]/90">Terminal-inspired interface with monospace fonts and minimalist design. Focused on functionality and content presentation.</p>
                            </div>
                            
                            <div className="pixel-text mb-2">$ ./demo.sh --interactive</div>
                          </>
                        )}
                        
                        {/* 添加修改的DemoContent样式 */}
                        <div className="border-2 border-[#0c7b46] p-4 mt-2 mb-4 bg-[#021208] pixel-card">
                          {/* 覆盖DemoContent样式以使用像素风格 */}
                          <style>{`
                            .codeUI-button {
                              @apply pixel-button;
                            }
                            
                            .codeUI button {
                              @apply pixel-button;
                            }
                            
                            .codeUI input {
                              border: 2px solid #0c7b46 !important;
                              background-color: #021208 !important;
                              color: #00ff9d !important;
                              font-family: 'VCR OSD Mono', monospace !important;
                            }
                            
                            .codeUI .badge {
                              border: 2px solid #0c7b46 !important;
                              background-color: #031e11 !important;
                              color: #00ff9d !important;
                              font-family: 'VCR OSD Mono', monospace !important;
                            }

                            /* 确保像素风格应用到DemoContent中的所有导航卡片 */
                            .codeUI div[class*="rounded-full"] {
                              border: 2px solid #0c7b46 !important;
                              background-color: #031e11 !important;
                              color: #00ff9d !important;
                              box-shadow: 0 0 8px rgba(0, 255, 157, 0.3) !important;
                            }
                          `}</style>
                          <DemoContent />
                        </div>
                        
                        <div className="pixel-text cursor-typed">
                          {language === "zh" ? "$ 等待输入..." : "$ awaiting input..."}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              
              {/* 显示器底部控制区 */}
              <div className="monitor-bottom" style={{
                width: '100%',
                height: '60px',
                position: 'absolute',
                bottom: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translate(180px, 0)'
              }}>
                <div 
                  className="power-switch cursor-pointer"
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'linear-gradient(to bottom, var(--monitor-shadow-dark), var(--monitor-shadow-light))',
                    borderRadius: '50%',
                    marginRight: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onClick={() => setIsPowerOn(!isPowerOn)}
                >
                  <div 
                    className="button" 
                    style={{
                      width: '24px',
                      height: '24px',
                      border: '2px solid #555',
                      borderRadius: '50%',
                      background: '#cac1b2',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  ></div>
                </div>
                
                <div 
                  className={`power-led ${isPowerOn ? 'on' : 'standby'}`}
                  style={{
                    width: '9px',
                    height: '9px',
                    background: isPowerOn ? '#5cef11' : '#333',
                    borderRadius: '50%',
                    border: '1px solid var(--monitor-shadow-dark)',
                    boxShadow: '0 0 1px 1px #2228 inset',
                    animation: isPowerOn ? 'none' : 'blink 2s infinite ease-out'
                  }}
                ></div>
              </div>
              
              {/* 显示器侧面阴影 */}
              <div style={{
                content: '""',
                display: 'block',
                width: '70px',
                height: '50px',
                background: 'linear-gradient(to right, #0004 65%, #0008 80%)',
                position: 'absolute',
                top: '150px',
                left: '0'
              }}></div>
              
              <div style={{
                content: '""',
                display: 'block',
                width: '70px',
                height: '50px',
                background: 'linear-gradient(to right, #0004 65%, #0008 80%)',
                position: 'absolute',
                top: '150px',
                right: '0',
                transform: 'rotate(180deg)'
              }}></div>
            </div>
            
            {/* 显示器底座 */}
            <div className="monitor-base" style={{
              width: 'calc(var(--width-monitor) * 0.78)',
              height: '55px',
              background: 'var(--monitor-gradient)',
              overflow: 'hidden',
              borderRadius: '0 0 5px 5px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                content: '""',
                display: 'block',
                width: '100%',
                height: '35px',
                background: '#0007',
                filter: 'blur(10px)',
                transform: 'translate(0, -10px)',
                position: 'absolute',
                top: '0',
                zIndex: '5'
              }}></div>
            </div>
          </div>
          
          {/* 返回按钮放在显示器下方 - 使用像素风格 */}
          <Button 
            variant="default" 
            onClick={() => navigate("/")}
            className="mt-10 flex items-center gap-1 bg-[#031e11] text-[#00ff9d] border-2 border-[#0c7b46] pixel-button"
          >
            <ArrowLeft className="h-4 w-4" /> 
            <span className="font-pixel">{t("Back to Styles", "返回风格列表")}</span>
          </Button>
        </div>
      </>
    );
  }
  
  // 其他风格使用原有布局
  return (
    <div className={cn(
      "min-h-screen animate-fade-in",
      currentStyle.id === 'retroFuturism' && "bg-[#000721] retroFuturism-bg"
    )}>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> 
            {t("Back to Styles", "返回风格列表")}
          </Button>
        </div>
        
        <div className={cn("mb-8 p-8", styleClasses)}>
            <DemoContent />
        </div>
      </div>
    </div>
  );
};

export default Demo;
