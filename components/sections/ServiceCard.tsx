import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Landmark, UtensilsCrossed, Bug, Search } from "lucide-react";

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
      "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center p-8 rounded-xl border border-white/50 bg-white/40 backdrop-blur-md shadow-sm",
      className
    )}>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">{title}</h3>
      {description && (
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full group">{content}</Link>;
  }

  return <div className="h-full group">{content}</div>;
}

// 建築種類服務卡片
export function BuildingTypeCards() {
  const buildingTypes = [
    {
      title: "居家",
      description: "住宅、公寓、透天厝等居家環境害蟲防治",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "文化資產",
      description: "古蹟、歷史建築專業害蟲防治",
      icon: <Landmark className="w-8 h-8" />,
    },
    {
      title: "餐廳及工廠",
      description: "商業空間、餐飲業、工廠等專業防治",
      icon: <UtensilsCrossed className="w-8 h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {buildingTypes.map((type, index) => (
        <div 
          key={type.title}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <ServiceCard {...type} />
        </div>
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
      icon: <Search className="w-8 h-8 text-primary" />,
      href: "/pests",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {pestTypes.map((pest, index) => (
        <Link
          key={pest.title}
          href={pest.href}
          className="group flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
          style={{ animationDelay: `${index * 100}ms` }}
          title={pest.title}
        >
          <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg border-2 border-white group-hover:border-primary/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <span className="text-4xl md:text-5xl relative z-10">
               {typeof pest.icon === 'string' ? pest.icon : pest.icon}
             </span>
          </div>
          <span className="mt-3 text-sm font-medium text-text-secondary group-hover:text-primary transition-colors">
            {pest.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

