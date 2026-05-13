import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "src", "content")

export function getMDXContent(section: string, slug: string) {
  const filePath = path.join(contentDir, section, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(source)
  return { data, content }
}

export function getMDXSlugs(section: string): string[] {
  const dir = path.join(contentDir, section)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}
