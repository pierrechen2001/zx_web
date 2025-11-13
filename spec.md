# 中星害蟲驅除有限公司｜官方網站製作說明

## 專案概述
**品牌調性**：溫暖但專業、居家風格、溫馨、大地色系。

**競品參考**：
- 慢半拍（溫暖氛圍）
- 林尚毅建築師留言板（聯絡流程參考）
- 鼎鈞全方位消毒（內容與排版結構）

**重要說明**：本案不含動態文章後台管理（Blog 內容以靜態檔案維護）。

---

## 1. 技術棧（Tech Stack）

### 前端框架
- Next.js 15（App Router）+ React 19 + TypeScript

### 樣式系統
- Tailwind CSS（含自訂 CSS Variables 配色）
- shadcn/ui（按需引入元件）

### 圖片處理
- next/image（自動壓縮/懶載入）
- 支援格式：AVIF / WebP（優先），JPEG/PNG（降級）

### 內容來源
- **靜態文章** → MDX（`/content/pests/*.mdx`、`/content/faq/*.mdx`）
- **施作實績** → JSON/MDX（`/content/cases/*.mdx`）

### 表單與通訊
- **表單寄信**：Next.js Route Handler（`/api/contact`）+ Nodemailer（或 SendGrid）
- **防濫用機制**：
  - reCAPTCHA v3（或 Cloudflare Turnstile）
  - 伺服器端驗證
  - 速率限制（Upstash Ratelimit，建議：每 IP 每小時最多 5 次提交）

### 部署與基礎設施
- **部署平台**：Vercel（Preview/Production）
- **網域**：自訂網域綁定、HTTPS 自動啟用

### 分析與追蹤
- Google Analytics v4（或 Umami）

### SEO 工具
- next-seo（Meta 標籤管理）
- JSON‑LD（PestControlService 結構化資料）
- 自動 sitemap/robots（next-sitemap）

### 版本管理
- GitHub Flow（main / feature branches / PR）

### 環境變數需求
```
# 必要
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contact@example.com
BACKUP_EMAIL=backup@example.com

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key

# 或 Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key

# Upstash (速率限制)
UPSTASH_REDIS_REST_URL=your-redis-url
UPSTASH_REDIS_REST_TOKEN=your-token

# Analytics (選填)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```



## 2. 資料與檔案結構（Content & Repo）

```
repo-root/
├─ app/
│  ├─ (marketing)/               # 行銷頁面群組
│  │  ├─ page.tsx                # 首頁
│  │  ├─ pests/                  # 害蟲介紹（列表頁 + 動態路由）
│  │  │  ├─ page.tsx             # 列表頁
│  │  │  └─ [slug]/page.tsx      # 單篇（由 MDX 產出）
│  │  ├─ cases/                  # 施作實績
│  │  │  ├─ page.tsx             # 實績列表（照片牆）
│  │  │  └─ [id]/page.tsx        # 單案詳情頁（可選）
│  │  ├─ faq/
│  │  │  └─ page.tsx             # 常見問題
│  │  ├─ contact/
│  │  │  └─ page.tsx             # 聯絡我們
│  │  └─ privacy/
│  │     └─ page.tsx             # 隱私權政策
│  ├─ api/
│  │  └─ contact/
│  │     └─ route.ts             # 聯絡表單 API（寄信）
│  ├─ sitemap.ts                 # 自動產生 sitemap
│  └─ robots.ts                  # robots.txt
├─ components/                   # 共用元件
│  ├─ layout/
│  │  ├─ Header.tsx
│  │  └─ Footer.tsx
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ ServiceCard.tsx
│  │  ├─ AdvantageList.tsx
│  │  ├─ MasonryGrid.tsx
│  │  └─ Testimonial.tsx
│  ├─ forms/
│  │  └─ ContactForm.tsx
│  ├─ ui/                        # shadcn/ui 元件
│  └─ interactive/
│     ├─ FloatingSocialButtons.tsx
│     └─ AntAnimation.tsx        # 螞蟻互動動畫
├─ lib/
│  ├─ mdx.ts                     # MDX 處理工具
│  ├─ email.ts                   # 郵件發送工具
│  ├─ validation.ts              # 表單驗證
│  └─ rate-limit.ts              # 速率限制
├─ styles/
│  ├─ globals.css                # 全域樣式
│  └─ tailwind.config.ts         # Tailwind 設定（含設計 tokens）
├─ content/
│  ├─ pests/                     # 害蟲介紹 MDX
│  │  ├─ termite.mdx
│  │  ├─ cockroach.mdx
│  │  └─ ...
│  ├─ cases/                     # 施作實績
│  │  ├─ case-001.mdx
│  │  └─ ...
│  └─ faq/                       # 常見問題 MDX
│     └─ faq.mdx
├─ public/
│  ├─ images/                    # 圖片資源
│  ├─ favicon.ico
│  └─ og-image.jpg               # OG 分享圖
├─ scripts/                      # 工具腳本（可選）
│  ├─ validate-content.ts        # 內容驗證
│  └─ generate-og.ts             # 產生 OG 圖
├─ .env.example                  # 環境變數範例
├─ package.json
├─ tsconfig.json
└─ README.md
```

## 3. UI / 視覺設計規範（Design System）

### 3.1 配色（大地色系）

| 用途 | 色碼 | 說明 |
|------|------|------|
| Primary | `#7A5C44` | 主要品牌色（棕） |
| Secondary | `#C8B596` | 大區塊背景色（沙） |
| Accent | `#A3B18A` | 強調色（橄欖綠） |
| Surface | `#F1E0D0` | 背景底色（米白） |
| Text Primary | `#5A5A5A` | 主要文字色 |
| Text Secondary | `#766D63` | 次要文字色 |
| Success | `#0E9F6E` | 成功狀態 |
| Error | `#E23D28` | 錯誤狀態 |

**Tailwind 設定建議**：
```javascript
colors: {
  primary: '#7A5C44',
  secondary: '#C8B596',
  accent: '#A3B18A',
  surface: '#F1E0D0',
  // ...
}
```

### 3.2 文字（排版）

**字體**：
- **標題**：Pretendard / Noto Sans TC（字重：700/600）
- **內文**：Noto Sans TC（字重：400/500）
- **載入策略**：使用 `next/font` 優化，優先載入系統字體

**排版規範**：
- 行高：`1.6`
- 段前段後間距：`8–16px`
- 列表縮排：`24px`
- 標題層級間距：`h1: 2.5rem, h2: 2rem, h3: 1.75rem`

### 3.3 元件庫（主要元件）

#### Layout 元件
- **Header**：含 LOGO、主選單、行動版漢堡選單、CTA 按鈕
- **Footer**：NAP（公司名稱、地址、電話）、營業時間、快速連結、版權、隱私聲明

#### 內容區塊元件
- **Hero**：居家溫暖場景 + 簡短價值主張 + 立即諮詢 CTA
- **ServiceCard**：服務項目卡片（建築種類、害蟲種類）
- **AdvantageList**：選擇我們的優點（圖示 + 文字）
- **MasonryGrid**：照片牆（瀑布流佈局）
- **FAQ Accordion**：可展開/收合的常見問題
- **Testimonial**：客戶回饋輪播（可先留 placeholder）

#### 表單元件
- **ContactForm**：完整表單 + 即時驗證 + 成功/失敗訊息

#### 互動元件
- **Floating Social Buttons**：Line / FB / IG，全站固定右側/右下角
- **AntAnimation**：可互動背景元素（見 3.4 說明）

### 3.4 影像與圖像

**風格指南**：
- 溫暖、自然光、居家環境與施工實景搭配
- 避免過度商業感、過度修圖
- 優先使用真實場景照片

**圖片規格**：
- **封面圖**：建議尺寸 1920×1080px，家庭客廳/餐廳 + 技師親切互動畫面
- **照片牆**：3–5 欄響應式瀑布流，支援燈箱放大
- **圖標**：簡潔線性 icon（害蟲種類、流程步驟），建議使用 SVG
- **格式**：優先 AVIF/WebP，降級 JPEG/PNG
- **檔案大小**：單張圖片建議 < 200KB（壓縮後）

**互動背景元素**：
- 偶爾隨機一排小螞蟻在背景爬過
- 鼠標互動：當滑鼠接近一排螞蟻時，會從互動處斷開
- 前排螞蟻往原方向前進，後排螞蟻被鼠標排斥往鼠標前進方向走
- 使用 Canvas 或 SVG 動畫實作，注意性能優化

### 3.5 卡片風格

**設計原則**：
- 盡量少直接用色塊當卡片底色
- 多使用照片或透明底色
- 卡片陰影：`0 2px 8px rgba(0, 0, 0, 0.1)`
- 圓角：`8–12px`
- Hover 效果：輕微升起陰影、輕微縮放（`scale(1.02)`）

### 3.6 按鈕與互動

**按鈕樣式**：
- Primary：品牌色背景 + 白色文字
- Secondary：透明背景 + 品牌色邊框
- Hover：輕微升起陰影（`0 4px 12px rgba(0, 0, 0, 0.15)`）
- Active：壓下效果（`scale(0.98)`）
- 過渡動畫：`transition-all duration-200`

**表單輸入**：
- Focus 狀態：品牌色邊框 + 輕微陰影
- 錯誤狀態：紅色邊框 + 錯誤訊息
- 成功狀態：綠色邊框






## 4. 網站地圖與每頁區塊（IA & Page Blocks）

### 4.1 首頁 `/`

#### Hero 區塊
- **標題**：中星害蟲驅除有限公司
- **副標**：守護你的家，遠離害蟲（或「把家交給我們，害蟲就交給專業。」）
- **CTA 按鈕**：立即諮詢 / 了解服務
- **背景**：居家溫暖場景圖片

#### 服務項目區塊
**建築種類**：
- 居家
- 文化資產
- 餐廳及工廠

**害蟲種類**（9 種）：
- 白蟻
- 果蠅
- 蟑螂
- 老鼠
- 蚊蠅
- 蛀蟲
- 螞蟻
- 塵蟎
- 其他

**呈現方式**：卡片格佈局，點擊可連結至對應的害蟲介紹頁面

#### 中星的優點區塊
- 政府立案/合格證照
- 專業評估與保固
- 快速到府
- 居家友善（安全藥劑、合法合規、透明報價、價格合理）

**呈現方式**：圖示 + 文字說明，網格佈局

#### 施作流程區塊
圖解 4–6 步驟：
1. 線上填表
2. 現場勘查
3. 報價
4. 施工
5. 後續關懷

**呈現方式**：時間軸或步驟卡片，支援響應式

#### 品牌理念/關於我們區塊
- 簡要敘述公司理念與服務宗旨
- 實體照片（辦公室、團隊等）

#### 精選實績預覽
- 顯示 3–6 張精選實績照片
- 連結至 `/cases` 完整頁面

#### Footer
- 公司名稱、統編
- 地址（三重總公司、台南分公司）
- 電話、Email
- 營業時間
- 社群連結（Line / FB / IG）
- 快速連結（服務項目、常見問題、聯絡我們）
- 版權資訊
- 隱私聲明連結
- CTA 按鈕（立即預約 / LINE 客服）


### 4.2 害蟲介紹（Blog 形式）`/pests`

#### 列表頁
**功能**：
- 篩選/標籤：白蟻、果蠅、蟑螂、老鼠、蚊蠅、蛀蟲、螞蟻、塵蟎等
- 搜索功能（前端過濾）
- 卡片展示：封面圖、標題、簡述、閱讀更多按鈕

**互動**：
- 點擊卡片可展開成大的懸浮視窗（Modal）
- 或直接導航至 `/pests/[slug]` 單篇頁面

#### 單篇頁面 `/pests/[slug]`（由 MDX 驅動，需要 SEO）

**內容結構**：
1. **Hero**：標題 + 關鍵圖
2. **分類資訊**：學名、俗名、分類
3. **習性**：詳細說明害蟲的生活習性
4. **專業處理方式**：
   - 藥劑與方法簡述
   - 環保/安全聲明
5. **居家自救建議**：
   - 可做（推薦做法）
   - 不可做（避免錯誤處理）
6. **相關連結**：連結至相關實績、FAQ、聯絡表單

**SEO 優化**：
- 每篇獨立 Meta 標籤
- 結構化資料（Article schema）
- 內鏈至相關內容


### 4.3 施作實績 `/cases`

#### 列表頁
**功能**：
- 照片牆（Masonry 瀑布流佈局）
- 支援篩選：
  - 類型（居家/文化資產/餐廳及工廠）
  - 區域（縣市/行政區）
  - 害蟲種類

**卡片欄位**：
- 縮圖
- 標題
- 地區
- 施工類型
- 簡述

**互動**：
- 點擊卡片開啟燈箱（Lightbox）
- 燈箱內可左右切換同一 case 的其他照片
- 支援鍵盤導航（← → 方向鍵）

#### 單案詳情頁 `/cases/[id]`（可選，需要 SEO）

**內容**：
- 完整照片集
- 詳細說明
- 施工前後對比
- 客戶回饋（如有）
- 相關連結


### 4.4 常見問題 `/faq`

**功能**：
- 手風琴展開/收合
- 支援內頁搜索（前端過濾）
- 問題分組顯示

**問題群組**：
- 價格相關
- 流程相關
- 安全相關
- 保固相關
- 藥劑相關
- 到府時間
- 其他

**互動**：
- 點擊問題展開答案
- 搜索即時過濾
- 可展開多個問題


### 4.5 聯絡我們 `/contact`

#### 聯絡資訊區塊
**三重總公司**：
- 地址：[待補充]
- 電話：[待補充]
- 營業時間：[待補充]

**台南分公司**：
- 地址：[待補充]
- 電話：[待補充]
- 營業時間：[待補充]

#### 表單欄位

| 欄位 | 類型 | 必填 | 驗證規則 |
|------|------|------|----------|
| 姓名 | text | ✅ | 2–50 字元 |
| 聯絡方式1 | select + input | ✅ | 電話：09xx-xxx-xxx 或 +886-9xx-xxx-xxx<br>Email：標準格式 |
| 聯絡方式2 | select + input | ❌ | 同上 |
| 服務地區 | select (縣市/行政區) | ✅ | 從預設列表選擇 |
| 需求類型 | checkbox (複選) | ✅ | 至少選擇一項 |
| 希望聯絡時段 | select + date | ❌ | 早/午/晚 + 日期選擇器 |
| 內容說明 | textarea | ❌ | 最多 1000 字元 |
| 附件上傳 | file | ❌ | jpg/png，單檔 ≤ 5MB，最多 3 張 |
| 同意條款 | checkbox | ✅ | 必須勾選 |

**聯絡方式下拉選單選項**：
- 電話
- Email
- Line ID

#### 送出流程

1. **前端驗證**：
   - 即時驗證各欄位格式
   - 顯示明確錯誤訊息
   - 防止重複提交

2. **reCAPTCHA v3 驗證**：
   - 自動執行（無需用戶操作）
   - 分數低於閾值時要求額外驗證

3. **POST `/api/contact`**：
   - 傳送 JSON 格式資料
   - 顯示 loading 狀態

4. **伺服器端處理**：
   - 再次驗證所有欄位
   - 速率限制檢查
   - 附件檢查（MIME 類型、大小）
   - 寄出 Email（客戶信箱、CC 自家備份）

5. **回應處理**：
   - 成功：顯示感謝頁（含 LINE 連結、回到首頁 CTA）
   - 失敗：顯示錯誤訊息，允許重試

#### 信件樣板

**格式**：
- 品牌色抬頭（使用品牌色作為標題背景）
- HTML 表格呈現表單欄位
- 時間戳記（伺服器時間）
- 來源頁 URL
- 附件（如有）以 base64 嵌入或提供下載連結

**收件人**：
- To：客戶指定的聯絡方式（Email）
- CC：公司備份信箱



## 5. 互動與響應式規格（UX）

### 5.1 Header 互動
- **滾動效果**：向下滾動時顯示陰影，提升層次感
- **行動版選單**：漢堡選單展開時覆蓋全螢幕，背景半透明遮罩
- **CTA 按鈕**：常駐顯示，固定位置或隨滾動顯示

### 5.2 按鈕互動
- **Hover**：輕微升起陰影（`0 4px 12px rgba(0, 0, 0, 0.15)`）
- **Active**：壓下效果（`scale(0.98)`）
- **過渡動畫**：`transition-all duration-200`

### 5.3 瀏覽器相容性
- **桌面**：Chrome、Safari、Edge（最近兩版）
- **行動裝置**：iOS Safari（iOS 14+）、Android Chrome（Android 10+）
- **降級策略**：不支援的瀏覽器顯示基本功能，優雅降級

### 5.4 響應式斷點
- `sm`: 640px（小螢幕）
- `md`: 768px（平板）
- `lg`: 1024px（小筆電）
- `xl`: 1280px（桌面）
- `2xl`: 1536px（大桌面）

### 5.5 表單互動
- **即時驗證**：輸入時即時檢查格式
- **錯誤訊息**：明確指出錯誤欄位與原因
- **Loading 狀態**：送出時顯示載入動畫，禁用按鈕防止重複提交
- **成功回饋**：顯示成功訊息與後續步驟

### 5.6 動畫與過渡
- **頁面轉場**：使用 Next.js 內建過渡效果
- **元件動畫**：使用 Framer Motion 或 CSS transitions
- **性能考量**：避免過度動畫，使用 `will-change` 優化



## 6. 內容策略（Copy & Information）

### 6.1 文案口吻
- **風格**：溫暖、誠懇、可懂的人話
- **避免**：過度化學名詞、專業術語堆砌
- **策略**：必要時提供白話註解，讓一般民眾也能理解

### 6.2 首頁標語參考
- 「把家交給我們，害蟲就交給專業。」
- 「守護你的家，遠離害蟲。」
- 「專業、安全、快速到府服務。」

### 6.3 FAQ 範例題目

**流程相關**：
- 施工前需要準備什麼？
- 整個除蟲流程需要多久時間？
- 需要幾次施工才能完全清除？

**安全相關**：
- 有氣味嗎？多久可回家？
- 藥劑對人體有害嗎？
- 家中有嬰幼兒/寵物，是否安全？

**價格相關**：
- 價格怎麼計算？
- 是否提供保固？
- 後續維護需要額外費用嗎？

**服務相關**：
- 服務範圍包含哪些地區？
- 多久可以到府服務？
- 緊急情況可以當天處理嗎？

### 6.4 內容維護
- 定期更新害蟲介紹內容（季節性害蟲）
- 新增實績案例
- 根據客戶常見問題更新 FAQ
- 保持內容的時效性與準確性

## 7. SEO 與結構化資料

### 7.1 基本 SEO

**Meta 標籤**：
- 每頁獨立 `<title>`（含地區 + 服務）
- `<meta description>`（120–160 字）
- `<meta keywords>`（選填，不影響排名但可提供參考）

**URL 結構**：
- 友善 URL：`/pests/termite`、`/cases/taipei-apt-2024`
- 使用小寫、連字號分隔
- 避免參數與動態 ID

**社交媒體標籤**：
- Canonical URL
- OG 標籤（Open Graph）
- Twitter Card（大圖 1200×630px）

**自動化工具**：
- 自動產生 `sitemap.xml`、`robots.txt`
- 提交至 Google Search Console（GSC）
- 定期檢查索引狀態

### 7.2 在地 SEO（NAP）

**統一資訊**：
- Footer 與 `/contact` 顯示統一公司名稱、地址、電話、營業時間
- 確保所有頁面 NAP 資訊一致

**Google 商家檔案**：
- 建立並驗證 Google 商家檔案
- 填寫完整說明、服務範圍
- 上傳高品質照片
- 鼓勵客戶留下評價

### 7.3 結構化資料（JSON-LD）

使用 `@type: PestControlService`，包含：
- NAP（名稱、地址、電話）
- 服務區域
- 營業時間（openingHours）
- 社群連結（sameAs）
- 服務目錄（hasOfferCatalog）

詳細樣板見第 11 節。

### 7.4 關鍵字策略

**主要關鍵字**：
- 除蟲
- 除蟲公司
- 白蟻防治
- 蟑螂防治
- 老鼠防治
- 全台除蟲

**長尾關鍵字**：
- 大安區除蟲
- 木造屋白蟻
- 租屋蟑螂
- 嬰幼兒家庭除蟲
- 寵物友善藥劑
- [地區] + 除蟲公司

### 7.5 內容內鏈策略

建立內容之間的連結關係：
- 害蟲介紹 ↔ 實績 ↔ FAQ ↔ 聯絡我們
- 相關害蟲之間互相連結
- 實績案例連結至對應害蟲介紹
- FAQ 連結至相關服務頁面



## 8. 性能、資安與法遵

### 8.1 性能優化

**圖片優化**：
- 影像尺寸自動化（`sizes`/`srcset`）
- 圖片懶載入（Lazy Loading）
- 優先使用 AVIF/WebP 格式
- 單張圖片壓縮後 < 200KB

**字型優化**：
- 字型採系統字或變體裁切
- 使用 `next/font` 優化載入
- 避免載入過多字型變體

**JavaScript 優化**：
- 首屏 JS < 160KB（gzip 壓縮後）
- 避免不必要第三方腳本
- 使用動態導入（Dynamic Import）延遲載入非關鍵元件
- Code Splitting 自動化

**其他優化**：
- 使用 Next.js Image 元件自動優化
- 啟用 HTTP/2 與 HTTP/3
- CDN 快取靜態資源
- 使用 Service Worker（可選，PWA）

### 8.2 資安措施

**表單防護**：
- 表單 API 速率限制（每 IP 每小時最多 5 次）
- reCAPTCHA v3 驗證
- 附件型別/大小檢查（MIME 類型、檔案大小）

**資料處理**：
- 不落地儲存個資（僅 Email 轉送）
- 伺服器端清洗/轉義所有輸入
- 防止 XSS、SQL Injection 等攻擊

**HTTP 安全標頭**：
- Content-Security-Policy (CSP)
- X-Frame-Options（防止點擊劫持）
- Referrer-Policy
- X-Content-Type-Options
- Strict-Transport-Security (HSTS)

**其他安全措施**：
- 使用 HTTPS（強制重定向）
- 環境變數不提交至版本控制
- 定期更新依賴套件

### 8.3 法遵要求

**隱私權政策**：
- 建立隱私權政策頁面（`/privacy`）
- 說明蒐集目的、保存方式、聯繫窗口
- 符合 GDPR 與個資法要求

**Cookie 政策**：
- Cookie Banner（若啟用 GA/第三方追蹤）
- 說明 Cookie 用途
- 提供拒絕選項

**其他法遵**：
- 網站使用條款（可選）
- 聯絡資訊完整且正確
- 公司統編與登記資訊



## 9. 開發任務分解（Issue Blueprint）

### 9.1 Foundation（基礎建設）

**設計系統**：
- Tailwind/Design Tokens 設定（色票、間距、陰影、圓角）
- 建立元件庫文檔
- 設定 CSS Variables

**Layout**：
- Header/Footer 元件
- 容器寬度規範
- Grid 系統設定

**全域設定**：
- 全域 SEO：next-seo、OG 預設圖
- 環境變數設定
- 錯誤處理機制

### 9.2 頁面開發

**首頁**：
- Hero 區塊
- 服務項目區塊
- 優點區塊
- 流程區塊
- 實績預覽
- FAQ 預覽
- CTA 區塊

**其他頁面**：
- `/pests` 列表與動態路由（MDX 渲染）
- `/cases` 照片牆 + 燈箱
- `/faq` 手風琴 + 搜索
- `/contact` 表單 + API + 成功頁
- `/privacy` 隱私權政策頁

### 9.3 功能開發

**互動功能**：
- Floating 社群按鈕（全站）
- 螞蟻互動動畫背景
- 燈箱圖片瀏覽

**表單與驗證**：
- reCAPTCHA v3 / Turnstile 整合
- 表單驗證邏輯
- 速率限制實作

**後端功能**：
- Nodemailer（或 SendGrid）信件模板
- 表單 API 端點
- 錯誤處理與日誌

**分析與 SEO**：
- Analytics（GA4/Umami）整合
- sitemap/robots 自動化
- JSON-LD 結構化資料

### 9.4 內容準備

**MDX 內容**：
- 害蟲 MDX（至少 6 篇）
- FAQ MDX（至少 20 題）

**圖片資產**：
- 實績照片 12 張以上（授權/壓圖）
- Hero 背景圖
- 服務項目圖示
- OG 分享圖



## 10. 表單 API（`/api/contact`）

### 10.1 請求規格

**Method**：`POST`

**Content-Type**：`application/json`

**Payload 範例**：
```json
{
  "name": "王小明",
  "contactMethod1": "phone",
  "contactValue1": "+886-9xx-xxx-xxx",
  "contactMethod2": "email",
  "contactValue2": "example@email.com",
  "region": "台北市/大安區",
  "needs": ["白蟻", "蟑螂"],
  "preferredTime": "晚上",
  "preferredDate": "2024-12-25",
  "message": "家中廚房常見蟑螂...",
  "photos": ["data:image/png;base64,..."],
  "recaptchaToken": "token-from-recaptcha"
}
```

### 10.2 驗證規則

**後端驗證**：
- 必填欄位檢查
- 型別驗證
- 長度限制
- 電話格式驗證（09xx-xxx-xxx 或 +886-9xx-xxx-xxx）
- Email 格式驗證
- 附件檢查（MIME 類型：image/jpeg, image/png；單檔 ≤ 5MB，最多 3 張）
- reCAPTCHA token 驗證
- 速率限制檢查

### 10.3 寄信規格

**收件人**：
- To：客戶指定的 Email（從 contactValue1 或 contactValue2 取得）
- CC：公司備份信箱

**主旨格式**：
```
[網站聯絡單] 王小明 / 大安區 / 蟑螂、白蟻
```

**信件內容**：
- 使用 HTML 模板
- 品牌色抬頭
- 表單欄位以表格呈現
- 時間戳記
- 來源頁 URL
- 附件（如有）以 base64 嵌入或提供下載連結

### 10.4 回應規格

**成功回應**（200）：
```json
{
  "ok": true,
  "message": "表單已成功送出，我們會盡快與您聯絡。"
}
```

**錯誤回應**：
- `400`：驗證失敗、格式錯誤
- `429`：速率限制（Too Many Requests）
- `500`：伺服器錯誤

**錯誤回應格式**：
```json
{
  "ok": false,
  "error": "錯誤訊息",
  "details": "詳細錯誤資訊（開發環境）"
}
```



## 11. JSON‑LD 樣板（PestControlService）

### 11.1 基本結構

```json
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
    "streetAddress": "[待補充完整地址]",
    "addressLocality": "新北市",
    "addressRegion": "三重區",
    "postalCode": "[待補充]",
    "addressCountry": "TW"
  },
  "areaServed": [
    "台北市",
    "新北市",
    "桃園市",
    "新竹縣市"
  ],
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-17:00"
  ],
  "sameAs": [
    "https://www.facebook.com/[待補充]",
    "https://www.instagram.com/[待補充]",
    "https://line.me/[待補充]"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "害蟲防治服務",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "白蟻防治"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "蟑螂防治"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "老鼠防治"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "跳蚤防治"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "塵蟎防治"
        }
      }
    ]
  }
}
```

### 11.2 實作注意事項

- 放置在每頁的 `<head>` 或 `<body>` 中
- 使用 `next-seo` 或手動插入 JSON-LD
- 確保所有必填欄位都有值
- 定期使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 驗證

## 12. 可交付產物（Deliverables）

### 12.1 設計文件
- **設計系統**：色票、字體、按鈕/卡片/表單元件規格
- **Figma 原型**：Desktop/Tablet/Mobile 三種尺寸
- **設計標記**：間距、圓角、陰影等設計 tokens

### 12.2 程式碼
- **程式碼 Repo**：
  - 完整的 Next.js 專案
  - README.md（安裝、開發、部署說明）
  - 開發腳本（`npm run dev`、`npm run build` 等）
  - 環境變數範例（`.env.example`）
  - TypeScript 類型定義
  - 元件文檔（可選）

### 12.3 內容與資產
- **內容檔**：MDX/JSON 格式的內容檔案
- **圖片資產**：壓縮後的圖片（符合規格要求）
- **字型檔案**：如有使用自訂字型

### 12.4 功能實作
- **SEO 套件**：next-seo、JSON‑LD 實作
- **表單 API**：完整的 API 端點與測試
- **測試文件**：表單 API 寄信測試（含測試信件截圖）

### 12.5 部署文件
- **部署與網域設定文件**：
  - Vercel 部署步驟
  - DNS 設定說明
  - 301 重定向設定
  - Canonical URL 設定
  - SSL 憑證設定（自動）

### 12.6 其他文件
- **使用手冊**：內容更新流程（MDX 編輯）
- **維護指南**：定期維護項目清單

## 13. 驗收清單（UAT / Launch Checklist）

### 13.1 內容完整性
- [ ] 首頁各區塊文案/圖像就緒
- [ ] Hero LCP < 2.5s（Largest Contentful Paint）
- [ ] `/pests` 至少 6 篇，內有 CTA 與內鏈
- [ ] `/cases` 至少 12 張實績照片
- [ ] `/faq` 至少 20 題

### 13.2 功能測試
- [ ] `/cases` 瀑布流 + 燈箱可用，圖片 Lazyload
- [ ] `/faq` 展開/收合順暢，內文可搜尋
- [ ] `/contact` 表單驗證、reCAPTCHA、成功頁、Email 寄達
- [ ] Floating Line/FB/IG 正常顯示於所有頁面
- [ ] 響應式設計在各裝置正常顯示

### 13.3 SEO 與技術
- [ ] JSON‑LD 正確；sitemap/robots 可讀
- [ ] GSC 驗證成功
- [ ] 所有頁面 Meta 標籤完整
- [ ] OG 標籤測試通過
- [ ] 所有圖片都有 alt 屬性

### 13.4 性能指標
- [ ] Lighthouse（Mobile）Performance ≥ 85
- [ ] Lighthouse（Mobile）SEO ≥ 95
- [ ] Lighthouse（Mobile）Accessibility ≥ 95
- [ ] 首屏載入時間 < 3 秒
- [ ] 所有 API 回應時間 < 2 秒

### 13.5 安全性
- [ ] HTTPS 強制啟用
- [ ] 安全標頭設定正確
- [ ] 表單速率限制正常運作
- [ ] reCAPTCHA 驗證正常

### 13.6 瀏覽器相容性
- [ ] Chrome（最新兩版）測試通過
- [ ] Safari（最新兩版）測試通過
- [ ] Edge（最新兩版）測試通過
- [ ] iOS Safari 測試通過
- [ ] Android Chrome 測試通過

### 13.7 上線前檢查
- [ ] 所有環境變數設定正確
- [ ] 生產環境 API 正常運作
- [ ] 錯誤監控設定（可選）
- [ ] 備份機制確認
- [ ] 客戶驗收簽核


