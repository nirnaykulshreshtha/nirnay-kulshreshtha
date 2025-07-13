import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Funnel_Display, Albert_Sans } from 'next/font/google';
import { FloatingNav } from "@/components/ui/floating-nav";

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
  // Documentation: FloatingNav is placed at the top of the app, above all content, for global navigation.
  // navItems can be customized as needed.
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
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
            {/* FloatingNav is rendered at the top of the app for global navigation */}
            <FloatingNav navItems={navItems} />
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
