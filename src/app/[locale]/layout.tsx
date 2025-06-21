import "../globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/_components/Footer";
import { Header } from "@/_components/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          <main className="min-h-screen px-4 md:px-12 lg:px-24 pt-24">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
