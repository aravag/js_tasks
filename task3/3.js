"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function findMaxNumber(number1, number2, number3) {
    const maxNumber = Math.max(number1, number2, number3);
    console.log("Максимальное значение среди чисел " + number1 + ", " + number2 + ", " + number3 + " равно " + maxNumber + ".");
}

const inputNumber1 = parseFloat(prompt("Введите первое число:"));
const inputNumber2 = parseFloat(prompt("Введите второе число:"));
const inputNumber3 = parseFloat(prompt("Введите третье число:"));

findMaxNumber(inputNumber1, inputNumber2, inputNumber3);