import { clsx } from "clsx"

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mb-8 md:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
        {title}
      </h2>
      <div
        className={clsx(
          "mt-3 w-12 h-1 bg-[var(--color-primary)] rounded-full",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="mt-4 text-[var(--color-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
