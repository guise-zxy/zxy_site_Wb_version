export interface SiteConfig {
  name: string
  title: string
  description: string
  navItems: NavItem[]
  socialLinks: SocialLink[]
  resumeUrl: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export const siteConfig: SiteConfig = {
  name: "zxy",
  title: "zxy｜AI-HR 方向个人能力展示站",
  description:
    "展示 zxy 在 AI-HR、技术实践、项目推进、组织协作和个人思考方面的能力证据。",
  navItems: [
    { label: "首页", href: "/" },
    { label: "腾讯 HR 匹配", href: "/tencent-hr" },
    { label: "关于我", href: "/about" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/guise-zxy",
      icon: "github",
    },
    {
      label: "小红书",
      href: "https://www.xiaohongshu.com/user/profile/60e86f1d000000000101d14e",
      icon: "book-open",
    },
    {
      label: "邮箱",
      href: "mailto:zhangxinyi200612@outlook.com",
      icon: "mail",
    },
  ],
  resumeUrl: "/resume/resume.pdf",
}
