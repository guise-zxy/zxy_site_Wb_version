import type { Metadata } from "next"
import SectionTitle from "@/components/SectionTitle"
import ProofCard from "@/components/ProofCard"
import { proofs, proofCategoryLabels, type ProofCategory } from "@/data/proofs"

export const metadata: Metadata = {
  title: "证明材料",
  description: "zxy 的项目证明、比赛证明、文档证明、表达证明和学习证明。",
}

const categories: ProofCategory[] = [
  "project",
  "competition",
  "document",
  "expression",
  "learning",
]

export default function ProofPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="证明材料"
          subtitle="用证书、项目截图、文档证明我的经历真实存在，每张图都标注了对应能力。"
        />

        {categories.map((category) => {
          const categoryProofs = proofs.filter(
            (p) => p.category === category
          )
          if (categoryProofs.length === 0) return null

          return (
            <section key={category} className="mb-12">
              <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-6">
                {proofCategoryLabels[category]}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProofs.map((proof) => (
                  <ProofCard
                    key={proof.id}
                    image={proof.image}
                    title={proof.title}
                    ability={proof.ability}
                    description={proof.description}
                    relatedProject={proof.relatedProject}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
