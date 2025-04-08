import React from 'react';
import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import axios from "axios";
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

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
	const [isDisabled, setIsDisabled] = useState(true);
	const nameRegex = useMemo(() => /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/, []);
	const phoneRegex = useMemo(() => /^\+?[0-9]{10,15}$/, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (phoneRegex.test(formData.phone) && nameRegex.test(formData.name) && formData.message) {
			setIsDisabled(false);
			return;
		} else {
			setIsDisabled(true);
		}
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
		console.log('Повідомлення відправлено')
		e.preventDefault();
		if (phoneRegex.test(formData.phone) && nameRegex.test(formData.name) && formData.message) {
			setIsDisabled(true);
			setFormData({ name: '', phone: '', message: '' });
		} else {
			setIsDisabled(false);
		};

		try {
			const response = await axios.post("/api/feedback", {
				name: formData.name,
				phone: formData.phone,
				message: formData.message
			});

			if (response.data.success) {
				toast.success(response.data.message, {
					autoClose: 3000,
					position: 'top-center',
					className: 'toast_success',
					style: {
						backgroundColor: '#0F3952',
						color: "lightgreen",
						fontSize: '24px',
						borderColor: 'green',
						marginBottom: '50%'
					}
				});
				setFormData({ name: "", phone: "", message: "" });
			};
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>;

			if (axiosError.response?.data.error) {
				toast.error(axiosError.response.status + ' | ' + axiosError.response?.data.error, {
					position: 'top-center',
					className: 'toast_error',
					style: {
						backgroundColor: '#0F3952',
						color: '#fa9c9c',
						fontSize: '24px',
						marginBottom: '50%',
					},
				});
				return;
			};
			if (axiosError.message) {
				toast.error(axiosError.response?.status + ' | ' + axiosError.message, {
					position: 'top-center',
					className: 'toast_error',
					style: {
						backgroundColor: '#0F3952',
						color: '#fa9c9c',
						fontSize: '24px',
						marginBottom: '50%',
					},
				});
			};
			return;
		}
	};

	const handleClick = () => {
		closeModal();
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

	useEffect(() => {
		if (phoneRegex.test(formData.phone) && nameRegex.test(formData.name) && formData.message) {
			setIsDisabled(false);
			return;
		} else {
			setIsDisabled(true);
		}
	}, [formData.message, formData.name, formData.phone, nameRegex, phoneRegex])

	return (
		<div className={`${isModalOpen && 'modal-overlay relative z-10'}`} onClick={handleOverlayClick}>
			{isModalOpen &&
				<div ref={modalRef} className={`absolute top-[107px] md:top-[192px] lg:top-[255px] right-[50%] translate-x-[50%] text-white bg-block-dark overflow: hidden; ${IsVisible && `modal-visible`}  ${!IsVisible && `modal-hidden`} rounded-sm`}>
					<div className='w-[343px] md:w-[532px] px-2 py-[28px] md:px-10 md:py-10 relative'>
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
								<div className='w-full mb-[22px] md:mb-[26px] relative'>
									<label htmlFor="name" className="block text-sm text-light mb-[6px]">Ім&apos;я<span className='text-button-swipe-card'>*</span></label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Ваше ім'я"
										required
										className={`w-full p-3 rounded border ${(!nameRegex.test(formData.name) && (formData.name !== '')) ? 'border-active-gallery-nav' : 'border-button-disable'}`}
									/>
									{(!nameRegex.test(formData.name) && (formData.name !== '')) && <p className='absolute right-0 -bottom-[22px] text-sm text-active-gallery-nav'>Невірний формат</p>}
								</div>
								<div className='w-full mb-[22px] md:mb-[26px] relative'>
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
									{(!phoneRegex.test(formData.phone) && (formData.phone !== '')) && <p className='absolute right-0 -bottom-[22px] text-sm text-active-gallery-nav'>Введіть номер</p>}
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
									onSubmit={handleSubmit}
									disabled={isDisabled}
									className={`flex flex-col items-center justify-center w-[327px] md:w-[297px] lg:w-[297px] h-[48px] md:h-[44px] lg:h-[48px] transform transition-transform duration-200 text-base font-display rounded-sm ${!isDisabled ? 'hover:scale-101 bg-button hover:bg-button-hover cursor-pointer active:bg-button-press' : 'bg-button-disable text-arrow'}`}>
									<span>Відправити</span>
								</button>
							</form>
						</div>
					</div>
				</div>}
		</div>
	);


};

export default FeedbackModal;