/*
Основной файл скриптов
Служит для подключения необходимого в проекте функционала и прочих настроек

(i) Код попадает в итоговый файл, только когда вызвана функция, например spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/

// Подключение основного файла стилей
// import "../scss/style.scss";

//========================================================================================================================================================
// Подключение дополнительных скриптов
// 1-ый вариант подключения (импорт файла)
// import "./files/burger.js";

// 2-ой вариант подключения
// Импорт нужной функции из функционала и ее вызов
// import { isWebp } from "./modules/functions.js";
// isWebp();

// Импорт всех функций как объект и их дальнейший вызов из объекта
// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp()
//========================================================================================================================================================



// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import { isWebp } from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
isWebp();

/*
Модуль работы со спойлерами
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// import "./files/spollers.js";

/*
Модуль работы с табами
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// import { tabs } from "./files/tabs.js";
// tabs();

/*
Модуль "Показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// import { showMore } from "./files/showmore.js";
// showMore();

/*
Модуль работы с всплывающими окнами (popup)
Документация:
Сниппет (HTML): pl
*/
// import "./files/popup.js";

/*
Модуль "Бургер"
Документация:
Сниппет (HTML):
*/
import "./files/burger.js";



// ========================================================================================================================================================================================================================================================
// Работа с формами =======================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Валидация и отправка формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// import "./files/forms/forms-validation.js";



// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper, swiperfull
*/
// import "./files/sliders.js";



// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML): imgl (html)
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch (ФРИЛАНСЕР, ДОРАБОТАТЬ)
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './libs/watcher.js'

// Плавная навигация по странице (ФРИЛАНСЕР, ДОРАБОТАТЬ)
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
import { headerScroll } from "./files/scroll/header-scroll.js";
headerScroll();

// Функционал липкого блока (ФРИЛАНСЕР, ДОРАБОТАТЬ)
// flsScroll.stickyBlock();

// Плавная навигация по странице до нужного блока + кнопка "Scroll To Top" (МОЯ)
// Документация: https://proverstka.com.ua/blog/plavnaya-prokrutka-v-lyuboe-mesto-stranicy/
// Реализация на JQuery
import "./files/scroll/scroll-to.js";

// Анимация блоков при прокрутке страницы
// Документация: https://www.youtube.com/watch?v=kupwmF72Plo
// Сниппет(HTML): 
// import './files/scroll/scroll-animation.js';



// ========================================================================================================================================================================================================================================================
// Галерея (Lightgallery) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/lightgallery/lightgallery.min.js";
// import "./files/lightgallery/gallery.js";



// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// Сниппет(HTML): da
import "./libs/dynamic_adapt.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";



// ========================================================================================================================================================================================================================================================
// Прочее =================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
//=========================================================================================================================================================================================================================================================