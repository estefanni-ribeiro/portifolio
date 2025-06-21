import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "pt" : "en";
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1"
      aria-label="Toggle Language"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1"
        >
          {locale === "en" ? (
            <>
              <Image src="/flags/us.svg" alt="EN" width={20} height={14} />
              EN
            </>
          ) : (
            <>
              <Image src="/flags/br.svg" alt="PT" width={20} height={14} />
              PT
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
