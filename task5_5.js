/* Задание 5. Дан произвольный массив. 
Необходимо вывести количество элементов массива,
затем перебрать его и вывести в консоль каждый элемент массива. */

const lostNums = [3, 13, 37 ,45, 86, 99];
let arrLength = lostNums.length;
 console.log("Число элементов:", arrLength);		

for (let i = 0; i < lostNums.length; i++) {
    console.log(lostNums[i])
}
