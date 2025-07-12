"use client";

import { AuroraText } from '@/components/magicui/aurora-text';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Calendar, MapPin, Award, Layers, Zap, Code, Database, Server, Target, Star, Globe, TrendingUp, Smartphone, Cpu, Monitor, Brain } from 'lucide-react';
import * as motion from "motion/react-client";
import { useState, useEffect } from 'react';

/**
 * IntroSection component displaying the main introduction text
 * with sequential animations showing one section at a time
 */
export function IntroSection() {
	const [currentSection, setCurrentSection] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const [typedText, setTypedText] = useState('');

	const sections = [
		{
			icon: Code,
			text: "Software Developer",
			delay: 2000
		},
		{
			icon: Layers,
			text: "Full Stack Developer",
			delay: 2000
		},
		{
			icon: Smartphone,
			text: "Mobile Application Developer",
			delay: 2000
		},
		{
			icon: Award,
			text: "Project Engineer",
			delay: 2000
		},
		{
			icon: Smartphone,
			text: "React Native • Flutter Developer",
			delay: 2000
		},
		{
			icon: Server,
			text: "Devops",
			delay: 2000
		},
		{
			icon: Brain,
			text: "AI/ML Developer",
			delay: 2000
		},
		{
			icon: Monitor,
			text: "Web Developer",
			delay: 2000
		}
	];

	useEffect(() => {
		const currentSectionData = sections[currentSection];
		let currentIndex = 0;
		
		// Reset typing state
		setIsTyping(true);
		setTypedText('');

		// Type animation
		const typingInterval = setInterval(() => {
			if (currentIndex < currentSectionData.text.length) {
				setTypedText(currentSectionData.text.slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				clearInterval(typingInterval);
				setIsTyping(false);
				
				// Wait for delay, then move to next section
				setTimeout(() => {
					setCurrentSection((prev) => (prev + 1) % sections.length);
				}, currentSectionData.delay);
			}
		}, 100);

		return () => clearInterval(typingInterval);
	}, [currentSection]);

	const CurrentIcon = sections[currentSection].icon;

	return (
		<motion.div 
			className="flex-[3] lg:flex-[7] space-y-8 text-center lg:text-left"
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			{/* Greeting with enhanced styling */}
			<div className="space-y-4">
				<motion.div 
					className="space-y-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
				>
					<h1 className="font-display text-2xl tracking-tight md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
						Hi, I'm <AuroraText className="text-primary">Nirnay</AuroraText> 👋
					</h1>
					<div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto lg:mx-0"></div>
				</motion.div>

				{/* Animated professional title and info */}
				<motion.div 
					className="flex justify-center lg:justify-start"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
				>
					<div className="flex items-center gap-2 border border-primary/20 rounded-full px-4 py-2 bg-primary/5 min-h-[40px]">
						<motion.div
							key={currentSection}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							className="flex items-center gap-2"
						>
							<CurrentIcon className="h-4 w-4 text-primary" />
							<span className="text-sm text-muted-foreground font-medium">
								{typedText}
								{isTyping && (
									<motion.span
										className="inline-block w-0.5 h-4 bg-primary ml-1"
										animate={{ opacity: [1, 0] }}
										transition={{ duration: 0.8, repeat: Infinity }}
									/>
								)}
							</span>
						</motion.div>
					</div>
				</motion.div>
			</div>

			{/* Enhanced description with better typography */}
			<motion.div 
				className="space-y-6 max-w-2xl mx-auto lg:mx-0 lg:max-w-4xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
			>
				<p className="font-text text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
					I'm a passionate software developer who loves building modern, scalable
					applications with cutting-edge technologies.
				</p>
				<p className="font-text text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
					I develop efficient and elegant solutions that make a difference.
				</p>
				
				<p className="font-text text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
					Always eager to learn, innovate, and take on new challenges in the tech industry. Known
					for my quick learning, problem-solving abilities, and delivering high-quality solutions.
				</p>
				
				<p className="font-text text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
					I also focus on <span className="text-foreground font-medium">deployment management</span>, ensuring smooth application deployment,
					monitoring, and maintenance.
				</p>
			</motion.div>
		</motion.div>
	);
} 
