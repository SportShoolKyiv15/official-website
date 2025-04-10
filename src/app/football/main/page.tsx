'use client';

import { FC } from 'react';
import { useState } from 'react';

import ModalEnroll from '@/components/modals/ModalEnroll';
import SportPageHero from '@/components/SportPageHero';
import SportFacility from '@/components/SportFacility';
import MyGoogleMap from '@/components/MyGoogleMap';
import Title from '@/components/Title';

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
			<div>
				<div className="mb-5 md:mb-6 pl-[10px] sm:pl-[15px] md:pl-0">
					<Title type="section-subtitle">Футбольна база</Title>
				</div>
				<SportFacility bgUrl="bg-[url('/img/sportFacilityImg1.jpg')]" />
			</div>
			<div>
				<div className="mb-5 md:mb-9 lg:mb-8 pl-[10px] sm:pl-[15px] md:pl-0 md:text-center">
					<Title type="section-subtitle">Локація</Title>
				</div>
				<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[680] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px]'>
					<MyGoogleMap sport='football' />
				</div>
			</div>
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default FootballMainPage;