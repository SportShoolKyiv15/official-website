import type { Metadata } from "next";
import { ReactNode, FC } from 'react';
import ToastProvider from "@/components/providers/TostifyProvider";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

import { ScrollProvider } from '@/contexts/ScrollContext';
import Nav from "@/components/Nav";
import "./globals.css";
import { SportProvider } from "@/contexts/SportContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/buttons/BackToTopButton";

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
					<GoogleMapsProvider>
						<ScrollProvider>
							<SportProvider>
								<div className="flex flex-col w-full min-h-screen">
									<div className="z-20">
										<Header />
									</div>
									<div className="sticky top-0 z-10">
										<Nav />
									</div>
									<main className="flex-1">{children}</main>
									<Footer />
									<BackToTopButton />
								</div>
							</SportProvider>
						</ScrollProvider>
					</GoogleMapsProvider>
				</ToastProvider>
			</body>
		</html>
	);
};

export default RootLayout;


