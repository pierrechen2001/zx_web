"use client";

import { MessageCircle, Facebook, Instagram } from "lucide-react";

export function FloatingSocialButtons() {
  return (
    <div className="fixed right-4 md:right-6 bottom-20 md:bottom-6 z-40 flex flex-col gap-3">
      {/* LINE */}
      <a
        href="https://line.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:scale-110"
        aria-label="LINE 客服"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#1877F2] hover:bg-[#1464d4] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:scale-110"
        aria-label="Facebook 粉絲專頁"
      >
        <Facebook className="w-7 h-7" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-7 h-7" />
      </a>
    </div>
  );
}

