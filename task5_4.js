/* Задание 4. Записать в переменную случайное целое число в диапазоне [0; 100].
Используйте объект Math. */


function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log( randomNumber(1, 100) );
