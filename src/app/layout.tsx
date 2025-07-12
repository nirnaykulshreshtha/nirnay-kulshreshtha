import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Funnel_Display, Albert_Sans } from 'next/font/google';

const funnel_display = Funnel_Display({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--display-family',
});

const albert_sans = Albert_Sans({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--text-family',
});

export const metadata: Metadata = {
  title: "Nirnay Kulshreshtha | Full Stack, Front-end, Mobile Application Developer, & AI Developer",
  description: "Nirnay Kulshreshtha is a skilled Full Stack Developer, Front-end Engineer, Mobile Application Developer, and AI Developer. Freelancer building scalable web applications, APIs, and AI/ML solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${funnel_display.variable} ${albert_sans.variable}`}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
