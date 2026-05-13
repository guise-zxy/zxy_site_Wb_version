export interface ProjectMeta {
  slug: string
  title: string
  summary: string
  role: string
  tags: string[]
  matchedAbilities: string[]
  order: number
}

export const projects: ProjectMeta[] = [
  {
    slug: "ai-job-self-checker",
    title:
      "AI 求职自检官：面向大学生的岗位能力诊断与面试陪练工具",
    summary:
      "基于岗位 JD 和个人经历，帮助大学生完成能力匹配分析、简历补强和面试追问训练。",
    role: "独立开发",
    tags: ["AI Agent", "Prompt Engineering", "求职辅导"],
    matchedAbilities: [
      "对 HR 有探索之心",
      "强自驱",
      "成就他人",
      "AI 应用理解",
      "用户思维",
      "产品思维",
    ],
    order: 1,
  },
  {
    slug: "rk-lightweight-stack",
    title:
      "基于 RK3588S 平台的 Linux 轻量化传输栈测试与优化",
    summary:
      "参与面向南方电网场景的 Linux 传输栈测试工作，负责环境搭建、运行测试、指标计算与团队推进。",
    role: "测试与团队推进",
    tags: ["Linux", "嵌入式", "测试", "文档沉淀"],
    matchedAbilities: [
      "强自驱",
      "责任心",
      "执行力",
      "沟通协调",
      "成就他人",
      "文档沉淀",
    ],
    order: 2,
  },
  {
    slug: "sleep-aid-system",
    title:
      "基于日间光照感知与夜间环境联动的智能交互睡眠辅助系统",
    summary:
      "面向睡眠辅助场景，构建从白天光照感知到夜间卧室环境联动的嵌入式系统。",
    role: "项目负责人",
    tags: ["嵌入式", "系统设计", "传感器"],
    matchedAbilities: [
      "项目负责人能力",
      "系统思维",
      "用户理解",
      "问题拆解",
      "团队推进",
    ],
    order: 3,
  },
  {
    slug: "cpp-memory-pool",
    title: "C++ 高并发内存池",
    summary:
      "参考 tcmalloc 思路，实现面向多线程场景的内存池，用于理解内存分配、线程缓存和性能优化。",
    role: "独立开发",
    tags: ["C++", "内存管理", "并发"],
    matchedAbilities: [
      "技术学习能力",
      "代码能力",
      "问题拆解",
      "自驱学习",
    ],
    order: 4,
  },
]
