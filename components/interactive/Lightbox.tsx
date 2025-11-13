"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose }: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, index]);

  const goToPrevious = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-black/95 border-0">
        <VisuallyHidden>
          <DialogTitle>圖片燈箱 - 圖片 {index + 1} / {images.length}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 關閉按鈕 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="關閉"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 上一張按鈕 */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="上一張"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* 圖片 */}
          <div className="flex items-center justify-center p-12">
            <div className="relative max-w-full max-h-[80vh] bg-white rounded overflow-hidden flex items-center justify-center">
              {/* 佔位符（實際使用時替換為真實圖片） */}
              <div className="w-[600px] h-[400px] flex flex-col items-center justify-center text-white/50">
                <span className="text-8xl mb-4">📸</span>
                <p className="text-lg">圖片 {index + 1} / {images.length}</p>
              </div>
              {/* 實際使用時取消註解並使用 Image 元件 */}
              {/* <Image
                src={images[index]}
                alt={`圖片 ${index + 1}`}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh]"
              /> */}
            </div>
          </div>

          {/* 下一張按鈕 */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="下一張"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* 圖片計數 */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
              {index + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

