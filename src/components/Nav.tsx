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
								<Link href={'/football/main'} className={`flex items-center ${sport === 'football' && hideHeader && 'border-b-2 border-button-hover'}`}>
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
								<Link href={'/biatlon/main'} className={`flex items-center ${sport === 'biatlon' && hideHeader && 'border-b-2 border-button-hover'}`}>
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
								<Link href={'/sky_racing/main'} className={`flex items-center ${sport === 'sky_racing' && hideHeader && 'border-b-2 border-button-hover'}`}>
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
								<Link href={'/alpine_skiing/main'} className={`flex items-center ${sport === 'alpine_skiing' && hideHeader && 'border-b-2 border-button-hover'}`}>
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
								<Image
									src="/svg/burgerRed.svg"
									alt="icon burger"
									width={36}
									height={36}
								/>
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