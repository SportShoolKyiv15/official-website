import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
// import Link from 'next/link';

// import Title from '../Title';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	IsVisible: boolean;
	bgUrl: string;
	title: string;
	text: string;
	date: string;
};

const NewsModal: React.FC<ModalProps> = ({ isModalOpen, closeModal, IsVisible, bgUrl, title, text, date }) => {
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
		<div className={`${isModalOpen && 'modal-overlay relative z-10'}`} onClick={handleOverlayClick}>
			{isModalOpen &&
				<div ref={modalRef} className={`absolute top-[107px] md:top-[192px] lg:top-[255px] right-[50%] translate-x-[50%] text-white bg-block-dark overflow: hidden; ${IsVisible && `modal-visible`}  ${!IsVisible && `modal-hidden`} rounded-sm`}>
					<div className='w-[336px] sm:w-[343px] md:w-[532px] lg:w-[608px] px-4 py-12 md:py-14 lg:py-16 relative'>
						<button
							onClick={closeModal}
							className="burger-menu absolute right-[10px] md:right-4 lg:right-5 top-[10px] md:top-4 lg:top-5 cursor-pointer z-101">
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
						<div className='w-full mx-auto mb-4 relative'>
							<div className='w-full aspect-3/2'>
								<div className="absolute inset-0  bg-lightgray"></div>
								<div className={`absolute inset-0 ${bgUrl} bg-cover bg-center bg-no-repeat`}></div>
								{/* <div className="absolute inset-0 news-bg-gradient"></div> */}
							</div>
						</div>
						<div>
							<p className="w-full mb-2 text-center text-base font-display font-semibold">{title}</p>
							<p className="mb-4 text-sm leading-[150%]">{text}</p>
							<div className="flex justify-between">
								<p className="text-sm font-display">{date}</p>
							</div>
						</div>
					</div>
				</div>}
		</div>
	);
};

export default NewsModal;
