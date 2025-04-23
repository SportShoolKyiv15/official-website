"use client";

import { createContext, useState, useContext } from "react";

type FootballContextType = {
	comand: string;
	updateComand: (name: string) => void;
};

const FootballContext = createContext<FootballContextType | null>(null);

export const FootballProvider = ({ children }: { children: React.ReactNode }) => {
	const [comand, setComand] = useState('');

	const updateComand = (name: string) => {
		setComand(name);
	}

	return (
		<FootballContext.Provider value={{ comand, updateComand }}>
			{children}
		</FootballContext.Provider>
	);
};

export const useFootballComand = () => {
	const context = useContext(FootballContext);
	if (!context) {
		throw new Error("FootballContext must be used within a FootballProvider");
	}
	return context;
};