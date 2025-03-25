import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

import useWindowWidth from '@/helpers/windowsSize';
import BurgerMenu from '../BurgerMenu';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	IsVisible: boolean;
};

const ModalBurgerMenu: React.FC<ModalProps> = ({ isModalOpen, closeModal, IsVisible }) => {
	const modalRef = useRef<HTMLDivElement | null>(null);
	const withWindow = useWindowWidth();

	const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (modalRef?.current && !modalRef?.current?.contains(event.target as Node)) {
			closeModal();
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && isModalOpen) {
			closeModal();
		}
	};

	const memoizedhandleKeyDown = useCallback(handleKeyDown, [isModalOpen, closeModal])

	useEffect(() => {
		if (withWindow !== undefined && withWindow > 1440 && isModalOpen) {
			closeModal();
		}
	}, [withWindow, isModalOpen, closeModal]);

	useEffect(() => {
		if (isModalOpen) {
			document.addEventListener('keydown', memoizedhandleKeyDown);
		} else {
			document.removeEventListener('keydown', memoizedhandleKeyDown);
		}
		return () => {
			document.removeEventListener('keydown', memoizedhandleKeyDown);
		};
	}, [isModalOpen, memoizedhandleKeyDown]);

	return (
		<div className={`${isModalOpen && 'modal-overlay-burger relative'}`} onClick={handleOverlayClick}>
			{isModalOpen &&
				<div ref={modalRef} className={`absolute top-0 left-0 z-10 w-[313px] md:w-[586px]  min-h-screen text-white bg-block-dark ${IsVisible && `burger-menu-visible`}  ${!IsVisible && `burger-menu-hidden`}`}>
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
				</div>}
			{isModalOpen && (
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
		</div>
	);


};

export default ModalBurgerMenu;