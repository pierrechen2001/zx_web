import { Metadata } from "next";
import { PestsGrid } from "@/components/sections/PestsGrid";

export const metadata: Metadata = {
  title: "害蟲介紹",
  description: "深入了解各類害蟲的習性、危害與防治方法。中星害蟲驅除提供專業的害蟲知識與解決方案。",
  openGraph: {
    title: "害蟲介紹 | 中星害蟲驅除有限公司",
    description: "深入了解各類害蟲的習性、危害與防治方法",
  },
};

export default function PestsPage() {
  return (
    <div className="min-h-screen bg-surface/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              害蟲介紹
            </h1>
            <p className="text-xl text-white/90">
              深入了解各類害蟲的習性、危害與防治方法
            </p>
          </div>
        </div>
      </section>

      {/* Pests Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          <PestsGrid />
        </div>
      </section>
    </div>
  );
}

