import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const faqItems = [
  {
    question: "施工前需要準備什麼？",
    answer: "施工前請將食物、餐具收納好，移開施作區域的物品，並確保寵物不在施作區域。我們會在現場勘查時詳細說明。",
  },
  {
    question: "藥劑對人體和寵物有害嗎？",
    answer: "我們使用的都是經政府核可、對人體和寵物友善的環保藥劑。施工後依照建議時間通風，即可安心居住。",
  },
  {
    question: "多久可以到府服務？",
    answer: "接到需求後，我們會盡快安排勘查時間。一般情況下 1-3 個工作天即可到府，緊急情況可當日處理。",
  },
  {
    question: "價格怎麼計算？",
    answer: "價格依據害蟲種類、施作面積、嚴重程度而定。我們提供免費現場評估，報價透明公開，絕不額外加價。",
  },
  {
    question: "是否提供保固？",
    answer: "是的，我們提供完善的保固服務。保固期間內如有問題，提供免費複檢與處理服務。",
  },
];

export function FAQPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            常見問題
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            解答您對害蟲防治的疑問
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-sm p-6 border-l-2 border-l-primary/40 bg-surface/20 hover:bg-surface/30 transition-colors"
            >
              <h3 className="font-semibold text-text-primary mb-3 flex items-start">
                <span className="flex-shrink-0 text-primary font-bold mr-2">Q:</span>
                {item.question}
              </h3>
              <p className="text-text-secondary pl-9">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/faq">
              查看更多問題
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

