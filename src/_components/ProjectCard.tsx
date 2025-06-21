import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  image: string;
};

export const ProjectCard = ({
  title,
  description,
  tech,
  link,
  repo,
  image,
}: Project) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="rounded-xl border border-gray-300 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition"
  >
    <div className="w-full aspect-[16/9] relative mb-4 overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
    <h3 className="text-xl font-semibold text-indigo-500">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    <div className="mt-3 text-sm text-gray-500">Tech: {tech.join(", ")}</div>
    <div className="mt-4 space-x-4 text-sm">
      <Link
        href={link}
        className="text-indigo-600 hover:underline"
        target="_blank"
      >
        Live Demo
      </Link>
      <Link
        href={repo}
        className="text-gray-500 hover:underline"
        target="_blank"
      >
        GitHub
      </Link>
    </div>
  </motion.div>
);
