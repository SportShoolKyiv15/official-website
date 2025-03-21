'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useNav } from '../contexts/NavContext';
import ModalBurgerMenu from './modals/ModalBurgerMenu';
import BurgerMenu from './BurgerMenu';

const Header: React.FC = () => {
	// Reload neighbor component Nav for reset active menu item when we go to MainPage
	const { toggleUpdate } = useNav();
	const [isOpen, setIsOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		if (isModalOpen) {
			setIsOpen(true);
			setIsModalOpen(false);
			document.body.classList.remove('overflow-hidden');
		} else {
			setIsOpen(false);
			setIsModalOpen(true);
			document.body.classList.add('overflow-hidden');
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setIsOpen(!isOpen);
		document.body.classList.remove('overflow-hidden');
	};

	return (
		<header className='flex justify-center bg-header text-white'>
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
				{isOpen &&
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
			<ModalBurgerMenu isOpen={isModalOpen} onClose={closeModal}>
				<div className='absolute top-0 left-0 z-10 w-[313px] md:w-[586px]  min-h-screen text-white bg-block-dark burger-menu-overlay'>
					<div className='flex gap-1 md:gap-[10px] items-center pl-4 md:pl-5 py-[6px] md:py-[11px] bg-header text-white'>
						<Image
							src='/svg/logoHeader.svg'
							alt='Logo'
							width={60}
							height={51}
							className='md:hidden' />
						<Image
							src='/svg/logoHeader.svg'
							alt='Logo'
							width={82}
							height={70}
							className='hidden md:block lg:hidden' />
						<p className='md:hidden text-lg font-ermilov font-bold leading-[110%]'>КДЮСШ</p>
						<p className='hidden md:block md:w-[285px] lg:w-[377px] text-lg lg:text-xl font-ermilov font-bold leading-[110%]'>Комплексна дитяча юнацька спортивна школа 15</p>
					</div>
					<BurgerMenu closeModal={closeModal} />
				</div>
				{!isOpen && (
					<button
						onClick={closeModal}
						className="burger-menu  absolute right-4 md:right-5 top-[17px] md:top-5"
					>
						<Image
							src='/svg/iconCloseModal.svg'
							alt='Cross'
							width={30}
							height={30}
							className='md:hidden' />
						<Image
							src='/svg/iconCloseModal.svg'
							alt='Cross'
							width={40}
							height={40}
							className='hidden md:block' />
					</button>
				)}
			</ModalBurgerMenu>
		</header>
	)
}

export default Header;
