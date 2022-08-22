// Модуль обработки и отправки формы
// Документация: https://www.youtube.com/watch?v=PqTrhfjLQBI

//<ИНСТРУКЦИЯ>==================================================
// Класс _req подключается к полям, которые необходимо проверять
// Класс _email подключается к полю ввода email-адреса (также к такому полю необходимо подключить _req)

//<ПРИМЕР>======================================================
/* <input class="form__input _req"> */
/* <input class="form__input _req"> */
/* <input class="form__input _req _email"> */

//<СТИЛИ>=======================================================
// .form__input._error {
// 	box-shadow: 0 0 15px red;
// }
//<SCSS>
// &._error {
// 	box-shadow: 0 0 15px red;
// }

"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		// formData.append('image', formImage.files[0]);

		// Функция отравки формы
		if (error === 0) {
			// Добавляем _sending если нет ошибок валидации формы
			form.classList.add('_sending');
			// Указываем ссылку где находится скрипт обработки на сервере
			let response = await fetch('https://cl31010.tmweb.ru/medical/sendmail/sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				// отправка превью изображения
				// formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

	}

	// Валидация формы
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	//Получаем инпут file в переменную
	//для превью картинки
	const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	//для превью картинки
	//#formPreview - ID для блока div с превью картинки
	const formPreview = document.getElementById('formPreview'); 

	//Слушаем изменения в инпуте file
	if (formImage) {
		formImage.addEventListener('change', () => {
			uploadFile(formImage.files[0]);
		});
	}

	function uploadFile(file) {
		// провераяем тип файла
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены только изображения.');
			formImage.value = '';
			return;
		}
		// проверим размер файла (<2 Мб)
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быть менее 2 МБ.');
			return;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	}
});