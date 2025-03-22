'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { determineSportPage } from '@/helpers/determineSportPege';
import { Sports } from '@/globaltypes/types';

const GalLeryNav: React.FC = () => {
	const pathname = usePathname();
	const [isFoto, setIsFoto] = useState(true);
	const [sport, setSport] = useState<Sports>();

	useEffect(() => {
		if (pathname.includes('foto')) {
			setIsFoto(true);
		} else {
			setIsFoto(false);
		};
		setSport(determineSportPage(pathname)?.sportPathName);
	}, [pathname]);

	return (
		<nav aria-label='Навігація в галереї'>
			<ul className='flex gap-[18px] md:gap-6 justify-center w-full pt-8 md:pt-10 pb-5 md:pb-8 text-xl md:text-[22px] text-display font-bold md:font-semibold'>
				<li>
					<Link href={`/${sport}/gallery/foto`} className={`${isFoto ? 'text-active-gallery-nav' : 'line-drop-menu'}`}>Фото</Link>
				</li>
				<li>
					<Link href={`/${sport}/gallery/video`} className={`${!isFoto ? 'text-active-gallery-nav' : 'line-drop-menu'}`}>Відео</Link>
				</li>
			</ul>
		</nav>
	)
}

export default GalLeryNav;
