import { Hero } from "@/components/sections/Hero";
import { BuildingTypeCards, PestTypeCards } from "@/components/sections/ServiceCard";
import { AdvantageList } from "@/components/sections/AdvantageList";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { CasesPreview } from "@/components/sections/CasesPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  const organizationJsonLd = getOrganizationJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <>
      {/* JSON-LD 結構化資料 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* Hero 區塊 */}
      <Hero />

      {/* 服務項目區塊 - 建築種類 */}
      <section id="services" className="section-padding bg-surface/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              我們的服務
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              提供多元化的害蟲防治服務，滿足不同場域需求
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
              建築種類
            </h3>
            <BuildingTypeCards />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
              害蟲種類
            </h3>
            <PestTypeCards />
          </div>
        </div>
      </section>

      {/* 中星的優點 */}
      <AdvantageList />

      {/* 施作流程 */}
      <ProcessFlow />

      {/* 關於我們 */}
      <AboutSection />

      {/* 施作實績預覽 */}
      <CasesPreview />

      {/* FAQ 預覽 */}
      <FAQPreview />

      {/* CTA 區塊 */}
      <CTASection />
    </>
  );
}

