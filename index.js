'use strict';

// TASK 1
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(a) {
  return function (b) {
    return function (c) {
      return console.log(a + b + c);
    };
  };
}

func(5)(12)(3)();

// TASK 2
// Пусть функция в замыкании хранит число 10.
// Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

function decr(n) {
  return function () {
    return console.log(--n);
  };
}

let res = decr(10);
res();
res();
res();

// TASK 3
// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

function decr(n) {
  return function () {
    --n;
    return n >= 0 ? console.log(n) : console.log('over');
  };
}

let res = decr(2);
res();
res();
res();

// TASK 4
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

let object = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

function findPrim(obj) {
  for (let k in obj) {
    typeof obj[k] != 'object' ? console.log(obj[k]) : findPrim(obj[k]);
  }
}

findPrim(object);

// TASK 5
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.

let object = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

function sumOfPrim(obj) {
  let sum = 0;
  for (let k in obj) {
    typeof obj[k] != 'object' ? (sum += obj[k]) : (sum += sumOfPrim(obj[k]));
  }
  return sum;
}

console.log(sumOfPrim(object));

// TASK 6
// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'

let array = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function arrStr(arr) {
  let sum = '';
  for (let i of arr) {
    typeof i != 'object' ? (sum += i) : (sum += arrStr(i));
  }
  return sum;
}

console.log(arrStr(array));

// TASK 7
// Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание)

function retExp() {
  let n = 0;
  return function () {
    return console.log((++n) ** 2);
  };
}

let res = retExp();
res();
res();
res();

// TASK 8
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
// - внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
// - если введенная строка совпадает с паролем и false – если не совпадает.
// - Пример выполнения функции:
//  ```javascript
//  let checkPassword = makePassword("somePassword"); //задаем пороль
//  checkPassword("password"); // возвращает false
//  checkPassword("somePassword");
//  ```

function makePassword(pass) {
  return function (check) {
    return check == pass ? true : false;
  };
}

let checkPassword = makePassword('qwerty123');
console.log(checkPassword('qwerty'));
console.log(checkPassword('qwerty123'));

// TASK 9
// Напишите функцию на JavaScript, чтобы получить целые числа в диапазоне (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(a, b) {
  let res = [];
  for (let i = a; i < b - 1; i++) {
    res.push(i + 1);
  }
  return res;
}

console.log(range(2, 9));
