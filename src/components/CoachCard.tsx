'use client';

import { FC, useState } from 'react';

import CoachAutobiographyModal from './modals/CoachAutobiographyModal';

type Props = {
	idx: number;
	bgUrl: string;
	name: string;
	team: string;
}

const CoachCard: FC<Props> = ({ idx, bgUrl, name, team }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);

	const toggleModal = () => {
		if (isModalOpen) {
			setIsVisible(false);
			setTimeout(() => {
				setIsModalOpen(false);
			}, 300)
		} else {
			setIsVisible(true);
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
		<button
			onClick={toggleModal}
			className='w-[343px] md:w-[328px] lg:w-[374px] h-[422px] md:h-[403px] lg:h-[460px] relative rounded-sm overflow-hidden cursor-pointer animate-appear-in'
		>
			<div className="absolute inset-0  bg-lightgray"></div>
			<div className={`absolute inset-0 ${bgUrl} bg-cover bg-center bg-no-repeat`}></div>
			<div className="absolute inset-0 hero-background-gadient"></div>
			<div className="absolute w-full left-1/2 -translate-x-1/2 bottom-[56px] text-white font-display font-semibold text-[26px] leading-10">{name}</div>
			<div className="absolute w-full left-1/2 -translate-x-1/2 bottom-4 text-white font-display font-semibold text-lg leading-10">Команда: {team}</div>
			<CoachAutobiographyModal idx={idx} isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</button>
	)
}

export default CoachCard;