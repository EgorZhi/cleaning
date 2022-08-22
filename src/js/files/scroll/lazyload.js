// Модуль «Ленивая подгрузка»
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML): imgl (html)

/*
Модуль «Ленивая подгрузка» позволяет подгружать изображения, 
а также содержимое тегов iframe video audio только при доскролливании к элементу. 

Подключение функционала
[HTML] Для подключения картинки с ленивой подгрузкой, в нужном месте следует вызвать 
сниппет imgl, что выведет тег <img> но вместо атрибута src будет атрибут data-src.
При выводе других тегов (iframe video audio) также следует заменить src на data-src.

Работа функционала
В момент доскроливания до объекта с атрибутом data-src либо data-srcset модуль 
подгрузит данные (переместит подключение в атрибут src/srcset), а также добавит 
к объекту класс _lazy-loaded и атрибут data-ll-status со значением loaded
*/

import LazyLoad from "vanilla-lazyload";

// Работает с объектами с класом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset]',
	class_loaded: '_lazy-loaded',
	use_native: true
});

// Обновить модуль
// lazyMedia.update();