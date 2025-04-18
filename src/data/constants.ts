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
			['Клубні команди', '/football/club_teams'],
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

export const NEWS_ITEMS = [
	{
		title: "Стартує набір у секцію біатлону",
		bgUrl: "bg-[url('/img/newsImg1.jpg')]",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi nemo corrupti dolorum est! Architecto, quod odio? Maxime unde iure at illo rem, asperiores velit a. Assumenda soluta molestiae alias velit fugit iure rerum, a in itaque. Unde, doloribus magnam voluptatem nisi, eius, sit quaerat modi omnis iure ipsa maiores.",
		date: "02.02.2024"
	},
	{
		title: "Стартує набір у секцію лижні гонки",
		bgUrl: "bg-[url('/img/newsImg2.jpg')]",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem, temporibus soluta quas recusandae laboriosam impedit odio ea cum officiis reiciendis qui aspernatur tempore architecto obcaecati minima numquam a quis assumenda. Dignissimos nam sit quam corrupti quod ipsam rem deleniti debitis magni, delectus distinctio tempore eveniet magnam nihil hic modi obcaecati corporis culpa provident ratione alias odio inventore. Reiciendis, repellat!",
		date: "02.02.2024"
	},
	{
		title: "Стартує набір у секцію футболу",
		bgUrl: "bg-[url('/img/newsImg4.jpg')]",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius blanditiis sit, dignissimos quam nobis eveniet, quisquam excepturi autem eaque ullam nemo voluptatem nesciunt. Ut doloribus voluptatum corporis minima laboriosam.",
		date: "02.02.2024"
	},
	{
		title: "Стартує набір у секцію лижні гонки",
		bgUrl: "bg-[url('/img/newsImg1.jpg')]",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias corrupti, voluptatum quia magnam quod nisi iure est, voluptas cupiditate ratione laborum tempore veniam iste, quidem voluptates ab voluptatem architecto autem quasi accusantium eos illum? Numquam sapiente consequatur ratione nam.",
		date: "02.02.2024"
	},
	{
		title: "Стартує набір у секцію футболу",
		bgUrl: "bg-[url('/img/newsImg2.jpg')]",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque ex ab dignissimos adipisci mollitia corrupti, odio beatae totam provident ipsa possimus voluptatum rem molestiae, autem vel, sit velit sunt voluptate quisquam nemo. Eligendi iusto recusandae ipsum unde earum necessitatibus eveniet sapiente dignissimos autem, minus nostrum ut aut accusantium itaque minima veritatis voluptatum in, impedit repudiandae iure sunt temporibus saepe! Enim id quisquam modi maxime nostrum provident, quibusdam voluptatum. Error eos deleniti eaque eius ullam iusto consectetur blanditiis omnis consequatur!",
		date: "02.02.2024"
	},
	{
		title: "Стартує набір у секцію лижні гонки",
		bgUrl: "bg-[url('/img/newsImg4.jpg')]",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos.",
		date: "02.02.2024"
	}
];

export const COACH_TEAM = [
	{
		bgUrl: "bg-[url('/img/coachFoto1.png')]",
		name: "Олександр Коваленко",
		team: "Веселі бобри",
		discription: "Досвідчений футбольний тренер, який понад 10 років працює з дітьми та підлітками в дитячій спортивній школі",
		autobiography: "Закінчивши Національний університет фізичного виховання і спорту України, він здобув глибокі знання з методики викладання футболу та спортивної підготовки. За час своєї кар&apos;єри Іван виховав чимало талановитих гравців, деякі з яких продовжили футбольну кар&apos;єру на професійному рівні.\n Його підхід базується на поєднанні технічної майстерності та командної гри, що допомагає юним спортсменам розвивати як фізичні, так і лідерські якості.Петренко Олексій відомий своєю відданістю роботі та вмінням знайти підхід до кожної дитини. Він завжди створює позитивну та мотивуючу атмосферу на тренуваннях, заохочуючи дітей не тільки досягати спортивних результатів, але й розвивати дисципліну та відповідальність. Завдяки його професіоналізму та щирій любові до футболу, юні спортсмени не лише опановують гру, але й навчаються працювати в команді та долати труднощі."
	},
	{
		bgUrl: "bg-[url('/img/coachFoto2.png')]",
		name: "Федір Карпач",
		team: "Веселі бобри",
		discription: "Досвідчений футбольний тренер, який понад 20 років працює з дітьми та підлітками в дитячій спортивній школі",
		autobiography: "Закінчивши Національний університет фізичного виховання і спорту України, він здобув глибокі знання з методики викладання футболу та спортивної підготовки. За час своєї кар&apos;єри Іван виховав чимало талановитих гравців, деякі з яких продовжили футбольну кар&apos;єру на професійному рівні.\n Його підхід базується на поєднанні технічної майстерності та командної гри, що допомагає юним спортсменам розвивати як фізичні, так і лідерські якості.Петренко Олексій відомий своєю відданістю роботі та вмінням знайти підхід до кожної дитини. Він завжди створює позитивну та мотивуючу атмосферу на тренуваннях, заохочуючи дітей не тільки досягати спортивних результатів, але й розвивати дисципліну та відповідальність. Завдяки його професіоналізму та щирій любові до футболу, юні спортсмени не лише опановують гру, але й навчаються працювати в команді та долати труднощі."
	},
	{
		bgUrl: "bg-[url('/img/coachFoto3.png')]",
		name: "Володимир Івасюк",
		team: "Веселі бобри",
		discription: "Досвідчений футбольний тренер, який понад 30 років працює з дітьми та підлітками в дитячій спортивній школі",
		autobiography: "Закінчивши Національний університет фізичного виховання і спорту України, він здобув глибокі знання з методики викладання футболу та спортивної підготовки. За час своєї кар&apos;єри Іван виховав чимало талановитих гравців, деякі з яких продовжили футбольну кар&apos;єру на професійному рівні.\n Його підхід базується на поєднанні технічної майстерності та командної гри, що допомагає юним спортсменам розвивати як фізичні, так і лідерські якості.Петренко Олексій відомий своєю відданістю роботі та вмінням знайти підхід до кожної дитини. Він завжди створює позитивну та мотивуючу атмосферу на тренуваннях, заохочуючи дітей не тільки досягати спортивних результатів, але й розвивати дисципліну та відповідальність. Завдяки його професіоналізму та щирій любові до футболу, юні спортсмени не лише опановують гру, але й навчаються працювати в команді та долати труднощі."
	},
	{
		bgUrl: "bg-[url('/img/coachFoto1.png')]",
		name: "Олексій Дерипапа",
		team: "Веселі бобри", discription: "Досвідчений футбольний тренер, який понад 40 років працює з дітьми та підлітками в дитячій спортивній школі",
		autobiography: "Закінчивши Національний університет фізичного виховання і спорту України, він здобув глибокі знання з методики викладання футболу та спортивної підготовки. За час своєї кар&apos;єри Іван виховав чимало талановитих гравців, деякі з яких продовжили футбольну кар&apos;єру на професійному рівні.\n Його підхід базується на поєднанні технічної майстерності та командної гри, що допомагає юним спортсменам розвивати як фізичні, так і лідерські якості.Петренко Олексій відомий своєю відданістю роботі та вмінням знайти підхід до кожної дитини. Він завжди створює позитивну та мотивуючу атмосферу на тренуваннях, заохочуючи дітей не тільки досягати спортивних результатів, але й розвивати дисципліну та відповідальність. Завдяки його професіоналізму та щирій любові до футболу, юні спортсмени не лише опановують гру, але й навчаються працювати в команді та долати труднощі."
	},
	{
		bgUrl: "bg-[url('/img/coachFoto2.png')]",
		name: "Федір Карпач",
		team: "Веселі бобри",
		discription: "Досвідчений футбольний тренер, який понад 50 років працює з дітьми та підлітками в дитячій спортивній школі",
		autobiography: "Закінчивши Національний університет фізичного виховання і спорту України, він здобув глибокі знання з методики викладання футболу та спортивної підготовки. За час своєї кар&apos;єри Іван виховав чимало талановитих гравців, деякі з яких продовжили футбольну кар&apos;єру на професійному рівні.\n Його підхід базується на поєднанні технічної майстерності та командної гри, що допомагає юним спортсменам розвивати як фізичні, так і лідерські якості.Петренко Олексій відомий своєю відданістю роботі та вмінням знайти підхід до кожної дитини. Він завжди створює позитивну та мотивуючу атмосферу на тренуваннях, заохочуючи дітей не тільки досягати спортивних результатів, але й розвивати дисципліну та відповідальність. Завдяки його професіоналізму та щирій любові до футболу, юні спортсмени не лише опановують гру, але й навчаються працювати в команді та долати труднощі."
	},
	{
		bgUrl: "bg-[url('/img/coachFoto3.png')]",
		name: "Руслан Канавський",
		team: "Веселі тітьки",
		discription: "Досвідчений футбольний тренер, який понад 60 років працює з дітьми та підлітками в дитячій спортивній школі",
		autobiography: "Закінчивши Національний університет фізичного виховання і спорту України, він здобув глибокі знання з методики викладання футболу та спортивної підготовки. За час своєї кар&apos;єри Іван виховав чимало талановитих гравців, деякі з яких продовжили футбольну кар&apos;єру на професійному рівні.\n Його підхід базується на поєднанні технічної майстерності та командної гри, що допомагає юним спортсменам розвивати як фізичні, так і лідерські якості.Петренко Олексій відомий своєю відданістю роботі та вмінням знайти підхід до кожної дитини. Він завжди створює позитивну та мотивуючу атмосферу на тренуваннях, заохочуючи дітей не тільки досягати спортивних результатів, але й розвивати дисципліну та відповідальність. Завдяки його професіоналізму та щирій любові до футболу, юні спортсмени не лише опановують гру, але й навчаються працювати в команді та долати труднощі."
	},
]


