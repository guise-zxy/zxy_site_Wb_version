import type { Metadata } from "next"
import SectionTitle from "@/components/SectionTitle"
import AbilityCard from "@/components/AbilityCard"
import Tag from "@/components/Tag"
import { abilities } from "@/data/abilities"

export const metadata: Metadata = {
  title: "我为什么适合腾讯 HR 日常实习",
  description:
    "从腾讯 HR 能力模型、AI-HR 岗位理解、项目经历和个人思考出发，展示我与腾讯 HR 相关岗位的匹配度。",
}

export default function TencentHRPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <SectionTitle
          title="我为什么适合腾讯 HR 日常实习"
          subtitle="这不是泛泛投递，而是经过认真理解后的匹配分析。"
        />

        {/* 2. 能力模型匹配 */}
        <section className="mb-16">
          <SectionTitle
            title="腾讯 HR 能力模型匹配"
            subtitle="按照腾讯 HR Star 能力模型，用具体经历证明匹配度。"
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
                proofImages={ability.proofImages}
              />
            ))}
          </div>
        </section>

        {/* 5. 我能贡献什么 */}
        <section>
          <SectionTitle
            title="如果加入腾讯 HR，我能贡献什么"
            subtitle="从执行、技术和文档三个维度，为团队带来即战力。"
          />

          <div className="bg-white rounded-xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
            <p className="text-[#4e525b] leading-relaxed mb-6">
              如果加入腾讯 HR，我希望先从具体、细致、可交付的工作做起，
              快速理解团队目标和业务场景。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-[var(--color-surface)]">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-3">
                  <span className="text-[var(--color-primary)] font-bold text-lg">
                    1
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] mb-2">
                  执行与推进能力
                </h3>
                <p className="text-sm text-[#4e525b] leading-relaxed">
                  能接住任务、拆解任务、持续跟进，并及时反馈进展。
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface)]">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-3">
                  <span className="text-[var(--color-primary)] font-bold text-lg">
                    2
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] mb-2">
                  技术与 AI 应用理解
                </h3>
                <p className="text-sm text-[#4e525b] leading-relaxed">
                  能协助探索 AI 在招聘、人才评估、数据整理和员工体验中的应用。
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-surface)]">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-3">
                  <span className="text-[var(--color-primary)] font-bold text-lg">
                    3
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--color-foreground)] mb-2">
                  文档与复盘能力
                </h3>
                <p className="text-sm text-[#4e525b] leading-relaxed">
                  能将复杂流程整理成清晰文档，帮助团队降低沟通和协作成本。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
