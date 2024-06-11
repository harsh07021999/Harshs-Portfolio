import {
	Platform,
	type HomePageParams,
	type SkillPageParams,
	type ResumePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type EducationPageParams
} from './types';
import MY_SKILLS from './skills.params';
import MY_PROJECTS from './project.params';
import MY_EXPERIENCES from './experiences.params';
import MY_EDUCATION from './education.params';
import { Icons } from './utils';
import { base } from '$app/paths';

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
	description: `Hello! I'm Harsh Vardhan, a Software Engineer with two and a half years of hands-on experience. 
		My journey in software development is fueled by a genuine passion for learning. 
		From contributing to large-scale applications to building software from the ground up, my focus is on continuous growth.
		I am originally from Prayagraj, U.P. but am currently working from Navi Mumbai.`,
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
		case Platform.Location:
			return Icons.Location;
	}
};

export const SKILLS: SkillPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

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
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: `/Harsh_s_resume.pdf`
};
