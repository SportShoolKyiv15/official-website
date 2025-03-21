"use client";

import { createContext, useState, useContext } from "react";

type NavContextType = {
	isUpdated: boolean;
	toggleUpdate: () => void;
};

const NavContext = createContext<NavContextType | null>(null);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
	const [isUpdated, setIsUpdated] = useState(false);

	const toggleUpdate = () => {
		setIsUpdated((prev) => !prev);
	}

	return (
		<NavContext.Provider value={{ isUpdated, toggleUpdate }}>
			{children}
		</NavContext.Provider>
	);
};

export const useNav = () => {
	const context = useContext(NavContext);
	if (!context) {
		throw new Error("useNav must be used within a NavProvider");
	}
	return context;
};