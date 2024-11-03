import {getRequestConfig} from 'next-intl/server';
import { notFound } from "next/navigation";
 
export default getRequestConfig(async ({requestLocale}) => {
  const locales = ["es", "en"];

  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale)) {
    notFound();
  }
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});