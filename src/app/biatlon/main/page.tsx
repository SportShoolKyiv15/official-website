'use client';

import { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';

import ModalEnroll from '@/components/modals/ModalEnroll';
import SportPageHero from '@/components/SportPageHero';
import SportFacility from '@/components/SportFacility';
import Title from '@/components/Title';
import MyGoogleMap from '@/components/MyGoogleMap';

const BiatlonMainPage: FC = () => {
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
			<SportPageHero bgUrl="bg-[url('/img/biatlonHeroPageImg.jpg')]" toggleModal={toggleModal} />
			<div>
				<div className="mb-5 md:mb-6 pl-[10px] sm:pl-[15px] md:pl-0">
					<Title type="section-subtitle">Лижна база</Title>
				</div>
				<SportFacility bgUrl="bg-[url('/img/sportFacilityImg2.jpg')]" />
			</div>
			<div>
				<div className="mb-5 md:mb-9 lg:mb-8 pl-[10px] sm:pl-[15px] md:pl-0 md:text-center">
					<Title type="section-subtitle">Локація</Title>
				</div>
				<div className='lg:flex lg:justify-start lg:items-center lg:mb-5'>
					<div className='flex justify-center items-ctnter mb-[6px] lg:mb-0 lg:mr-[6px]'>
						<Image
							className="md:hidden mr-[2px]"
							src="/svg/iconLocation.svg"
							alt="icon location"
							width={22}
							height={22}
						/>
						<Image
							className="hidden md:block mr-[2px] lg:mr-2"
							src="/svg/iconLocation.svg"
							alt="icon location"
							width={26}
							height={26}
						/>
						<p className='font-display text-lg font-semibold md:font-medium'>Київ,</p>
					</div>
					<p className='mb-[14px] md:mb-6 lg:mb-0 text-center font-display text-sm md:text-lg font-semibold md:font-normal leading-[150%] md:leading-[100%]'>Голосіївский район, вул. Ягідна 2</p>
				</div>
				<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[680] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px]'>
					<MyGoogleMap sport='sky' />
				</div>
			</div>
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default BiatlonMainPage;