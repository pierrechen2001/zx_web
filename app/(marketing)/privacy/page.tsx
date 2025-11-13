import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "中星害蟲驅除有限公司隱私權政策，說明個人資料蒐集、使用與保護方式。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              隱私權政策
            </h1>
            <p className="text-xl text-white/90">
              最後更新日期：2024年11月
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-surface/30 rounded-sm p-8 md:p-12 shadow-card border border-surface/30">
            <div className="prose prose-lg max-w-none">
              {/* 前言 */}
              <div className="mb-8">
                <p className="text-text-primary leading-relaxed">
                  中星害蟲驅除有限公司（以下簡稱「本公司」）重視您的隱私權保護，並遵守中華民國個人資料保護法（以下簡稱「個資法」）之規定。本隱私權政策說明本公司如何蒐集、處理及利用您的個人資料。
                </p>
              </div>

              {/* 1. 個人資料的蒐集 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  一、個人資料的蒐集
                </h2>
                <p className="text-text-primary mb-3">
                  當您使用本公司服務或與我們聯繫時，我們可能會蒐集以下個人資料：
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-primary ml-4">
                  <li>基本資料：姓名、性別、出生年月日</li>
                  <li>聯絡資訊：電話號碼、電子郵件地址、聯絡地址、LINE ID</li>
                  <li>服務相關資訊：服務地區、害蟲問題描述、希望聯絡時段</li>
                  <li>交易資訊：服務項目、費用、付款方式</li>
                  <li>其他您主動提供的資訊</li>
                </ul>
              </section>

              {/* 2. 個人資料的使用目的 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  二、個人資料的使用目的
                </h2>
                <p className="text-text-primary mb-3">
                  本公司蒐集您的個人資料，將用於以下目的：
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-primary ml-4">
                  <li>提供害蟲防治服務與相關諮詢</li>
                  <li>服務預約與現場評估安排</li>
                  <li>客戶服務與售後追蹤</li>
                  <li>帳務處理與交易管理</li>
                  <li>法律義務之履行</li>
                  <li>行銷與活動通知（僅在您同意的情況下）</li>
                  <li>改善服務品質與客戶體驗</li>
                </ul>
              </section>

              {/* 3. 個人資料的利用期間、地區、對象及方式 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  三、個人資料的利用期間、地區、對象及方式
                </h2>
                
                <h3 className="text-lg font-semibold text-primary mt-4 mb-2">利用期間：</h3>
                <p className="text-text-primary mb-3">
                  自您提供個人資料之時起，至服務完成後五年或法律規定之保存期限（以較長者為準）。若您要求刪除或停止使用，本公司將依您的要求處理，但法律另有規定者除外。
                </p>

                <h3 className="text-lg font-semibold text-primary mt-4 mb-2">利用地區：</h3>
                <p className="text-text-primary mb-3">
                  台灣地區
                </p>

                <h3 className="text-lg font-semibold text-primary mt-4 mb-2">利用對象：</h3>
                <ul className="list-disc list-inside space-y-2 text-text-primary ml-4 mb-3">
                  <li>本公司及其員工</li>
                  <li>配合之服務人員與承包商</li>
                  <li>依法有權機關</li>
                </ul>

                <h3 className="text-lg font-semibold text-primary mt-4 mb-2">利用方式：</h3>
                <p className="text-text-primary">
                  以自動化機器或其他非自動化之利用方式，在前述利用目的範圍內處理及利用您的個人資料。
                </p>
              </section>

              {/* 4. 個人資料的保護 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  四、個人資料的保護
                </h2>
                <p className="text-text-primary mb-3">
                  本公司採取適當的安全措施保護您的個人資料，包括但不限於：
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-primary ml-4">
                  <li>實體安全：辦公室門禁管制、文件上鎖保管</li>
                  <li>資訊安全：加密傳輸、存取權限控管、防火牆保護</li>
                  <li>人員管理：員工保密協議、定期教育訓練</li>
                  <li>定期檢視與更新資安措施</li>
                </ul>
              </section>

              {/* 5. 您的權利 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  五、您的權利
                </h2>
                <p className="text-text-primary mb-3">
                  依據個資法，您對於本公司持有的個人資料享有以下權利：
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-primary ml-4">
                  <li>查詢或請求閱覽</li>
                  <li>請求製給複製本</li>
                  <li>請求補充或更正</li>
                  <li>請求停止蒐集、處理或利用</li>
                  <li>請求刪除</li>
                </ul>
                <p className="text-text-primary mt-3">
                  若您欲行使上述權利，請透過以下方式聯繫我們：
                </p>
                <ul className="list-none space-y-1 text-text-primary ml-4 mt-2">
                  <li>電話：02-xxxx-xxxx</li>
                  <li>Email：contact@example.com</li>
                  <li>地址：新北市三重區（詳細地址待補充）</li>
                </ul>
              </section>

              {/* 6. Cookie 使用說明 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  六、Cookie 使用說明
                </h2>
                <p className="text-text-primary mb-3">
                  本網站使用 Cookie 技術以提升使用者體驗。Cookie 是網站傳送至您的瀏覽器並儲存於您電腦硬碟的小型文字檔案。我們使用 Cookie 用於：
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-primary ml-4">
                  <li>記住您的偏好設定</li>
                  <li>分析網站流量與使用情況</li>
                  <li>改善網站功能與服務</li>
                </ul>
                <p className="text-text-primary mt-3">
                  您可以透過瀏覽器設定拒絕或刪除 Cookie，但可能會影響部分網站功能的使用。
                </p>
              </section>

              {/* 7. 第三方連結 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  七、第三方連結
                </h2>
                <p className="text-text-primary">
                  本網站可能包含第三方網站的連結。請注意，本隱私權政策僅適用於本公司網站，不適用於連結的第三方網站。我們建議您閱讀第三方網站的隱私權政策。
                </p>
              </section>

              {/* 8. 隱私權政策修訂 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  八、隱私權政策修訂
                </h2>
                <p className="text-text-primary">
                  本公司保留隨時修訂本隱私權政策的權利。修訂後的政策將公布於本網站，並於公布時生效。建議您定期查閱本隱私權政策以了解最新資訊。
                </p>
              </section>

              {/* 9. 聯絡我們 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  九、聯絡我們
                </h2>
                <p className="text-text-primary mb-3">
                  如果您對本隱私權政策有任何疑問，或希望行使您的個人資料相關權利，請透過以下方式聯繫我們：
                </p>
                <div className="bg-surface/50 rounded p-6 mt-4">
                  <p className="text-text-primary font-semibold mb-2">中星害蟲驅除有限公司</p>
                  <p className="text-text-primary">地址：新北市三重區（詳細地址待補充）</p>
                  <p className="text-text-primary">電話：02-xxxx-xxxx</p>
                  <p className="text-text-primary">Email：contact@example.com</p>
                  <p className="text-text-primary mt-2">營業時間：週一至週五 09:00-18:00，週六 09:00-17:00</p>
                </div>
              </section>

              {/* 生效日期 */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-text-secondary text-center">
                  本隱私權政策自 2024 年 11 月起生效
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

