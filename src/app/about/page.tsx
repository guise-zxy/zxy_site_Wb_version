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
              我是一名关注技术实现、产品问题和 AI-HR 方向的学生。
            </p>
            <p>
              过去我主要积累了嵌入式开发、Linux 测试、C++ 后端学习和
              AI Agent 原型设计相关经验。现在我开始更关注一个问题：
              技术如何帮助人被更好地理解、匹配和成长。
            </p>
            <p>
              相比单纯展示"我做过什么"，我更重视
              "为什么做、怎么判断、如何落地、做完后学到了什么"。
            </p>
            <p>
              这个网站会长期记录我的项目经历、HR 思考、AI 应用探索和成长复盘。
            </p>
          </div>
        </section>

        {/* 能力标签 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-4">
            能力方向
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "AI-HR 探索",
              "技术背景",
              "项目推进",
              "自驱执行",
              "成就他人",
              "组织协作",
              "持续复盘",
              "嵌入式开发",
              "Linux 测试",
              "C++ 开发",
              "AI Agent",
              "文档沉淀",
            ].map((skill) => (
              <Tag key={skill} label={skill} variant="ability" />
            ))}
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
