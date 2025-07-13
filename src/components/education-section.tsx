"use client";

/**
 * EducationSection Component - Academic Background Showcase
 *
 * Displays educational background with modern design:
 * - Clean timeline format for academic progression
 * - Detailed course information and achievements
 * - Responsive design with animations
 * - Matches existing portfolio design language
 * - Focus on relevant IT coursework and projects
 *
 * This component showcases academic foundation and technical education
 * that supports the professional experience and skills.
 */
import * as motion from "motion/react-client";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Users,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Brain,
  Star,
  ChevronRight,
  Building2,
  FileText,
  Target,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function EducationSection() {
  const education = [
    {
      id: 'btech-it',
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'AKTU-Lucknow',
      duration: '2012 – 2016',
      location: 'Kanpur, Uttar Pradesh',
      type: 'university',
      typeIcon: GraduationCap,
      typeColor: 'from-blue-500 to-cyan-500',
      achievements: [
        'Graduated in Information Technology',
        'Completed comprehensive coursework in software development and system design',
        'Participated in technical workshops and coding competitions'
      ],
      relevantCoursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Object-Oriented Programming',
        'Web Technologies',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Software Testing & Quality Assurance'
      ],
      projects: [
        'Developed a web-based student management system using PHP and MySQL',
        'Created a mobile application prototype based on Apache Cordova',
      ],
      skills: ['Java', 'C++', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Software Design', 'Database Design'],
      impact: 'Strong Foundation',
              additionalDetails: [
          'Active member of the College Event – Web Hunt (100+ Attendees)',
          'Completed industry-relevant projects during final year',
          'Active Stack Overflow contributor with good community reputation',
          'Forked and customized multiple open source repositories for personal projects'
        ]
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'university': return 'University';
      case 'certification': return 'Certification';
      default: return 'Education';
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
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
            <GraduationCap className="h-5 w-5" />
            <span>Education</span>
          </motion.div>
          
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Academic Background
          </motion.h2>
          
          <motion.p
            className="font-text text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            My educational foundation in Information Technology that shaped my technical expertise and problem-solving approach
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-muted absolute left-2 top-4 h-full"
          />
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative mb-12 pl-8"
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
                className={`absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full bg-gradient-to-br ${edu.typeColor} shadow-lg border-2 border-background`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.2, ease: "easeOut" }}
              >
                <edu.typeIcon className="h-2 w-2 text-white" />
              </motion.div>

              {/* Education Card */}
              <motion.div
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="px-6">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex-1">
                        <motion.div
                          className="flex items-center gap-3 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.2 + index * 0.2, ease: "easeOut" }}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${edu.typeColor} shadow-sm`}>
                            <edu.typeIcon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {getTypeLabel(edu.type)}
                          </span>
                        </motion.div>

                        <motion.h3
                          className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.4 + index * 0.2, ease: "easeOut" }}
                        >
                          {edu.degree}
                        </motion.h3>

                        <motion.div
                          className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.6 + index * 0.2, ease: "easeOut" }}
                        >
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Impact Badge */}
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 + index * 0.2, ease: "easeOut" }}
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-semibold border border-primary/30">
                          <Target className="h-4 w-4" />
                          {edu.impact}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column - Coursework & Skills */}
                      <div className="space-y-6">
                        {/* Relevant Coursework */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.2 + index * 0.2, ease: "easeOut" }}
                        >
                          <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Relevant Coursework
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {edu.relevantCoursework.map((course, courseIndex) => (
                              <motion.div
                                key={course}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 2.4 + index * 0.2 + courseIndex * 0.05, 
                                  ease: "easeOut" 
                                }}
                              >
                                <ChevronRight className="h-3 w-3 text-primary" />
                                {course}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Technical Skills */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.6 + index * 0.2, ease: "easeOut" }}
                        >
                          <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary" />
                            Technical Skills Developed
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border border-muted/30 hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-sm cursor-default backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 2.8 + index * 0.2 + skillIndex * 0.05, 
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
                        </motion.div>
                      </div>

                      {/* Right Column - Projects & Achievements */}
                      <div className="space-y-6">
                        {/* Key Projects */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.4 + index * 0.2, ease: "easeOut" }}
                        >
                          <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Academic Projects
                          </h4>
                          <div className="space-y-3">
                            {edu.projects.map((project, projectIndex) => (
                              <motion.div
                                key={project}
                                className="p-3 rounded-lg bg-muted/30 border border-muted/50 hover:border-primary/30 transition-colors duration-300"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 2.6 + index * 0.2 + projectIndex * 0.1, 
                                  ease: "easeOut" 
                                }}
                              >
                                <p className="text-sm text-foreground leading-relaxed">{project}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.8 + index * 0.2, ease: "easeOut" }}
                        >
                          <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Star className="h-5 w-5 text-primary" />
                            Achievements & Activities
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <motion.div
                                key={achievement}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: 3.0 + index * 0.2 + achievementIndex * 0.1, 
                                  ease: "easeOut" 
                                }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    {edu.additionalDetails && edu.additionalDetails.length > 0 && (
                      <motion.div
                        className="mt-8 pt-6 border-t border-muted/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.2 + index * 0.2, ease: "easeOut" }}
                      >
                        <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Additional Activities
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {edu.additionalDetails.map((detail, detailIndex) => (
                            <motion.div
                              key={detail}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: 3.4 + index * 0.2 + detailIndex * 0.1, 
                                ease: "easeOut" 
                              }}
                            >
                              <Users className="h-3 w-3 text-primary" />
                              {detail}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 