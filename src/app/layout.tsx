import type { Metadata } from "next";
import { ReactNode, FC } from 'react';
import "./globals.css";

import { NavProvider } from "@/components/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
	title: "КДЮСШ 15",
	description: "Офіційний сайт Комплексна дитяча юнацька спортивна школа №15",
};

type Props = {
	children: ReactNode
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<NavProvider>
					<Header />
					<Nav />
					{children}
					<Footer />
				</NavProvider>
			</body>
		</html>
	);
};

export default RootLayout;


