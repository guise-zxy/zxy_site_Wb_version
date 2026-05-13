import type { Metadata } from "next"
import SectionTitle from "@/components/SectionTitle"
import ThinkingCard from "@/components/ThinkingCard"
import { thinkingPosts } from "@/data/thinking"

export const metadata: Metadata = {
  title: "我的 HR / AI / 产品思考",
  description:
    "zxy 对 AI-HR、岗位理解、产品观察、项目复盘和求职成长的持续思考。",
}

export default function ThinkingPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="我的 HR / AI / 产品思考"
          subtitle="持续记录我对 AI-HR、岗位理解、求职成长和项目复盘的观察与判断。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thinkingPosts.map((post) => (
            <ThinkingCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              href={`/thinking/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
