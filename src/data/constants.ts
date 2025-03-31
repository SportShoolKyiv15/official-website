// Name of submenu items and corresponding last part of pathname for sport pages
export const ITEMS = {
	football: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Клубні команди', 'club_teams'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
	biatlon: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
	sky_racing: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
	alpine_skiing: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
};

export const MENU_ITEMS = {
	'Головна': {
		path: '/',
		subItems: [],
		url: '',
		form: '',
	},
	'Про нас': {
		path: '/about',
		subItems: [],
		url: '',
		form: '',
	},
	'Футбол': {
		path: '/football/main',
		subItems: [
			['Головна', '/football/main'],
			['Тренерський склад', '/football/coach_team'],
			['Клубні команди', '/football/club_team'],
			['Чемпіонати', '/football/championships'],
			['Галерея', '/football/gallery/foto'],
		],
		url: "url('/img/alpineSkiingHeroImg.jpg')",
		form: 'strart-form',
	},
	'Біатлон': {
		path: '/biatlon/main',
		subItems: [
			['Головна', '/biatlon/main'],
			['Тренерський склад', '/biatlon/coach_team'],
			['Чемпіонати', '/biatlon/championships'],
			['Галерея', '/biatlon/gallery/foto'],
		],
		url: "url('/img/biatlonHeroImg.jpg')",
		form: 'form',
	},
	'Лижні гонки': {
		path: '/sky_racing/main',
		subItems: [
			['Головна', '/bisky_racingatlon/main'],
			['Тренерський склад', '/sky_racing/coach_team'],
			['Чемпіонати', '/sky_racing/championships'],
			['Галерея', '/sky_racing/gallery/foto'],
		],
		url: "url('/img/skyRacingHeroImg.jpg')",
		form: 'form',
	},
	'Гірські лижі': {
		path: '/alpine_skiing/main', subItems: [
			['Головна', '/alpine_skiing/main'],
			['Тренерський склад', '/alpine_skiing/coach_team'],
			['Чемпіонати', '/alpine_skiing/championships'],
			['Галерея', '/alpine_skiing/gallery/foto'],
		],
		url: "url('/img/alpineSkiingHeroImg.jpg')",
		form: 'end-form',
	},
	'Платні послуги': {
		path:
			'/services',
		subItems: [],
		url: '',
		form: '',
	},
	'Контакти': {
		path: '/contacts',
		subItems: [],
		url: '',
		form: '',
	},
};


