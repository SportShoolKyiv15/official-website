import type { Metadata } from "next";
import { ReactNode, FC } from 'react';
import ToastProvider from "@/components/providers/TostifyProvider";
import "./globals.css";

import { NavProvider } from "@/contexts/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
				<ToastProvider>
					<NavProvider>
						<div className="flex flex-col w-full min-h-screen">
							<Header />
							<main className="flex-1">{children}</main>
							<Footer />
						</div>
					</NavProvider>
				</ToastProvider>
			</body>
		</html>
	);
};

export default RootLayout;


