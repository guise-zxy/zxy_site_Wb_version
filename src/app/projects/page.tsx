import type { Metadata } from "next"
import SectionTitle from "@/components/SectionTitle"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "项目经历",
  description:
    "zxy 的项目经历展示，包括 AI 求职自检官、嵌入式系统、C++ 内存池等。",
}

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="项目经历"
          subtitle="每个项目背后都有具体的问题、真实的过程和我的复盘思考。"
        />

        <div className="space-y-6">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                summary={project.summary}
                role={project.role}
                tags={project.tags}
                matchedAbilities={project.matchedAbilities}
                href={`/projects/${project.slug}`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
