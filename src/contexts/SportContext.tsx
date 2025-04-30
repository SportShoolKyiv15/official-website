"use client";

import { createContext, useState, useContext } from "react";
import { Sports } from "@/globaltypes/types";

type SportContextType = {
	sport: Sports;
	getSport: (item: Sports) => void;
};

const SportContext = createContext<SportContextType | null>(null);

export const SportProvider = ({ children }: { children: React.ReactNode }) => {
	const [sport, setSport] = useState<Sports>(undefined);

	const getSport = (item: Sports) => {
		setSport(item);
	}

	return (
		<SportContext.Provider value={{ sport, getSport }}>
			{children}
		</SportContext.Provider>
	);
};

export const useSport = () => {
	const context = useContext(SportContext);
	if (!context) {
		throw new Error("useSport must be used within a NavProvider");
	}
	return context;
};