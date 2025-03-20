'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import Title from './Title';
import { determineSportPage } from '@/helpers/determineSportPege';
import { ITEMS } from '@/data/constants';

import { Sports } from '@/globaltypes/types';

const PageNav: React.FC = () => {
	const pathname = usePathname();
	const pathnameArrow = pathname.split('/');
	const [sport, setSport] = useState<Sports>();
	const [subpage, setSubPage] = useState('');
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const onClick = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	useEffect(() => {
		if (pathname && determineSportPage(pathname)?.partPathName) {
			setSport(determineSportPage(pathname)?.partPathName);
			setSubPage(pathnameArrow[pathnameArrow.length - 1]);
			console.log('Page', subpage);
			console.log('Item', pathnameArrow)
		};
	}, [pathname, pathnameArrow, subpage]);
	return (
		<>
			<div className='md:hidden container'>
				{isMenuOpened && <div className='md:hidden modal-overlay'></div>}
				<nav className='pt-[28px] z-1000'>
					<Title type='page-title'>{determineSportPage(sport)?.pageName}</Title>
					{!isMenuOpened ?
						<div className='flex justify-between items-center w-full page-nav bg-block-grey rounded-sm'>
							<p>Розділи</p>
							<button onClick={onClick}>
								<Image
									src="/svg/iconPlus.svg"
									alt="icon plus"
									width={24}
									height={24}
								/>
							</button>
						</div>
						:
						<div className='relative'>
							<div className={`flex justify-between items-center w-full page-nav ${!isMenuOpened ? ' bg-block-grey' : 'bg-drop-menu'}  rounded-t-sm`}>
								<p>Навігація</p>
								<button onClick={onClick}>
									<Image
										src="/svg/iconCross.svg"
										alt="icon plus"
										width={24}
										height={24}
									/></button>
							</div>
							<div className='w-full h-[1px] bg-line-drop-menu'></div>
							<div className='w-[345px] absolute top-[100%] pt-3 pb-5 bg-drop-menu rounded-b-sm'>
								<ul className='flex flex-col gap-4 pl-10'>
									{sport && ITEMS[sport].map((item, index) => (
										<li key={index}>
											<Link href={`/${sport}/${item[1]}`} onClick={onClick}>{item[0]}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					}
				</nav>
			</div>

			<nav className='hidden md:block container pt-15 pb-[18px]'>
				<Title type='page-title'>{determineSportPage(sport)?.pageName}</Title>
				<ul className='flex gap-[38px] lg:gap-9'>
					{sport && ITEMS[sport].map((item, index) => (
						<li key={index} className='lg:py-[6px]'>
							<Link href={`/${sport}/${item[1]}`} className={`${item[1].includes(subpage) && 'text-button-hover'}`} onClick={onClick}>{item[0]}</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
};

export default PageNav;