import Image from "next/image";

export function AboutSection() {
  return (
    <section className="section-padding bg-surface/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 文字內容 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              關於中星
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p className="text-lg leading-relaxed">
                中星害蟲驅除有限公司成立多年，專注於提供專業、安全、有效的害蟲防治服務。我們深知害蟲問題對居家生活與工作環境的影響，因此致力於為每一位客戶提供最適合的解決方案。
              </p>
              <p className="leading-relaxed">
                我們的團隊擁有政府核發的專業證照，使用符合法規的環保藥劑，堅持以客戶的健康與安全為最優先考量。無論是居家住宅、文化資產，還是商業空間，我們都能提供量身訂製的防治方案。
              </p>
              <p className="leading-relaxed">
                「專業」是我們的堅持，「安心」是我們的承諾。選擇中星，讓您的家人與環境遠離害蟲困擾。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-text-secondary">服務年資</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-text-secondary">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-text-secondary">客戶滿意度</div>
              </div>
            </div>
          </div>

          {/* 圖片區域 */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-sm bg-surface/40 overflow-hidden flex items-center justify-center border border-surface/60">
                  <span className="text-6xl">👷</span>
                </div>
                <div className="aspect-[4/3] rounded-sm bg-surface/40 overflow-hidden flex items-center justify-center border border-surface/60">
                  <span className="text-6xl">🏠</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] rounded-sm bg-surface/40 overflow-hidden flex items-center justify-center border border-surface/60">
                  <span className="text-6xl">✅</span>
                </div>
                <div className="aspect-square rounded-sm bg-surface/40 overflow-hidden flex items-center justify-center border border-surface/60">
                  <span className="text-6xl">🛡️</span>
                </div>
              </div>
            </div>
            {/* 實際使用時替換為真實照片 */}
          </div>
        </div>
      </div>
    </section>
  );
}

