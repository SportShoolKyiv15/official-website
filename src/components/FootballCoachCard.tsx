'use client';

import { FC } from 'react';

type Props = {
	bgUrl: string;
	name: string;
	toggleModal: (name: string) => void;
}

const FootballCoachCard: FC<Props> = ({ bgUrl, name, toggleModal }) => {
	return (
		<button
			onClick={() => toggleModal(name)}
			className='w-[343px] md:w-[328px] lg:w-[374px] h-[422px] md:h-[403px] lg:h-[460px] relative rounded-sm overflow-hidden cursor-pointer animate-fade-in'
		>
			<div className="absolute inset-0  bg-lightgray"></div>
			<div className={`absolute inset-0 ${bgUrl} bg-cover bg-center bg-no-repeat`}></div>
			<div className="absolute inset-0 hero-background-gadient"></div>
			<div className="absolute w-full left-1/2 -translate-x-1/2 bottom-4 text-white font-display font-semibold text-[26px] leading-10">{name}</div>
		</button>
	)
}

export default FootballCoachCard;