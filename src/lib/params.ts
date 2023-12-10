import { Platform, type HomePageParams, type SkillPageParams, type ResumePageParams, type ProjectPageParams, type ExperiencePageParams, type EducationPageParams } from "./types";
import MY_SKILLS from "./skills.params";
import MY_PROJECTS from "./project.params";
import MY_EXPERIENCES from "./experiences.params";
import MY_EDUCATION from "./educatio.params";
import { Icons } from "./utils";

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Harsh',
	lastName: 'Vardhan',
	description:
		'Hi, My Name is Harsh Vardhan, I am a Software Engineer having two and a half years of experience, working on large scale applications as well as involved in developing Software from scratch',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/harsh07021999' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/harsh-vardhan-868314145/'
		},
		{
			platform: Platform.Email,
			link: 'harshfebruary@gmail.com'
		}
	]
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.Email:
			return Icons.Email;
	}
};

export const SKILLS: SkillPageParams = {
	title: 'Skills',
	items: MY_SKILLS
}

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const EDUCATION: EducationPageParams = {
	title: 'Education',
	items: MY_EDUCATION
}

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/14y4YZUstHndZBZ2-d9FdgJzTJoW9yieQ/preview'
};