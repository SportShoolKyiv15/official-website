import { SportAndPageName } from "@/globaltypes/types";

// We find sport page and generate corresponding path for link and name of item submenu
export const determineSportPage = (queryString: string | undefined): SportAndPageName => {
	if (!queryString) return undefined;
	if (queryString.includes('football')) return { sportName: "football", pageTitle: "Футбол" };
	if (queryString.includes('biatlon')) return { sportName: "biatlon", pageTitle: "Біатлон" };
	if (queryString.includes('sky_racing')) return { sportName: "sky_racing", pageTitle: "Лижні гонки" };
	if (queryString.includes('alpine_skiing')) return { sportName: "alpine_skiing", pageTitle: "Гірські лижі" };
};