export interface ThinkingPost {
  slug: string
  title: string
  summary: string
  category: string
  date: string
  readTime: string
}

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: "my-understanding-of-ai-hr",
    title:
      "我理解的 AI-HR：不是用 AI 替代 HR，而是重塑人的理解与匹配",
    summary:
      "AI-HR 的核心不是用算法取代人，而是用技术帮助 HR 更深入地理解候选人、更高效地匹配岗位、更精准地支持员工成长。",
    category: "AI-HR",
    date: "2026-01-15",
    readTime: "6 min",
  },
  {
    slug: "why-students-cannot-judge-job-fit",
    title: "为什么大学生很难判断自己是否适合一个岗位？",
    summary:
      "从岗位描述到自我认知，大学生在求职时面临多重信息不对称。我尝试拆解这些问题，并思考如何用工具帮助解决。",
    category: "岗位理解",
    date: "2026-01-10",
    readTime: "5 min",
  },
  {
    slug: "execution-power",
    title: "执行力到底是什么？为什么实习岗位都强调它？",
    summary:
      "执行力不是机械完成任务，而是遇到模糊和障碍时，依然能推进到可交付状态的能力。从实际项目经历出发，聊聊我对执行力的理解。",
    category: "求职成长",
    date: "2026-01-05",
    readTime: "4 min",
  },
]
