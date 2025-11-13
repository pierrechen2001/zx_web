# 中星害蟲驅除有限公司｜官方網站

這是使用 Next.js 15 + React 19 + TypeScript + Tailwind CSS 建立的現代化企業網站。

## 技術棧

- **框架**: Next.js 15 (App Router)
- **UI 框架**: React 19
- **語言**: TypeScript
- **樣式**: Tailwind CSS + shadcn/ui
- **圖片優化**: next/image (支援 AVIF/WebP)
- **SEO**: next-seo + JSON-LD
- **表單**: React Hook Form + Zod
- **郵件**: Nodemailer

## 開始開發

### 安裝依賴

```bash
npm install
```

### 設定環境變數

複製 `.env.example` 為 `.env.local` 並填入正確的環境變數：

```bash
cp .env.example .env.local
```

### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 建置專案

```bash
npm run build
```

### 啟動生產環境

```bash
npm start
```

## 專案結構

```
zx_web/
├── app/                    # Next.js App Router 頁面
│   ├── (marketing)/       # 行銷頁面群組
│   ├── api/               # API Routes
│   ├── layout.tsx         # 根佈局
│   └── page.tsx           # 首頁
├── components/            # React 元件
│   ├── layout/           # 佈局元件（Header, Footer）
│   ├── sections/         # 頁面區塊元件
│   ├── forms/            # 表單元件
│   ├── ui/               # shadcn/ui 基礎元件
│   └── interactive/      # 互動元件
├── lib/                   # 工具函數
├── styles/                # 全域樣式
├── content/               # MDX 內容
│   ├── pests/            # 害蟲介紹
│   ├── cases/            # 施作實績
│   └── faq/              # 常見問題
└── public/                # 靜態資源
```

## 部署

本專案設計為部署到 Vercel 平台：

1. 將程式碼推送到 GitHub
2. 在 Vercel 匯入專案
3. 設定環境變數
4. 綁定自訂網域

## 維護

### 更新害蟲介紹內容

編輯 `content/pests/` 目錄下的 MDX 檔案。

### 新增施作實績

在 `content/cases/` 目錄下新增 MDX 檔案，並上傳對應圖片到 `public/images/cases/`。

### 更新 FAQ

編輯 `content/faq/faq.mdx` 檔案。

## 授權

© 2024 中星害蟲驅除有限公司。保留所有權利。

