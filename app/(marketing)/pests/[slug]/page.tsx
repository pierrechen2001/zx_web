import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Phone } from "lucide-react";

// 害蟲詳細資料類型
interface PestDetail {
  slug: string;
  title: string;
  scientificName: string;
  category: string;
  icon: string;
  danger: string;
  description: string;
  characteristics: string[];
  habits: string;
  damages: string[];
  professionalTreatment: {
    methods: string[];
    safety: string;
  };
  diy: {
    dos: string[];
    donts: string[];
  };
  prevention: string[];
}

// 範例資料（實際使用時從 MDX 讀取）
const pestsDetailData: Record<string, PestDetail> = {
  termite: {
    slug: "termite",
    title: "白蟻",
    scientificName: "Isoptera",
    category: "木材害蟲",
    icon: "🪲",
    danger: "高度危害",
    description: "白蟻是社會性昆蟲，以木材纖維素為食。台灣常見的白蟻種類包括家白蟻、台灣土白蟻等。白蟻蟻群可達數萬至數百萬隻，對建築物結構威脅極大，被稱為「無聲的破壞者」。",
    characteristics: [
      "體長約 4-15mm，體色乳白色至淡黃色",
      "工蟻無翅，兵蟻頭部碩大",
      "生殖蟻有翅，每年 4-6 月分飛",
      "畏光，活動於木材內部或泥道中",
    ],
    habits: "白蟻喜愛溫暖潮濕的環境，最適溫度為 25-30°C。牠們以木材、紙張等含纖維素的物質為食，能分泌特殊酵素消化纖維素。白蟻活動隱密，往往要等到發現蟻道、分飛孔或木材嚴重受損時才會察覺。",
    damages: [
      "破壞建築結構（木樑、門框、地板等）",
      "損壞家具、書籍、衣物等含纖維物品",
      "危及建築安全，造成經濟損失",
      "影響房屋價值與交易",
    ],
    professionalTreatment: {
      methods: [
        "餌劑系統：使用白蟻餌劑，讓工蟻帶回巢穴，達到全巢滅殺效果",
        "土壤處理：在建築物周圍土壤注入藥劑，形成防護帶",
        "木材處理：直接於受害木材施藥",
        "灌注處理：對牆內、地板下等隱蔽處灌注藥劑",
      ],
      safety: "我們使用經環保署核可的低毒性藥劑，對人體和寵物安全。施工後建議通風 2-3 小時即可返家。所有施工人員均具備專業證照，依照標準作業程序執行。",
    },
    diy: {
      dos: [
        "定期檢查房屋結構，特別是木造部分",
        "保持環境乾燥，修復漏水問題",
        "木材與土壤保持適當距離",
        "發現分飛白蟻立即關閉門窗",
        "保留證據並立即聯絡專業公司",
      ],
      donts: [
        "不要自行噴灑殺蟲劑（可能驚擾蟻群，使其擴散）",
        "不要破壞蟻道（會影響專業評估）",
        "不要移動受損木材（避免擴散）",
        "不要忽視小問題（白蟻問題只會越來越嚴重）",
      ],
    },
    prevention: [
      "新建或裝修時進行預防性土壤處理",
      "木材使用前進行防腐防蟲處理",
      "保持環境乾燥，濕度控制在 60% 以下",
      "避免木材直接接觸土壤",
      "定期檢查房屋，特別是潮濕陰暗處",
      "妥善處理木材廢料，不要堆積在屋旁",
    ],
  },
  cockroach: {
    slug: "cockroach",
    title: "蟑螂",
    scientificName: "Blattodea",
    category: "衛生害蟲",
    icon: "🪳",
    danger: "中度危害",
    description: "蟑螂是古老的昆蟲，適應力極強，幾乎無所不吃。台灣常見種類有美洲蟑螂、德國蟑螂、澳洲蟑螂等。蟑螂不僅污染食物，還會傳播病菌，是重要的衛生害蟲。",
    characteristics: [
      "體長 1-5cm，因種類而異",
      "體色褐色至黑褐色，有光澤",
      "頭部向下彎曲，觸角長而靈活",
      "行動敏捷，夜行性，畏光",
    ],
    habits: "蟑螂喜愛溫暖潮濕、有食物來源的環境。牠們夜間活動，白天躲藏在縫隙中。蟑螂雜食性，幾乎什麼都吃，包括食物殘渣、紙張、膠水、甚至同類。一隻雌蟑螂一生可產卵 4-8 次，每次可孵化 30-40 隻小蟑螂。",
    damages: [
      "污染食物，傳播病菌（如沙門氏菌、大腸桿菌）",
      "糞便和分泌物可能引發過敏和氣喘",
      "啃咬物品，損壞書籍、衣物",
      "影響商譽（特別是餐飲業）",
    ],
    professionalTreatment: {
      methods: [
        "凝膠餌劑：施放於蟑螂路徑和躲藏處",
        "殘效噴灑：於縫隙、角落施藥，形成藥膜",
        "煙霧處理：用於嚴重感染場所",
        "環境整治：找出孳生源並改善環境",
      ],
      safety: "使用食品級安全藥劑，特別適合餐飲業和有嬰幼兒的家庭。施工時會避開食物和餐具，確保使用安全。",
    },
    diy: {
      dos: [
        "保持環境清潔，立即清理食物殘渣",
        "密封食物，垃圾加蓋",
        "封堵縫隙，減少躲藏處",
        "保持乾燥，修復漏水",
        "使用蟑螂屋或黏蠅板監測",
      ],
      donts: [
        "不要留置隔夜垃圾",
        "不要讓寵物食物過夜",
        "不要堆積雜物",
        "不要單純依賴噴霧劑（治標不治本）",
      ],
    },
    prevention: [
      "維持良好清潔習慣",
      "食物密封保存",
      "垃圾每天清理",
      "修補縫隙和裂縫",
      "保持乾燥，避免積水",
      "定期檢查廚房、浴室等潮濕處",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pestData = pestsDetailData[slug];

  if (!pestData) {
    return {
      title: "害蟲不存在",
    };
  }

  return {
    title: `${pestData.title}防治 - 害蟲介紹`,
    description: pestData.description,
    openGraph: {
      title: `${pestData.title}防治 | 中星害蟲驅除`,
      description: pestData.description,
    },
  };
}

export default async function PestDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pestData = pestsDetailData[slug];

  if (!pestData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface/30">
      {/* 返回按鈕 */}
      <div className="bg-surface/30 border-b border-border">
        <div className="container-custom py-4">
          <Link href="/pests">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回害蟲列表
            </Button>
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* 標題區塊 */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">{pestData.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              {pestData.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-text-secondary mb-4">
              <span className="text-sm">學名：{pestData.scientificName}</span>
              <span>•</span>
              <span className="text-sm">{pestData.category}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 text-error font-medium">
              <AlertTriangle className="w-4 h-4" />
              {pestData.danger}
            </div>
          </div>

          {/* 基本介紹 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">基本介紹</h2>
            <p className="text-text-primary leading-relaxed">
              {pestData.description}
            </p>
          </div>

          {/* 外觀特徵 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">外觀特徵</h2>
            <ul className="space-y-2">
              {pestData.characteristics.map((char, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span className="text-text-primary">{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 生活習性 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">生活習性</h2>
            <p className="text-text-primary leading-relaxed whitespace-pre-line">
              {pestData.habits}
            </p>
          </div>

          {/* 危害 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-error" />
              可能造成的危害
            </h2>
            <ul className="space-y-2">
              {pestData.damages.map((damage, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-error mt-2 mr-3 flex-shrink-0" />
                  <span className="text-text-primary">{damage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 專業防治方式 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">專業防治方式</h2>
            
            <h3 className="text-lg font-semibold text-text-primary mb-3">防治方法：</h3>
            <ul className="space-y-2 mb-6">
              {pestData.professionalTreatment.methods.map((method, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-text-primary">{method}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-text-primary mb-3">安全說明：</h3>
            <p className="text-text-primary leading-relaxed bg-surface/30/50 p-4 rounded">
              {pestData.professionalTreatment.safety}
            </p>
          </div>

          {/* 居家自救建議 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* 可以做的 */}
            <div className="bg-surface/30 rounded-sm p-6 shadow-card border border-surface/30">
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                可以做的事
              </h3>
              <ul className="space-y-2">
                {pestData.diy.dos.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 不要做的 */}
            <div className="bg-surface/30 rounded-sm p-6 shadow-card border border-surface/30">
              <h3 className="text-xl font-bold text-error mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                不要做的事
              </h3>
              <ul className="space-y-2">
                {pestData.diy.donts.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-error mr-2">✗</span>
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 預防方法 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">預防方法</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {pestData.prevention.map((method, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-text-primary text-sm">{method}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              發現{pestData.title}問題？
            </h2>
            <p className="mb-6 text-white/90">
              立即聯絡我們，專業團隊提供完整評估與防治方案
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-surface/30 text-primary hover:bg-surface/30/90">
                <Link href="/contact">
                  <Phone className="w-5 h-5" />
                  立即諮詢
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-surface/30/10">
                <Link href="/cases">
                  查看相關實績
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

