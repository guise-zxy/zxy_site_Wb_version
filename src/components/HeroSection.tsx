import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Tag from "./Tag"
import { siteConfig } from "@/data/site-config"

const heroTags = [
  "AI-HR 探索",
  "技术背景",
  "项目推进",
  "自驱执行",
  "成就他人",
]

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-foreground)] leading-tight">
            zxy
            <span className="block text-[var(--color-primary)] mt-2">
              AI-HR 方向个人能力展示站
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-[#4e525b] leading-relaxed">
            一个有技术背景、关注人和组织问题、正在探索 AI-HR 方向的学生。
          </p>


          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tencent-hr"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              查看腾讯 HR 匹配度
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[#4e525b] font-medium rounded-lg hover:bg-[var(--color-surface)] hover:border-[var(--color-primary)]/30 transition-colors"
            >
              关于我
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-[var(--color-primary)] font-medium rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
            >
              <Download className="w-4 h-4" />
              下载简历
            </a>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <Tag key={tag} label={tag} variant="ability" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
