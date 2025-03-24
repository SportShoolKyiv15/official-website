'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useNav } from '../contexts/NavContext';
import ModalBurgerMenu from './modals/ModalBurgerMenu';
import Nav from './Nav';

const Header: React.FC = () => {
	// Reload neighbor component Nav for reset active menu item when we go to MainPage
	const { toggleUpdate } = useNav();
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
		setTimeout(() => {
			setIsModalOpen(false);
		}, 300)
	};

	return (
		<header className='flex flex-col items-center bg-header text-white'>
			<div className='container flex justify-between items-center pt-[6px] md:pt-[11px] lg:pt-[19px] pb-[7px] md:pb-[11px] lg:pb-[18px]'>
				<div className='flex items-center'>
					<Link href={'/'} onClick={toggleUpdate}>
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
				{!isModalOpen &&
					<button onClick={toggleModal} className='lg:hidden md:self-start'>
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
				<nav className='hidden lg:flex gap-11  md:self-start'>
					<Link href={'/about'} className='font-ermilov font-bold'>Про нас</Link>
					<Link href={'/services'} className='font-ermilov font-bold'>Платні послуги</Link>
					<Link href={'/contacts'} className='font-ermilov font-bold'>Контакти</Link>
				</nav>
			</div>
			<Nav />
			<ModalBurgerMenu isModalOpen={isModalOpen} closeModal={closeModal} IsVisible={IsVisible} />
		</header>
	);
};

export default Header;

