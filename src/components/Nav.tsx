'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { determineSportPage } from '@/helpers/determineSportPege';
import { useNav } from '../contexts/NavContext';
import { useScroll } from '@/contexts/ScrollContext';
import { useSport } from '@/contexts/SportContext';
import ModalBurgerMenu from './modals/ModalBurgerMenu';

const Nav: FC = ({ }) => {
	const pathname = usePathname();
	const [isToggled, setIsToggled] = useState(false);
	const { sport, getSport } = useSport();
	const { isUpdated, toggleUpdate } = useNav();
	const { hideHeader } = useScroll();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [IsVisible, setIsVisible] = useState(false);

	// Switch menu items in mobile
	const onSwitch = () => {
		setIsToggled(!isToggled);
	};

	// Reset isUpdate for switch on active color for menu items
	const onClick = () => {
		if (isUpdated) {
			toggleUpdate();
		}
	};

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
		}
	};

	const closeModal = () => {
		setIsVisible(false);
		toggleUpdate();
		setTimeout(() => {
			setIsModalOpen(false);
		}, 300)
	};

	useEffect(() => {
		console.log('pathname', pathname)
		console.log('sport', sport)
		if (pathname && determineSportPage(pathname)?.sportName) {
			const ourPath = determineSportPage(pathname)?.sportName;
			// Switch navigation items
			if (ourPath === 'football' || ourPath === "biatlon") {
				setIsToggled(false)
			};
			if (ourPath === 'sky_racing' || ourPath === "alpine_skiing") {
				setIsToggled(true)
			};
			// We find sport page
			getSport(determineSportPage(pathname)?.sportName);
		}
	}, [pathname, getSport, sport]);

	return (
		<nav className='w-full bg-nav-gradient' aria-label='Основна навігація'>
			<div className={`w-full h-1 bg-header ${hideHeader ? 'block' : 'hidden'}`}></div>
			<div className={`my-container m-auto ${hideHeader ? 'pt-0 pb-[2px]' : 'pt-[10px] pb-1'} md:pt-[6px] md:pb-[6px] relative`}>
				<div className='flex w-full'>
					{/* Mobile navigathion */}
					<div className={`md:hidden flex flex-grow justify-center gap-4 sm:gap-6 text-sm sm:text-base`}>
						{isToggled && !hideHeader &&
							<button onClick={onSwitch} className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4'>
								<Image
									src="/svg/double-arrow-left.svg"
									alt="icon arrow"
									width={20}
									height={20}
								/>
							</button>}
						{!isToggled && !hideHeader && <button onClick={onSwitch} className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-4'>
							<Image
								src="/svg/double-arrow-right.svg"
								alt="icon arrow"
								width={20}
								height={20}
							/>
						</button>}
						{!isToggled ?
							<div className={`${hideHeader ? 'justify-center gap-8' : 'gap-4'} flex items-center`}>
								<Link href={'/football/main'} onClick={onClick} className={`flex items-center ${sport === 'football' && !isUpdated && hideHeader && 'border-b-2 border-button-hover'}`}>
									<div className='flex w-9 items-center justify-center'>
										<Image
											className='mr-[9px]'
											src="/svg/iconFootball.svg"
											alt="icon football"
											width={36}
											height={36}
										/>
									</div>
									{!hideHeader && <p className={`${sport === 'football' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Футбол</p>}
								</Link>
								<Link href={'/biatlon/main'} onClick={onClick} className={`flex items-center ${sport === 'biatlon' && !isUpdated && hideHeader && 'border-b-2 border-button-hover'}`}>
									<div className='flex w-9 items-center justify-center'>
										<Image
											className='mr-[9px]'
											src="/svg/iconBiatlon.svg"
											alt="icon football"
											width={36}
											height={36}
										/>
									</div>
									{!hideHeader && <p className={`${sport === 'biatlon' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Біатлон</p>}
								</Link>
								{hideHeader && <button onClick={onSwitch} className='w-5 h-5'>
									<Image
										src="/svg/double-arrow-right.svg"
										alt="icon arrow"
										width={20}
										height={20}
									/>
								</button>}
							</div> : <div className={`${hideHeader ? 'justify-center gap-8' : 'gap-4'} flex items-center`}>
								{hideHeader && <button onClick={onSwitch} className='w-5 h-5'>
									<Image
										src="/svg/double-arrow-left.svg"
										alt="icon arrow"
										width={20}
										height={20}
									/>
								</button>}
								<Link href={'/sky_racing/main'} onClick={onClick} className={`flex items-center ${sport === 'sky_racing' && !isUpdated && hideHeader && 'border-b-2 border-button-hover'}`}>
									<div className='flex w-10 items-center justify-center'>
										<Image
											className='mr-[9px]'
											src="/svg/iconSkyRacing.svg"
											alt="icon football"
											width={40}
											height={36}
										/>
									</div>
									{!hideHeader && <p className={`${sport === 'sky_racing' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Лижні гонки</p>}
								</Link>
								<Link href={'/alpine_skiing/main'} onClick={onClick} className={`flex items-center ${sport === 'alpine_skiing' && !isUpdated && hideHeader && 'border-b-2 border-button-hover'}`}>
									<div className='flex w-9 items-center justify-center'>
										<Image
											className='mr-[9px]'
											src="/svg/iconAlpineSkiing.svg"
											alt="icon football"
											width={36}
											height={36}
										/>
									</div>
									{!hideHeader && <p className={`${sport === 'alpine_skiing' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Гірські лижі</p>}
								</Link>
							</div>}
					</div>
					<div className='md:hidden'>
						{!isModalOpen && hideHeader &&
							<button onClick={toggleModal} className='md:self-start'>
								<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.00001 27C5.57501 27 5.21901 26.856 4.93201 26.568C4.64501 26.28 4.50101 25.924 4.50001 25.5C4.49901 25.076 4.64301 24.72 4.93201 24.432C5.22101 24.144 5.57701 24 6.00001 24H30C30.425 24 30.7815 24.144 31.0695 24.432C31.3575 24.72 31.501 25.076 31.5 25.5C31.499 25.924 31.355 26.2805 31.068 26.5695C30.781 26.8585 30.425 27.002 30 27H6.00001ZM6.00001 19.5C5.57501 19.5 5.21901 19.356 4.93201 19.068C4.64501 18.78 4.50101 18.424 4.50001 18C4.49901 17.576 4.64301 17.22 4.93201 16.932C5.22101 16.644 5.57701 16.5 6.00001 16.5H30C30.425 16.5 30.7815 16.644 31.0695 16.932C31.3575 17.22 31.501 17.576 31.5 18C31.499 18.424 31.355 18.7805 31.068 19.0695C30.781 19.3585 30.425 19.502 30 19.5H6.00001ZM6.00001 12C5.57501 12 5.21901 11.856 4.93201 11.568C4.64501 11.28 4.50101 10.924 4.50001 10.5C4.49901 10.076 4.64301 9.72 4.93201 9.432C5.22101 9.144 5.57701 9 6.00001 9H30C30.425 9 30.7815 9.144 31.0695 9.432C31.3575 9.72 31.501 10.076 31.5 10.5C31.499 10.924 31.355 11.2805 31.068 11.5695C30.781 11.8585 30.425 12.002 30 12H6.00001Z" fill="rgba(177, 43, 44, 1)" />
								</svg>
							</button>}
					</div>
				</div>
				{/* Desktop and tablet navigation */}
				<div className='hidden md:flex justify-between lg:justify-center gap-10 lg:gap-[38px] md:px-[14px] lg:px-0 relative'>
					<Link href={'/football/main'} onClick={onClick} className='flex items-center'>
						<div className='flex w-9 items-center justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconFootball.svg"
								alt="icon football"
								width={40}
								height={40}
							/>
						</div>
						<p className={`${sport === 'football' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Футбол</p>
					</Link>
					<Link href={'/biatlon/main'} onClick={onClick} className='flex items-center'>
						<div className='flex w-9 items-center justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconBiatlon.svg"
								alt="icon football"
								width={40}
								height={49}
							/>
						</div>
						<p className={`${sport === 'biatlon' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Біатлон</p>
					</Link>
					<Link href={'/sky_racing/main'} onClick={onClick} className='flex items-center'>
						<div className='flex w-10 items-center justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconSkyRacing.svg"
								alt="icon football"
								width={49}
								height={40}
							/>
						</div>
						<p className={`${sport === 'sky_racing'! && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Лижні гонки</p>
					</Link>
					<Link href={'/alpine_skiing/main'} onClick={onClick} className='flex items-center'>
						<div className='flex w-9 items-center justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconAlpineSkiing.svg"
								alt="icon football"
								width={40}
								height={40}
							/>
						</div>
						<p className={`${sport === 'alpine_skiing' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Гірські лижі</p>
					</Link>
					<div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 left-[194px] ${hideHeader ? 'nav-Logo-visible' : 'header-Logo-hidden'}`}>
						<Image
							className='mr-[6px]'
							src="/svg/smallLogo.svg"
							alt="Logo"
							width={49}
							height={41}
						/>
					</div>
					<div className={`flex hidden lg:block  absolute top-1/2 -translate-y-1/2 right-[194px] ${hideHeader ? 'nav-Logo-visible' : 'header-Logo-hidden'}`}>
						<Link href='https://kudrivka.com.ua/' className='hover:scale-102 hover:cursor-pointer' target="_blank" rel="noopener noreferrer">
							<Image
								className=""
								src="/svg/sponsorIcon.svg"
								alt="icon sponsor"
								width={28}
								height={28}
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='absolute top-0 left-0 z-10'>
				<ModalBurgerMenu isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
			</div>
		</nav>
	);
};

export default Nav;