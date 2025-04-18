"use client";

import { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type Props = {
	sport: 'football' | 'sky';
};

const MyGoogleMap: FC<Props> = ({ sport }) => {

	const containerStyle = {
		width: "100%",
		height: "100%",
	};

	const destination = { lat: 50.4501, lng: 30.5234 };

	if (sport === 'football') {
		destination.lat = 50.381320102022265;
		destination.lng = 30.451163440177055;
	}

	if (sport === 'sky') {
		destination.lat = 50.369191583286934;
		destination.lng = 30.518782869012675;
	}

	const handleMarkerClick = () => {
		const url = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}&origin=My+Location`;
		window.open(url, "_blank"); // Open Google Maps in a new tab
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}>
			<GoogleMap mapContainerStyle={containerStyle} center={destination} zoom={14}>
				<Marker position={destination} onClick={handleMarkerClick} />
			</GoogleMap>
		</LoadScript>
	);
}

export default MyGoogleMap;
