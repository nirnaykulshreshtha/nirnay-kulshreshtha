// FloatingNav.tsx
// -----------------------------
// FloatingNav is a floating navigation bar component for use across the application.
// It animates in/out based on scroll direction and is highly customizable via props.
// Aggressive logging is included for debugging.
//
// Design choices:
// - Uses Framer Motion for animation.
// - Accepts navItems (array of {name, link, icon?}) and className for styling.
// - Responsive and styled for both desktop and mobile.
// - No login button included.
// - Documentation is updated as per project standards.
// -----------------------------

'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, PencilIcon, CalendarIcon, MailIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { buttonVariants } from '@/components/ui/button';


/**
 * FloatingNav Props
 * @param navItems - Array of navigation items ({ label, href, icon? }) to render in the nav bar. Icon is a string name mapped to a component internally.
 * @param className - Optional className for styling.
 */
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems?: { label: string; href: string; icon?: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Map icon names to actual icon components
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    HomeIcon,
    PencilIcon,
    GraduationCapIcon,
    CalendarIcon,
    BriefcaseIcon,
    MailIcon,
  };

  // Use navItems prop if provided, otherwise fallback to DATA.navbar
  const items = navItems || [];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
      >
        <TooltipProvider>

        <Dock direction="middle">
          {items.map((item) => {
            const Icon = item.icon ? iconMap[item.icon] : undefined;
            return (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full",
                      )}
                    >
                      {Icon && <Icon className="size-4" />}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          {/* <Separator orientation="vertical" className="h-full" /> */}
          {/* {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))} */}
          {/* <Separator orientation="vertical" className="h-full py-2" /> */}
          {/* <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon> */}
        </Dock>

        {/* <Dock direction="middle">
          {DATA.navbar.map((item, idx) => (
            <React.Fragment key={idx}>
            <DockItem
            >
              <Link
                href={ item.href }
                aria-label={ item.label }
                className={ cn(
                  buttonVariants({ variant: 'ghost' }),
                  'rounded-xl',
                ) }
              >
                <item.icon className="size-4"/>
                <span>{ item.label }</span>
              </Link>
            </DockItem>
            {idx < DATA.navbar.length - 1 && (
      <Separator orientation="vertical" className="h-full" />
    )}
            </React.Fragment>
          ))}
        </Dock> */}
      </TooltipProvider>
      </motion.div>
    </AnimatePresence>
  );
};
