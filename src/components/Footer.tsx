'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ContactButton from './buttons/ContactButton';
import FeedbackModal from './modals/FeedbackModal';

const Footer: React.FC = () => {
	// Reload neighbor component Nav for reset active menu item when we go to MainPage
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);
	const destination = { lat: 50.381320102022265, lng: 30.451163440177055 };

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

	const handleMarkerClick = () => {
		const url = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}&origin=My+Location`;
		window.open(url, "_blank"); // Open Google Maps in a new tab
	};

	return (
		<footer className={`bg-black flex justify-center ${isModalOpen ? 'z-99' : 'z-0'}`}>
			<div className='my-container pt-5 md:pt-10 pb-4 md:pb-5'>
				<div className='md:flex md:items-center md:mb-[12px] justify-between lg:mb-[19px]'>
					<div className='flex justify-between items-center mb-[58px] md:mb-0'>
						<div className='flex items-start'>
							<button onClick={handleMarkerClick} className='lg:hidden mr-[6px] cursor-pointer'>
								<Image
									className=""
									src="/svg/iconLocation.svg"
									alt="icon location"
									width={24}
									height={24}
								/>
							</button>
							<button onClick={handleMarkerClick} className='hidden lg:block mr-[10px] cursor-pointer'>
								<Image
									className=""
									src="/svg/iconLocation.svg"
									alt="icon location"
									width={26}
									height={26}
								/>
							</button>
							<div className='flex flex-col gap-[6px] font-display text-sm'>
								<p>
									<span className='text-base font-medium'>Київ, </span>
									Голосіївский район,
								</p>
								<p>вул. Героїв Маріуполя 7а</p>
								<p>Тел.:
									<Link href="tel:+38 (044) 250-10-33">(044) 250-10-33</Link>
								</p>
							</div>
						</div>
						<Link href={'/'}
							className='md:hidden'>
							<Image
								src="/svg/logoFooter.svg"
								alt="logo"
								width={107}
								height={93}
							/>
						</Link>
					</div>
					<Link href={'/'}
						className='transform transition-transform duration-200 hover:scale-102 hover:cursor-pointer'>
						<Image
							src="/svg/logoFooter.svg"
							alt="logo"
							width={97}
							height={83}
							className='hidden md:block lg:hidden'
						/>
						<Image
							src="/svg/logoFooter.svg"
							alt="logo"
							width={156}
							height={134}
							className='hidden lg:block'
						/>
					</Link>
					<div className='flex md:block justify-between lg:mt-[10px] mb-8 md:mb-0'>
						<div className='flex flex-col gap-2 lg:gap-4 lg:mb-[34px] font-display text-sm'>
							<p>Залишились питання?</p>
							<ContactButton onClick={toggleModal} />
						</div>
						<div className='md:hidden flex lg:flex md:justify-end items-center gap-[10px] lg:gap-[14px]'>
							<Image
								src="/svg/iconInstagram.svg"
								alt="logo"
								width={32}
								height={32}
								className='transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer'
							/>
							<Link href='https://www.facebook.com/groups/httpswww.youtube.comchannelucwl9i9gygdsrhx92/?ref=share' target="_blank" rel="noopener noreferrer">
								<Image
									src="/svg/iconFacebook.svg"
									alt="logo"
									width={32}
									height={32}
									className='transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer'
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className='hiddden md:flex lg:hidden md:justify-end items-center md:mb-8 gap-[10px]'>
					<Image
						className="hidden md:block transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
						src="/svg/iconInstagram.svg"
						alt="logo"
						width={28}
						height={28}
					/>
					<Link href='https://www.facebook.com/groups/httpswww.youtube.comchannelucwl9i9gygdsrhx92/?ref=share' target="_blank" rel="noopener noreferrer">
						<Image
							className="hidden md:block transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
							src="/svg/iconFacebook.svg"
							alt="logo"
							width={28}
							height={28}
						/>
					</Link>
				</div>
				<div className='flex flex-col lg:flex-row items-center lg:justify-center gap-1 lg:gap-3 text-xs'>
					<p>© 2024, Всі права захищенні</p>
					<p>Договір оферти і Політика конфіденційності</p>
				</div>
			</div>
			<FeedbackModal isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</footer>
	);
};

export default Footer;
