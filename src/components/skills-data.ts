import { ComponentType } from 'react';
import { Brain, Server, Smartphone, Monitor, Cloud, Shield } from 'lucide-react';

export type Skill = {
	name: string;
	years: string | null;
};

export type SkillCategory = {
	id: string;
	title: string;
	icon: ComponentType<{ className?: string }>;
	color: string;
	skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
	{
		id: 'frontend',
		title: 'Frontend',
		icon: Monitor,
		color: 'from-blue-500 to-cyan-500',
		skills: [
			{ name: 'HTML/CSS', years: null },
			{ name: 'JavaScript', years: null },
			{ name: 'TypeScript', years: null },
			{ name: 'React.js', years: null },
			{ name: 'Next.js', years: null },
			{ name: 'Redux', years: null },
			{ name: 'Context API', years: null },
			{ name: 'Material-UI', years: null },
			{ name: 'Tailwind CSS', years: null },
			{ name: 'Bootstrap', years: null },
			{ name: 'SASS/SCSS', years: null },
			{ name: 'Shadcn UI', years: null },
			{ name: 'Google Lighthouse', years: null },
			{ name: 'ARIA roles', years: null }
		]
	},
	{
		id: 'backend',
		title: 'Backend',
		icon: Server,
		color: 'from-green-500 to-emerald-500',
		skills: [
			{ name: 'Node.js', years: null },
			{ name: 'Express.js', years: null },
			{ name: 'PHP', years: null },
			{ name: 'Laravel', years: null },
			{ name: 'Python', years: null },
			{ name: 'Flask', years: null },
			{ name: 'RESTful APIs', years: null },
			{ name: 'Swagger/OpenAPI', years: null },
			{ name: 'JWT Authentication', years: null },
			{ name: 'OAuth2', years: null },
			{ name: 'MySQL', years: null },
			{ name: 'MongoDB', years: null }
		]
	},
	{
		id: 'mobile',
		title: 'Mobile App',
		icon: Smartphone,
		color: 'from-purple-500 to-pink-500',
		skills: [
			{ name: 'Flutter', years: null },
			{ name: 'React Native', years: null },
			{ name: 'Mobile UI/UX', years: null },
			{ name: 'App Store Deployment', years: null },
			{ name: 'Play Store Deployment', years: null },
			{ name: 'Mobile Testing', years: null },
			{ name: 'Cross-platform Development', years: null },
			{ name: 'Firebase', years: null }
		]
	},
	{
		id: 'devops',
		title: 'DevOps & Deployment',
		icon: Cloud,
		color: 'from-indigo-500 to-purple-500',
		skills: [
			{ name: 'GitHub Actions', years: null },
			{ name: 'AWS EC2', years: null },
			{ name: 'AWS S3', years: null },
			{ name: 'AWS RDS', years: null },
			{ name: 'AWS Lambda', years: null },
			{ name: 'IAM', years: null },
			{ name: 'CloudFront', years: null },
			{ name: 'S3', years: null },
			{ name: 'CloudWatch', years: null },
			{ name: 'Sentry', years: null },
			{ name: 'CI/CD Pipelines', years: null },
			{ name: 'CloudFlare', years: null }
		]
	},
	{
		id: 'testing',
		title: 'Testing & Tooling',
		icon: Shield,
		color: 'from-orange-500 to-red-500',
		skills: [
			{ name: 'Jest', years: null },
			{ name: 'Mocha/Chai', years: null },
			{ name: 'ESLint', years: null },
			{ name: 'Prettier', years: null },
			{ name: 'npm/Yarn', years: null },
			{ name: 'Git', years: null },
			{ name: 'GitHub', years: null },
			{ name: 'GitLab', years: null },
			{ name: 'Unit Testing', years: null },
			{ name: 'Integration Testing', years: null },
			{ name: 'Code Quality', years: null }
		]
	},
	{
		id: 'ai-ml',
		title: 'AI/ML Integration',
		icon: Brain,
		color: 'from-teal-500 to-blue-500',
		skills: [
			{ name: 'OpenAI API', years: null },
			{ name: 'AI Integration', years: null },
			{ name: 'Prompt Engineering', years: null },
			{ name: 'Chatbot Development', years: null },
			{ name: 'AI Content Generation', years: null },
			{ name: 'Data Processing', years: null }
		]
	}
];
