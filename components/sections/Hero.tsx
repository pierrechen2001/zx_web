import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-surface/50 via-white to-surface/30">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            中星害蟲驅除有限公司
          </h1>
          <p className="text-xl md:text-2xl text-text-primary mb-4 font-medium">
            守護你的家，遠離害蟲
          </p>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl">
            專業、安全、快速到府服務。政府立案，提供完善保固，使用居家友善藥劑，讓您安心無憂。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                <Phone className="w-5 h-5" />
                立即諮詢
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#services">
                了解服務
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* 特色標籤 */}
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 px-4 py-2 text-text-primary border-b-2 border-primary/30">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">政府立案</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 text-text-primary border-b-2 border-primary/30">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">快速到府</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 text-text-primary border-b-2 border-primary/30">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm font-medium">居家友善</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

