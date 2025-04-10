'use client';

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Title from "@/components/Title";
import SportPageHero from "@/components/SportPageHero";
import ModalEnroll from "@/components/modals/ModalEnroll";
import MyGoogleMap from "@/components/MyGoogleMap";

const ContactsPage: FC = () => {
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
		<section className="flex flex-col w-full items-center mx-auto bg-main-dark pt-[28px] md:pt-15 lg:pt-[70px]">
			<div className="my-container mb-6 md:mb-[28px] lg:mb-8">
				<Title type='page-title'>Контакти</Title>
			</div>
			<div className="mb-[50px] md:mb-20 lg:mb-25">
				<SportPageHero bgUrl="bg-[url('/img/biatlonHeroPageImg.jpg')]" toggleModal={toggleModal} />
			</div>
			<div className="my-container md:flex md:justify-center mb-5 md:mb-9">
				<Title type="section-title">Футбол</Title>
			</div>
			<div className="my-container flex flex-col mb-2 lg:mb-5">
				<div className='flex self-start md:self-center flex-col lg:flex-row justify-start lg:items-center md:mb-9'>
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
					<p className='text-center font-display text-sm md:text-lg font-semibold md:font-normal leading-[150%] md:leading-[100%]'>Голосіївский район, вул. Героїв Маріуполя 7а</p>
				</div>
			</div>
			<div className="my-container md:flex md:justify-between mb-[14px] text-sm md:text-base">
				<p className="mb-2 md:mb-0">Пошта: child.school_sport@gmail.com</p>
				<p>Тел.:
					<Link href="tel:+38 (050) 534-76-70"> (050) 534-76-70</Link>
				</p>
			</div>
			<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[720] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px] mb-[50px] md:mb-20 lg:mb-25'>
				<MyGoogleMap sport='football' />
			</div>
			<div className="my-container md:flex md:justify-center mb-5 md:mb-9">
				<div className="mb-3 md:mb-0 md:mr-1">
					<Title type="section-title">Біатлон, Лижні гонки,</Title>
				</div>
				<div className="">
					<Title type="section-title">Гірські лижі</Title>
				</div>
			</div>
			<div className="my-container flex flex-col mb-2 lg:mb-5">
				<div className='flex self-start md:self-center flex-col lg:flex-row justify-start lg:items-center  md:mb-9'>
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
					<p className='text-center font-display text-sm md:text-lg font-semibold md:font-normal leading-[150%] md:leading-[100%]'>Голосіївский район, вул. Ягідна 2</p>
				</div>
			</div>
			<div className="my-container md:flex md:justify-between  mb-[14px] text-sm md:text-base">
				<p className="mb-2 md:mb-0">Пошта: child.school_sport@gmail.com</p>
				<p>Тел.:
					<Link href="tel:+38 (050) 534-76-70"> (050) 534-76-70</Link>
				</p>
			</div>
			<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[720] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px] mb-[50px] md:mb-20 lg:mb-25'>
				<MyGoogleMap sport='sky' />
			</div>
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default ContactsPage;