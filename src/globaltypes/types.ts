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

export type ErrorType = 400 | 401 | 403 | 404 | 409;

export type FootballChampioship = {
	name: string;
	comands: {
		name: string,
		games: number,
		points: number,
		win: number,
		draw: number,
		defeat: number,
		score: string,
	}[],
};


export type SkyChampioship = {
	name: string;
	participants: {
		name: string,
		sportDiscipline: string,
		distance: number,
		result: number,
	}[],
};
