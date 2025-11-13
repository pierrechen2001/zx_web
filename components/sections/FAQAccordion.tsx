"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// FAQ 資料類型
interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// FAQ 資料（實際使用時從 MDX 讀取）
const faqData: FAQItem[] = [
  // 流程相關
  {
    id: "faq-001",
    category: "流程相關",
    question: "施工前需要準備什麼？",
    answer: "施工前請將食物、餐具收納好，移開施作區域的物品，並確保寵物不在施作區域。我們會在現場勘查時詳細說明需要準備的事項。",
  },
  {
    id: "faq-002",
    category: "流程相關",
    question: "整個除蟲流程需要多久時間？",
    answer: "依據害蟲種類和嚴重程度而定。一般居家施工約需 2-4 小時，商業空間可能需要更長時間。我們會在報價時告知預估施工時間。",
  },
  {
    id: "faq-003",
    category: "流程相關",
    question: "需要幾次施工才能完全清除？",
    answer: "大多數情況下一次施工即可見效，但某些害蟲（如白蟻、蟑螂）可能需要 2-3 次施工以確保徹底清除。我們會根據現場狀況提供建議。",
  },
  {
    id: "faq-004",
    category: "流程相關",
    question: "可以指定施工時間嗎？",
    answer: "可以的。我們提供彈性的預約時間，包含平日、假日及夜間服務。請提前預約，我們會盡量配合您的時間需求。",
  },
  {
    id: "faq-005",
    category: "流程相關",
    question: "施工時需要在場嗎？",
    answer: "建議至少有一位成年人在場，以便我們說明施工內容和注意事項。如果無法在場，請提前告知，我們會安排適當的處理方式。",
  },

  // 安全相關
  {
    id: "faq-006",
    category: "安全相關",
    question: "有氣味嗎？多久可回家？",
    answer: "我們使用的藥劑氣味較淡，通常施工後通風 2-3 小時即可返家。部分藥劑可能會有輕微氣味，建議多通風即可散去。",
  },
  {
    id: "faq-007",
    category: "安全相關",
    question: "藥劑對人體有害嗎？",
    answer: "我們使用經政府核可的環保藥劑，依照正確使用方法對人體無害。施工後依照建議時間通風，即可安心居住。所有藥劑均符合環保署規範。",
  },
  {
    id: "faq-008",
    category: "安全相關",
    question: "家中有嬰幼兒/寵物，是否安全？",
    answer: "我們使用的藥劑對嬰幼兒和寵物友善。施工時建議將嬰幼兒和寵物暫時移至其他房間，施工後通風 2-3 小時即可。如有特殊需求，我們可以使用更溫和的藥劑。",
  },
  {
    id: "faq-009",
    category: "安全相關",
    question: "會污染食物或餐具嗎？",
    answer: "不會。我們會請您將食物和餐具收納好。施工時會特別注意避開廚房用品，使用精準噴灑技術，確保不會污染食品。",
  },
  {
    id: "faq-010",
    category: "安全相關",
    question: "施工後需要大掃除嗎？",
    answer: "一般不需要。我們的施工方式不會造成環境髒亂。建議施工後以清水擦拭經常接觸的表面（如桌面、門把），其他區域維持正常清潔即可。",
  },

  // 價格相關
  {
    id: "faq-011",
    category: "價格相關",
    question: "價格怎麼計算？",
    answer: "價格依據害蟲種類、施作面積、嚴重程度而定。我們提供免費現場評估，報價透明公開，絕不額外加價。歡迎來電詢問基本價格範圍。",
  },
  {
    id: "faq-012",
    category: "價格相關",
    question: "是否提供保固？",
    answer: "是的，我們提供完善的保固服務。依據不同害蟲種類，保固期為 3 個月至 2 年不等。保固期間內如有問題，提供免費複檢與處理服務。",
  },
  {
    id: "faq-013",
    category: "價格相關",
    question: "後續維護需要額外費用嗎？",
    answer: "保固期內的複檢與追蹤服務完全免費。如需定期維護服務，我們提供優惠的年約方案。詳細內容請洽詢客服。",
  },
  {
    id: "faq-014",
    category: "價格相關",
    question: "可以開立發票嗎？",
    answer: "可以。我們是合法立案公司，可開立二聯式或三聯式發票。如需統編，請在預約時告知。",
  },
  {
    id: "faq-015",
    category: "價格相關",
    question: "有提供優惠方案嗎？",
    answer: "我們不定期推出優惠活動，也提供多次施工折扣、年約方案等優惠。請關注我們的官網和社群媒體，或來電詢問當期優惠。",
  },

  // 服務相關
  {
    id: "faq-016",
    category: "服務相關",
    question: "服務範圍包含哪些地區？",
    answer: "主要服務範圍為台北市、新北市、桃園市、新竹縣市、台南市。其他地區請來電詢問，我們會評估是否能提供服務。",
  },
  {
    id: "faq-017",
    category: "服務相關",
    question: "多久可以到府服務？",
    answer: "接到需求後，我們會盡快安排勘查時間。一般情況下 1-3 個工作天即可到府，緊急情況可當日處理。",
  },
  {
    id: "faq-018",
    category: "服務相關",
    question: "緊急情況可以當天處理嗎？",
    answer: "可以。如遇緊急狀況（如大量害蟲出現、影響營業等），請來電說明情況，我們會盡力安排當日處理。",
  },
  {
    id: "faq-019",
    category: "服務相關",
    question: "你們有合法證照嗎？",
    answer: "有的。我們是政府立案的合法公司，持有病媒防治業許可執照，施工人員均具備專業證照。歡迎查驗相關證件。",
  },
  {
    id: "faq-020",
    category: "服務相關",
    question: "可以處理所有種類的害蟲嗎？",
    answer: "是的。我們提供全方位害蟲防治服務，包含白蟻、蟑螂、老鼠、蚊蠅、塵蟎、螞蟻、跳蚤等各類害蟲。如有特殊害蟲問題，歡迎來電諮詢。",
  },
];

// 分類列表
const categories = ["全部", "流程相關", "安全相關", "價格相關", "服務相關"];

export function FAQAccordion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // 篩選邏輯
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "全部" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 按分類分組
  const faqsByCategory = categories
    .filter((cat) => cat !== "全部")
    .map((category) => ({
      category,
      items: filteredFAQs.filter((faq) => faq.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 搜索框 */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
          <Input
            type="text"
            placeholder="搜尋問題..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 text-base"
          />
        </div>
      </div>

      {/* 分類篩選 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
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
      <div className="mb-6 text-text-secondary">
        共找到 <span className="font-semibold text-primary">{filteredFAQs.length}</span> 個問題
      </div>

      {/* FAQ 列表（按分類） */}
      {selectedCategory === "全部" ? (
        <div className="space-y-8">
          {faqsByCategory.map((group) => (
            <div key={group.category}>
              <h2 className="text-2xl font-bold text-primary mb-4">
                {group.category}
              </h2>
              <Accordion type="multiple" className="space-y-3">
                {group.items.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-white rounded-sm shadow-card px-6 border border-surface/30"
                  >
                    <AccordionTrigger className="text-left font-semibold text-text-primary hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        <Accordion type="multiple" className="space-y-3">
          {filteredFAQs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white rounded-sm shadow-card px-6 border border-surface/30"
            >
              <AccordionTrigger className="text-left font-semibold text-text-primary hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {/* 無結果提示 */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-16 bg-white rounded-sm shadow-card border border-surface/30">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-lg text-text-secondary mb-4">
            找不到符合條件的問題
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
    </div>
  );
}

