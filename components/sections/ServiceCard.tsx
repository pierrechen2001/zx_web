import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
  const content = (
    <div className={cn(
      "h-full transition-all duration-200 hover:shadow-card-hover hover:scale-[1.02] cursor-pointer flex flex-col items-center text-center p-6 rounded-sm border border-surface/30 bg-surface/30",
      className
    )}>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-text-secondary">{description}</p>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

// 建築種類服務卡片
export function BuildingTypeCards() {
  const buildingTypes = [
    {
      title: "居家",
      description: "住宅、公寓、透天厝等居家環境害蟲防治",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "文化資產",
      description: "古蹟、歷史建築專業害蟲防治",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "餐廳及工廠",
      description: "商業空間、餐飲業、工廠等專業防治",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {buildingTypes.map((type) => (
        <ServiceCard key={type.title} {...type} />
      ))}
    </div>
  );
}

// 害蟲種類服務卡片（簡化版：只有圓形圖標）
export function PestTypeCards() {
  const pestTypes = [
    {
      title: "白蟻",
      icon: "🪲",
      href: "/pests/termite",
    },
    {
      title: "果蠅",
      icon: "🪰",
      href: "/pests/fruit-fly",
    },
    {
      title: "蟑螂",
      icon: "🪳",
      href: "/pests/cockroach",
    },
    {
      title: "老鼠",
      icon: "🐭",
      href: "/pests/rat",
    },
    {
      title: "蚊蠅",
      icon: "🦟",
      href: "/pests/mosquito",
    },
    {
      title: "蛀蟲",
      icon: "🐛",
      href: "/pests/woodworm",
    },
    {
      title: "螞蟻",
      icon: "🐜",
      href: "/pests/ant",
    },
    {
      title: "塵蟎",
      icon: "🦠",
      href: "/pests/dust-mite",
    },
    {
      title: "其他",
      icon: "🔍",
      href: "/pests",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {pestTypes.map((pest) => (
        <Link
          key={pest.title}
          href={pest.href}
          className="group flex flex-col items-center"
          title={pest.title}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface/40 hover:bg-secondary/30 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg group-hover:shadow-card-hover border border-surface/50">
            <span className="text-4xl md:text-5xl">{pest.icon}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

