import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Tag from "./Tag"

interface ThinkingCardProps {
  title: string
  summary: string
  category: string
  date: string
  readTime: string
  href: string
}

export default function ThinkingCard({
  title,
  summary,
  category,
  date,
  readTime,
  href,
}: ThinkingCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl border border-[var(--color-border)] p-6 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all duration-200">
        <Tag label={category} variant="category" />

        <h3 className="mt-3 text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[#4e525b] leading-relaxed line-clamp-3">
          {summary}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-muted)]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
          阅读全文 <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}
