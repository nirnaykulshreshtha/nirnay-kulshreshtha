"use client";

/**
 * SkillsSectionAlt Component
 *
 * Alternative approach to displaying skills and technologies:
 * - Minimal, badge-based layout for quick scanning
 * - Skills grouped by category, each as a card with icon and description
 * - Each skill is a colored badge/tag (no progress bars)
 * - Focus on clarity, readability, and modern minimal design
 * - Responsive grid, subtle hover effects, and category icons
 *
 * This approach is ideal for users/recruiters who want to quickly scan your stack
 * without being distracted by proficiency bars. It also works well for mobile.
 */
import * as motion from "motion/react-client";
import {
  Code,
  Smartphone,
  Server,
  Database,
  Brain,
  Zap,
  Layers,
  Monitor,
  GitBranch,
  Box,
  Cloud,
  Square,
  FileText,
  FileCode,
  FileCode2,
  Database as DatabaseIcon,
  Flame,
  Figma,
  Apple,
  Shield,
  Globe,
  Terminal,
  BarChart3,
  Eye
} from 'lucide-react';

export function SkillsSectionAlt() {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js', 'TypeScript', 'JavaScript', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Redux', 'Figma'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'React Native', 'Flutter', 'Dart', 'Android', 'iOS', 'Mobile UI/UX', 'App Store Deployment', 'Mobile Testing'
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'Authentication', 'API Security'
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Cloud Deployment', 'Database Design', 'Data Modeling', 'Cloud Security'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Tools',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        'Docker', 'Git/GitHub', 'CI/CD', 'Linux/Ubuntu', 'VS Code', 'Shell Scripting', 'Monitoring', 'Performance Optimization'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI/ML',
      icon: Brain,
      color: 'from-teal-500 to-blue-500',
      skills: [
        'Python ML', 'TensorFlow', 'Data Analysis', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Integration'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative">
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Code className="h-5 w-5" />
            Skills & Technologies
          </motion.div>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            className="font-text text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            A quick, minimal overview of my core technologies and tools. Each skill is a badge for fast scanning.
          </motion.p>
        </motion.div>
        				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + categoryIndex * 0.1, ease: "easeOut" }}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`p-2 rounded-lg bg-gradient-to-br ${category.color} shadow-sm opacity-80`}
                    whileHover={{ rotate: 2, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <category.icon className="h-4 w-4 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full opacity-60`}></div>
                      <span className="text-xs text-muted-foreground font-medium">{category.skills.length} skills</span>
                    </div>
                  </div>
                </div>
                				{/* Skills as badges */}
				<div className="flex flex-wrap gap-2 mt-4">
					{category.skills.map((skill, skillIndex) => (
						<motion.span
							key={skill}
							className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border border-muted/30 hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/30 hover:shadow-md transition-all duration-300 shadow-sm cursor-default backdrop-blur-sm"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ 
								duration: 0.5, 
								delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05, 
								ease: "easeOut" 
							}}
							whileHover={{ 
								scale: 1.05, 
								y: -2,
								transition: { duration: 0.2 }
							}}
						>
							{skill}
						</motion.span>
					))}
				</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 