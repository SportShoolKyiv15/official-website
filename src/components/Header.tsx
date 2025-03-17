import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header className='flex justify-center bg-header text-white'>
			<div className='container flex justify-between items-center pt-[6px] md:pt-[11px] pb-[7px] md:pb-[11px]'>
				<Link href={'/'} className='flex items-center'>
					<Image src='/svg/logoHeader.svg' alt='Logo' width={60} height={51} className='md:hidden mr-[5px]' />
					<Image src='/svg/logoHeader.svg' alt='Logo' width={82} height={70} className='hidden md:block mr-[10px]' />
					<p className='md:hidden text-lg font-ermilov font-bold leading-[110%]'>КДЮСШ</p>
					<p className='hidden md:block md:w-[285px] text-lg font-ermilov font-bold leading-[110%]'>Комплексна дитяча юнацька спортивна школа 15</p>
				</Link>
				<button className='md:self-start'>
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
			</div>
		</header>
	)
}

export default Header;
