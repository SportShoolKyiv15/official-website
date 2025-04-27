"use client";

import { LoadScript } from "@react-google-maps/api";

type Props = {
	children: React.ReactNode;
};

const GoogleMapsProvider = ({ children }: Props) => {
	return (
		<LoadScript
			googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
			libraries={["marker"]}
		>
			{children}
		</LoadScript>
	);
};

export default GoogleMapsProvider;