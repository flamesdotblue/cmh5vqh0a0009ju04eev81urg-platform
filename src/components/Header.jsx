import React, { useEffect, useState } from 'react'
import { Moon, Sun, Rocket, Menu } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system'
    setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-[#1F2121]/70 border-b border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md flex items-center justify-center shadow-sm" style={{background: 'linear-gradient(135deg,#21808D,#1D7480)'}}>
              <Rocket className="text-white" size={18} />
            </div>
            <span className="font-semibold tracking-tight">SoftOrigin</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-[#626C71] dark:text-[rgba(167,169,169,0.7)] hover:text-[#21808D] dark:hover:text-[#32B8C6] transition-colors">Features</a>
            <a href="#pricing" className="text-[#626C71] dark:text-[rgba(167,169,169,0.7)] hover:text-[#21808D] dark:hover:text-[#32B8C6] transition-colors">Pricing</a>
            <a href="#apps" className="text-[#626C71] dark:text-[rgba(167,169,169,0.7)] hover:text-[#21808D] dark:hover:text-[#32B8C6] transition-colors">Apps</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle value={theme} onChange={setTheme} />
            <button className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] hover:shadow-sm transition" onClick={() => alert('Command palette coming soon (⌘K)')}>⌘K Search</button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)]" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu size={18} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 transition-all">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#features" className="px-2 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">Pricing</a>
              <a href="#apps" className="px-2 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">Apps</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function ThemeToggle({ value, onChange }) {
  const cycle = () => {
    onChange(value === 'light' ? 'dark' : value === 'dark' ? 'system' : 'light')
  }

  const label = value === 'system' ? 'System' : value === 'dark' ? 'Dark' : 'Light'

  return (
    <button
      onClick={cycle}
      className="inline-flex items-center gap-2 rounded-md border border-[rgba(94,82,64,0.2)] dark:border-[rgba(119,124,124,0.3)] px-2.5 py-1.5 text-sm hover:shadow-sm transition"
      aria-label="Toggle theme"
      title={`Theme: ${label}`}
    >
      <span className="inline-flex items-center justify-center h-5 w-5">
        <Sun className="block dark:hidden" size={16} />
        <Moon className="hidden dark:block" size={16} />
      </span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}
