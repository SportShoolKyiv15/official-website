import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header className='flex justify-center bg-header text-white'>
			<div className='container flex justify-between items-center pt-[6px] md:pt-[11px] lg:pt-[19px] pb-[7px] md:pb-[11px] lg:pb-[18px]'>
				<Link href={'/'} className='flex items-center'>
					<Image src='/svg/logoHeader.svg' alt='Logo' width={60} height={51} className='md:hidden mr-[5px]' />
					<Image src='/svg/logoHeader.svg' alt='Logo' width={82} height={70} className='hidden md:block lg:hidden mr-[10px]' />
					<Image src='/svg/logoHeader.svg' alt='Logo' width={106} height={89} className='hidden lg:block mr-[10px]' />
					<p className='md:hidden text-lg font-ermilov font-bold leading-[110%]'>КДЮСШ</p>
					<p className='hidden md:block md:w-[285px] lg:w-[377px] text-lg lg:text-xl font-ermilov font-bold leading-[110%]'>Комплексна дитяча юнацька спортивна школа 15</p>
				</Link>
				<button className='lg:hidden md:self-start'>
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
				</button>
				<nav className='hidden lg:flex gap-11  md:self-start'>
					<Link href={'/about'} className='font-ermilov font-bold'>Про нас</Link>
					<Link href={'/services'} className='font-ermilov font-bold'>Платні послуги</Link>
					<Link href={'/contacts'} className='font-ermilov font-bold'>Контакти</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header;
