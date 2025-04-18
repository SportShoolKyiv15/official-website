import { FC } from 'react';

import { COACH_TEAM } from '@/data/constants';
import CoachCard from './CoachCard';

const CoachTeam: FC = () => {
	return (
		<ul className=' flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-[26px] lg:gap-0 lg:gap-x-8 lg:gap-y-20'>
			{COACH_TEAM && COACH_TEAM.map((item, idx) => (
				<li key={idx} className="">
					<CoachCard
						idx={idx}
						bgUrl={item.bgUrl}
						name={item.name}
						team={item.team}
					/>
				</li>
			))}
		</ul>
	)
}

export default CoachTeam;