import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Tag from "@/components/Tag"
import { getMDXContent, getMDXSlugs } from "@/lib/mdx"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getMDXSlugs("projects")
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = getMDXContent("projects", slug)
  return {
    title: data.title || slug,
    description: data.summary || "",
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  let data: Record<string, any>
  let content: string

  try {
    const result = getMDXContent("projects", slug)
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
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          返回项目列表
        </Link>

        {/* 标题区域 */}
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] leading-snug">
          {data.title}
        </h1>

        {data.role && (
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            角色：{data.role}
          </p>
        )}

        {data.summary && (
          <p className="mt-4 text-[#4e525b] leading-relaxed">
            {data.summary}
          </p>
        )}

        {(data.tags || data.matchedAbilities) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags?.map((tag: string) => (
              <Tag key={tag} label={tag} variant="tech" />
            ))}
            {data.matchedAbilities?.map((ab: string) => (
              <Tag key={ab} label={ab} variant="ability" />
            ))}
          </div>
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
