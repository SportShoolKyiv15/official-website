import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Title from '../Title';

type ModalProps = {
	isModalOpen: boolean;
	closeModal: () => void;
	IsVisible: boolean;
};

type FormData = {
	name: string;
	phone: string;
	message: string;
}

const FeedbackModal: React.FC<ModalProps> = ({ isModalOpen, closeModal, IsVisible }) => {
	const modalRef = useRef<HTMLDivElement | null>(null);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		phone: "",
		message: "",
	});
	// const [status, setStatus] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// setStatus("Відправка...");
		const phoneRegex = /^\+?[0-9]{10,15}$/;
		if (!phoneRegex.test(formData.phone)) {
			// setStatus("Неправильний формат телефону. Використовуйте +380...");
			return;
		}

		try {
			// const response = await fetch("/api/feedback", {
			// 	method: "POST",
			// 	headers: { "Content-Type": "application/json" },
			// 	body: JSON.stringify(formData),
			// });

			// const result = await response.json();
			// if (result.success) {
			// setStatus("Повідомлення надіслано!");
			// setFormData({ name: "", email: "", message: "" });
			// } else {
			// 	setStatus("Помилка відправки.");
			// }
		} catch (error) {
			console.error("Помилка сервера:", error);
			// setStatus("Помилка сервера.");
		}
	};

	const handleClick = (e: React.FormEvent) => {
		handleSubmit(e);
		closeModal();
	}

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
		<div className={`${isModalOpen && 'modal-overlay relative'}`} onClick={handleOverlayClick}>
			{isModalOpen &&
				<div ref={modalRef} className={`absolute top-[107px] md:top-[192px] lg:top-[255px] right-[50%] translate-x-[50%] text-white bg-block-dark overflow: hidden; ${IsVisible && `modal-visible`}  ${!IsVisible && `modal-hidden`} rounded-sm`}>
					<div className='w-[343px] md:w-[532px] px-2 py-[28px] md:px-10 md:py-10 z-100 relative'>
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
						<div className='flex flex-col gap-6 md:gap-10'>
							<Title type='modal-title'>Форма зв&apos;язку</Title>
							<form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md">
								<div className='w-full mb-[22px] md:mb-[26px]'>
									<label htmlFor="name" className="block text-sm text-light mb-[6px]">Ім&apos;я<span className='text-button-swipe-card'>*</span></label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Ваше ім'я"
										required
										className="border w-full p-3 rounded"
									/>
								</div>
								<div className='w-full mb-[22px] md:mb-[26px]'>
									<label htmlFor="phone" className="block text-sm text-light mb-[6px]">Телефон<span className='text-button-swipe-card'>*</span></label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										placeholder="+380..."
										required
										className="border w-full p-3 rounded"
									/>
								</div>
								<div className='w-full mb-[40px]'>
									<label htmlFor="message" className="block text-sm text-light mb-[6px]">Коментар<span className='text-button-swipe-card'>*</span></label>
									<textarea
										name="message"
										id="message"
										value={formData.message}
										onChange={handleChange}
										placeholder="Ваше повідомлення"
										required
										rows={9}
										className="border w-full p-3 rounded"
									/>
								</div>
								<button
									type="submit"
									onClick={handleClick}
									className='button w-[327px] md:w-[297px] lg:w-[297px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 hover:scale-101'>
									<span>Відправити</span>
								</button>
								{/* {status && <p className="mt-2 text-center">{status}</p>} */}
							</form>
						</div>
					</div>
				</div>}
		</div>
	);


};

export default FeedbackModal;