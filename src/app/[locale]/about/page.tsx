"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML5", icon: "/icons/html.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Java", icon: "/icons/java.svg" },
  ];

  const translate = useTranslations();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        {translate("about.title")}
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/profile.jpg"
          alt="Profile image"
          width={200}
          height={200}
          className="rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />

        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {translate("about.desc1")}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translate("about.desc2")}
          </p>
        </div>
      </div>

      <h2 className="text center text-2xl font-semibold mb-4">
        {translate("about.skills")}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:shadow-md transition"
          >
            <Image src={icon} alt={name} width={40} height={40} />
            <span className="mt-2 text-sm text-center text-gray-800 dark:text-gray-200">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
