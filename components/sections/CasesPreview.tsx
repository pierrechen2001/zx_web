import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// 精選實績範例資料（實際使用時從 MDX 讀取）
const featuredCases = [
  {
    id: "case-001",
    title: "台北市大安區住宅白蟻防治",
    location: "台北市大安區",
    type: "居家",
    image: "/images/cases/placeholder-1.jpg",
  },
  {
    id: "case-002",
    title: "新北市三重區餐廳蟑螂防治",
    location: "新北市三重區",
    type: "餐廳",
    image: "/images/cases/placeholder-2.jpg",
  },
  {
    id: "case-003",
    title: "台南市中西區古蹟白蟻處理",
    location: "台南市中西區",
    type: "文化資產",
    image: "/images/cases/placeholder-3.jpg",
  },
  {
    id: "case-004",
    title: "桃園市中壢區工廠老鼠防治",
    location: "桃園市中壢區",
    type: "工廠",
    image: "/images/cases/placeholder-4.jpg",
  },
  {
    id: "case-005",
    title: "台北市信義區住宅塵蟎處理",
    location: "台北市信義區",
    type: "居家",
    image: "/images/cases/placeholder-5.jpg",
  },
  {
    id: "case-006",
    title: "新竹市東區辦公室螞蟻防治",
    location: "新竹市東區",
    type: "辦公室",
    image: "/images/cases/placeholder-6.jpg",
  },
];

export function CasesPreview() {
  return (
    <section className="section-padding bg-surface/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            施作實績
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            超過千件成功案例，客戶滿意度超過 95%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.id}`}
              className="group"
            >
              <div className="rounded-sm overflow-hidden hover:shadow-card-hover transition-all duration-200">
                <div className="relative h-48 bg-surface/30 overflow-hidden border border-surface/40">
                  <div className="absolute inset-0 bg-surface/20 flex items-center justify-center">
                    <span className="text-6xl opacity-40">📸</span>
                  </div>
                  {/* 實際使用時替換為真實圖片 */}
                  {/* <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  /> */}
                  <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    {caseItem.type}
                  </div>
                </div>
                <div className="p-4 bg-surface/30 border-l border-r border-b border-surface/40">
                  <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm text-text-secondary flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {caseItem.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/cases">
              查看更多實績
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

