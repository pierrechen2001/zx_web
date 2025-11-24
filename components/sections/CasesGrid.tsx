"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/interactive/Lightbox";
import { MapPin, Filter, Maximize2 } from "lucide-react";

// 實績案例類型定義
interface CaseItem {
  id: string;
  title: string;
  location: string;
  region: string;
  type: string;
  pestType: string;
  description: string;
  date: string;
  image?: string;
}

// 範例資料（實際使用時從 MDX 讀取）
const casesData: CaseItem[] = [
  {
    id: "case-001",
    title: "台北市大安區住宅白蟻防治",
    location: "台北市大安區",
    region: "台北市",
    type: "居家",
    pestType: "白蟻",
    description: "老舊公寓白蟻防治，施工後定期追蹤，確保無復發",
    date: "2024-11",
  },
  {
    id: "case-002",
    title: "新北市三重區餐廳蟑螂防治",
    location: "新北市三重區",
    region: "新北市",
    type: "餐廳",
    pestType: "蟑螂",
    description: "餐廳廚房蟑螂防治，使用食品級安全藥劑",
    date: "2024-10",
  },
  {
    id: "case-003",
    title: "台南市中西區古蹟白蟻處理",
    location: "台南市中西區",
    region: "台南市",
    type: "文化資產",
    pestType: "白蟻",
    description: "古蹟建築白蟻防治，採用特殊工法保護建築結構",
    date: "2024-09",
  },
  {
    id: "case-004",
    title: "桃園市中壢區工廠老鼠防治",
    location: "桃園市中壢區",
    region: "桃園市",
    type: "工廠",
    pestType: "老鼠",
    description: "工廠倉庫老鼠防治，設置多重防護措施",
    date: "2024-09",
  },
  {
    id: "case-005",
    title: "台北市信義區住宅塵蟎處理",
    location: "台北市信義區",
    region: "台北市",
    type: "居家",
    pestType: "塵蟎",
    description: "居家塵蟎清除，針對過敏體質家庭特別處理",
    date: "2024-08",
  },
  {
    id: "case-006",
    title: "新竹市東區辦公室螞蟻防治",
    location: "新竹市東區",
    region: "新竹市",
    type: "辦公室",
    pestType: "螞蟻",
    description: "辦公大樓螞蟻防治，不影響正常辦公作息",
    date: "2024-08",
  },
  {
    id: "case-007",
    title: "台北市松山區住宅蚊蠅防治",
    location: "台北市松山區",
    region: "台北市",
    type: "居家",
    pestType: "蚊蠅",
    description: "居家蚊蠅防治，環境友善安全無毒",
    date: "2024-07",
  },
  {
    id: "case-008",
    title: "新北市板橋區餐廳綜合防治",
    location: "新北市板橋區",
    region: "新北市",
    type: "餐廳",
    pestType: "蟑螂",
    description: "餐廳定期防治服務，保持環境衛生",
    date: "2024-07",
  },
  {
    id: "case-009",
    title: "台南市安平區住宅白蟻防治",
    location: "台南市安平區",
    region: "台南市",
    type: "居家",
    pestType: "白蟻",
    description: "透天厝白蟻全面防治，含地基處理",
    date: "2024-06",
  },
  {
    id: "case-010",
    title: "桃園市桃園區工廠蟑螂防治",
    location: "桃園市桃園區",
    region: "桃園市",
    type: "工廠",
    pestType: "蟑螂",
    description: "食品工廠蟑螂防治，符合食安標準",
    date: "2024-06",
  },
  {
    id: "case-011",
    title: "台北市中山區住宅跳蚤防治",
    location: "台北市中山區",
    region: "台北市",
    type: "居家",
    pestType: "跳蚤",
    description: "寵物家庭跳蚤防治，對寵物安全",
    date: "2024-05",
  },
  {
    id: "case-012",
    title: "新北市新莊區辦公室螞蟻防治",
    location: "新北市新莊區",
    region: "新北市",
    type: "辦公室",
    pestType: "螞蟻",
    description: "辦公室螞蟻防治，快速有效不影響工作",
    date: "2024-05",
  },
];

export function CasesGrid() {
  const [selectedType, setSelectedType] = useState<string>("全部");
  const [selectedRegion, setSelectedRegion] = useState<string>("全部");
  const [selectedPest, setSelectedPest] = useState<string>("全部");
  const [showFilters, setShowFilters] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 篩選選項
  const types = ["全部", "居家", "文化資產", "餐廳", "工廠", "辦公室"];
  const regions = ["全部", "台北市", "新北市", "桃園市", "新竹市", "台南市"];
  const pestTypes = ["全部", "白蟻", "蟑螂", "老鼠", "蚊蠅", "塵蟎", "螞蟻", "跳蚤"];

  // 篩選邏輯
  const filteredCases = casesData.filter((caseItem) => {
    const typeMatch = selectedType === "全部" || caseItem.type === selectedType;
    const regionMatch = selectedRegion === "全部" || caseItem.region === selectedRegion;
    const pestMatch = selectedPest === "全部" || caseItem.pestType === selectedPest;
    return typeMatch && regionMatch && pestMatch;
  });

  return (
    <div>
      {/* 篩選按鈕（行動版） */}
      <div className="mb-6 md:hidden">
        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="w-full"
        >
          <Filter className="w-4 h-4 mr-2" />
          篩選條件 {(selectedType !== "全部" || selectedRegion !== "全部" || selectedPest !== "全部") && "(已篩選)"}
        </Button>
      </div>

      {/* 篩選區塊 */}
      <div className={`mb-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="bg-surface/30 rounded-sm p-6 shadow-card border border-surface/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 建築類型篩選 */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                建築類型
              </label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                      selectedType === type
                        ? "bg-primary text-white shadow-md"
                        : "bg-surface/30 text-text-primary hover:bg-surface/20 border border-surface/30"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 地區篩選 */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                服務地區
              </label>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                      selectedRegion === region
                        ? "bg-primary text-white shadow-md"
                        : "bg-surface/30 text-text-primary hover:bg-surface/20 border border-surface/30"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* 害蟲種類篩選 */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                害蟲種類
              </label>
              <div className="flex flex-wrap gap-2">
                {pestTypes.map((pest) => (
                  <button
                    key={pest}
                    onClick={() => setSelectedPest(pest)}
                    className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                      selectedPest === pest
                        ? "bg-primary text-white shadow-md"
                        : "bg-surface/30 text-text-primary hover:bg-surface/20 border border-surface/30"
                    }`}
                  >
                    {pest}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 清除篩選 */}
          {(selectedType !== "全部" || selectedRegion !== "全部" || selectedPest !== "全部") && (
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                onClick={() => {
                  setSelectedType("全部");
                  setSelectedRegion("全部");
                  setSelectedPest("全部");
                }}
                variant="ghost"
                size="sm"
              >
                清除所有篩選
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* 結果統計 */}
      <div className="mb-6 text-text-secondary">
        共找到 <span className="font-semibold text-primary">{filteredCases.length}</span> 個案例
      </div>

      {/* 案例網格（瀑布流風格） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {filteredCases.map((caseItem) => (
          <div key={caseItem.id} className="group">
            <div className="rounded-sm overflow-hidden hover:shadow-card-hover transition-all duration-200 bg-surface/30 h-full flex flex-col border border-surface/30">
              {/* 圖片區域 */}
              <div className="relative h-48 bg-surface/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📸</span>
                </div>
                {/* 實際使用時替換為真實圖片 */}
                
                {/* 放大按鈕 */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // 實際使用時，傳入該案例的所有圖片
                    setLightboxImages([`/images/cases/${caseItem.id}-1.jpg`]);
                    setLightboxIndex(0);
                    setLightboxOpen(true);
                  }}
                  className="absolute top-3 left-3 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  aria-label="查看大圖"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    {caseItem.type}
                  </span>
                  <span className="bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                    {caseItem.pestType}
                  </span>
                </div>
              </div>

              {/* 內容區域 */}
              <Link href={`/cases/${caseItem.id}`} className="p-5 flex-1 flex flex-col bg-surface/30">
                <h3 className="text-base font-medium text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3 line-clamp-2 flex-1">
                  {caseItem.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {caseItem.location}
                  </div>
                  <div>{caseItem.date}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 燈箱 */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* 無結果提示 */}
      {filteredCases.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-lg text-text-secondary mb-4">
            找不到符合條件的案例
          </p>
          <Button
            onClick={() => {
              setSelectedType("全部");
              setSelectedRegion("全部");
              setSelectedPest("全部");
            }}
            variant="secondary"
          >
            清除篩選條件
          </Button>
        </div>
      )}
    </div>
  );
}

