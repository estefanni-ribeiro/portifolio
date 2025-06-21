"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/dev-animation.json";

export default function Home() {
  const translate = useTranslations();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        {translate("home.title")}
        <span className="text-indigo-500"> Estéfanni Beatriz Ribeiro</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
        {translate("home.description")}
      </p>
      <div className="mt-10 flex justify-center gap-4 relative">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition"
        >
          {translate("home.projectsLink")}
        </Link>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition"
        >
          {translate("home.contactLink")}
        </Link>
      </div>
      <Lottie
        animationData={animationData}
        loop
        className="w-42 h-42 md:w-64 md:h-64 py-4"
      />
    </motion.section>
  );
}
