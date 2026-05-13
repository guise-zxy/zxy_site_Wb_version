import { clsx } from "clsx"

interface TagProps {
  label: string
  variant?: "default" | "ability" | "tech" | "category"
  className?: string
}

const variantStyles: Record<string, string> = {
  default:
    "bg-[var(--color-surface)] text-[#4e525b] border border-[var(--color-border)]",
  ability:
    "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
  tech: "bg-[#f0f5ff] text-[var(--color-primary-dark)]",
  category:
    "bg-[var(--color-success)]/10 text-[var(--color-success)]",
}

export default function Tag({ label, variant = "default", className }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  )
}
