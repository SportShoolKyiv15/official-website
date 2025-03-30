// Name of submenu items and corresponding last part of pathname for sport pages
export const ITEMS = {
	football: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Клубні команди', 'club_teams'], ['Галерея', 'gallery/foto']],
	biatlon: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
	sky_racing: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
	alpine_skiing: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'gallery/foto']],
};

export const BURGER_MENU_ITEMS = {
	'Головна': { path: '/', subItems: [] },
	'Про нас': { path: '/about', subItems: [] },
	'Футбол': {
		path: '/football/main', subItems: [
			['Головна', '/football/main'],
			['Тренерський склад', '/football/coach_team'],
			['Клубні команди', '/football/club_team'],
			['Чемпіонати', '/football/championships'],
			['Галерея', '/football/gallery/foto'],
		]
	},
	'Біатлон': {
		path: '/biatlon/main', subItems: [
			['Головна', '/biatlon/main'],
			['Тренерський склад', '/biatlon/coach_team'],
			['Чемпіонати', '/biatlon/championships'],
			['Галерея', '/biatlon/gallery/foto'],
		]
	},
	'Лижні гонки': {
		path: '/sky_racing/main', subItems: [
			['Головна', '/bisky_racingatlon/main'],
			['Тренерський склад', '/sky_racing/coach_team'],
			['Чемпіонати', '/sky_racing/championships'],
			['Галерея', '/sky_racing/gallery/foto'],
		]
	},
	'Гірські лижі': {
		path: '/alpine_skiing/main', subItems: [
			['Головна', '/alpine_skiing/main'],
			['Тренерський склад', '/alpine_skiing/coach_team'],
			['Чемпіонати', '/alpine_skiing/championships'],
			['Галерея', '/alpine_skiing/gallery/foto'],
		]
	},
	'Платні послуги': { path: '/services', subItems: [] },
	'Контакти': { path: '/contacts', subItems: [] },
};


