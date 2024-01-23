"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function calculateNetSalary(salary) {
    const netSalary = salary - salary * 0.13;
    console.log("Размер заработной платы за вычетом налогов равен " + netSalary.toFixed(2));
}

const userInput = prompt("Введите число:");

if (!isNaN(userInput)) {
    calculateNetSalary(parseFloat(userInput));
} else {
    console.log("Значение задано неверно");
}
