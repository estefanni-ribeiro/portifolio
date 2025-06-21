'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function NotFound() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-500 opacity-30 z-0"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>

        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-12 text-6xl"
        >
          🧭
        </motion.div>
      </motion.div>
    </div>
  )
}
