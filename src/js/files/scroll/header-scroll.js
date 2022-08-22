// Модуль добавления классов к шапке при прокрутке страницы
// Документация:

/*
Функционал позволяет добавлять класс к тегу header с классом header 
при прокрутке страницы вниз, а также другой класс при остановке прокрутки.Таким образом,
можно добиться эффекта когда при самом скролле вниз шапка не видна, но стоит остановить 
скролл, как шапка плавно появляется вверху страницы(становится фиксированной).
При обратной прокрутке вверх шапка так же остается видна.

Класс _header-scroll добавляется к шапке при скролле вниз (через указанное кол-во пикселей).
Класс _header-show добавляется при остановке скролла, отвечает за появление шапки

HTML
К тегу header, добавляем HTML-атрибут data-scroll, в значении атрибута 
указываем через какое кол-во прокрученных вниз пикселей нам необходимо добавить 
класс к header (обычно по высоте шапки, по умолчанию 1px).

Далее к тегу header, добавляем еще один HTML-атрибут data-scroll-show. 
Как только пользователь остановит прокрутку к тегу header, через определенное время, 
добавится еще один технический класс _header-show. Этот класс исчезает только в моменте 
прокрутке вниз. При прокрутке вверх класс не исчезает.

Время задержки добавления класса _header-show можно менять. 
Для это следует указать значение атрибута data-scroll-show в миллисекундах 
(по умолчанию 500)
*/

let addWindowScrollEvent = false;
//====================================================================================================================================================================================================================================================================================================
// Работа с шапкой при скроле
export function headerScroll() {
	addWindowScrollEvent = true;
	const header = document.querySelector('header.header');
	const headerShow = header.hasAttribute('data-scroll-show');
	const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
	let scrollDirection = 0;
	let timer;
	document.addEventListener("scroll", function (e) {
		const scrollTop = window.scrollY;
		clearTimeout(timer);
		if (scrollTop >= startPoint) {
			!header.classList.contains('_header-scroll') ? header.classList.add('_header-scroll') : null;
			if (headerShow) {
				if (scrollTop > scrollDirection) {
					// downscroll code
					header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
				} else {
					// upscroll code
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}
				timer = setTimeout(() => {
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}, headerShowTimer);
			}
		} else {
			header.classList.contains('_header-scroll') ? header.classList.remove('_header-scroll') : null;
			if (headerShow) {
				header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
			}
		}
		scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
	});
}