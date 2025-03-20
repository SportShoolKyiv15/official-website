'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { determineSportPage } from '@/helpers/determineSportPege';

import { Sports } from '@/globaltypes/types';

const Nav: React.FC = () => {
	const pathname = usePathname();
	const [isToggled, setIsToggled] = useState(false);
	const [sport, setSport] = useState<Sports>();

	const onSwitch = () => {
		setIsToggled(!isToggled);
	};

	useEffect(() => {
		if (pathname && determineSportPage(pathname)?.partPathName) {
			if (determineSportPage(pathname)?.partPathName === 'football' || "biatlon") { setIsToggled(false) };
			if (determineSportPage(pathname)?.partPathName === 'sky_racing' || "aloine_skiing") { setIsToggled(true) };
			setSport(determineSportPage(pathname)?.partPathName);
		}
	}, [pathname]);

	return (
		<nav className='bg-nav-gradient'>
			<div className='container m-auto pt-[10px] md:pt-[6px] pb-1 md:pb-[6px] relative'>
				<div className='md:hidden flex justify-center gap-10'>
					{isToggled ?
						<button onClick={onSwitch} className='w-5 h-5 absolute top-[2px] left-4'>
							<Image
								src="/svg/double-arrow-left.svg"
								alt="icon arrow"
								width={20}
								height={20}
							/>
						</button> :
						<button onClick={onSwitch} className='w-5 h-5 absolute top-[2px] right-4'>
							<Image
								src="/svg/double-arrow-right.svg"
								alt="icon arrow"
								width={20}
								height={20}
							/>
						</button>}
					{!isToggled ?
						<>	<Link href={'/football/main'} className='flex items-center'>
							<div className='flex w-9 items-center  justify-center'>
								<Image
									className='mr-[9px]'
									src="/svg/iconFootball.svg"
									alt="icon football"
									width={36}
									height={36}
								/>
							</div>
							<p className={`${sport === 'football' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Футбол</p>
						</Link>
							<Link href={'/biatlon/main'} className='flex items-center'>
								<div className='flex w-9 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconBiatlon.svg"
										alt="icon football"
										width={36}
										height={36}
									/>
								</div>
								<p className={`${sport === 'biatlon' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Біатлон</p>
							</Link>
						</> : <>
							<Link href={'/sky_racing/main'} className='flex items-center'>
								<div className='flex w-10 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconSkyRacing.svg"
										alt="icon football"
										width={40}
										height={36}
									/>
								</div>
								<p className={`${sport === 'sky_racing' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Лижні гонки</p>
							</Link>
							<Link href={'/alpine_skiing/main'} className='flex items-center'>
								<div className='flex w-9 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/iconAlpineSkiing.svg"
										alt="icon football"
										width={36}
										height={36}
									/>
								</div>
								<p className={`${sport === 'alpine_skiing' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Гірські лижі</p>
							</Link>
						</>}
				</div>
				<div className='hidden md:flex justify-between lg:justify-center gap-10 lg:gap-[38px] md:px-[14px] lg:px-0'>
					<Link href={'/football/main'} className='flex items-center'>
						<div className='flex w-9 items-center  justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconFootball.svg"
								alt="icon football"
								width={40}
								height={40}
							/>
						</div>
						<p className={`${sport === 'football' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Футбол</p>
					</Link>
					<Link href={'/biatlon/main'} className='flex items-center'>
						<div className='flex w-9 items-center  justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconBiatlon.svg"
								alt="icon football"
								width={40}
								height={49}
							/>
						</div>
						<p className={`${sport === 'biatlon' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Біатлон</p>
					</Link>
					<Link href={'/sky_racing/main'} className='flex items-center'>
						<div className='flex w-10 items-center  justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconSkyRacing.svg"
								alt="icon football"
								width={49}
								height={40}
							/>
						</div>
						<p className={`${sport === 'sky_racing' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Лижні гонки</p>
					</Link>
					<Link href={'/alpine_skiing/main'} className='flex items-center'>
						<div className='flex w-9 items-center  justify-center'>
							<Image
								className='mr-[6px]'
								src="/svg/iconAlpineSkiing.svg"
								alt="icon football"
								width={40}
								height={40}
							/>
						</div>
						<p className={`${sport === 'alpine_skiing' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Гірські лижі</p>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav;