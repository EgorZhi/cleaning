
// Lightgallery v1.0
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Для корректной работы плагина необходимо наличие изображаний
// элементов управления (стрелочки, иконка закрытия и т.п.)
// в папке с изображениями проекта (img/icons)

// Подключение базового набора функционала
// import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
//import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'

// Базовые стили
// import '@scss/libs/gallery/lightgallery.scss';
// import styles

// Стили дополнений
// import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
// function isWebp() {
// 	// Проверка поддержки webp
// 	function testWebP(callback) {
// 		let webP = new Image();
// 		webP.onload = webP.onerror = function () {
// 			callback(webP.height == 2);
// 		};
// 		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// 	}
// 	// Добавление класса _webp или _no-webp для HTML
// 	testWebP(function (support) {
// 		let className = support === true ? 'webp' : 'no-webp';
// 		document.documentElement.classList.add(className);
// 	});
// }

// Запуск
//=================
// Подключение по дата-атрибуту
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	let galleyItems = [];
	galleries.forEach(gallery => {
		galleyItems.push({
			gallery,
			galleryClass: lightGallery(gallery, {
				// plugins: [lgZoom, lgThumbnail],
				licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
				speed: 500,
			})
		})
	});
}

//=================
// Подключение по техническому классу
// let gallery = document.querySelectorAll('._gallery');
// if (gallery) {
// 	gallery_init();
// }
// function gallery_init() {
// 	for (let index = 0; index < gallery.length; index++) {
// 		const el = gallery[index];
// 		lightGallery(el, {
// 			counter: false,
// 			selector: 'a',
// 			download: false
// 		});
// 	}
// }