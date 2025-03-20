import { SportAndPageName } from "@/globaltypes/types";

// We find sport page and generate corresponding path for link and name of item submenu
export const determineSportPage = (queryString: string | undefined): SportAndPageName => {
	if (!queryString) return undefined;
	if (queryString.includes('football')) return { partPathName: "football", pageName: "Футбол" };
	if (queryString.includes('biatlon')) return { partPathName: "biatlon", pageName: "Біатлон" };
	if (queryString.includes('sky_racing')) return { partPathName: "sky_racing", pageName: "Лижні гонки" };
	if (queryString.includes('alpine_skiing')) return { partPathName: "alpine_skiing", pageName: "Гірські лижі" };
};