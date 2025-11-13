"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// 害蟲資料類型
interface PestItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string;
  summary: string;
  danger: string;
  commonPlaces: string[];
}

// 範例資料（實際使用時從 MDX 讀取）
const pestsData: PestItem[] = [
  {
    id: "pest-001",
    slug: "termite",
    title: "白蟻",
    category: "木材害蟲",
    icon: "🪲",
    summary: "白蟻是最具破壞力的害蟲之一，主要啃食木材、紙張等含纖維素的物品，對建築結構造成嚴重威脅。",
    danger: "高度危害",
    commonPlaces: ["木造建築", "老舊房屋", "潮濕環境"],
  },
  {
    id: "pest-002",
    slug: "cockroach",
    title: "蟑螂",
    category: "衛生害蟲",
    icon: "🪳",
    summary: "蟑螂是常見的衛生害蟲，攜帶多種病菌，污染食物，並可能引發過敏反應。",
    danger: "中度危害",
    commonPlaces: ["廚房", "浴室", "下水道"],
  },
  {
    id: "pest-003",
    slug: "rat",
    title: "老鼠",
    category: "齧齒類",
    icon: "🐭",
    summary: "老鼠不僅咬壞物品、電線，還會傳播疾病，對居家安全構成威脅。",
    danger: "高度危害",
    commonPlaces: ["倉庫", "廚房", "天花板"],
  },
  {
    id: "pest-004",
    slug: "mosquito",
    title: "蚊蠅",
    category: "飛行害蟲",
    icon: "🦟",
    summary: "蚊蠅不僅造成叮咬不適，更可能傳播登革熱等疾病。",
    danger: "中度危害",
    commonPlaces: ["積水處", "垃圾堆", "草叢"],
  },
  {
    id: "pest-005",
    slug: "dust-mite",
    title: "塵蟎",
    category: "過敏原",
    icon: "🦠",
    summary: "塵蟎是常見的過敏原，容易引發氣喘、過敏性鼻炎等症狀。",
    danger: "輕度危害",
    commonPlaces: ["寢具", "地毯", "窗簾"],
  },
  {
    id: "pest-006",
    slug: "ant",
    title: "螞蟻",
    category: "家居害蟲",
    icon: "🐜",
    summary: "螞蟻容易群聚出沒，污染食物，影響居家生活品質。",
    danger: "輕度危害",
    commonPlaces: ["廚房", "餐廳", "食物儲藏處"],
  },
  {
    id: "pest-007",
    slug: "fruit-fly",
    title: "果蠅",
    category: "飛行害蟲",
    icon: "🪰",
    summary: "果蠅在腐爛水果和食物上繁殖，影響食品衛生。",
    danger: "輕度危害",
    commonPlaces: ["廚房", "垃圾桶", "水果籃"],
  },
  {
    id: "pest-008",
    slug: "woodworm",
    title: "蛀蟲",
    category: "木材害蟲",
    icon: "🐛",
    summary: "蛀蟲專門蛀食木材，對木製家具和建築造成損害。",
    danger: "中度危害",
    commonPlaces: ["木製家具", "地板", "木樑"],
  },
  {
    id: "pest-009",
    slug: "flea",
    title: "跳蚤",
    category: "寄生蟲",
    icon: "🦟",
    summary: "跳蚤常寄生在寵物身上，叮咬人體造成搔癢，也可能傳播疾病。",
    danger: "中度危害",
    commonPlaces: ["寵物身上", "地毯", "床墊"],
  },
];

// 分類列表
const categories = ["全部", "木材害蟲", "衛生害蟲", "齧齒類", "飛行害蟲", "過敏原", "家居害蟲", "寄生蟲"];

// 危害等級顏色
const dangerColors: Record<string, string> = {
  "高度危害": "bg-error text-white",
  "中度危害": "bg-orange-500 text-white",
  "輕度危害": "bg-accent text-white",
};

export function PestsGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // 篩選邏輯
  const filteredPests = pestsData.filter((pest) => {
    const matchesSearch =
      pest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.commonPlaces.some((place) => place.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "全部" || pest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* 搜索框 */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
          <Input
            type="text"
            placeholder="搜尋害蟲名稱、特徵或出沒地點..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 text-base"
          />
        </div>
      </div>

      {/* 分類篩選 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-primary hover:bg-surface shadow-card border border-surface/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 結果統計 */}
      <div className="mb-6 text-center text-text-secondary">
        共找到 <span className="font-semibold text-primary">{filteredPests.length}</span> 種害蟲
      </div>

      {/* 害蟲網格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredPests.map((pest) => (
          <Link
            key={pest.id}
            href={`/pests/${pest.slug}`}
            className="group"
          >
            <div className="bg-white rounded-sm border border-surface/30 shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden h-full flex flex-col">
              {/* 頭部 */}
              <div className="bg-surface/20 p-6 text-center">
                <div className="text-6xl mb-3">{pest.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {pest.title}
                </h3>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 rounded-full bg-white text-text-secondary">
                    {pest.category}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${dangerColors[pest.danger]}`}>
                    {pest.danger}
                  </span>
                </div>
              </div>

              {/* 內容 */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-text-secondary mb-4 flex-1">
                  {pest.summary}
                </p>

                {/* 常見出沒地點 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2">
                    常見出沒地點：
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pest.commonPlaces.map((place, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-surface/30 text-text-secondary border border-surface/50"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 查看更多 */}
                <div className="mt-4 text-primary text-sm font-medium group-hover:underline">
                  了解更多 →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 無結果提示 */}
      {filteredPests.length === 0 && (
        <div className="text-center py-16 bg-white rounded-sm border border-surface/30 shadow-card max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-lg text-text-secondary mb-4">
            找不到符合條件的害蟲
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("全部");
            }}
            className="text-primary hover:underline"
          >
            清除搜尋條件
          </button>
        </div>
      )}

      {/* 額外資訊 */}
      <div className="mt-12 max-w-4xl mx-auto bg-white border border-surface/40 rounded-sm p-8 text-center">
        <h3 className="text-xl font-semibold text-primary mb-3">
          找不到您遇到的害蟲？
        </h3>
        <p className="text-text-secondary mb-6">
          歡迎聯絡我們，專業團隊將協助您辨識並提供最適合的防治方案
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded bg-primary text-white font-medium hover:shadow-lg transition-all"
        >
          立即諮詢
        </Link>
      </div>
    </div>
  );
}

