import { IntroSection } from '@/components/intro-section';
import { ProfileSection } from '@/components/profile-section';
import { SkillsSectionAlt } from '@/components/skills-section-alt';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactFormSection } from '@/components/contact-form-section';
import { Footer } from '@/components/footer';

/**
 * Home page component showcasing Nirnay's portfolio
 * Features elegant animations, modern design elements, and responsive layout
 */
export default function Home() {
	return (
		<main className="bg-gradient-to-br from-background via-background to-muted/20">
			{/* Background decorative elements */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
			</div>

			<div className="relative mx-2.5 lg:mx-4">
				{/* Main content container with enhanced styling */}
				<section id="home" className="relative py-16 md:py-24 lg:py-32 lg:pt-44">
					<div className="container flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-14 lg:gap-20 items-center">
						
						{/* Introduction section component */}
						<IntroSection />

						{/* Profile section component */}
						<ProfileSection />
					</div>
				</section>

				{/* Skills & Technologies section */}
				<section id="skills">
					<SkillsSectionAlt />
				</section>

				{/* Education section */}
				<section id="education">
					<EducationSection />
				</section>

				{/* Work Experience section */}
				<section id="experience">
					<ExperienceSection />
				</section>

				{/* Projects section */}
				<section id="projects">
					<ProjectsSection />
				</section>

				{/* Contact Form section */}
				<section id="contact">
					<ContactFormSection />
				</section>
			</div>
			
			{/* Footer section */}
			<Footer />
		</main>
	);
}
