'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useNav } from '../contexts/NavContext';
import ContactButton from './buttons/ContactButton';

const Footer: React.FC = () => {
	// Reload neighbor component Nav for reset active menu item when we go to MainPage
	const { toggleUpdate } = useNav();

	return (
		<footer className='bg-black flex justify-center'>
			<div className='my-container pt-5 md:pt-10 pb-2 md:pb-[17px] lg:pb-5'>
				<div className='md:flex md:items-center md:mb-[12px] justify-between lg:mb-[19px]'>
					<div className='flex justify-between items-center mb-[58px] md:mb-0'>
						<div className='flex items-start'>
							<Image
								className="lg:hidden mr-[6px]"
								src="/svg/iconLocation.svg"
								alt="icon location"
								width={24}
								height={24}
							/>
							<Image
								className="hidden lg:block mr-[10px]"
								src="/svg/iconLocation.svg"
								alt="icon location"
								width={26}
								height={26}
							/>
							<div className='flex flex-col gap-[6px] font-display text-sm'>
								<p>
									<span className='text-base font-medium'>Київ, </span>
									Голосіївский район,
								</p>
								<p>вул. Героїв Маріуполя 7а</p>
								<p>Тел.:<span>(044) 250-10-33</span></p>
							</div>
						</div>
						<Link href={'/'} onKeyDown={toggleUpdate} className='md:hidden'>
							<Image
								src="/svg/logoFooter.svg"
								alt="logo"
								width={107}
								height={93}
							/>
						</Link>
					</div>
					<Link href={'/'} onClick={toggleUpdate}>
						<Image
							src="/svg/logoFooter.svg"
							alt="logo"
							width={97}
							height={83}
							className='hidden md:block lg:hidden'
						/>
						<Image
							src="/svg/logoFooter.svg"
							alt="logo"
							width={156}
							height={134}
							className='hidden lg:block'
						/>
					</Link>
					<div className='flex md:block justify-between lg:mt-[10px] mb-8 md:mb-0'>
						<div className='flex flex-col gap-2 lg:gap-4 lg:mb-[34px] font-display text-sm'>
							<p>Залишились питання?</p>
							<ContactButton />
						</div>
						<div className='md:hidden flex lg:flex md:justify-end gap-[10px] lg:gap-[14px]'>
							<Image
								src="/svg/iconInstagram.svg"
								alt="logo"
								width={32}
								height={32}
							/>
							<Image
								src="/svg/iconFacebook.svg"
								alt="logo"
								width={32}
								height={32}
							/>
						</div>
					</div>
				</div>
				<div className='hiddden md:flex lg:hidden md:justify-end md:mb-8 gap-[10px]'>
					<Image
						className="hidden md:block"
						src="/svg/iconInstagram.svg"
						alt="logo"
						width={28}
						height={28}
					/>
					<Image
						className="hidden md:block"
						src="/svg/iconFacebook.svg"
						alt="logo"
						width={28}
						height={28}
					/>
				</div>
				<div className='flex flex-col lg:flex-row items-center lg:justify-center gap-1 lg:gap-3 text-xs'>
					<p>© 2024, Всі права захищенні</p>
					<p>Договір оферти і Політика конфіденційності</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
