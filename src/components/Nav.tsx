'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav: React.FC = () => {
	const [isToggled, setIsToggled] = useState(false);
	const onSwitch = () => {
		setIsToggled(!isToggled);
	};
	return (
		<nav className='bg-nav-gradient'>
			<div className='container m-auto pt-[10px]  relative'>
				<div className='flex justify-center pb-1 gap-10'>
					{isToggled ? <button onClick={onSwitch} className='w-5 h-5 absolute top-[2px] left-4'>
						<Image
							src="/svg/double-arrow-left.svg"
							alt="icon football"
							width={39}
							height={29}
						/>
					</button> :
						<button onClick={onSwitch} className='w-5 h-5 absolute top-[2px] right-4'>
							<Image
								src="/svg/double-arrow-right.svg"
								alt="icon football"
								width={39}
								height={29}
							/>
						</button>}
					{!isToggled ?
						<>	<Link href={'/football/main'} className='flex items-center'>
							<div className='flex h-9 w-9 items-center  justify-center'>
								<Image
									className='mr-[9px]'
									src="/svg/footballIcon.svg"
									alt="icon football"
									width={27}
									height={28}
								/>
							</div>
							<p className='text-black-text font-semibold hover:text-button-hover active:text-button-hover'>Футбол</p>
						</Link>
							<Link href={'/biatlon/main'} className='flex items-center'>
								<div className='flex h-9 w-9 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/biatlonIcon.svg"
										alt="icon football"
										width={30}
										height={30}
									/>
								</div>
								<p className='text-black-text font-semibold hover:text-button-hover active:text-button-hover'>Біатлон</p>
							</Link>
						</> : <>
							<Link href={'/sky_racing/main'} className='flex items-center'>
								<div className='flex h-9 w-10 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/skyRacingIcon.svg"
										alt="icon football"
										width={39}
										height={29}
									/>
								</div>
								<p className='text-black-text font-semibold hover:text-button-hover active:text-button-hover'>Лижні гонки</p>
							</Link>
							<Link href={'/alpine_skiing/main'} className='flex items-center'>
								<div className='flex h-9 w-9 items-center  justify-center'>
									<Image
										className='mr-[9px]'
										src="/svg/alpineSkiingIcon.svg"
										alt="icon football"
										width={30}
										height={32}
									/>
								</div>
								<p className='text-black-text font-semibold hover:text-button-hover  active:text-button-hover'>Гірські лижі</p>
							</Link>
						</>}
				</div>
			</div>
		</nav>

	)
}

export default Nav;