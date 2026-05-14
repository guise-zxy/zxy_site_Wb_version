"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Tag from "./Tag"
import ImageModal from "./ImageModal"
import type { ProofImage } from "@/data/abilities"

interface AbilityCardProps {
  title: string
  description: string
  experience: string
  relatedProjects: string[]
  tags: string[]
  href: string
  proofImages?: ProofImage[]
}

export default function AbilityCard({
  title,
  description,
  experience,
  relatedProjects,
  tags,
  href,
  proofImages,
}: AbilityCardProps) {
  const [selectedImage, setSelectedImage] = useState<ProofImage | null>(null)

  return (
    <>
      <div className="group bg-white rounded-xl border border-[var(--color-border)] p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">
          {title}
        </h3>

        <p className="text-sm text-[#4e525b] leading-relaxed mb-4">
          {description}
        </p>

        <div className="mb-4">
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            <span className="font-medium text-[var(--color-foreground)]">相关经历：</span>
            {experience}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} variant="ability" />
          ))}
        </div>

        {relatedProjects.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-[var(--color-muted)] mb-1">关联项目：</p>
            <ul className="text-sm text-[#4e525b] list-disc list-inside space-y-0.5">
              {relatedProjects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 证据图片缩略图 */}
        {proofImages && proofImages.length > 0 && (
          <div className="mb-4 pt-4 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-muted)] mb-2">证据截图：</p>
            <div className="grid grid-cols-3 gap-2">
              {proofImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className="aspect-square rounded-lg overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:shadow-sm transition-all cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
        >
          查看详情 <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 图片弹窗 */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
}
