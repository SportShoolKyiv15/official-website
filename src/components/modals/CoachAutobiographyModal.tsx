import React, { FC, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

import { FOOTBALL_COACH_TEAM } from '@/data/constants';

interface ModalProps {
	idx: number;
	isModalOpen: boolean;
	closeModal: () => void;
	IsVisible: boolean;
};

const CoachAutobiographyModal: FC<ModalProps> = ({ idx, isModalOpen, closeModal, IsVisible }) => {
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
				<div ref={modalRef} className={`absolute top-[107px] md:top-[185px] lg:top-[250px] right-[50%] translate-x-[50%] text-white bg-block-dark overflow: hidden; ${IsVisible && `modal-visible`}  ${!IsVisible && `modal-hidden`} rounded-sm`}>
					<div className='w-[343px] md:w-[638px] lg:w-[678px] relative'>
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
						<div className='flex flex-col px-2 pt-[18px] pb-[38px] md:p-[38px] lg:px-10 lg:pt10 lg:pb-[52px] text-center'>
							<h3 className='mb-5 md:mb-[18px] text-2xl md:text-[26px] text-left md:text-center font-display font-bold md:font-semibold'>{FOOTBALL_COACH_TEAM[idx].name}</h3>
							<p className='mb-[26px] text-left md:text-center leading-[150%]'>{FOOTBALL_COACH_TEAM[idx].discription}</p>
							<p className=' text-left leading-[150%]'>
								{FOOTBALL_COACH_TEAM[idx].autobiography}
							</p>
						</div>
					</div>
				</div>}
		</div>
	);
};

export default CoachAutobiographyModal;