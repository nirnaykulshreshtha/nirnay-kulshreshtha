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
import { ThemeToggle } from '@/components/common/theme-toggle';
import { Button } from '@/components/ui/button';

/**
 * Footer component with modern contact section, social links, and theme toggle
 * @returns JSX.Element - The rendered footer component
 */
export function Footer() {
	/**
	 * Social media and contact links configuration
	 * Each link contains the URL, icon, label, and aria-label for accessibility
	 */
	const socialLinks = [
		{
			href: "https://github.com/nirnaykulshreshtha",
			icon: Github,
			label: "GitHub",
			ariaLabel: "Visit Nirnay's GitHub profile",
			color: "hover:text-gray-800 dark:hover:text-gray-200"
		},
		{
			href: "https://linkedin.com/in/nirnaykulshreshtha",
			icon: Linkedin,
			label: "LinkedIn",
			ariaLabel: "Connect with Nirnay on LinkedIn",
			color: "hover:text-blue-600"
		},
		{
			href: "https://twitter.com/nirnaykulshreshtha",
			icon: Twitter,
			label: "Twitter",
			ariaLabel: "Follow Nirnay on Twitter",
			color: "hover:text-blue-400"
		},
		{
			href: "mailto:nirnay@example.com",
			icon: Mail,
			label: "Email",
			ariaLabel: "Send email to Nirnay",
			color: "hover:text-red-500"
		}
	];

	return (
		<footer className="relative mt-32 overflow-hidden">
			{/* Gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
			
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
			</div>

			{/* Border with gradient */}
			<div className="relative border-t border-gradient-to-r from-transparent via-primary/20 to-transparent bg-gradient-to-r from-transparent via-border/40 to-transparent"></div>

			<div className="relative container mx-auto px-6 py-16">
				{/* Main contact section */}
				<div className="max-w-4xl mx-auto">
					{/* Contact heading with animation */}
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-3 mb-6">
							<div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
							<span className="text-sm font-medium text-primary/80 uppercase tracking-wider">Let's Connect</span>
							<div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
						</div>
						
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
							<span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
								Contact me
							</span>
						</h2>
						
						<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
							Let's build something amazing together. Your ideas, my implementation. 
							<span className="text-primary font-medium"> Let's create the future!</span>
						</p>
					</div>

					{/* Interactive elements section */}
					<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
						{/* Social links with modern design */}
						<div className="flex flex-col items-center lg:items-start gap-6">
							<h3 className="text-lg font-semibold text-foreground">Connect with me</h3>
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
							
							{/* CTA Button */}
							<Button 
								asChild
								className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
							>
								<a href="mailto:nirnay@example.com" className="flex items-center gap-2">
									Get in Touch
									<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
} 