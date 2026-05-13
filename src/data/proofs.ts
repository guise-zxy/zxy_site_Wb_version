export type ProofCategory =
  | "project"
  | "competition"
  | "document"
  | "expression"
  | "learning"

export interface ProofItem {
  id: string
  category: ProofCategory
  image: string
  title: string
  ability: string
  description: string
  relatedProject?: string
}

export const proofCategoryLabels: Record<ProofCategory, string> = {
  project: "项目证明",
  competition: "比赛证明",
  document: "文档证明",
  expression: "表达证明",
  learning: "学习证明",
}

export const proofs: ProofItem[] = [
  {
    id: "env-setup-doc",
    category: "document",
    image: "/images/proof/placeholder-doc.svg",
    title: "环境搭建与指标计算文档",
    ability: "成就他人 / 执行力 / 文档沉淀",
    description:
      "我将测试流程整理成标准文档，帮助组员降低上手成本，提高协作效率。",
    relatedProject: "南方电网 RK3588S Linux 测试项目",
  },
  {
    id: "ai-checker-screenshot",
    category: "project",
    image: "/images/proof/placeholder-project.svg",
    title: "AI 求职自检官功能截图",
    ability: "AI 应用 / 产品思维 / 用户理解",
    description:
      "围绕岗位匹配、能力评分、面试追问的 AI Agent 设计，帮助大学生进行求职诊断。",
    relatedProject: "AI 求职自检官",
  },
  {
    id: "rp-competition",
    category: "competition",
    image: "/images/proof/placeholder-cert.svg",
    title: "嵌入式设计竞赛参赛证明",
    ability: "项目推进 / 团队协作 / 系统设计",
    description:
      "作为负责人带队完成智能睡眠辅助系统，从方案设计到实物调试全流程推进。",
    relatedProject: "智能交互睡眠辅助系统",
  },
  {
    id: "sleep-system-photo",
    category: "project",
    image: "/images/proof/placeholder-project.svg",
    title: "睡眠辅助系统实物照片",
    ability: "硬件设计 / 系统集成 / 用户场景理解",
    description:
      "集成光照传感器、温湿度检测、电子墨水屏、红外控制与语音交互的完整睡眠辅助闭环。",
    relatedProject: "智能交互睡眠辅助系统",
  },
  {
    id: "memory-pool-code",
    category: "learning",
    image: "/images/proof/placeholder-cert.svg",
    title: "C++ 高并发内存池技术笔记",
    ability: "技术学习 / 底层理解 / 问题拆解",
    description:
      "参考 tcmalloc 思路实现多线程内存池，理解内存分配与性能优化。",
    relatedProject: "C++ 高并发内存池",
  },
  {
    id: "rk-test-report",
    category: "document",
    image: "/images/proof/placeholder-doc.svg",
    title: "RK3588S 传输栈测试报告",
    ability: "测试执行 / 数据分析 / 文档输出",
    description:
      "系统记录测试流程、环境配置、指标数据和分析结论，为团队提供可复用的测试方法。",
    relatedProject: "南方电网 RK3588S Linux 测试项目",
  },
  {
    id: "thinking-article",
    category: "expression",
    image: "/images/proof/placeholder-doc.svg",
    title: "AI-HR 方向思考文章",
    ability: "表达 / 独立判断 / 深度思考",
    description:
      "持续输出对 AI-HR、岗位理解和求职成长的观点，展示独立判断和深度思考能力。",
  },
]
