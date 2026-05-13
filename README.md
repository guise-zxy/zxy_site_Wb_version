# zxy-hr-profile｜AI-HR 方向个人能力展示站

一个面向腾讯 HR / AI-HR 岗位的个人能力证据站，用于在求职简历中展示能力匹配度和项目经历。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **图标**: lucide-react
- **内容管理**: MDX (gray-matter + next-mdx-remote)
- **部署**: Vercel

## 页面结构

| 路由 | 内容 |
|------|------|
| `/` | 首页：Hero + 能力模型匹配 + 精选项目 + 思考展示 |
| `/tencent-hr` | 腾讯 HR 匹配页：岗位理解 + JD 分析 + 匹配证据 |
| `/projects` | 项目经历总览 |
| `/projects/[slug]` | 项目详情（MDX） |
| `/thinking` | 思考文章列表 |
| `/thinking/[slug]` | 文章详情（MDX） |
| `/proof` | 证明材料展示 |
| `/about` | 关于我 + 简历下载 + 联系方式 |

## 本地启动

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 生产模式
npm run start
```

## 内容维护方式

### 修改项目详情

编辑 `src/content/projects/[slug].mdx` 文件，使用 Markdown 格式编写。

### 修改文章

编辑 `src/content/thinking/[slug].mdx` 文件。

### 修改项目列表 / 文章列表元数据

编辑 `src/data/` 目录下的对应 `.ts` 文件：

- `projects.ts` — 项目列表元数据（标题、摘要、标签、排序）
- `thinking.ts` — 文章列表元数据
- `abilities.ts` — 腾讯 HR 能力卡数据
- `proofs.ts` — 证明材料数据
- `jd-matches.ts` — JD 匹配分析数据
- `site-config.ts` — 站点配置（导航、社交链接、简历路径）

### 替换图片

图片放在 `public/images/` 目录下，按类型组织：

```
public/images/
├── projects/    # 项目截图
├── proof/       # 证明材料图片
├── certificates/ # 证书图片
└── avatar.jpg   # 个人头像
```

替换图片后，修改 `src/data/proofs.ts` 中的 `image` 路径即可。

### 替换简历 PDF

将新简历 PDF 放到 `public/resume/resume.pdf`，覆盖原文件即可。

## 部署

本仓库已配置为部署到 Vercel。连接 GitHub 仓库后自动部署。

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 选择 `zxy-hr-profile` 项目
4. 框架自动识别为 Next.js
5. 点击 Deploy 完成部署

## 目录说明

```
src/
├── app/          # 页面路由（App Router）
├── components/   # UI 组件
├── content/      # MDX 内容文件（项目详情、文章）
├── data/         # 结构化数据（能力、项目、文章元数据）
└── lib/          # 工具函数（MDX 加载等）

public/
├── images/       # 图片资源
└── resume/       # 简历 PDF
```

## 长期维护建议

- **每周**：更新 1 条项目进展或短思考
- **每月**：整理 1 篇完整的 HR / AI / 项目复盘文章
- **每次投递前**：根据目标岗位调整项目顺序和能力重点
- **每完成一个项目节点**：补充截图、文档、数据和复盘
