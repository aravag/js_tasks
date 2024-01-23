"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function cubeNumber(number) {
    return number ** 3;
}

const inputNumber = 5;
const result = cubeNumber(inputNumber);

console.log("Число " + inputNumber + " в кубе равно: " + result);