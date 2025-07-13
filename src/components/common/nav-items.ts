/**
 * nav-items.ts
 *
 * This file exports the navigation items used in the FloatingNav component and other navigation UIs.
 * Only serializable data is exported (no React components/functions), to ensure compatibility between Server and Client Components in Next.js.
 *
 * Each nav item contains:
 * - href: string - The anchor link for the section
 * - icon: string - The name of the icon component (to be mapped in the client component)
 * - label: string - The display label for the navigation item
 *
 * Update this file if you add, remove, or change navigation items or their structure.
 */

/**
 * navItems: Array of navigation items for the FloatingNav component.
 *
 * icon: string - Must match a key in the iconMap in the client component.
 */
export const navItems = [
  { href: "#home", icon: "HomeIcon", label: "Home" },
  { href: "#skills", icon: "PencilIcon", label: "Skills & Technologies" },
  { href: "#education", icon: "GraduationCapIcon", label: "Education" },
  { href: "#experience", icon: "CalendarIcon", label: "Experience" },
  { href: "#projects", icon: "BriefcaseIcon", label: "Projects" },
  { href: "#contact", icon: "MailIcon", label: "Contact" },
]; 