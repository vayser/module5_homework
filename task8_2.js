/* Задание 2. Дана переменная x, которая может принимать любое значение.
Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида:
«x — число». Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён». */


let X;
X = 4;
// X = 'gv';
// X = true;
// X = NaN;


if ((typeof(X) == 'number')&&(!isNaN(X))) {
    console.log("X is Number");
} else if (typeof(X) == 'string') {
    console.log("X is String");
} else if (typeof(X) == 'boolean') {
    console.log("X is Boolean");
} else {
    console.log("X is undefined");
}