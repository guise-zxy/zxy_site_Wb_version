"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { clsx } from "clsx"
import { siteConfig } from "@/data/site-config"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
          >
            <span className="text-[var(--color-primary)]">zxy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-3 py-2 text-sm rounded-lg transition-colors",
                    isActive
                      ? "text-[var(--color-primary)] bg-[var(--color-primary-light)] font-medium"
                      : "text-[#4e525b] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Resume Download Button */}
            <a
              href={siteConfig.resumeUrl}
              download
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Download className="w-4 h-4" />
              下载简历
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#4e525b] hover:bg-[var(--color-surface)] transition-colors"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--color-border)] mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "px-3 py-2.5 text-sm rounded-lg transition-colors",
                      isActive
                        ? "text-[var(--color-primary)] bg-[var(--color-primary-light)] font-medium"
                        : "text-[#4e525b] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <a
                href={siteConfig.resumeUrl}
                download
                className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <Download className="w-4 h-4" />
                下载简历
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
