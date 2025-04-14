'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { determineSportPage } from '@/helpers/determineSportPege';
import { useNav } from '../contexts/NavContext';

import { Sports } from '@/globaltypes/types';

const Nav: React.FC = () => {
	const pathname = usePathname();
	const [isToggled, setIsToggled] = useState(false);
	const [sport, setSport] = useState<Sports>();
	const { isUpdated, toggleUpdate } = useNav();

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
			setSport(determineSportPage(pathname)?.sportName);
		}
	}, [pathname]);

	return (
		<nav className='w-full bg-nav-gradient' aria-label='Основна навігація'>
			<div className='my-container m-auto pt-[10px] md:pt-[6px] pb-1 md:pb-[6px] relative'>
				{/* Mobile navigathion */}
				<div className='md:hidden flex justify-center gap-4 sm:gap-6 text-sm sm:text-base'>
					{isToggled ?
						<button onClick={onSwitch} className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4'>
							<Image
								src="/svg/double-arrow-left.svg"
								alt="icon arrow"
								width={20}
								height={20}
							/>
						</button> :
						<button onClick={onSwitch} className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-4'>
							<Image
								src="/svg/double-arrow-right.svg"
								alt="icon arrow"
								width={20}
								height={20}
							/>
						</button>}
					{!isToggled ?
						<>
							<Link href={'/football/main'} onClick={onClick} className='flex items-center'>
								<div className='flex w-9 items-center justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconFootball.svg"
										alt="icon football"
										width={36}
										height={36}
									/>
								</div>
								<p className={`${sport === 'football' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Футбол</p>
							</Link>
							<Link href={'/biatlon/main'} onClick={onClick} className='flex items-center'>
								<div className='flex w-9 items-center justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconBiatlon.svg"
										alt="icon football"
										width={36}
										height={36}
									/>
								</div>
								<p className={`${sport === 'biatlon' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Біатлон</p>
							</Link>
						</> : <>
							<Link href={'/sky_racing/main'} onClick={onClick} className='flex items-center'>
								<div className='flex w-10 items-center justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconSkyRacing.svg"
										alt="icon football"
										width={40}
										height={36}
									/>
								</div>
								<p className={`${sport === 'sky_racing' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Лижні гонки</p>
							</Link>
							<Link href={'/alpine_skiing/main'} onClick={onClick} className='flex items-center'>
								<div className='flex w-9 items-center justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconAlpineSkiing.svg"
										alt="icon football"
										width={36}
										height={36}
									/>
								</div>
								<p className={`${sport === 'alpine_skiing' && !isUpdated ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Гірські лижі</p>
							</Link>
						</>}
				</div>
				{/* Desktop and tablet navigation */}
				<div className='hidden md:flex justify-between lg:justify-center gap-10 lg:gap-[38px] md:px-[14px] lg:px-0'>
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
				</div>
			</div>
		</nav>
	);
};

export default Nav;