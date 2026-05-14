import type { Metadata } from "next"
import { Download, ExternalLink, Mail } from "lucide-react"
import Tag from "@/components/Tag"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "关于我",
  description: "了解 zxy 的技术背景、AI-HR 探索方向和联系方式。",
}

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 个人简介 */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-[var(--color-foreground)]">
            关于我
          </h1>

          <div className="mt-8 space-y-4 text-[#4e525b] leading-relaxed">
            <p>
              我是一名从交通运输专业转到物联网工程专业的大二生，关注 AI、产品、技术应用与「人」的交叉场景。
            </p>
            <p>
              我的成长路径不是一开始就完全清晰的。大一入学时，我只是希望从交通运输专业转入更偏技术的方向；但在准备转专业、参加程序设计竞赛、加入学校信息中心机房运维团队的过程中，我逐渐发现自己感兴趣的是：信息如何在系统中流动，0和1如何在物理层表示？设备之间如何连接？软件和硬件如何协同完成一件事？
            </p>
            <p>
              这种兴趣推动我最终选择物联网工程，也让我有了在「答案」不确定的时候，能够不断修正方向，寻找内心更优解的经验。
            </p>
            <p>
              我习惯通过行动消解不确定性。面对陌生领域，我会先建立最低可行理解，再通过资料检索、请教他人和动手验证持续推进；面对团队协作，我关注的不只是任务是否完成，更关注自己所做的事是否属于高优先级？下次我再做，哪些地方需要注意并且值得换种解法。
            </p>
            <p>
              每当想起我将面对的用户有「同事，组织，求职者」，就令我振奋。但光振奋与热情还不够，还需要能为TA们真正解决问题的能力。在未来，我希望我能与一批鲜活的人，做一些有挑战的事；并从中不断补足自己的能力。
            </p>
          </div>
        </section>

        {/* 简历下载 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-4">
            简历下载
          </h2>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <Download className="w-4 h-4" />
            下载我的简历（PDF）
          </a>
        </section>

        {/* 社交链接 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-4">
            找到我
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "GitHub",
                href: "https://github.com/guise-zxy",
                desc: "查看我的代码仓库",
              },
              {
                label: "小红书",
                href: "https://www.xiaohongshu.com/user/profile/60e86f1d000000000101d14e",
                desc: "我的个人表达",
              },
              {
                label: "邮箱",
                href: "mailto:zhangxinyi200612@outlook.com",
                desc: "发送邮件",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-surface)] transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                <div>
                  <span className="font-medium text-[var(--color-foreground)]">
                    {link.label}
                  </span>
                  <p className="text-sm text-[var(--color-muted)]">
                    {link.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
