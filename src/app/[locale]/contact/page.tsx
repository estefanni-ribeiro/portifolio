"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaSpinner } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">();
  const form = useRef<HTMLFormElement>(null);
  const translate = useTranslations();

  const templateId =
    useLocale() === "en"
      ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_EN!
      : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PT!;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        templateId,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  const isSendingMessage = status === "loading";
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        {translate("contact.title")}
      </h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {translate("contact.desc")}
        </p>
        <input
          name="name"
          type="text"
          required
          placeholder={translate("contact.pInput")}
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          name="email"
          type="email"
          required
          placeholder={translate("contact.pEmail")}
          className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          name="message"
          required
          placeholder={translate("contact.pMessage")}
          className="w-full p-3 h-32 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
        />
        {status !== "success" && (
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
            disabled={isSendingMessage}
          >
            {isSendingMessage ? (
              <>
                <FaSpinner className="animate-spin" />{" "}
                {translate("contact.sending")}
              </>
            ) : (
              translate("contact.sendMessage")
            )}
          </button>
        )}
        {status === "success" && (
          <p className="text-green-500">{translate("contact.success")}</p>
        )}
        {status === "error" && (
          <p className="text-red-500">{translate("contact.fail")}</p>
        )}
      </motion.form>

      {/* Social Icons */}
      <div className="mt-12 text-center space-x-6">
        <a
          href="https://www.linkedin.com/in/est%C3%A9fanni-beatriz-908356309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="inline w-6 h-6 hover:text-indigo-600" />
        </a>
        <a
          href="https://github.com/estefanni-ribeiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="inline w-6 h-6 hover:text-indigo-600" />
        </a>
        <a href="mailto:estefannibeatriz@hotmail.com">
          <FaEnvelope className="inline w-6 h-6 hover:text-indigo-600" />
        </a>
      </div>

      {/* CV Download */}
      <div className="mt-8 text-center">
        <Link
          href="/cv/Estefanni_Ribeiro.pdf"
          download
          className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
        >
          {translate("contact.cv")}
        </Link>
      </div>
    </motion.section>
  );
}
