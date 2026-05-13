import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ChevronLeft, Calendar, Clock } from "lucide-react"
import Tag from "@/components/Tag"
import { getMDXContent, getMDXSlugs } from "@/lib/mdx"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getMDXSlugs("thinking")
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = getMDXContent("thinking", slug)
  return {
    title: data.title || slug,
    description: data.summary || "",
  }
}

export default async function ThinkingDetailPage({ params }: Props) {
  const { slug } = await params
  let data: Record<string, any>
  let content: string

  try {
    const result = getMDXContent("thinking", slug)
    data = result.data
    content = result.content
  } catch {
    notFound()
  }

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回链接 */}
        <Link
          href="/thinking"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          返回文章列表
        </Link>

        {/* 标题区域 */}
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] leading-snug">
          {data.title}
        </h1>

        {/* 元信息 */}
        <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-muted)]">
          {data.category && <Tag label={data.category} variant="category" />}
          {data.date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {data.date}
            </span>
          )}
          {data.readTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {data.readTime}
            </span>
          )}
        </div>

        {data.summary && (
          <p className="mt-4 text-[#4e525b] leading-relaxed border-l-3 border-[var(--color-primary)] pl-4 italic">
            {data.summary}
          </p>
        )}

        {/* 分割线 */}
        <hr className="my-8 border-[var(--color-border)]" />

        {/* MDX 内容 */}
        <div className="prose max-w-none">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  )
}
