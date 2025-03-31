export type Sports = "football" | "biatlon" | "sky_racing" | "alpine_skiing" | undefined;

export type SportAndPageName = {
	sportName: "football",
	pageTitle: "Футбол"
} | {
	sportName: "biatlon",
	pageTitle: "Біатлон"
} | {
	sportName: "sky_racing",
	pageTitle: "Лижні гонки"
} | {
	sportName: "alpine_skiing",
	pageTitle: "Гірські лижі"
} | undefined;

export type BurgerMenu = {
	[key: string]: {
		path: string;
		subItems: MenuItem[];
	};
};

type MenuItem = [string, string];
