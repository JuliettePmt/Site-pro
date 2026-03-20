import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";
import { LangProvider } from '@/context/LangContext'
import LangToggle from "@/components/LangToggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.name}`,
  },
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    siteName: portfolioConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className={`${poppins.variable} ${rubik.variable}`}>
<LangProvider>
<main
className={cn(
"flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)]",
              { "bg-white": "#E6E7EB" }
            )}
>
<Navbar />
<LangToggle />
{children}
</main>
</LangProvider>
</body>
</html>
  );
}