/* Задание 3. Дана строка.
Необходимо вывести в консоль перевёрнутый вариант.
Например, "Hello" -> "olleH". */


let h = "Helloy";
let rez = "";
	for( let i = h.length-1; i >= 0; i--){
			rez += h[i];
	}
console.log(rez);