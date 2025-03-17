'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Sports = "football" | "biatlon" | "sky_racing" | "alpine_skiing" | undefined;

const Nav: React.FC = () => {
	const pathname = usePathname();
	const [isToggled, setIsToggled] = useState(false);
	const [sport, setSport] = useState<Sports>();

	const onSwitch = () => {
		setIsToggled(!isToggled);
	};

	const determineSportPage = (queryString: string): Sports => {
		if (queryString.includes('football')) return 'football';
		if (queryString.includes('biatlon')) return 'biatlon';
		if (queryString.includes('sky_racing')) return 'sky_racing';
		if (queryString.includes('alpine_skiing')) return 'alpine_skiing';
	}
	useEffect(() => {
		if (pathname && determineSportPage(pathname)) {
			setSport(determineSportPage(pathname));
		}
	}, [pathname]);

	return (
		<nav className='bg-nav-gradient'>
			<div className='container m-auto pt-[10px]  relative'>
				<div className='flex justify-center pb-1 gap-10'>
					{isToggled ?
						<button onClick={onSwitch} className='w-5 h-5 absolute top-[2px] left-4'>
							<Image
								src="/svg/double-arrow-left.svg"
								alt="icon football"
								width={39}
								height={29}
							/>
						</button> :
						<button onClick={onSwitch} className='w-5 h-5 absolute top-[2px] right-4'>
							<Image
								src="/svg/double-arrow-right.svg"
								alt="icon football"
								width={39}
								height={29}
							/>
						</button>}
					{!isToggled ?
						<>	<Link href={'/football/main'} className='flex items-center'>
							<div className='flex h-9 w-9 items-center  justify-center'>
								<Image
									className='mr-[9px]'
									src="/svg/footballIcon.svg"
									alt="icon football"
									width={27}
									height={28}
								/>
							</div>
							<p className={`${sport === 'football' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Футбол</p>
						</Link>
							<Link href={'/biatlon/main'} className='flex items-center'>
								<div className='flex h-9 w-9 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/biatlonIcon.svg"
										alt="icon football"
										width={30}
										height={30}
									/>
								</div>
								<p className={`${sport === 'biatlon' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Біатлон</p>
							</Link>
						</> : <>
							<Link href={'/sky_racing/main'} className='flex items-center'>
								<div className='flex h-9 w-10 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/skyRacingIcon.svg"
										alt="icon football"
										width={39}
										height={29}
									/>
								</div>
								<p className={`${sport === 'sky_racing' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Лижні гонки</p>
							</Link>
							<Link href={'/alpine_skiing/main'} className='flex items-center'>
								<div className='flex h-9 w-9 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/alpineSkiingIcon.svg"
										alt="icon football"
										width={30}
										height={32}
									/>
								</div>
								<p className={`${sport === 'alpine_skiing' ? 'text-button-hover' : 'text-black-text'} font-semibold hover:text-button-hover`}>Гірські лижі</p>
							</Link>
						</>}
				</div>
			</div>
		</nav>
	)
}

export default Nav;