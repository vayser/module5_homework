/* Задание 6. Дан массив. 
Проверить, одинаковые ли элементы в массиве
и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
Проверить, все ли элементы в массиве одинаковые. */

const  arr = [1, 1, 1];
let check;
for (let i = 0; i < arr.length; i++){
  if (arr[i] == arr[0]) {
    check = true;
    console.log('Все элементы одинаковые');
    }
    else {
      check = false;
      // console.log(check);
      console.log('Элементы разные');
    }
}

console.log(check)

// Если все элементы массива одинаковые, выводится то что в if и check,
// а если элементы разные, то выводится то что в else и check, но перед всем этим выводится и то что в if,
// а сделать правильно не получается, чтобы выводилось только то что надо.
