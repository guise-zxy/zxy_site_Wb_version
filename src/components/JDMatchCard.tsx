import Tag from "./Tag"

interface JDMatchCardProps {
  title: string
  keywords: string[]
  evidence: string[]
}

export default function JDMatchCard({
  title,
  keywords,
  evidence,
}: JDMatchCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[var(--color-border)] p-6 md:p-7 shadow-sm">
      <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-4">
        {title}
      </h3>

      <div className="mb-5">
        <p className="text-sm font-medium text-[var(--color-muted)] mb-2">
          岗位关键词
        </p>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <Tag key={keyword} label={keyword} variant="tech" />
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-[var(--color-muted)] mb-2">
          我的匹配证据
        </p>
        <ul className="space-y-2">
          {evidence.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-[#4e525b] leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
