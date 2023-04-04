/* Задание 8. Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». 
Используйте шаблонные строки. */
let car = new Map([
    ["BMW", "green"],
    ["Citroen", "blue"],
    ["Porsche", "red"]

]);

    for (let marka of car.keys()) {
        let colors = car.get(marka)
                console.log(`Марка — ${marka}, Цвет — ${colors}`);

}
