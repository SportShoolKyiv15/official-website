'use client';

import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ModalProps {
	isModalOpen: boolean;
	closeModal: () => void;
	IsVisible: boolean;
	url: string;
};

const FotoGaleryModal: React.FC<ModalProps> = ({ isModalOpen, closeModal, IsVisible, url }) => {
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
					<div className='w-[336px] sm:w-[343px] md:w-[532px] lg:w-[608px] p-2 md:p-3  relative'>
						<button
							onClick={closeModal}
							className="absolute right-[10px] md:right-4 lg:right-5 top-[10px] md:top-4 lg:top-5 cursor-pointer rounded-[50%] bg-button-dark z-101">
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
						<div className='w-full mx-auto'>
							<div className="w-full min-h-[250px] md:min-h-[350px]  lg:min-h-[500px] relative">
								<Image
									src={url}
									alt='Team foto'
									fill
									style={{ objectFit: "cover" }}
									sizes="100vw"
								/>
							</div>
						</div>
					</div>
				</div>}
		</div>
	);
};

export default FotoGaleryModal;