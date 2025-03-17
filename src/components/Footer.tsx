import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ContactButton from './buttons/ContactButton';

const Footer: React.FC = () => {
	return (
		<footer className='bg-black flex justify-center'>
			<div className='container pt-5 md:pt-10 pb-2 md:pb-[17px]'>
				<div className='md:flex md:items-center md:mb-[7px] justify-between'>
					<div className='flex justify-between items-center mb-[58px] md:mb-0'>
						<div className='flex items-start'>
							<Image
								className="mr-[6px]"
								src="/svg/iconLocation.svg"
								alt="icon location"
								width={24}
								height={24}
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
						<Link href={'/'} className='md:hidden'>
							<Image
								src="/svg/logoFooter.svg"
								alt="logo"
								width={107}
								height={93}
							/>
						</Link>
					</div>
					<Link href={'/'} className='hidden md:block'>
						<Image
							src="/svg/logoFooter.svg"
							alt="logo"
							width={97}
							height={83}
						/>
					</Link>
					<div className='flex md:block justify-between mb-8'>
						<div className='flex flex-col gap-2 font-display text-sm'>
							<p>Залишились питання?</p>
							<ContactButton />
						</div>
						<div className='flex md:justify-end gap-[10px]'>
							<Image
								className="md:hidden"
								src="/svg/iconInstagram.svg"
								alt="logo"
								width={32}
								height={32}
							/>
							<Image
								className="md:hidden"
								src="/svg/iconFacebook.svg"
								alt="logo"
								width={32}
								height={32}
							/>
						</div>
					</div>

				</div>
				<div className='flex md:justify-end md:mb-8 gap-[10px]'>
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
				<div className='flex flex-col items-center gap-1 text-xs'>
					<p>© 2024, Всі права захищенні</p>
					<p>Договір оферти і Політика конфіденційності</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
