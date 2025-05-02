import { FC } from 'react';

import { FOOTBALL_COACH_TEAM } from '@/data/constants';
import FootballCoachCard from './FootballCoachCard';

const FootballCoachTeam: FC = () => {
	const team = FOOTBALL_COACH_TEAM;
	return (
		<ul className=' flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-[26px] lg:gap-0 lg:gap-x-8 lg:gap-y-20'>
			{team.length && team.map((item, idx) => (
				<li key={idx}>
					<FootballCoachCard
						bgUrl={item.bgUrl}
						name={item.name}
					/>
				</li>
			))}
		</ul>
	)
}

export default FootballCoachTeam;