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
      "遇到困难，能及时转换心态去迎接它。第一次接手新项目时，因为担心自己的推进速度太慢，因此借助现有资料和AI，同时向一位以前在华为做交换机业务的老师请教「如何在新业务中快速上手？」\n\n积极主动。遇到学习上的疑惑，会借助外部资源，比如主动向前辈请教「可能解」。",
    experience: "",
    relatedProjects: [
      "南方电网IPv6+测试开发与测试项目",
      "基于日间光照感知与夜间环境联动的智能睡眠辅助系统",
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
      "喜欢主动思考，并影响其他人，并愿意把自己的思考分享给别人。一个不是我学院的老师，最近找我问分享。原因：我以前会经常把自己的深度思考分享给她，也会讨论一些求职相关的事（她是负责我们学校就业中心的老师）。诸如此类，还有我的马原老师，跟她发分享观点，她经常能帮我纠出一些逻辑漏洞。\n\n乐于自我反思。大一那一年，在元宝开了一个分组，专门用来和TA讨论「我在面临一些事情的反应」，来寻找「我究竟是个什么样的人？」又或者问TA：「我当前所解决这个问题的方案，还可以用什么方式更好的解决吗？」\n\n敢于承担更高的责任。学校要求每个实验室要把过往一些已经在技术赛事上的获奖项目迁移到「大学生创业挑战赛」。当初负责这个项目的学姐找到我去担任这次比赛的组长。一开始我有迟疑，会担心自己做不好。但最后学姐给了我鼓励，加上想要看看自己的边界在哪里；同时，我根据以往的经验有一定信心：我不一定能做完美，但一定会尽可能做完满。最后，这个比赛也进入了校赛。",
    experience: "",
    relatedProjects: [
      "AI 求职自检官",
      "个人能力展示站",
      "基于日间光照感知与夜间环境联动的智能睡眠辅助系统",
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
      "给负责给我的嵌赛项目画板的同学一些心态上和做事思路上的可能解，并且真的帮助了她。\n\n机缘巧合下认识了一位因「学业与项目」投入不平衡而焦虑的学弟，给他了一些直接的建议（至少我希望他能去做些什么，或者说玩些什么；都不要在这「空想」。）\n\n即使对方是尊敬的老师，但在一些我认为会影响她后续工作的问题面前，我也会给一些可行的建议。",
    experience: "",
    relatedProjects: [
      "AI 求职自检官",
      "南方电网IPv6+测试开发与测试项目",
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
    description: "",
    experience: "",
    relatedProjects: [
      "AI 求职自检官",
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
