/**
 * Footer Component
 * 
 * A modern and attractive contact-focused footer component that includes:
 * - Contact section with animated tagline
 * - Social media and contact links with hover effects
 * - Theme toggle functionality
 * 
 * Features:
 * - Modern glassmorphism design
 * - Smooth animations and transitions
 * - Gradient effects and visual appeal
 * - Responsive and interactive elements
 * - Contemporary layout with proper spacing
 */

"use client"

import React from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react';
import { SiGithub, SiWhatsapp } from '@icons-pack/react-simple-icons';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { Button } from '@/components/ui/button';

/**
 * Footer component with modern contact section, social links, and theme toggle
 * Social links are now sourced from ProfileSection for consistency.
 * Only GitHub, Email, and WhatsApp are shown.
 * @returns JSX.Element - The rendered footer component
 */
export function Footer() {
	/**
	 * Social media and contact links configuration
	 * Source of truth: ProfileSection
	 */
	const socialLinks = [
		{
			href: "https://github.com/nirnaykulshreshtha",
			icon: SiGithub,
			label: "GitHub",
			ariaLabel: "Visit Nirnay's GitHub profile",
			color: "hover:text-gray-800 dark:hover:text-gray-200"
		},
		{
			href: "mailto:nirnaykulshreshtha@gmail.com",
			icon: Mail,
			label: "Email",
			ariaLabel: "Send email to Nirnay",
			color: "hover:text-red-500"
		},
		{
			href: "https://wa.me/919807564282",
			icon: SiWhatsapp,
			label: "WhatsApp",
			ariaLabel: "Chat with Nirnay on WhatsApp",
			color: "hover:text-green-500"
		}
	];

	return (
		<footer className="relative overflow-hidden pb-16">
			<div className="relative container mx-auto px-6 py-16">
				{/* Main contact section */}
				<div className="max-w-4xl mx-auto">
					{/* Contact heading with animation */}
					<div className="text-center mb-12">
						<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
							Let's build something amazing together. Your ideas, my implementation. 
						</p>
						<p className="text-primary font-medium text-xl sm:text-2xl md:text-4xl font-display mt-4"> Let's create the future!</p>
					</div>

					{/* Interactive elements section */}
					<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
						{/* Social links with modern design */}
						<div className="flex flex-col items-center lg:items-start gap-6">
							<div className="flex items-center gap-4">
								{socialLinks.map((social) => {
									const IconComponent = social.icon;
									return (
										<Button
											key={social.label}
											variant="ghost"
											size="icon"
											asChild
											className={`h-14 w-14 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 ${social.color}`}
										>
											<a
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={social.ariaLabel}
												className="flex items-center justify-center"
											>
												<IconComponent className="h-6 w-6" />
											</a>
										</Button>
									);
								})}
							</div>
						</div>

						{/* Divider */}
						<div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent"></div>

						{/* Theme toggle and CTA */}
						<div className="flex flex-col items-center lg:items-end gap-6">
							{/* Theme toggle */}
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
} 