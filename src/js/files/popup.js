// Модуль попапов
// Документация: https://www.youtube.com/watch?v=qoO1ZNi1LyI

// получаем все объекты с классом .popup-link (по классу происходит открытие popup)
const popupLinks = document.querySelectorAll('.popup-link');
// получаем переменную body для блокировки скролла тега body при рабочем popup
const body = document.querySelector('body');
// получаем все объекты с классом .lock-padding
const lockPadding = document.querySelectorAll(".lock-padding");
// переменная для учета того, чтобы не было двойных нажатий
let unlock = true;
// переменная должна быть равна значению transition: all 0.8s ease 0s;
// Ддля корректной работой блокировки и скролла
const timeout = 800;
// проверяем существует ли объекты с классом .popup-link и проходим по массиву элементов
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		// записываем каждый такой объект в переменную
		const popupLink = popupLinks[index];
		// вешаем событие на эту переменную
		popupLink.addEventListener("click", function (e) {
			// из href убираем # для получение чистого имени <a href="#popup"></a> --> <a href="popup"></a>
			// который идентичен созданному popup <div id="popup" class="popup">
			const popupName = popupLink.getAttribute('href').replace('#', '');
			// в переменную получаем созданный popup <div id="popup" class="popup">
			const curentPopup = document.getElementById(popupName);
			// отправляем переменную в функцию popupopen, которая отвечает за отрытие popup
			popupOpen(curentPopup);
			// запрещаем перезагрузку страницы при клике на ссылку
			e.preventDefault();
		});
	}
}
// закрытие popup
// класс close-popup указывается в popup.html на закрывающей ссылке
const popupCloseIcon = document.querySelectorAll('.close-popup');
// проверяем наличие объектов с таким классом
if (popupCloseIcon.length > 0) {
	// проходим по массиву элементов
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		// вешаем событие клик
		el.addEventListener('click', function (e) {
			// поиск ближайшего родителя с классом popup для закрытия popup
			popupClose(el.closest('.popup'));
			// запрещаем перезагрузку страницы при клике на ссылку
			e.preventDefault();
		});
	}
}

// ОТКРЫТИЕ POPUP
// ПЕРЕДАЕМ ГОТОВЫЙ ОБЪЕКТ ПО ИДЕНТИФИКАТОРУ
function popupOpen(curentPopup) {
	// ПРОВЕРЯЕМ ЕСТЬ ЛИ ТАКОЙ ОБЪЕКТ И ОТКРЫТА ЛИ ПЕРЕМЕННА UNLOCK
	if (curentPopup && unlock) {
		// ПРОВЕРЯМЕМ СУЩЕСТВУЮТ ЛИ ОБЪЕКТЫ С КЛАССОМ
		const popupActive = document.querySelector('.popup.open');
		// ЕСЛИ СУЩЕСТВУЮТ ТО ЗАКРЫВАЕМ POPUP
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			// ЕСЛИ ТАКИХ ОБЪЕКТОВ НЕТ ТО БЛОКИРУЕМ ПРОКРУТКУ СТРАНИЦЫ
			bodyLock();
		}
		// ДОБАВЛЯЕМ КЛАСС OPEN ДЛЯ НАШЕГО POPUP
		curentPopup.classList.add('open');
		// ДЛЯ ОТКРЫТОГО POPUP ВЕШАЕМ СОБЫТИЕ ПРИ КЛИКЕ
		curentPopup.addEventListener("click", function (e) {
			// ЕСЛИ У НАЖАТОГО ОБЪЕКТА НЕТ КЛАССА POPUP__CONTENT ТО ЗАКРЫВАЕМ POPUP (ЗАТЕМНЕННАЯ ОБЛАСТЬ)
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

// ЗАКРЫТИЕ POPUP
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
// УБИРАЕМ ЭФФЕКТ СМЕЩЕНИЯ КОНТЕНТА (ДЕРГАНЬЕ ЭКРАНА) ПРИ ОТКРЫТИИ И ЗАКРЫТИИ POPUP
// ДОБАВЛЯЕТСЯ PADDING В КАЧЕСТВЕ КОМПЕНСАЦИИ
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	// УБИРАЕМ ПОВТОРНЫЕ НАЖАТИЯ НА КНОПКУ С POPUP
	// ДЛЯ КОРРЕКТНОЙ РАБОТЫ POPUP
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

// УБИРАЕМ ЭФФЕКТ СМЕЩЕНИЯ POPUP ПРИ ЗАКРЫТИИ (ПРИ ОКОНЧАНИИ АНИМАЦИИ)
function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

// ЗАКРЫТИЕ POPUP ПРИ НАЖАТИИ НА КЛАВИШУ ESC
document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// ФУНКЦИИ ПОЛИФИЛЫ ДЛЯ ПОДДЕРЖКИ СТАРЫХ БРАУЗЕРОВ (IE11)
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
