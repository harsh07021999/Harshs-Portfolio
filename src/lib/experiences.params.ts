import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Jest,
		shortDescription: ''
	},
    {
		slug: 'sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2) },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Jest,
		shortDescription: ''
	}
]

export default MY_EXPERIENCES;