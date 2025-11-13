import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            立即解決您的害蟲問題
          </h2>
          <p className="text-xl mb-4 text-white/90">
            專業團隊隨時待命，提供快速有效的解決方案
          </p>
          <p className="text-lg mb-8 text-white/80">
            免費現場評估 · 透明報價 · 完善保固
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                <Phone className="w-5 h-5" />
                立即諮詢
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="https://line.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                LINE 聯絡
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold mb-1">24小時服務專線</div>
                <a href="tel:+886-2-xxxx-xxxx" className="text-white/80 hover:text-white">
                  02-xxxx-xxxx
                </a>
              </div>
              <div>
                <div className="text-3xl mb-2">✉️</div>
                <div className="font-semibold mb-1">Email 諮詢</div>
                <a href="mailto:contact@example.com" className="text-white/80 hover:text-white">
                  contact@example.com
                </a>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold mb-1">快速回應</div>
                <div className="text-white/80">
                  1小時內回覆
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

