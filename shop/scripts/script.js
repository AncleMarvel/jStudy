/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           2 - сначала происходит инкрементирование, потом присваивание
d = b++; alert(d);           1 - сначала присваивание, потом инкрементирование
c = (2+ ++a); alert(c);      5 - сначала происходит инкрементирование, а потом сложение и присваивание (с прошлых операций а = 2, увеличиваем на 1 и +2, в итоге = 5)
d = (2+ b++); alert(d);      4 - инкрементирование в конце. b с прошлых операций = 2, а 2+2=4. Потом уже инкр.
alert(a);                    3 - а инкрементировалось всего 3 раза
alert(b);                    3 - b инкрементировалось всего 3 раза
Почему код даёт именно такие результаты?*/

/* 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // a = a * 2 -> 4; x = 1 + 4 -> 5;*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; 
ноль можно считать положительным числом.*/
console.log("Ex 3:")

let a = +prompt("Enter a ");
let b = +prompt("Enter b ");

console.log("a = " + a);
console.log("b = " + b);

if (a >= 0 && b >= 0) {
    console.log("a - b = " + (a - b));

} else if (a < 0 && b < 0) {
    console.log("a * b = " + (a * b));

} else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) { // Условие будет верным, если только один из операндов будет отрицательны (ну или положительным). То есть оператор & сюда не подходит, нужен XOR
    console.log("a + b = " + (a + b));
}

/*4. Реализовать основные 4 арифметические операции (+, -, /, *)
в виде функций с двумя параметрами. Т.е. например, функция
для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.*/
console.log("\nEx 4:")

a = 10;
b = 15;

function sum(a, b) {
    return a + b;
}

function dif(a, b) {
    if (a >= b) {
        return a - b;
    } else {
        return b - a;
    }
}

function div(a, b) {
    return a / b;
}

function multiple(a, b) {
    return a * b;
}

console.log("sum a and b = " + sum(a, b));
console.log("dif a and b = " + dif(a, b));
console.log("div a and b = " + div(a, b));
console.log("multiple a and b = " + multiple(a, b));


/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.  */
console.log("\nEx 5:")

let arg1 = 10;
let arg2 = 15;
let operation = prompt("Enter sum, or dif, or div, or multiple for result, and see in console");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            console.log("sum arg1 and arg2 = " + sum(arg1, arg2));
            break;
        case "dif":
            console.log("dif arg1 and arg2 = " + dif(arg1, arg2));
            break;
        case "div":
            console.log("div arg1 and arg2 = " + div(arg1, arg2));
            break;
        case "multiple":
            console.log("multiple arg1 and arg2 = " + multiple(arg1, arg2));
            break;
    }
}

mathOperation(arg1, arg2, operation);

/*6. (Это задание не является частью курса, можете его не делать, оно для тех кому мало обычных заданий,
    требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег,
которое он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.

Подсказки, что я использовал (ваш подход может отличаться):
1) В javascript нет функции, которая возвращает последнюю цифру, но зато мы можем получить последний символ из строки достаточно просто.
2) Я использовал String() для приведения к строке https://codepen.io/IgorKubikov/pen/qQmoJJ?editors=0011
3) Узнать длину строки https://codepen.io/IgorKubikov/pen/vQmRbq?editors=0011
Подробнее можно почитать здесь https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
4) Чтобы получить конкретный символ в строке я использовал это https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
5) Я также использовал switch,
а конкретно нам нужно будет одно действие
для нескольких case
(т.е. если у нас 500 рублей, 47 рублей, 99 рублей и т.д. –
    у нас для нескольких цифр на конце одно слово «рублей»).
    Это можно посмотреть здесь: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch#Methods_for_Multi-criteria_Case*/ 
console.log("\nEx 6:");

let money = +prompt("How much money do you want to credit to your account?");

function enterMoney(money) {
    alert("Your money " + money + " has been successfully credited to your account");
    return money;
}

enterMoney(money);
console.log("I made this task in 5 minutes ))))");