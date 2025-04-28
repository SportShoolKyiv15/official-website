'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useNav } from '../contexts/NavContext';
import { useScroll } from '../contexts/ScrollContext';
import ModalBurgerMenu from './modals/ModalBurgerMenu';
import Nav from './Nav';

const Header: React.FC = () => {
	// Reload neighbor component Nav for reset active menu item when we go to MainPage
	const { toggleUpdate } = useNav();
	const { hideHeader } = useScroll()
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
		}
	};

	const closeModal = () => {
		setIsVisible(false);
		toggleUpdate();
		setTimeout(() => {
			setIsModalOpen(false);
		}, 300)
	};

	return (
		<header className='flex flex-col w-full items-center bg-header text-white'>
			<div className={`my-container flex justify-between items-center pt-[6px] md:pt-[11px] lg:pt-[19px] pb-[7px] md:pb-[11px] lg:pb-[18px] relative  ${hideHeader ? 'history-closed' : 'history-opened'}`}>
				<div className='flex items-center'>
					<Link href={'/'}
						onClick={toggleUpdate}
						className='transform transition-transform duration-200 hover:scale-102 hover:cursor-pointer'>
						<Image
							src='/svg/logoHeader.svg'
							alt='Logo'
							width={60}
							height={51}
							className='md:hidden mr-[5px]' />
						<Image
							src='/svg/logoHeader.svg'
							alt='Logo'
							width={82}
							height={70}
							className='hidden md:block lg:hidden mr-[10px]' />
						<Image
							src='/svg/logoHeader.svg'
							alt='Logo'
							width={106}
							height={89}
							className='hidden lg:block mr-[10px]' />
					</Link>
					<p className='md:hidden text-lg font-ermilov font-bold leading-[110%]'>КДЮСШ</p>
					<p className='hidden md:block md:w-[285px] lg:w-[377px] text-lg lg:text-xl font-ermilov font-bold leading-[110%]'>Комплексна дитяча юнацька спортивна школа 15</p>
				</div>
				<div className='lg:hidden'>
					{!isModalOpen &&
						<button onClick={toggleModal} className='md:self-start'>
							<Image
								className="md:hidden"
								src="/svg/burger.svg"
								alt="icon burger"
								width={36}
								height={36}
							/>
							<Image
								className="hidden md:block"
								src="/svg/burger.svg"
								alt="icon burger"
								width={40}
								height={40}
							/>
						</button>}
				</div>
				<div className='hidden lg:flex lg:flex-col items-end md:self-end'>
					<nav className='lg:flex gap-11 mb-6'>
						<Link
							href={'/about'}
							onClick={toggleUpdate}
							className='font-ermilov font-bold hover:opacity-80'>Про нас</Link>
						<Link
							href={'/services'}
							onClick={toggleUpdate}
							className='font-ermilov font-bold hover:opacity-80'>Платні послуги</Link>
						<Link
							href={'/contacts'}
							onClick={toggleUpdate}
							className='font-ermilov font-bold hover:opacity-80'>Контакти</Link>
					</nav>
					<div className='flex'>
						<Link href='https://kudrivka.com.ua/' className='hover:scale-102 hover:cursor-pointer' target="_blank" rel="noopener noreferrer">
							<Image
								src="/svg/sponsorIcon.svg"
								alt="icon sponsor"
								width={35}
								height={35}
							/></Link>
					</div>
				</div>
				<div className='hidden md:flex lg:hidden absolute bottom-[14px] right-[105px]'>
					<Link href='https://kudrivka.com.ua/' className='hover:scale-102 hover:cursor-pointer' target="_blank" rel="noopener noreferrer">
						<Image
							className=""
							src="/svg/sponsorIcon.svg"
							alt="icon sponsor"
							width={35}
							height={35}
						/>
					</Link>
				</div>
				<div className='hidden sm:flex md:hidden absolute bottom-[10px] right-[81px]'>
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
				<div className='flex sm:hidden absolute bottom-[10px] right-[61px]'>
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
			<div className={`w-full ${hideHeader && 'fixed top-0 z-50'} bg-header`}>
				<Nav hideHeader={hideHeader} />
			</div>
			<div className='absolute top-0 left-0 z-10'>
				<ModalBurgerMenu isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
			</div>
		</header>
	);
};

export default Header;

