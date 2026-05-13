import HeroSection from "@/components/HeroSection"
import SectionTitle from "@/components/SectionTitle"
import AbilityCard from "@/components/AbilityCard"
import { abilities } from "@/data/abilities"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* 腾讯 HR 能力模型匹配 */}
      <section className="py-12 md:py-16 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="我与腾讯 HR 能力模型的匹配"
            subtitle="腾讯 HR Star 能力模型下的四个维度，我在项目中的真实体现。"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {abilities.map((ability) => (
              <AbilityCard
                key={ability.id}
                title={ability.title}
                description={ability.description}
                experience={ability.experience}
                relatedProjects={ability.relatedProjects}
                tags={ability.tags}
                href={ability.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 联系区域 */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
            期待与您进一步交流
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-lg mx-auto leading-relaxed">
            如果您对我的经历和能力感兴趣，欢迎查看我的详细简历，或通过邮箱与我联系。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/resume/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              下载简历
            </a>
            <a
              href="/tencent-hr"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[#4e525b] font-medium rounded-lg hover:bg-[var(--color-surface)] transition-colors"
            >
              查看腾讯 HR 匹配详情
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
