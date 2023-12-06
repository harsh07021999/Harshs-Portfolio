export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export interface HomeLink {
	platform: Platform;
	link: string;
}

export interface PageParams {
	title: string;
}

export type Asset = string | { light: string; dark: string };

export interface Item {
	slug: string;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Skill extends Omit<Item, 'shortDescription'> {
	color: string;
}

export interface HomePageParams extends PageParams {
	name: string;
	lastName: string;
	description: string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export type SkillPageParams = PageWithSearchParams<Skill>