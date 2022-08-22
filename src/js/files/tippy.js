// Подключение из node_modules
import tippy from 'tippy.js';
// Импортируем базовые стили из node_modules
import 'tippy.js/dist/tippy.css';
// Импортируем темы оформления из node_modules
import 'tippy.js/themes/material.css';

// Подключение cтилей из src/scss/libs
// import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
import 'tippy.js/dist/tippy.css';

// Инициализация
tippy('#myButton', {
    content: "I'm a Tippy tooltip!",
    // Подключение темы оформления
    theme: 'material',
});