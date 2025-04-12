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
		<section className="page-wrap bg-main-dark mx-auto">
			<div className="page-container ">
				<div className="mb-6 md:mb-[28px] lg:mb-8">
					<Title type='page-title'>Контакти</Title>
				</div>
				<SportPageHero bgUrl="bg-[url('/img/contactsHeroPageImg.jpg')]" toggleModal={toggleModal} />
			</div>
			<div>
				<div className="page-container md:flex md:justify-center mb-5 md:mb-9">
					<Title type="section-title">Футбол</Title>
				</div>
				<div className="page-container flex flex-col lg:flex-row lg:justify-between">
					<div className="flex flex-col mb-2 lg:mb-5">
						<div className='flex self-start md:self-center flex-col lg:flex-row justify-start lg:items-center w-full md:mb-9 lg:mb-0'>
							<div className='flex justify-center items-center mb-[6px] lg:mb-0 lg:mr-[6px]'>
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
							<p className='text-center self-start md:self-center font-display text-sm md:text-lg font-semibold md:font-normal leading-[150%] md:leading-[100%]'>Голосіївский район, вул. Героїв Маріуполя, 7а</p>
						</div>
					</div>
					<div className="md:flex md:justify-between lg:justify-center lg:gap-8 mb-[14px] lg:mb-0 md:px-5 lgpx-0 text-sm md:text-base">
						<p className="mb-2 md:mb-0">Пошта: child.school_sport@gmail.com</p>
						<p>Тел.:
							<Link href="tel:+38 (050) 534-76-70"> (050) 534-76-70</Link>
						</p>
					</div>
				</div>
				<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[720px] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px] mx-auto'>
					<MyGoogleMap sport='football' />
				</div>
			</div>
			<div>
				<div className="page-container flex md:justify-center md:text-center mb-5 md:mb-8">
					<Title type="section-title">Біатлон, Лижні гонки,<br className="md:hidden" /> Гірські лижі</Title>
				</div>
				<div className="page-container flex flex-col lg:flex-row lg:justify-between">
					<div className="flex flex-col mb-2 lg:mb-5">
						<div className='flex self-start md:self-center flex-col lg:flex-row justify-start lg:items-center w-full md:mb-9 lg:mb-0'>
							<div className='flex justify-center items-center mb-[6px] lg:mb-0 lg:mr-[6px]'>
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
							<p className='text-center self-start md:self-center font-display text-sm md:text-lg font-semibold md:font-normal leading-[150%] md:leading-[100%]'>Голосіївский район, вул. Ягідна, 2</p>
						</div>
					</div>
					<div className="md:flex md:justify-between lg:justify-center lg:gap-8 mb-[14px] lg:mb-0 md:px-5 lgpx-0 text-sm md:text-base">
						<p className="mb-2 md:mb-0">Пошта: child.school_sport@gmail.com</p>
						<p>Тел.:
							<Link href="tel:+38 (050) 534-76-70"> (050) 534-76-70</Link>
						</p>
					</div>
				</div>
				<div className='min-w-[300px] xs:w-[356px] sm:w-[375px] md:w-[720px] lg:w-[1296px] h-[187px] md:h-[209px] lg:h-[332px] mx-auto'>
					<MyGoogleMap sport='sky' />
				</div>
			</div>
			<ModalEnroll isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</section>
	);
};

export default ContactsPage;