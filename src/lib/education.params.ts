import Assets from "./data/assets";
import type { Education } from "./types";

const MY_EDUCATION: Array<Education> = [
    {
		degree: 'Bachelor degree of Technology',
		description: '',
		location: 'Gwalior, India',
		logo: Assets.College,
		name: '',
		organization: 'IIITM Gwalior',
		period: { from: new Date(2017, 7, 26), to: new Date(2021, 7, 26) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'DBMS', 'Python', 'C++']
	}
]

export default MY_EDUCATION