'use client';

import React, { FC } from 'react';
import { useState } from 'react';

import EnrollButton from '@/components/buttons/EnrollButton';
import ModalEnroll from '@/components/modals/ModalEnroll';

const FootballMainPage: FC = () => {
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
		<section className="flex justify-center items-center pt-[22px]">
			<div className='w-[356px] sm:w-[375px] md:w-[680] lg:w-[1296px] h-[254px] md:h-[227px] lg:h-[300px] relative'>
				<div className="absolute inset-0  bg-lightgray"></div>
				<div className="absolute inset-0 bg-[url('/img/footballHero.jpg')] bg-cover bg-center bg-no-repeat rotate-y-180"></div>
				<div className="absolute inset-0 football-hero-gradient"></div>
				<div className="absolute left-4 md:left-[38px] top-[55px] lg:top-[94px] md:top-8 md:w-[421px] lg:w-[741px] text-light font-display font-semibold text-[22px] md:text-[26px] lg:text-[36px] tracking-[0.5%] md:tracking-[0%] leading-9">Перший крок у спорті – назавжди в русі!</div>
				<div className='absolute top-[163px] md:top-[144px] lg:top-[179px] left-[6px] sm:left-4 md:left-[28px]'>
					<EnrollButton onClick={toggleModal} />
				</div>
			</div>
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default FootballMainPage;