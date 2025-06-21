"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="block"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}