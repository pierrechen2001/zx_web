import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Tag, Phone } from "lucide-react";

// 案例資料類型
interface CaseDetail {
  id: string;
  title: string;
  location: string;
  region: string;
  type: string;
  pestType: string;
  description: string;
  date: string;
  fullDescription: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  features: string[];
  testimonial?: {
    content: string;
    author: string;
  };
}

// 範例資料（實際使用時從 MDX 讀取）
const casesData: Record<string, CaseDetail> = {
  "case-001": {
    id: "case-001",
    title: "台北市大安區住宅白蟻防治",
    location: "台北市大安區",
    region: "台北市",
    type: "居家",
    pestType: "白蟻",
    description: "老舊公寓白蟻防治，施工後定期追蹤，確保無復發",
    date: "2024-11",
    fullDescription: "本案為台北市大安區一棟屋齡約 30 年的公寓，客戶發現牆面與門框出現白蟻蛀蝕痕跡。經現場勘查後，發現白蟻主要集中於一樓與地下室區域。我們採用專業的白蟻偵測技術，精確定位蟻巢位置，並使用環保藥劑進行全面防治。施工期間完全不影響住戶生活，並提供完整的保固服務。",
    features: [
      "專業白蟻偵測設備定位蟻巢",
      "使用環保低毒性藥劑",
      "施工期間不影響居住",
      "提供 2 年保固服務",
      "定期回訪追蹤",
    ],
    testimonial: {
      content: "服務非常專業，施工人員很仔細，也會詳細說明施工內容。現在已經完全沒有白蟻問題了，很滿意！",
      author: "王小姐 / 屋主",
    },
  },
  "case-002": {
    id: "case-002",
    title: "新北市三重區餐廳蟑螂防治",
    location: "新北市三重區",
    region: "新北市",
    type: "餐廳",
    pestType: "蟑螂",
    description: "餐廳廚房蟑螂防治，使用食品級安全藥劑",
    date: "2024-10",
    fullDescription: "本案為新北市三重區一間熱門餐廳，因廚房發現蟑螂影響衛生評鑑。我們針對餐飲業的特殊需求，使用符合食品安全標準的藥劑，並在非營業時間進行施工。除了藥劑處理外，也提供環境改善建議，從源頭杜絕蟑螂孳生。",
    features: [
      "使用食品級安全藥劑",
      "非營業時間施工不影響生意",
      "提供環境改善建議",
      "定期維護服務",
      "符合食安法規要求",
    ],
    testimonial: {
      content: "很專業的服務，特別注重食品安全，施工完全不影響營業。現在廚房環境好很多，衛生評鑑也順利通過了。",
      author: "陳先生 / 餐廳老闆",
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const caseData = casesData[id];
  
  if (!caseData) {
    return {
      title: "案例不存在",
    };
  }

  return {
    title: caseData.title,
    description: caseData.description,
    openGraph: {
      title: `${caseData.title} | 中星害蟲驅除`,
      description: caseData.description,
    },
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseData = casesData[id];

  if (!caseData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* 返回按鈕 */}
      <div className="bg-surface/30 border-b border-border">
        <div className="container-custom py-4">
          <Link href="/cases">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回實績列表
            </Button>
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* 標題與基本資訊 */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {caseData.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-text-secondary">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {caseData.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {caseData.date}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {caseData.type}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {caseData.pestType}防治
              </div>
            </div>
          </div>

          {/* 主要圖片 */}
          <div className="mb-8 rounded-sm overflow-hidden bg-surface/30 border border-surface/40 aspect-video flex items-center justify-center">
            <span className="text-9xl opacity-20">📸</span>
          </div>

          {/* 詳細說明 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">案例說明</h2>
            <p className="text-text-primary leading-relaxed whitespace-pre-line">
              {caseData.fullDescription}
            </p>
          </div>

          {/* 服務特色 */}
          <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">服務特色</h2>
            <ul className="space-y-3">
              {caseData.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-text-primary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 客戶回饋 */}
          {caseData.testimonial && (
            <div className="bg-surface/30 rounded-sm p-8 shadow-card border border-surface/30 mb-6">
              <h2 className="text-2xl font-bold text-primary mb-4">客戶回饋</h2>
              <blockquote className="text-text-primary italic mb-3">
                「{caseData.testimonial.content}」
              </blockquote>
              <p className="text-text-secondary text-sm">
                — {caseData.testimonial.author}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="bg-primary text-white rounded-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              也有類似的害蟲問題嗎？
            </h2>
            <p className="mb-6 text-white/90">
              立即聯絡我們，讓專業團隊為您解決
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
                  查看更多實績
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

