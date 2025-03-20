export type Sports = "football" | "biatlon" | "sky_racing" | "alpine_skiing" | undefined;

export type SportAndPageName = {
	partPathName: "football",
	pageName: "Футбол"
} | {
	partPathName: "biatlon",
	pageName: "Біатлон"
} | {
	partPathName: "sky_racing",
	pageName: "Лижні гонки"
} | {
	partPathName: "alpine_skiing",
	pageName: "Гірські лижі"
} | undefined;
