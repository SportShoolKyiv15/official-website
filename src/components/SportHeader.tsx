'use client';

import { useEffect, useState, FC } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import Title from './Title';
import SportNavListItems from './SportNavListItems';
import { determineSportPage } from '@/helpers/determineSportPege';

import { Sports } from '@/globaltypes/types';

const SportHeader: FC = () => {
	const pathname = usePathname();
	const pathnameArrow = pathname.split('/');
	const [sport, setSport] = useState<Sports>();
	const [subpage, setSubPage] = useState('');
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const titleText = determineSportPage(pathname)?.pageTitle;

	const onClick = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	useEffect(() => {
		if (pathname && determineSportPage(pathname)?.sportName) {
			// Get subpage name in pathname
			setSport(determineSportPage(pathname)?.sportName);
			// Get last element of pathname
			if (pathnameArrow[pathnameArrow.length - 1] === 'foto' || pathnameArrow[pathnameArrow.length - 1] === 'video') {
				setSubPage(pathnameArrow[pathnameArrow.length - 2]);
				// setSubPage('gallery');
			} else {
				setSubPage(pathnameArrow[pathnameArrow.length - 1]);
			}
		};
	}, [pathname, pathnameArrow, subpage]);
	return (
		<>
			{/* Mobile sport header */}
			<div className='md:hidden my-container z-8'>
				{isMenuOpened && <div className='md:hidden drop-menu-overlay'></div>}
				<div className='py-[28px]'>
					<div className='mb-3'>
						<Title type='page-title'>{titleText}</Title>
					</div>
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
							<nav className='w-[336px] sm:w-[345px] absolute top-[100%] pt-5 pb-8 bg-drop-menu rounded-b-sm' aria-label='Навігація по сторінці'>
								<SportNavListItems sport={sport} subpage={subpage} onClick={onClick} />
							</nav>
						</div>
					}
				</div>
			</div>
			{/* Desktop and tablet sport header */}
			<div className='hidden md:block my-container pt-15 pb-[18px]'>
				<div className='md:mb-8 md:mb-[51px]'>
					<Title type='page-title'>{titleText}</Title>
				</div>
				<nav>
					<SportNavListItems sport={sport} subpage={subpage} />
				</nav>
			</div>
		</>
	)
};

export default SportHeader;