import { ExternalLink, Mail, BookOpen, Code } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/data/site-config"

const iconMap: Record<string, React.ReactNode> = {
  github: <Code className="w-5 h-5" />,
  gitlab: <ExternalLink className="w-5 h-5" />,
  "book-open": <BookOpen className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-lg font-bold text-[var(--color-foreground)]"
            >
              <span className="text-[var(--color-primary)]">zxy</span>
            </Link>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              AI-HR 方向个人能力展示站
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label={link.label}
              >
                {iconMap[link.icon] || <ExternalLink className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-center">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} zxy. Built with Next.js & Tailwind CSS.{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Deployed on Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
