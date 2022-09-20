// Модуль прокрутки до блока по нажатию на меню + кнопка "Scroll To Top"

// Модуль прокрутки до блока по нажатию на меню
/*
Документация: https://proverstka.com.ua/blog/plavnaya-prokrutka-v-lyuboe-mesto-stranicy/

1. Разметка меню. Значение # в ссылке href, должно совпадать с id блока, 
к которому должна прокрутиться страница

<nav>
	<ul>
		<li><a href="#about" title="">О компании</a></li>
		<li><a href="#production" title="">Производство</a></li>
		<li><a href="#delivery" title="">Доставка</a></li>
		<li><a href="#contacts" title="">Контакты</a></li>
	</ul>
</nav>

<div id="about">Тут какой-то текст, картинки и пр.</div>
<div id="production">Тут какой-то текст, картинки и пр.</div>
<div id="delivery">Тут какой-то текст, картинки и пр.</div>
<div id="contacts">Тут какой-то текст, картинки и пр.</div>

2. CSS по усмотрению
3. Подключение библиотеки JQuery 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
*/

// Скрипт берет содержимое href пункта меню (elementClick), по которому щелкнули,
// затем ищет id с таким же значением(destination) и потом
// происходит перемещение страницы в точку destination
// 800 – это время в мс, за которое нужно сделать перемещение страницы.
$(document).ready(function () {
	// плавное перемещение страницы к нужному блоку
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});


// Модуль "Scroll To Top"
/*
Документация: https://monsterspost.com/ru/sozdaem-knopku-naverh-s-css-jquery/#:~:text=%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0%20%C2%AB%D0%92%D0%B2%D0%B5%D1%80%D1%85%20%D0%BA%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%83%C2%BB%20%E2%80%94,%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%20%D0%B2%D0%B0%D1%81%20%D0%BA%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%83%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B.

1. Добавляем иконку "Стрелка" <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
2. Добавляем разметку кнопки в html-файл: <a id="button"></a>
3. Стилизуем кнопку
3. Подключаем скрипт JQuery
*/

// Запускаем код внутри этой функции стоит только в том случае, если документ полностью загружен. 
jQuery(document).ready(function () {
    // появление и исчезновение кнопки
    var btn = $('#button'); 
    // Когда мы прокручиваем страницу, происходит проверка, сколько пикселей скрыто, и сравнивает их с числом. В нашем случае это количество до 300.
    // Если мы пройдем 300px, то мы добавим класс show к нашей кнопке, который заставит её появиться. Если число меньше 300, мы удаляем этот класс. 
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 800) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '800');
     });
  });
