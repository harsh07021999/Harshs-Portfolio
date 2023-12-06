import { Platform, type HomePageParams, type SkillPageParams } from "./types";
import MY_SKILLS from "./skills.params";

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
		{ platform: Platform.GitHub, link: 'https://github.com/' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/'
		},
		{
			platform: Platform.Email,
			link: 'riadh-adrani@hotmail.fr'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com'
		}
	]
};

export const SKILLS: SkillPageParams = {
	title: 'Skills',
	items: MY_SKILLS
}