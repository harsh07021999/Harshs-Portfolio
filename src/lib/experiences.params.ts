import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Byjus',
		company: 'Byjus',
		description: "• Integrated a new Payment Method for Toppr CRM (in Django) provided by Ingenico payments as custom EMIs ( via. Standing Instructions) and also regular payment methods which supported 50 percentof total orders."+
		"• Worked on Bulk Order tool for placing orders in bulk, created a Queuesystem using AWS SQS for implementation of the feature.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 6, 23)},
		skills: getSkills('golang', 'django'),
		name: 'Software Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Byjus,
		shortDescription: ''
	},
    {
		slug: 'Toppr',
		company: 'Toppr',
		description: `• Created a Scheduler as a Service application in Golang to replace theDelayed Jobs(which was used as a scheduler for 77 percent of delayed invocation in backend app for BYJUS Learning App ) implementations for Ruby on Rails Backend service. That reduced the overalllatency and reduced 5xx Errors by 90 percent.`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 5, 14), to: new Date(2022, 5, 1) },
		skills: getSkills('python', 'django', 'postgres'),
		name: 'Software Engineer',
		color: '#ffffff',
		links: [],
		logo: Assets.Toppr,
		shortDescription: ''
	}
]

export default MY_EXPERIENCES;