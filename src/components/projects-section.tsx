"use client";

/**
 * ProjectsSection Component - Enhanced with Advanced Framer Motion
 *
 * Showcases Nirnay's key projects with sophisticated animations:
 * - 3D card transforms with perspective and rotation effects (desktop only)
 * - Gesture-based interactions (drag, hover, tap) (desktop only)
 * - Staggered entrance animations with complex timing
 * - Parallax scrolling effects and floating elements (desktop only)
 * - Advanced hover states with depth and lighting (desktop only)
 * - Interactive technology badges with spring animations
 * - Magnetic cursor effects and smooth transitions (desktop only)
 * - Performance-optimized animations using transform3d
 *
 * Mobile devices have animations disabled to prevent scroll interference
 * and improve performance on touch devices.
 */
import * as motion from "motion/react-client";
import React from "react"; // Added missing import for React
import {
  Code,
  TrendingUp,
  Users,
  Rocket,
  Briefcase,
  Star,
  ArrowUpRight,
  Sparkles,
  Monitor, // Added Monitor icon
  Smartphone, // Added Smartphone icon
  Database // Added Database icon
} from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      id: 'dapp-confidential',
      title: 'DAPP — [Name Confidential]',
      company: 'Confidential Client',
      role: 'Full-Stack Developer',
      type: 'blockchain',
      typeIcon: 'BlockchainIcon', // This will cause an error as BlockchainIcon is removed
      typeColor: 'from-purple-500 to-pink-500',
      technologies: ['NextJS', 'HTML', 'CSS', 'GraphQL (Apollo Server)', 'SEO', 'React', 'NodeJS'],
      achievements: [
        'Architected and built an SEO-optimized, server-side-rendered full-stack platform using Next.js and Node.js',
        'Designed a type-safe GraphQL API layer with Apollo Server, reducing over-fetching and improving developer productivity',
        'Platform now supports over a half-billion-dollar valuation and serves millions of global users'
      ],
      impact: 'Half-billion-dollar valuation',
      users: 'Millions of global users',
      confidential: true
    },
    {
      id: 'clay-buck-coast',
      title: 'Clay & Buck / Coast to Coast AM',
      company: 'iHeartMedia',
      role: 'React Native Developer',
      type: 'mobile',
      typeIcon: 'MobileIcon', // This will cause an error as MobileIcon is removed
      typeColor: 'from-blue-500 to-cyan-500',
      technologies: ['React Native', 'GraphQL (Apollo Server)', 'SEO', 'React', 'JavaScript', 'TypeScript', 'NodeJS', 'TestFlight', 'Google Play Console', 'Sentry', 'Firebase Crashlytics'],
      achievements: [
        'Maintained and modernized existing React Native codebase for Coast to Coast AM Insider podcast application (iOS 15.6+ & Android API 30+)',
        'Upgraded React Native version from 0.64 to 0.73, resolving breaking changes in third-party libraries',
        'Integrated and upgraded React Native audio player with background playback, lock-screen controls, and offline episode caching',
        'Migrated legacy REST endpoints to GraphQL, reducing round-trip requests by 40% and simplifying state management',
        'Managed App Store and Google Play Store releases with timely approvals'
      ],
      impact: '40% reduction in API requests',
      users: 'Podcast listeners',
      confidential: false
    },
    {
      id: 'meta1-fluher',
      title: 'Meta1 — Fluher App',
      company: 'Meta1',
      role: 'Flutter Developer',
      type: 'mobile',
      typeIcon: 'MobileIcon', // This will cause an error as MobileIcon is removed
      typeColor: 'from-green-500 to-emerald-500',
      technologies: ['Flutter', 'Dart', 'ReactJS', 'React Native', 'GraphQL', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML5', 'CSS3'],
      achievements: [
        'Led full migration of legacy JavaScript blockchain into Dart, re-implementing all calls in Flutter',
        'Recreated all UI screens—buy, sell, deposit, withdraw, token swap interface, dashboard charts, transaction history—in Flutter\'s widget tree',
        'Ensured responsive layouts for mobile and web automatically',
        'Delivered Android APK with proper keystore signatures and iOS IPA uploaded to App Store Connect'
      ],
      impact: 'Complete platform migration',
      users: 'Blockchain users',
      confidential: false
    },
    {
      id: 'cakepanda',
      title: 'CakePanda',
      company: 'Decentralized Marketplace',
      role: 'Full-Stack Developer',
      type: 'blockchain',
      typeIcon: 'BlockchainIcon', // This will cause an error as BlockchainIcon is removed
      typeColor: 'from-orange-500 to-red-500',
      technologies: ['NextJS (ReactJS)', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML5', 'CSS3', 'EtherJS', 'Wagmi'],
      achievements: [
        'Built a decentralized NFT/token marketplace inspired by Cake Monster on BNB Chain',
        'Coordinated with UI/UX designer to convert Figma wireframes into responsive React components (mobile-first)',
        'Implemented React/Next.js front-end with Web3 integration (Ethers.js and Wagmi.js) for Metamask/TrustWallet connectivity',
        'Integrated "CakePanda" tokenomics—transaction fees split into buy-back burns, liquidity pooling, and community rewards'
      ],
      impact: 'Live burn and reward metrics',
      users: 'NFT/Token traders',
      confidential: false
    },
    {
      id: 'crosstower',
      title: 'CrossTower',
      company: 'Crypto Exchange',
      role: 'Full-Stack Developer',
      type: 'web',
      typeIcon: 'WebIcon', // This will cause an error as WebIcon is removed
      typeColor: 'from-indigo-500 to-purple-500',
      technologies: ['NextJS', 'ReactJS', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML5', 'CSS3', 'SEO', 'AWS', 'Docker', 'WebSocket', 'REST APIs', 'Payment-Gateway SDKs'],
      achievements: [
        'Created homepage using Next.js with server-side rendering and SEO optimization',
        'Designed real-time trading UI with WebSocket-driven order book showing live bids and asks',
        'Built buy/sell/convert functionality in React components with real-time portfolio updates',
        'Maintained user portfolio view showing balances, order history, and P&L with real-time data refresh',
        'Integrated AirPay gateway for fiat deposit and withdrawal with payment SDK and transaction status tracking'
      ],
      impact: 'Real-time trading platform',
      users: 'Crypto traders',
      confidential: false
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blockchain': return 'Blockchain/DApp';
      case 'mobile': return 'Mobile App';
      case 'web': return 'Web Platform';
      default: return 'Project';
    }
  };

  // Add a mapping for typeIcon
  const typeIconMap = {
    web: Monitor,
    mobile: Smartphone,
    blockchain: Database,
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced decorative background with parallax - desktop only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        {/* Floating sparkles - desktop only */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Sparkles className="h-6 w-6 text-primary/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Sparkles className="h-4 w-4 text-secondary/40" />
        </motion.div>
      </div>
      
      <div className="container relative">
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.2
          }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3, 
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Briefcase className="h-5 w-5" />
            <span>Featured Projects</span>
          </motion.div>
          
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5, 
              ease: "easeOut"
            }}
          >
            My Work Portfolio
          </motion.h2>
          
          <motion.p
            className="font-text text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            A showcase of my key projects across blockchain, mobile, and web development. Each project demonstrates technical expertise and business impact.
          </motion.p>
          

        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              className="group relative md:perspective-1000"
              initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8 + projectIndex * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                transition: { duration: 0.1 }
              }}
            >
              <motion.div 
                className="relative p-8 rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl border border-white/10 shadow-xl h-full transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 2,
                  transition: { 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                drag={false}
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              >
                {/* 3D Lighting Effect - desktop only */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
                  style={{
                    transform: "translateZ(20px)",
                  }}
                />
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className={`p-2 rounded-lg bg-gradient-to-br ${project.typeColor} shadow-sm opacity-80`}
                        whileHover={{ rotate: 2, scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* This will cause an error as project.typeIcon is not a valid lucide-react icon */}
                        {typeIconMap[project.type as keyof typeof typeIconMap] && (
                          React.createElement(typeIconMap[project.type as keyof typeof typeIconMap], { className: "h-4 w-4 text-white" })
                        )}
                      </motion.div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {getTypeLabel(project.type)}
                      </span>
                      {project.confidential && (
                        <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full border border-orange-500/20">
                          Confidential
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      {project.company} — {project.role}
                    </p>
                  </div>
                  <motion.div
                    className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border border-muted/30 hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/30 shadow-sm cursor-default backdrop-blur-sm relative overflow-hidden"
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.2 + projectIndex * 0.15 + techIndex * 0.08, 
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                        whileHover={{ 
                          y: -3,
                          rotateY: 10,
                          transition: { 
                            duration: 0.3,
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }
                        }}
                        whileTap={{ 
                          transition: { duration: 0.1 }
                        }}
                      >
                        {/* Shimmer effect on hover - desktop only */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.7 + projectIndex * 0.1 + achievementIndex * 0.1, 
                          ease: "easeOut" 
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-medium text-green-500">{project.impact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-xs font-medium text-blue-500">{project.users}</span>
                    </div>
                  </div>
                  <motion.div
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Rocket className="h-4 w-4 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
} 