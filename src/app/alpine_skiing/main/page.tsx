'use client';

import { FC } from 'react';
import { useState } from 'react';

import ModalEnroll from '@/components/modals/ModalEnroll';
import SportPageHero from '@/components/SportPageHero';
import SportFacility from '@/components/SportFacility';
import Title from '@/components/Title';
import MyGoogleMap from '@/components/MyGoogleMap';

const AlpineSkiingMainPage: FC = () => {
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
			<SportPageHero bgUrl="bg-[url('/img/alpineSkiingHeroPageImg.jpg')]" toggleModal={toggleModal} directionImage='rotate-y-180' />
			<div>
				<div className="mb-5 md:mb-6">
					<Title type="section-subtitle">Лижна база</Title>
				</div>
				<SportFacility bgUrl="bg-[url('/img/sportFacilityImg2.jpg')]" />
			</div>
			<div>
				<div className="mb-5 md:mb-9 lg:mb-8 md:text-center">
					<Title type="section-subtitle">Локація</Title>
				</div>
				<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[680] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px]'>
					<MyGoogleMap sport='sky' />
				</div>
			</div>
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default AlpineSkiingMainPage;