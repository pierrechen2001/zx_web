import { FileText, Search, DollarSign, Wrench, Heart } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "線上填表",
    description: "填寫聯絡表單或直接來電，告訴我們您的需求",
  },
  {
    icon: Search,
    title: "現場勘查",
    description: "專業人員到府免費評估，了解害蟲狀況與環境",
  },
  {
    icon: DollarSign,
    title: "報價說明",
    description: "提供詳細透明報價，說明施工方案與保固內容",
  },
  {
    icon: Wrench,
    title: "專業施工",
    description: "預約時間到府施工，使用安全環保藥劑處理",
  },
  {
    icon: Heart,
    title: "後續關懷",
    description: "施工後持續追蹤，提供保固期內免費複檢服務",
  },
];

export function ProcessFlow() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            服務流程
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            簡單五步驟，讓您輕鬆解決害蟲問題
          </p>
        </div>

        {/* Desktop - 時間軸樣式 */}
        <div className="hidden md:block">
          <div className="relative">
            {/* 連接線 */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-secondary/30"></div>
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg relative">
                      <Icon className="w-10 h-10" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary text-center">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile - 卡片樣式 */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-sm bg-white shadow-card border border-surface/30"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 relative">
                  <Icon className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

