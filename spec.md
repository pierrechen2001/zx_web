中星害蟲驅除有限公司｜官方網站製作說明
品牌調性：溫暖但專業、居家風格、溫馨、大地色系。
競品參考：慢半拍（溫暖氛圍）、林尚毅建築師留言板（聯絡流程參考）、鼎鈞全方位消毒（內容與排版結構）。
本案不含動態文章後台管理（Blog 內容以靜態檔案維護）。



1. 技術棧（Tech Stack）
前端框架：Next.js 15（App Router）+ React 19 + TypeScript


樣式系統：Tailwind CSS（含自訂 CSS Variables 配色）+ shadcn/ui（按需）


圖片：next/image（自動壓縮/懶載入），支援 AVIF / WebP


內容來源：


靜態文章 → MDX（/content/pests/.mdx、/content/faq/.mdx）


施作實績 → JSON/MDX（/content/cases/*.mdx）


表單寄信：Next.js Route Handler（/api/contact）+ Nodemailer（或 SendGrid）


防濫用：reCAPTCHA v3（或 Cloudflare Turnstile）+ 伺服器端驗證 + 速率限制（Upstash Ratelimit）


部署：Vercel（Preview/Production）、自訂網域綁定


分析：Google Analytics v4（或 Umami）


SEO：next-seo + JSON‑LD（PestControlService）+ 自動 sitemap/robots（next-sitemap）


版本管理：GitHub Flow（main / feature branches / PR）



2. 資料與檔案結構（Content & Repo）
repo-root/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx               # 首頁
│  │  ├─ pests/                  # 害蟲介紹（列表頁 + 動態路由）
│  │  │  ├─ page.tsx            # 列表
│  │  │  └─ [slug]/page.tsx     # 單篇（由 MDX 產出）
│  │  ├─ cases/
│  │  │  ├─ page.tsx            # 實績列表（照片牆）
│  │  │  └─ [id]/page.tsx       # 單案（可選）
│  │  ├─ faq/page.tsx
│  │  └─ contact/page.tsx
│  ├─ api/contact/route.ts      # 聯絡表單 API（寄信）
│  └─ sitemap.ts / robots.ts
├─ components/                   # Header, Footer, Hero, CTA, Card, MasonryGrid...
├─ styles/                       # globals.css, tailwind config tokens
├─ content/
│  ├─ pests/                     # 白蟻、蟑螂、老鼠、跳蚤、塵蟎..
│  ├─ cases/                     # 實績（MDX/JSON）
│  └─ faq/                       # QA（MDX）
├─ public/                       # favicon、社群分享圖（OG）
└─ scripts/                      # 內容驗證/產圖工具（可選）

3. UI / 視覺設計規範（Design System）
3.1 配色（大地色系）
Primary：#7A5C44（棕）


Secondary(大區塊色)：#C8B596（沙）


Accent：#A3B18A（橄欖綠）


Surface(背景底色)：#F1e0d0（米白）


Text 主：#5a5a5a，Text 次：#766d63


成功/錯誤：#0E9F6E / #E23D28


3.2 文字（排版）
標題：Pretendard / Noto Sans TC（700/600）


內文：Noto Sans TC（400/500）


行高：1.6；段前段後：8–16px；列表縮排：24px


3.3 元件庫（主要元件）
Header（含 LOGO、主選單、行動版漢堡）


Hero（居家溫暖場景 + 簡短價值主張 + 立即諮詢 CTA）


ServiceCard（服務項目卡）


AdvantageList（選擇我們的優點）


MasonryGrid（照片牆）


FAQ Accordion（可展開）


Testimonial（客戶回饋，可先留 placeholder）


ContactForm（表單 + 成功/失敗訊息）


Floating Social Buttons（Line / FB / IG，全站固定右側/右下）


Footer（NAP、營業時間、快速連結、版權）


3.4 影像與圖像
風格：溫暖、自然光、居家環境與施工實景搭配（避免過度商業感）


封面圖建議：家庭客廳/餐廳 + 技師親切互動畫面


照片牆：3–5 欄響應式瀑布流，支援燈箱放大


圖標：簡潔線性 icon（害蟲種類、流程步驟）


可互動背景元素，偶爾隨機一排小螞蟻在背景爬過，鼠標互動：當滑鼠接近一排螞蟻，會從互動處斷開，前排馬以往元方向前進，後排螞蟻被鼠標排斥網鼠標前進方向走
3.5 卡片風格
盡量少直接用色塊當卡片底色，多使用照片或是透明底色






4. 網站地圖與每頁區塊（IA & Page Blocks）
4.1 首頁 
/
Hero：標題（中星害蟲驅除有限公司）、副標（例：守護你的家，遠離害蟲）、CTA（立即諮詢 / 了解服務）


服務項目：	卡片格 → 
建築種類：居家、文化資產、餐廳及工廠
害蟲種類：白蟻、果蠅、蟑螂、老鼠、蚊蠅、蛀蟲、螞蟻、塵蟎、其他（9種）


中星的優點：如「政府立案/合格證照」、「專業評估與保固」、「快速到府」、「居家友善」（安全藥劑、合法合規、透明報價、價格合理）


施作流程：圖解 4–6 步（線上填表 → 現場勘查 → 報價 → 施工 → 後續關懷）


品牌理念/關於我們：簡要敘述 + 實體照片


Footer：公司名稱、統編、地址、電話、營業時間、Email、社群連結、版權、隱私聲明、按鈕（立即預約/LINE 客服）


4.2 害蟲介紹（Blog 形式）
/pests
列表頁：


篩選/標籤：白蟻、果蠅、蟑螂、老鼠、蚊蠅、蛀蟲、螞蟻、塵蟎…


卡片：封面圖、標題、簡述、閱讀更多（點擊可以展開成大的懸浮視窗）


單篇懸浮（由 MDX 驅動、需要SEO）


Hero（標題 + 關鍵圖）
分類（學名、俗名、分類）
習性
專業處理方式（藥劑與方法簡述、環保/安全聲明）
居家自救建議（可做/不可做）


4.3 施作實績 
/cases
照片牆（Masonry）：支援篩選（類型/區域/害蟲種類）


卡片欄位：縮圖、標題、地區、施工類型、簡述


case 照片燈箱：可左右切換同一 case 的其他照片


SEO：/cases/[id] 懸浮單案頁（需要 SEO 細節）


4.4 常見問題 
/faq
手風琴展開，支援內頁搜索（前端過濾即可）


問題群組：價格/流程/安全/保固/藥劑/到府時間…


4.5 聯絡我們 
/contact
聯絡資訊：三重總公司、台南分公司

表單欄位：


姓名（必填）


聯絡方式1（必填，下拉選單選擇聯絡方式項目，需要格式驗證）


聯絡方式2 Email（選填，下拉選單選擇聯絡方式項目，需要格式驗證）


服務地區（縣市/行政區下拉）


需求類型（白蟻/蟑螂/老鼠/跳蚤/塵蟎/其他，複選）


希望聯絡時段（早/午/晚、日期選擇可選）


內容說明（多行文字）


附件上傳（照片，jpg/png ≤ 5MB，可選）


同意條款（必勾）


送出流程：


前端驗證 → reCAPTCHA → POST /api/contact


伺服器驗證 → 寄出 Email（客戶信箱、可 CC 自家備份）


回傳成功/失敗 → 顯示感謝頁（含 LINE 連結、回到首頁 CTA）


信件樣板：品牌色抬頭、表單欄位表格、時間戳、來源頁 URL



5. 互動與響應式規格（UX）
Header：滾動陰影；行動版漢堡展開覆蓋；CTA 常駐


按鈕：:hover 輕微升起陰影；:active 壓下


瀏覽器相容：Chrome / Safari / Edge（最近兩版）；iOS/Android 主流裝置


斷點：sm=640, md=768, lg=1024, xl=1280, 2xl=1536


表單：即時驗證＋明確錯誤訊息；送出中 loading 狀態



6. 內容策略（Copy & Information）
口吻：溫暖、誠懇、可懂的人話，避免過度化學名詞；必要時提供白話註解


首頁標語參考：


「把家交給我們，害蟲就交給專業。」



FAQ 範例題：


施工前需要準備什麼？


有氣味嗎？多久可回家？


價格怎麼計算？是否提供保固？



7. SEO 與結構化資料
基本：


每頁獨立 <title>（含地區 + 服務）與 <meta description>（120–160 字）


友善 URL：/pests/termite、/cases/taipei-apt-2024


Canonical、OG 標籤、Twitter Card（大圖）


自動產生 sitemap.xml、robots.txt；提交至 GSC


在地 SEO（NAP）：


Footer 與 /contact 顯示統一公司名稱、地址、電話、營業時間


Google 商家檔案（說明、服務範圍、照片上傳）


JSON‑LD：@type: PestControlService（含 NAP、服務區域、openingHours、sameAs、hasOfferCatalog）


關鍵字策略：


主要：除蟲、除蟲公司、白蟻防治、蟑螂防治、老鼠防治、全台


長尾：大安區除蟲、木造屋白蟻、租屋蟑螂、嬰幼兒家庭除蟲、寵物友善藥劑


內容內鏈：害蟲介紹 ↔ 實績 ↔ FAQ ↔ 聯絡我們



8. 性能、資安與法遵
性能：


影像尺寸自動化（sizes/srcset）；圖片懶載入；字型採系統字或變體裁切


JS Budget：首屏 JS < 160KB（gz）；避免不必要第三方腳本


資安：


表單 API 速率限制；reCAPTCHA 驗證；附件型別/大小檢查


不落地儲存個資（僅 Email 轉送）；伺服器端清洗/轉義


HTTP 安全標頭（CSP、X‑Frame‑Options、Referrer‑Policy）


法遵：


隱私權政策頁（蒐集目的、保存方式、聯繫窗口）


Cookie Banner（若啟用 GA/第三方追蹤）



9. 開發任務分解（Issue Blueprint）
Foundation


Tailwind/Design Tokens 設定（色票、間距、陰影、圓角）


Layout：Header/Footer、容器寬度、Grid 系統


全域 SEO：next-seo、OG 預設圖


頁面


首頁區塊（Hero/服務/優點/流程/實績/FAQ/CTA）


/pests 列表與動態路由（MDX 渲染）


/cases 照片牆 + 燈箱


/faq 手風琴 + 搜索


/contact 表單 + API + 成功頁


功能


Floating 社群按鈕（全站）


reCAPTCHA v3 / Turnstile 整合


Nodemailer（或 SendGrid）信件模板


Analytics（GA4/Umami）


sitemap/robots 自動化


內容


害蟲 MDX（至少 6 篇）


FAQ MDX（至少 20 題）


實績 12 張以上（授權/壓圖）



10. 表單 API（/api/contact）
Method：POST（JSON）


Payload：


{
  "name": "王小明",
  "phone": "+886-9xx-xxx-xxx",
  "email": "(optional)",
  "region": "台北市/大安區",
  "needs": ["白蟻", "蟑螂"],
  "preferredTime": "晚上",
  "message": "家中廚房常見蟑螂...",
  "photos": ["data:image/png;base64,..."]
}

驗證：後端再驗（必填、型別、長度、電話格式）；附件檢查（MIME/大小）


寄信：To=客戶指定信箱、Subject=[網站聯絡單] 王小明 / 大安區 / 蟑螂、白蟻


回應：200 { ok: true }；429/400/500 對應錯誤碼



11. JSON‑LD 樣板（PestControlService）
{
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "name": "中星害蟲驅除有限公司",
  "image": "https://domain/og.jpg",
  "@id": "https://domain/",
  "url": "https://domain/",
  "telephone": "+886-2-xxxx-xxxx",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "…",
    "addressLocality": "台北市",
    "postalCode": "…",
    "addressCountry": "TW"
  },
  "areaServed": ["台北市", "新北市"],
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/…",
    "https://www.instagram.com/…",
    "https://line.me/…"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "害蟲防治服務",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "白蟻防治"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "蟑螂防治"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "老鼠防治"}}
    ]
  }
}

12. 可交付產物（Deliverables）
設計系統（色票、字體、按鈕/卡片/表單元件規格）


Figma 原型（Desktop/Tablet/Mobile）


程式碼 Repo（含 README、dev script、環境變數範例）


內容檔（MDX/JSON + 圖片資產壓縮）


SEO 套件與 JSON‑LD 實作


表單 API 寄信測試（含測試信件截圖）


部署與網域設定文件（包含 DNS 設定、301 與 Canonical）



13. 驗收清單（UAT / Launch Checklist）
首頁各區塊文案/圖像就緒，Hero LCP < 2.5s


/pests 至少 6 篇，內有 CTA 與內鏈


/cases 瀑布流 + 燈箱可用，圖片 Lazyload


/faq 展開/收合順暢，內文可搜尋


/contact 表單驗證、reCAPTCHA、成功頁、Email 寄達


Floating Line/FB/IG 正常顯示於所有頁面


JSON‑LD 正確；sitemap/robots 可讀；GSC 驗證成功


Lighthouse（Mobile）Performance ≥ 85、SEO ≥ 95、Accessibility ≥ 95


