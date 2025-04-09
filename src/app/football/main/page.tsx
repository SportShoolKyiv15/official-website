'use client';

import { FC } from 'react';
import { useState } from 'react';

import ModalEnroll from '@/components/modals/ModalEnroll';
import SportPageHero from '@/components/SportPageHero';
import SportFacility from '@/components/SportFacility';

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
		<section className="flex flex-col justify-center gap-[50px] md:gap-[80px] items-center pt-[22px]">
			<SportPageHero bgUrl="bg-[url('/img/footballHeroPageImg.jpg')]" toggleModal={toggleModal} directionImage='rotate-y-180' />
			<SportFacility bgUrl="bg-[url('/img/sportFacilityImg1.jpg')]" title='Футбол' />
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default FootballMainPage;