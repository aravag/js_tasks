"use strict";

/*
Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

let name = 'Vagan';
let admin = name; // Но лучше не использовать имя переменной "name", чтобы избежать конфликта с глобальными объектами
console.log(admin);