import { SportAndPageName } from "@/globaltypes/types";

// We find sport page and generate corresponding path for link and name of item submenu
export const determineSportPage = (queryString: string | undefined): SportAndPageName => {
	if (!queryString) return undefined;
	if (queryString.includes('football')) return { sportPathName: "football", pageName: "Футбол" };
	if (queryString.includes('biatlon')) return { sportPathName: "biatlon", pageName: "Біатлон" };
	if (queryString.includes('sky_racing')) return { sportPathName: "sky_racing", pageName: "Лижні гонки" };
	if (queryString.includes('alpine_skiing')) return { sportPathName: "alpine_skiing", pageName: "Гірські лижі" };
};