"use client";

/**
 * ExperienceSection Component - Professional Timeline
 *
 * Displays work experience using a clean timeline format:
 * - Vertical timeline with connecting line and dots
 * - Clean, professional presentation
 * - Consistent with existing Timeline9 component
 * - Focus on role progression and achievements
 * - Minimal animations for professional feel
 *
 * This component uses a traditional timeline approach
 * that's perfect for showcasing career progression.
 */
import * as motion from "motion/react-client";
import {
  Building2,
  Cpu,
  Database,
  ChevronRight,
  TrendingUp,
  Monitor
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ExperienceSection() {
  const experiences = [
    {
      id: 'buclelabs-python',
      title: 'Python Developer / Consultant',
      company: 'GreenSturn',
      duration: 'July 2025 – Present',
      type: 'ai-ml',
      typeIcon: Cpu,
      typeColor: 'from-purple-500 to-pink-500',
      technologies: ['Python', 'OpenAI API', 'Azure API', 'LLM Training', 'Restful-API', 'Frontend Integration'],
      highlights: [
        'Core role in training LLM models and delivering results through Restful-API to frontend',
        'Leading and managing a team of 4-5 developers across multiple projects',
        'Architecting and developing solutions using OpenAI and Azure APIs'
      ],
      additionalDetails: [
        'Collaborating with cross-functional teams to ensure seamless integration',
        'Building scalable AI/ML infrastructure for production deployment',
        'Mentoring team members on AI/ML best practices and implementation'
      ],
      impact: 'AI/ML Infrastructure',
    },
    {
      id: 'buclelabs-tech-lead',
      title: 'Technical Lead',
      company: 'Buclelabs Pvt. Ltd.',
      duration: 'May 2022 – May 2025',
      type: 'blockchain',
      typeIcon: Database,
      typeColor: 'from-blue-500 to-cyan-500',
      technologies: ['React.js', 'Next.js', 'Web3.js', 'Ethers.js', 'Solidity', 'Metamask', 'TrustWallet', 'WalletConnect', 'Etherscan', 'BSCScan', 'REST APIs', 'Git', 'TypeScript'],
      highlights: [
        'Led team of 12-15 developers across multiple blockchain and web projects',
        'Integrated frontend with Web3 libraries and deployed smart contracts on multiple blockchains',
        'Built REST APIs for blockchain events and real-time price updates'
      ],
      additionalDetails: [
        'Mentored junior developers on writing clean code, Git branching strategy, and best practices',
        'Interacted with non-technical stakeholders to explain project status and demo MVPs',
        'Maintained product roadmap, prioritized features in Agile sprints, and conducted daily stand-ups',
        'Developed responsive UI using React.js and Next.js for various projects'
      ],
      impact: 'Team Leadership',
    },
    {
      id: 'digital-drops',
      title: 'Front-end Engineer / DAPP Developer',
      company: 'Digital Drops',
      duration: 'May 2019 – April 2022',
      type: 'web',
      typeIcon: Monitor,
      typeColor: 'from-green-500 to-emerald-500',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular', 'REST APIs', 'Web3', 'Git', 'Cross-browser Testing', 'Performance Optimization'],
      highlights: [
        'Managed complete SDLC of frontend development from requirements to deployment',
        'Optimized page load times through lazy loading and asset compression',
        'Coordinated with backend developers for blockchain projects and Web3 integration'
      ],
      additionalDetails: [
        'Developed frontend pages using HTML5, CSS3, JavaScript, React.js and Angular',
        'Created responsive layouts optimized for desktop and mobile devices',
        'Integrated REST APIs from backend team with proper error handling and loading states',
        'Conducted cross-browser testing on Chrome, Firefox, Edge, Safari for UI consistency',
        'Maintained code in Git with proper branching strategy and pull request workflows',
        'Handled real-time updates for exchange prices and transaction status',
        'Fixed website bugs including layout issues, form validation, and database query optimization'
      ],
      impact: 'Frontend Excellence',
    },
    {
      id: 'ashmar-tech',
      title: 'Junior Web Developer',
      company: 'Ashmar Technologies',
      duration: 'February 2017 – April 2019',
      type: 'web',
      typeIcon: Monitor,
      typeColor: 'from-orange-500 to-red-500',
      technologies: ['HTML', 'CSS', 'JavaScript', 'FTP', 'Server Management', 'Admin Panel', 'API Integration'],
      highlights: [
        'Performed UI Development & Enhancement for web applications',
        'Handled basic server tasks including code deployment via FTP and log file monitoring',
        'Coordinated with backend developers to identify and resolve API issues'
      ],
      additionalDetails: [
        'Managed admin panel and web portal functionality',
        'Tested API responses and integrated frontend forms with backend systems',
        'Maintained website functionality and performed regular updates',
        'Learned server management and deployment processes',
        'Developed strong coordination skills with backend teams'
      ],
      impact: 'Foundation Building',
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'ai-ml': return 'AI/ML';
      case 'blockchain': return 'Blockchain';
      case 'web': return 'Web Dev';
      default: return 'Development';
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="container relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Building2 className="h-5 w-5" />
            <span>Experience</span>
          </motion.div>
          
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Work Experience
          </motion.h2>
          
          <motion.p
            className="font-text text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            My professional journey from junior developer to technical leadership
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-muted absolute left-2 top-4 h-full"
          />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative mb-10 pl-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.2, 
                ease: "easeOut"
              }}
            >
              {/* Timeline Dot */}
              <motion.div 
                className={`absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-br ${experience.typeColor} shadow-lg border-2 border-background`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.2, 
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
              />

              {/* Role Title */}
              <motion.h4
                className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.2, 
                  ease: "easeOut"
                }}
              >
                {experience.title}
              </motion.h4>

              {/* Duration */}
              <motion.h5
                className="text-sm text-muted-foreground mb-2 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + index * 0.2, 
                  ease: "easeOut"
                }}
              >
                {experience.duration}
              </motion.h5>

              {/* Content Card */}
              <Card className="my-5 border-none shadow-none bg-transparent md:bg-card">
                <CardContent className="px-0 md:px-6 bg-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.6 + index * 0.2, 
                      ease: "easeOut"
                    }}
                  >
                    {/* Company and Location */}
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {experience.company}
                      </span>
                      
                    </div>

                    {/* Role Type Badge and Impact */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-md bg-gradient-to-br ${experience.typeColor} shadow-sm`}>
                          <experience.typeIcon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                          {getTypeLabel(experience.type)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-medium text-green-500">{experience.impact}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted/60 text-foreground/90 border border-muted/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors duration-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 1.8 + index * 0.2 + techIndex * 0.1, 
                              ease: "easeOut"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h5>
                      <div className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 2 + index * 0.2 + highlightIndex * 0.1, 
                              ease: "easeOut"
                            }}
                          >
                            <ChevronRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Details */}
                    {experience.additionalDetails && (
                      <div className="mt-6 pt-4 border-t border-muted/30">
                        <h5 className="text-sm font-semibold text-foreground mb-3">Additional Responsibilities</h5>
                        <div className="space-y-2">
                          {experience.additionalDetails.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 2.2 + index * 0.2 + detailIndex * 0.1, 
                                ease: "easeOut"
                              }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 mt-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 