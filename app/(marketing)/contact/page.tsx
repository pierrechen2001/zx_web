import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "中星害蟲驅除有限公司聯絡資訊。提供免費諮詢與現場評估服務，歡迎來電或填寫表單，我們將盡快回覆。",
  openGraph: {
    title: "聯絡我們 | 中星害蟲驅除有限公司",
    description: "免費諮詢與現場評估，專業團隊快速為您服務",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              聯絡我們
            </h1>
            <p className="text-xl text-white/90">
              提供免費諮詢與現場評估服務，專業團隊快速為您服務
            </p>
          </div>
        </div>
      </section>

      {/* 聯絡表單區塊 */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-sm p-8 shadow-card border border-surface/30">
            <h2 className="text-xl font-semibold text-primary mb-2">線上諮詢</h2>
            <p className="text-text-secondary mb-6">
              填寫以下表單，我們將在 24 小時內回覆您
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 聯絡資訊區塊 */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
            {/* 三重總公司 */}
            <div className="bg-white rounded-sm p-6 lg:p-8 shadow-card border border-surface/30">
              <h3 className="text-lg font-semibold text-primary mb-4">三重總公司</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-text-primary">新北市三重區</p>
                    <p className="text-sm text-text-secondary">（詳細地址待補充）</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <a href="tel:+886-2-xxxx-xxxx" className="text-text-primary hover:text-primary">
                    02-xxxx-xxxx
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <a href="mailto:contact@example.com" className="text-text-primary hover:text-primary text-sm">
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-text-primary">週一至週五 09:00-18:00</p>
                    <p className="text-text-primary">週六 09:00-17:00</p>
                    <p className="text-text-secondary">週日及國定假日公休</p>
                  </div>
                </div>
                {/* 小地圖 */}
                <div className="mt-4 aspect-video bg-white rounded overflow-hidden border border-surface/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5!2d121.5!3d25.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzAwLjAiTiAxMjHCsDMwJzAwLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* 台南分公司 */}
            <div className="bg-white rounded-sm p-6 lg:p-8 shadow-card border border-surface/30">
              <h3 className="text-lg font-semibold text-primary mb-4">台南分公司</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-text-primary">台南市</p>
                    <p className="text-sm text-text-secondary">（詳細地址待補充）</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <a href="tel:+886-6-xxxx-xxxx" className="text-text-primary hover:text-primary">
                    06-xxxx-xxxx
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <a href="mailto:tainan@example.com" className="text-text-primary hover:text-primary text-sm">
                    tainan@example.com
                  </a>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-text-primary">週一至週五 09:00-18:00</p>
                    <p className="text-text-primary">週六 09:00-17:00</p>
                    <p className="text-text-secondary">週日及國定假日公休</p>
                  </div>
                </div>
                {/* 小地圖 */}
                <div className="mt-4 aspect-video bg-white rounded overflow-hidden border border-surface/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5!2d120.2!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiAxMjDCsDEyJzAwLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 社群連結 */}
          <div className="bg-white rounded-sm p-6 lg:p-8 shadow-card border border-surface/30 text-center">
            <h3 className="text-lg font-semibold text-primary mb-3">社群媒體</h3>
            <p className="text-sm text-text-secondary mb-4">
              關注我們的社群媒體，獲取最新資訊與優惠
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white flex items-center justify-center transition-colors"
                aria-label="LINE"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#1464d4] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white flex items-center justify-center transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

