import { Shield, Award, Clock, Heart, FileCheck, Coins } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "政府立案",
    description: "合格證照，專業技術人員，合法經營有保障",
  },
  {
    icon: Award,
    title: "專業評估",
    description: "免費現場勘查，提供完整施工方案與保固服務",
  },
  {
    icon: Clock,
    title: "快速到府",
    description: "接到需求立即安排，最快當日即可到府服務",
  },
  {
    icon: Heart,
    title: "居家友善",
    description: "使用安全環保藥劑，對人體與寵物友善無害",
  },
  {
    icon: FileCheck,
    title: "合法合規",
    description: "遵循政府規範，使用合格藥劑，施工流程透明",
  },
  {
    icon: Coins,
    title: "價格合理",
    description: "透明報價，收費公開，絕不額外加價或隱藏費用",
  },
];

export function AdvantageList() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            為什麼選擇中星？
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            我們致力於提供最專業、最安全的害蟲防治服務，讓您的家人與環境得到最好的保護
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 hover:bg-surface/20 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {advantage.title}
                </h3>
                <p className="text-text-secondary">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

