// Модуль "Меню бургер" + плавная прокрутка к нужному разделу (навигация по странице)
// Документация: https://www.youtube.com/watch?v=zs1r8yafTE8

//<ИНСТРУКЦИЯ>==================================================
// Дата-атрибудь data-goto подключается к ссылкам, при клике на которые происходит пропкрутка до нужной секции
// Класс до прокручиваемой секции должен совпадать со значением дата-атрибута

//<ПРИМЕР>======================================================
/* <li><a data-goto=".page__section_1" href="#" class="menu__link">Раздел №1</a></li>
/* <section class="page__section page__section_1"> */

// Проверяем на каком устройстве открыта наша страница
"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

// Если страница открыта на мобильном устройстве присваиваем тегу body класс _touch
if (isMobile.any()) {
	document.body.classList.add('_touch');

	// Ищем все "стрелочки" на мобильных устройствах
	let menuArrows = document.querySelectorAll('.menu__arrow');
	// Если они существуют, то создаем цикл и пробегаемся по ним
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			// Для каждой "стрелочке" вешаем событие click
			menuArrow.addEventListener("click", function (e) {
				// вешаем класс _active родителю нажатой стрелочки (li class="_active")
				// по этому классу показывается подменю и анимируется стрелочка
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
// Если это не мобильное устройство, присваиваем тегу body класс _pc
} else {
	document.body.classList.add('_pc');
}

// Меню бургер
// переменная для меню-бургера
const iconMenu = document.querySelector('.menu__icon');
// переменная для тела секции навигации 
const menuBody = document.querySelector('.menu__body');
// добавляем событие клик на меню-бургер
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		// для запрета скролла страницы при открытом меню-бургер
		document.body.classList.toggle('_lock');
		// для анимировании иконки меню-бургера
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Плавная прокрутка при клике (навигация по странице)

// ищем все ссылки c классом .menu__link и дата-атрибутом data-goto
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// если такие ссылки есть
if (menuLinks.length > 0) {
	// вешаем событие клик на каждую ссылку
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	// Функция onMenuLinkClick
	function onMenuLinkClick(e) {
		// получаем целевой объект на который мы кликаем (сама ссылка)
		const menuLink = e.target;
		// проверяем заполнен ли этот дата-атрибут и существет ли объект на который ссылается дата-атрибут
		// например: data-goto=".page__section_1", где page__section_1 может не существовать
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			// получаем в константу этот объект (page__section_1)
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			// считаем положение этого объекта с учетом высоты шапки
			// gotoBlock.getBoundingClientRect().top - получаем расположение нужного элемента в пикселях сверху (top)
			// pageYOffset - прибавляем количество прокрученных пикселей по вертикали
			// document.querySelector('header').offsetHeight - отнимаем высоту шапки (если шапка фиксированна, в противном случае начало блока будет скрываться под шапкой)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			// закрытие меню-бургера при клике на элемент секции навигации
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			// Прокрутка до блока 
			// подключаемся к окну браузера и с помощью функции scrollTo прокручиваем до блока
			window.scrollTo({
				// прокручиваем до подсчитанной секции
				top: gotoBlockValue,
				// плавность прокрутки
				behavior: "smooth"
			});
			// отключаем работу ссылки по умолчанию (переход по ссылке), чтобы прокрутка работала
			e.preventDefault();
		}
	}
}