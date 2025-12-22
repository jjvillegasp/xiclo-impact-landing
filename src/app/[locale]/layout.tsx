import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Xiclo",
  description: "Xiclo landing",
};

const font = localFont({
  src: "../../fonts/Montserrat-Regular.ttf",
  weight: "400",
  style: "normal",
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full max-w-full",
          font.className
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
