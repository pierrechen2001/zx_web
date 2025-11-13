import { Metadata } from "next";
import { CasesGrid } from "@/components/sections/CasesGrid";

export const metadata: Metadata = {
  title: "施作實績",
  description: "中星害蟲驅除有限公司成功案例展示，包含居家、文化資產、餐廳及工廠等各類害蟲防治實績。專業團隊，值得信賴。",
  openGraph: {
    title: "施作實績 | 中星害蟲驅除有限公司",
    description: "查看我們的成功案例，超過千件施作實績，客戶滿意度超過 95%",
  },
};

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              施作實績
            </h1>
            <p className="text-xl text-white/90">
              超過千件成功案例，客戶滿意度超過 95%
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          <CasesGrid />
        </div>
      </section>
    </div>
  );
}

