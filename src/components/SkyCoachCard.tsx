'use client';

import { FC } from 'react';
import Image from 'next/image';

import { SkyCoach } from "@/globaltypes/types";

type Props = {
	coach: SkyCoach;
	idx: number;
}

const SkyCoachCard: FC<Props> = ({ coach, idx }) => {


	return (
		<div
			className='lg:flex lg:gap-[38px]'
		>
			<div className={`${(idx + 1) % 2 === 0 ? 'order-2' : 'order-1'} animate-fade-in`}>
				<Image
					src={coach.fotoUrl}
					alt='Foto coach'
					width={343}
					height={267}
					className='mb-8 md:hidden'
				/>
				<Image
					src={coach.fotoUrl}
					alt='Foto coach'
					width={447}
					height={349}
					className='mb-8 hidden md:block lg:hidden mx-auto'
				/>
				<Image
					src={coach.fotoUrl}
					alt='Foto coach'
					width={460}
					height={360}
					className='hidden lg:block mx-auto lg:mx-0'
				/>
			</div>
			<div className={`w-full md:w-[592px] lg:w-[533px] ${(idx + 1) % 2 === 0 ? 'order-1' : 'order-2'}`}>
				<p className='lg:mt-5 mb-4 md:mb-[28px] text-2xl font-display font-medium'>{coach.name}</p>
				<p className='mb-6 leading-[150%]'>{coach.description}</p>
				<p className='mb-6 leading-[150%]'><span className='font-semibold'>Досвід:&nbsp;</span>{coach.experience}</p>
				<p className='mb-6 leading-[150%]'><span className='font-semibold'>Освіта:&nbsp;</span>{coach.education}</p>
				<p className='mb-6 leading-[150%]'><span className='font-semibold'>Досягнення:&nbsp;</span>{coach.achievement}</p>
				<p className='leading-[150%]'><span className='font-semibold'>Методика:&nbsp;</span>{coach.method}</p>
			</div>
		</div>
	)
}

export default SkyCoachCard;