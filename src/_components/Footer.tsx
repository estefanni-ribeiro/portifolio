import { useTranslations } from "next-intl";

export const Footer = () => {
  const translate = useTranslations();

  return (
    <footer className="text-center text-sm py-8 border-t border-gray-200 dark:border-gray-700 mt-10">
      © {new Date().getFullYear()} Estéfanni Beatriz Ribeiro.{" "}
      {translate("footer.copyright")}.
    </footer>
  );
};
