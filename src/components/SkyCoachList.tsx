'use client';

import { FC } from 'react';


import { SkyCoach } from "@/globaltypes/types";
import SkyCoachCard from './SkyCoachCard';

type Props = {
	coaches: SkyCoach[];
}

const SkyCoachList: FC<Props> = ({ coaches }) => {


	return (
		<div>
			<ul className='flex flex-col gap-8 md:gap-10 lg:gap-[50px]'>
				{coaches.length && coaches.map((coach, idx) => (
					<>
						<li key={idx}>
							<SkyCoachCard coach={coach} idx={idx} />
						</li>
						{idx < (coaches.length - 1) &&
							<div className='w-full h-[1px] bg-line-drop-menu'></div>
						}
					</>
				))}
			</ul>

		</div>
	)
}

export default SkyCoachList;