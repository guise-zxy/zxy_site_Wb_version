"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  // 按 ESC 键关闭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    // 禁止页面滚动
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
          aria-label="关闭"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 图片 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
        />

        {/* 描述文字 */}
        {alt && (
          <p className="mt-3 text-sm text-white/80 text-center max-w-lg leading-relaxed">
            {alt}
          </p>
        )}
      </div>
    </div>
  )
}
