"use client";

import { ProjectCard } from "@/_components/ProjectCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const projects = [
  {
    id: "portifolio",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
    ],
    link: "https://portifolio-drab-eight-45.vercel.app/pt",
    repo: "https://github.com/estefanni-ribeiro/portifolio",
    image: "/portifolioProject.png",
  },
  {
    id: "todo",
    tech: ["React", "JSON Server", "CSS", "HTML5"],
    link: "https://todo-list-weld-mu.vercel.app/",
    repo: "https://github.com/estefanni-ribeiro/todo-list",
    image: "/todo.png",
  },
];

export default function ProjectsPage() {
  const translate = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        {translate("projects.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            {...{
              ...project,
              title: translate(`projects.${project.id}Title`),
              description: translate(`projects.${project.id}Desc`),
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
