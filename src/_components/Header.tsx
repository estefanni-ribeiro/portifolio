"use client";

import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const translate = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: translate("nav.home") },
    { href: "/projects", label: translate("nav.projects") },
    { href: "/about", label: translate("nav.about") },
    { href: "/contact", label: translate("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-lg text-indigo-600">Estéfanni</div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 relative">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <div key={href} className="relative">
                <Link
                  href={href}
                  className={`text-sm font-medium hover:text-indigo-600 transition ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-link-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
          <ThemeToggle />
          <LanguageSwitcher />
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden px-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium hover:text-indigo-600 transition ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-4 pt-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
