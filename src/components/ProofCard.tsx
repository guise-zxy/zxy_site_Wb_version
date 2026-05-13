import { ImageIcon, FileText } from "lucide-react"
import Tag from "./Tag"

interface ProofCardProps {
  image: string
  title: string
  ability: string
  description: string
  relatedProject?: string
}

export default function ProofCard({
  image,
  title,
  ability,
  description,
  relatedProject,
}: ProofCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* 图片占位区域 */}
      <div className="aspect-video bg-[var(--color-surface)] flex items-center justify-center">
        {image.endsWith(".svg") ? (
          <div className="flex flex-col items-center gap-2 text-[var(--color-muted)]">
            <FileText className="w-8 h-8" />
            <span className="text-xs">占位图片</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = "none"
              const parent = target.parentElement
              if (parent) {
                const placeholder = document.createElement("div")
                placeholder.className =
                  "flex flex-col items-center gap-2 text-[var(--color-muted)]"
                placeholder.innerHTML = `
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span class="text-xs">占位图片</span>
                `
                parent.appendChild(placeholder)
              }
            }}
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-[var(--color-foreground)] leading-snug">
          {title}
        </h3>

        <div className="mt-2">
          <span className="text-xs text-[var(--color-muted)]">对应能力：</span>
          <p className="text-sm text-[var(--color-primary)] font-medium">
            {ability}
          </p>
        </div>

        <p className="mt-2 text-sm text-[#4e525b] leading-relaxed">
          {description}
        </p>

        {relatedProject && (
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            关联项目：{relatedProject}
          </p>
        )}
      </div>
    </div>
  )
}
