import Assets from "./data/assets";
import type { Education } from "./types";

const MY_EDUCATION: Array<Education> = [
    {
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Tunisia',
		logo: Assets.Nginx,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	}
]

export default MY_EDUCATION