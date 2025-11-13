import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "害蟲介紹", href: "/pests" },
  { name: "施作實績", href: "/cases" },
  { name: "常見問題", href: "/faq" },
  { name: "聯絡我們", href: "/contact" },
  { name: "隱私權政策", href: "/privacy" },
];

const services = [
  "白蟻防治",
  "蟑螂防治",
  "老鼠防治",
  "蚊蠅防治",
  "塵蟎防治",
  "螞蟻防治",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 公司資訊 */}
          <div>
            <h3 className="text-xl font-bold mb-4">中星害蟲驅除有限公司</h3>
            <p className="text-white/80 mb-4">
              專業、安全、快速到府服務<br />
              守護您的家，遠離害蟲
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center transition-colors text-white"
                aria-label="LINE"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服務項目 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服務項目</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p className="font-medium text-white">三重總公司</p>
                  <p className="text-sm">新北市三重區（詳細地址待補充）</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p className="font-medium text-white">台南分公司</p>
                  <p className="text-sm">台南市（詳細地址待補充）</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+886-2-xxxx-xxxx" className="text-white/80 hover:text-white">
                  02-xxxx-xxxx
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@example.com" className="text-white/80 hover:text-white">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>週一至週五 09:00-18:00</p>
                  <p>週六 09:00-17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 區塊 */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">需要害蟲防治服務？</h3>
            <p className="text-white/80 mb-4">立即聯絡我們，專業團隊快速為您服務</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">
                  立即預約
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-accent text-white hover:bg-accent/90">
                <a href="https://line.me/" target="_blank" rel="noopener noreferrer">
                  LINE 客服
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>© {currentYear} 中星害蟲驅除有限公司。保留所有權利。</p>
          <p className="mt-1">
            統一編號：待補充 | 營業登記：待補充
          </p>
        </div>
      </div>
    </footer>
  );
}

