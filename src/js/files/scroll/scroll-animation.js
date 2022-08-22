// Модуль работы с анимацией блоков при скролле страницы
// Документация: https://www.youtube.com/watch?v=kupwmF72Plo

//<ИНСТРУКЦИЯ>
// Класс _anim-items подключается к блоку, который необходимо анимировать (к нему будет добавляться класс _active)
// Класс _anim-no-hide подключается к блоку, из которого необходимо исключить анимацию при скролле вверх,
// т.к. при скролле вверх анимация проигрывается вновь

//<CSS>========================================================================================================================================================
// Применять для блока, к которому хотим задать анимацию:
// transform: translate(0px,120%);
// opacity: 0;
// transition: all 0.8s ease 0.2s; 0.2s - задежка проигрывания анимации
//     &._active {
//         opacity: 1;
//         transform: translate(0px, 0px);
//     }

//<Технические классы>===================================================
// .content-security._active .content-security__image {
// 		transform: scale(1);
// }

//<Цикл для дочерних блоков>=============================================
// .list__item {
// 	&._active {
// 		li {
// 			@for $var from 1 to 6 {
// 				$delay: $var * 0.2;
// 				&:nth-child(#{$var}) {
// 					@if $var==1 {
// 						transition: transform 0.8s ease 0s;
// 					} @else {
// 						transition: transform 0.8s ease #{$delay + s};
// 					}
// 				}
// 			}
// 		}
// 	}
// }
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
    // Таймер начала работы анимации
	setTimeout(() => {
		animOnScroll();
    }, 200);
}
//</АНИМАЦИЯ ПРИ СКРОЛЛЕ>========================================================================================================================================================
