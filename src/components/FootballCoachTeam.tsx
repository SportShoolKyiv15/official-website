import { FC, useState } from 'react';

import { FOOTBALL_COACH_TEAM } from '@/data/constants';
import FootballCoachCard from './FootballCoachCard';
import CoachAutobiographyModal from './modals/CoachAutobiographyModal';

const FootballCoachTeam: FC = () => {
	const team = FOOTBALL_COACH_TEAM;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);
	const [name, setName] = useState('');

	const getCoachName = (name: string) => {
		setName(name);
	}

	const toggleModal = (name: string) => {
		if (isModalOpen) {
			setIsVisible(false);
			setTimeout(() => {
				setIsModalOpen(false);
			}, 300)
		} else {
			setIsVisible(true);
			getCoachName(name);
			setTimeout(() => {
				setIsModalOpen(true);
			}, 300)
			document.body.classList.add("modal-open");
		}
	};

	const closeModal = () => {
		setIsVisible(false);
		setTimeout(() => {
			setIsModalOpen(false);
		}, 300)
		document.body.classList.remove("modal-open");
	};

	return (
		<ul className=' flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-[26px] lg:gap-0 lg:gap-x-8 lg:gap-y-20'>
			{team.length && team.map((item, idx) => (
				<li key={idx}>
					<FootballCoachCard
						bgUrl={item.bgUrl}
						name={item.name}
						toggleModal={toggleModal}
					/>
				</li>
			))}
			<CoachAutobiographyModal name={name} isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</ul>
	)
}

export default FootballCoachTeam;