export interface ProofImage {
  src: string
  alt: string
}

export interface Ability {
  id: string
  title: string
  description: string
  experience: string
  relatedProjects: string[]
  tags: string[]
  href: string
  proofImages?: ProofImage[]
}

export const abilities: Ability[] = [
  {
    id: "positive-mindset",
    title: "正能量的心态",
    description:
      "我理解的正能量，不是简单情绪积极，而是在复杂任务中保持建设性心态，愿意把问题转化为行动。",
    experience:
      "在南方电网相关 RK3588S Linux 测试项目中，我最初只是执行测试任务，但在不断遇到环境配置、指标计算和协作推进问题后，我开始主动整理流程、沉淀文档，并带动组员一起推进。",
    relatedProjects: [
      "南方电网 RK3588S Linux 测试与传输优化项目",
      "嵌入式智能睡眠辅助系统",
    ],
    tags: ["心态", "建设性", "问题转化"],
    href: "/tencent-hr",
    proofImages: [
      {
        src: "/images/proof/positive-mindset/1.jpg",
        alt: "遇到困难能及时转换心态，借助现有资料和AI，向有经验的老师请教如何在新业务中快速上手",
      },
      {
        src: "/images/proof/positive-mindset/2.jpg",
        alt: "积极主动，遇到学习上的疑惑会借助外部资源，主动向前辈请教可能解",
      },
    ],
  },
  {
    id: "self-driven",
    title: "强自驱的能力",
    description:
      "我习惯在没有标准答案的任务中主动拆解问题，先理解目标，再拆模块、定节奏、查资料、做验证，最后沉淀成可复用的方法。",
    experience:
      "我主动开发 AI 求职自检官，研究岗位 JD、能力评分、面试追问和求职辅导流程；也主动搭建个人网站，用长期维护的方式展示自己的项目和思考。",
    relatedProjects: [
      "AI 求职自检官",
      "个人能力展示站",
      "嵌入式智能睡眠辅助系统",
    ],
    tags: ["自驱", "主动", "拆解问题"],
    href: "/tencent-hr",
    proofImages: [
      {
        src: "/images/proof/self-driven/1.jpg",
        alt: "喜欢主动思考并影响其他人，愿意把自己的思考分享给别人",
      },
      {
        src: "/images/proof/self-driven/2.jpg",
        alt: "乐于自我反思，和TA讨论我在面临一些事情时的反应，寻找我究竟是个什么样的人",
      },
      {
        src: "/images/proof/self-driven/681794379295f315dbdb3c94aad8a59a.jpg",
        alt: "敢于承担更高的责任，学姐鼓励我担任比赛组长，以及她对我的评价",
      },
    ],
  },
  {
    id: "help-others",
    title: "成就他人的意愿",
    description:
      "我理解的成就他人，是把自己的经验整理成别人也能使用的方法，降低他人的理解和执行成本。",
    experience:
      "在项目中，我曾输出环境搭建和指标计算文档，帮助组员更快进入测试状态；在 AI 求职自检官项目中，我希望把岗位分析、能力诊断和面试追问流程工具化，帮助同学更清楚地认识自己。",
    relatedProjects: [
      "AI 求职自检官",
      "南方电网 RK3588S Linux 测试项目",
    ],
    tags: ["成就他人", "文档沉淀", "工具化思维"],
    href: "/tencent-hr",
    proofImages: [
      {
        src: "/images/proof/help-others/1.jpg",
        alt: "给负责嵌赛项目画板的同学心态和做事思路上的建议，真正帮助了她",
      },
      {
        src: "/images/proof/help-others/2.jpg",
        alt: "机缘巧合认识因学业与项目投入不平衡而焦虑的学弟，给出了直接建议",
      },
      {
        src: "/images/proof/help-others/3.jpg",
        alt: "面对尊敬的老师，在认为会影响其工作的问题面前也会给出可行建议",
      },
    ],
  },
  {
    id: "hr-exploration",
    title: "对 HR 有探索之心",
    description:
      "我对 HR 的兴趣，来自于「人如何被理解、匹配、成长和激发」这个问题。",
    experience:
      "我关注 AI 时代下 HR 职能的变化，尤其是 AI 在招聘筛选、岗位匹配、人才评估、员工体验和组织协作中的应用。我希望结合自己的技术背景，探索 AI-HR 的实际落地方式。",
    relatedProjects: [
      "AI 求职自检官",
      "AI-HR 方向思考文章",
      "腾讯 HR 岗位匹配页",
    ],
    tags: ["AI-HR", "探索", "人才匹配"],
    href: "/tencent-hr",
    proofImages: [
      {
        src: "/images/proof/hr-exploration/对HR有探索之心.png",
        alt: "对HR有探索之心的证明",
      },
    ],
  },
]
