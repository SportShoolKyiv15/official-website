// Name of submenu items and corresponding last part of pathname for sport pages
export const ITEMS = {
	football: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Клубні команди', 'club_teams'], ['Галерея', 'galery/foto']],
	biatlon: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'galery/foto']],
	sky_racing: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'galery/foto']],
	alpine_skiing: [['Головна', 'main'], ['Тренерський склад', 'coach_team'], ['Чемпіонати', 'championships'], ['Галерея', 'galery/foto']],
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
			['Галерея', '/football/galery/foto'],
		]
	},
	'Біатлон': {
		path: '/biatlon/main', subItems: [
			['Головна', '/biatlon/main'],
			['Тренерський склад', '/biatlon/coach_team'],
			['Чемпіонати', '/biatlon/championships'],
			['Галерея', '/biatlon/galery/foto'],
		]
	},
	'Лижні гонки': {
		path: '/sky_racing/main', subItems: [
			['Головна', '/bisky_racingatlon/main'],
			['Тренерський склад', '/sky_racing/coach_team'],
			['Чемпіонати', '/sky_racing/championships'],
			['Галерея', '/sky_racing/galery/foto'],
		]
	},
	'Гірські лижі': {
		path: '/alpine_skiing/main', subItems: [
			['Головна', '/alpine_skiing/main'],
			['Тренерський склад', '/alpine_skiing/coach_team'],
			['Чемпіонати', '/alpine_skiing/championships'],
			['Галерея', '/alpine_skiing/galery/foto'],
		]
	},
	'Платні послуги': { path: '/services', subItems: [] },
	'Контакти': { path: '/contacts', subItems: [] },
};


