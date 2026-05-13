import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Tag from "./Tag"

interface ProjectCardProps {
  title: string
  summary: string
  role: string
  tags: string[]
  matchedAbilities: string[]
  href: string
}

export default function ProjectCard({
  title,
  summary,
  role,
  tags,
  matchedAbilities,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl border border-[var(--color-border)] p-6 md:p-7 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all duration-200">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-sm text-[var(--color-muted)] mt-1">{role}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] shrink-0 mt-1 transition-colors" />
        </div>

        <p className="mt-3 text-sm text-[#4e525b] leading-relaxed line-clamp-2">
          {summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} variant="tech" />
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {matchedAbilities.map((ability) => (
            <Tag key={ability} label={ability} variant="ability" />
          ))}
        </div>
      </div>
    </Link>
  )
}
