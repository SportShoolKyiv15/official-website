'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ScrollContextType = {
	hideHeader: boolean;
	atTop: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ hideHeader: false, atTop: true });

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
	const [hideHeader, setHideHeader] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [atTop, setAtTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollTop = window.scrollY;

			const isTop = currentScrollTop === 0;

			setAtTop(isTop);

			if (isTop) {
				setHideHeader(false);
			} else {
				setHideHeader(true);
			}

			setLastScrollTop(currentScrollTop);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollTop]);

	return (
		<ScrollContext.Provider value={{ hideHeader, atTop }}>
			{children}
		</ScrollContext.Provider>
	);
};

export const useScroll = () => useContext(ScrollContext);
