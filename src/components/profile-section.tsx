"use client";

import { Button } from '@/components/ui/button';
import { Calendar, Github, Mail, MapPin, Sparkles, Star, MessageCircle } from 'lucide-react';
import * as motion from "motion/react-client";

/**
 * ProfileSection component displaying an enhanced profile image with decorative elements,
 * animated social media icons, and a modern card-based design with glassmorphism effects
 */
export function ProfileSection() {
	return (
		<motion.div 
			className="flex-[2] lg:flex-[3] relative flex flex-col justify-center space-y-8 lg:ps-10"
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
		>
			{/* Enhanced card container with glassmorphism */}
			<motion.div 
				className="relative p-8 rounded-3xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl border border-white/10 shadow-2xl"
				initial={{ opacity: 0, y: 30, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
				whileHover={{ y: -5, scale: 1.02 }}
			>
				{/* Animated background elements */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
				<div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
				<div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
				
				{/* Main content container */}
				<div className="relative flex flex-col items-center space-y-6">
					{/* Enhanced image container with floating elements */}
					<motion.div 
						className="relative"
						whileHover={{ scale: 1.05, rotate: 2 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						{/* Glowing ring effect */}
						<div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg scale-110 animate-pulse opacity-30"></div>
						
						{/* Main image with enhanced styling */}
						<span className="relative flex shrink-0 overflow-hidden rounded-full size-52 md:size-60 lg:size-64 border-4 border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
							<img 
								className="aspect-square h-full w-full object-cover object-[32px_8px] rounded-full" 
								alt="Nirnay Kulshreshtha"
								src="/face-nirnay.png"
							/>
						</span>
						
						{/* Floating decorative elements */}
						<motion.div 
							className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
							animate={{ y: [-5, 5, -5] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
						>
							<Sparkles className="h-6 w-6 text-white" />
						</motion.div>
						
						<motion.div 
							className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-lg"
							animate={{ y: [5, -5, 5] }}
							transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
						>
							<Star className="h-5 w-5 text-white" />
						</motion.div>
					</motion.div>

					{/* Enhanced status badge */}
					<motion.div 
						className="space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
					>
						<div className="flex flex-wrap gap-3 justify-center">
							<motion.span
								className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 cursor-default flex flex-row justify-center items-center gap-3 backdrop-blur-sm shadow-lg"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
								whileHover={{ scale: 1.05, y: -2 }}
							>
								<Calendar className="h-4 w-4 text-primary" />
								Available for opportunities
							</motion.span>
						</div>
					</motion.div>

					{/* Enhanced social links with better styling */}
					<motion.div 
						className="flex gap-4 justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
					>
						{[
							{ icon: Github, href: "https://github.com/nirnaykulshreshtha", label: "GitHub" },
							{ icon: Mail, href: "mailto:nirnaykulshreshtha@gmail.com", label: "Email" },
							{ icon: MessageCircle, href: "https://wa.me/919807564282", label: "WhatsApp" }
						].map((social, index) => (
							<motion.div
								key={social.label}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 1.2 + index * 0.1, ease: "easeOut" }}
								whileHover={{ scale: 1.1, y: -3 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button 
									variant="ghost" 
									size="icon" 
									className="h-12 w-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 border border-white/20 hover:border-primary/30 shadow-lg backdrop-blur-sm group"
									asChild
								>
									<a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
										<social.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
									</a>
								</Button>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
} 