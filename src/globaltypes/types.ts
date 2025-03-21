export type Sports = "football" | "biatlon" | "sky_racing" | "alpine_skiing" | undefined;

export type SportAndPageName = {
	sportPathName: "football",
	pageName: "Футбол"
} | {
	sportPathName: "biatlon",
	pageName: "Біатлон"
} | {
	sportPathName: "sky_racing",
	pageName: "Лижні гонки"
} | {
	sportPathName: "alpine_skiing",
	pageName: "Гірські лижі"
} | undefined;

export type BurgerMenu = {
	[key: string]: {
		path: string;
		subItems: MenuItem[];
	};
};

type MenuItem = [string, string];
// export type BurgerMenu = Map<MenuItem, MenuItem[]>;