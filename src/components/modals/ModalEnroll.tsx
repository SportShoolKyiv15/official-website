import React, { FC, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Title from '../Title';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	IsVisible: boolean;
};

const ModalEnroll: FC<ModalProps> = ({ isModalOpen, closeModal, IsVisible }) => {
	const modalRef = useRef<HTMLDivElement | null>(null);

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

	const memoizedhandleKeyDown = useCallback(handleKeyDown, [isModalOpen, closeModal]);
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
		<div className={`${isModalOpen && 'modal-overlay relative z-9'}`} onClick={handleOverlayClick}>
			{isModalOpen &&
				<div ref={modalRef} className={`absolute top-[107px] md:top-[192px] lg:top-[255px] right-[50%] translate-x-[50%] text-white bg-block-dark overflow: hidden; ${IsVisible && `modal-visible`}  ${!IsVisible && `modal-hidden`} rounded-sm`}>
					<div className='w-[343px] md:w-[532px] lg:w-[608px] px-4 md:px-0 py-[34px] md:py-10 relative'>
						<button
							onClick={closeModal}
							className="burger-menu absolute right-[10px] md:right-4 lg:right-5 top-[10px] md:top-4 lg:top-5 cursor-pointer">
							<Image
								src='/svg/iconCloseModal.svg'
								alt='Cross'
								width={22}
								height={22}
								className='md:hidden hover:scale-110' />
							<Image
								src='/svg/iconCloseModal.svg'
								alt='Cross'
								width={24}
								height={24}
								className='hidden md:block hover:scale-110' />
						</button>
						<div className='flex flex-col gap-8 md:gap-10 text-center'>
							<Title type='modal-title'>Оберіть спортивну секцію</Title>
							<div className='flex flex-col gap-[14px] items-center'>
								<Title type='modal-title'>Футбол</Title>
								<Image
									className=''
									src="/svg/iconFootballLight.svg"
									alt="icon football"
									width={70}
									height={70}
								/>
								<div>
									<p className='text-center text-lg font-semibold text-button-swipe-card'>Тренер:</p>
									<p className='text-center'>Дерипапа Олексій Володимирович</p>
								</div>
								<p>Тел.:
									<Link href="tel:+38 (050) 534-76-70" className='text-link-tel'> (050) 534-76-70</Link>
								</p>
							</div>
							<div className='w-full h-[1px] bg-block-grey'></div>
							<div className='flex flex-col gap-[14px] items-center'>
								<Title type='modal-title'>Біатлон</Title>
								<Image
									className=''
									src="/svg/iconBiatlonLight.svg"
									alt="icon football"
									width={70}
									height={70}
								/>
								<div>
									<p className='text-center text-lg font-semibold text-button-swipe-card'>Тренер:</p>
									<p className='text-center'>Дерипапа Олексій Володимирович</p>
								</div>
								<p>Тел.:
									<Link href="tel:+38 (050) 534-76-70" className='text-link-tel'> (050) 534-76-70</Link>
								</p>
							</div>
							<div className='w-full h-[1px] bg-block-grey'></div>
							<div className='flex flex-col gap-[14px] items-center'>
								<Title type='modal-title'>Лижні гонки</Title>
								<Image
									className=''
									src="/svg/iconSkyRacingLight.svg"
									alt="icon football"
									width={86}
									height={70}
								/>
								<div>
									<p className='text-center text-lg font-semibold text-button-swipe-card'>Тренер:</p>
									<p className='text-center'>Дерипапа Олексій Володимирович</p>
								</div>
								<p>Тел.:
									<Link href="tel:+38 (050) 534-76-70" className='text-link-tel'> (050) 534-76-70</Link>
								</p>
							</div>
							<div className='w-full h-[1px] bg-block-grey'></div>
							<div className='flex flex-col gap-[14px] items-center'>
								<Title type='modal-title'>Гірські лижі</Title>
								<Image
									className=''
									src="/svg/iconAlpineSkiingLight.svg"
									alt="icon football"
									width={70}
									height={70}
								/>
								<div>
									<p className='text-center text-lg font-semibold text-button-swipe-card'>Тренер:</p>
									<p className='text-center'>Дерипапа Олексій Володимирович</p>
								</div>
								<p>Тел.:
									<Link href="tel:+38 (050) 534-76-70" className='text-link-tel'> (050) 534-76-70</Link>
								</p>
							</div>
						</div>
					</div>
				</div>}
		</div>
	);


};

export default ModalEnroll;