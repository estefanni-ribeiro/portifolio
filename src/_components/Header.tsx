"use client";

import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Header() {
  const pathname = usePathname();
  const translate = useTranslations();

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
        <nav className="flex items-center gap-6 relative">
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
          <motion.div
            key="theme-toggle-wrapper"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            key="language-switcher-wrapper"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <LanguageSwitcher />
          </motion.div>
        </nav>
      </div>
    </header>
  );
}
