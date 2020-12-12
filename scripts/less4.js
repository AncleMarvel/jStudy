"use strict";

/*
***EX 1***
(это задание делайте по желанию) 
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)

Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

console.log("***Ex 1***");
let num = prompt("Enter num from 0 to 999");

/*
***ВОПРОС***
Мне кажется - это далеко не изящная функция, 
типа что есть придётся передать число [-999999999999, 999999999999]?
Придётся писать оч много if
*/

function numToObj(num) {
    let obj = {
        units: 0,
        tens: 0,
        hudreds: 0
    }

    let numInt = +num;

    if (numInt < 0 || numInt > 999 || !(Number.isInteger(numInt))) {
        console.log("You must enter integer num from 0 to 999");
        obj = {};
        return obj;
    }

    if (+num < 100) {
        if (+num < 10) {
            obj.units = +num[0];
        } else {
            obj.units = +num[1];
            obj.tens = +num[0];
        }
    } else {
        obj.units = +num[2];
        obj.tens = +num[1];
        obj.hudreds = +num[0];
    }

    return obj;
};

console.log(numToObj(num));

/*
***EX 1.1*** 
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
конструктор Product, который принимает параметры name и price,
сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену
в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать
отдельный объект-прототип (как объект transport в уроке).
*/
console.log("\n***Ex 1.1***");

function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}

/* 
Сначала я делал вот так, и не мог понять, почему я должен
передавать в метод объект, как параметр, ведь это больше похоже на
обычные функции, и решил, что - ЭТО просто JS. 

типОбъекта.названиеМетод = функция {}
ProductEs5.make25PercentDiscount = function (obj, discount = 25) {
    let price = obj.price;
    let newPrice = price - (price / 100) * discount;
    obj.price = newPrice;
}

let productEs5 = new ProductEs5("T-shirt", 200);
ProductEs5.make25PercentDiscount(productEs5);

Но когда столкнулся с вопросом наследования методов в 1.2б, и полез в подсказки,
то увидел, что методы надо добавлять в прототип, и пошел переписывать код)))
*/

ProductEs5.prototype.make25PercentDiscount = function () {
    let discount = 25;
    this.price = this.price - (this.price / 100) * discount;
}

let productEs5 = new ProductEs5("T-shirt", 200);
console.log(`productEs5.price without discount = ${productEs5.price}`);

productEs5.make25PercentDiscount();
console.log(`productEs5.price with discount = ${productEs5.price}`);

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        let discount = 25;
        this.price = this.price - (this.price / 100) * discount;
    }
}

let productEs6 = new ProductEs6("Dress", 500);
console.log(`\nproductEs6.price without discount = ${productEs6.price}`);

productEs6.make25PercentDiscount();
console.log(`productEs6.price with discount = ${productEs6.price}`);

/*
***EX 1.2 (a)***
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока)
Kонструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать
текст и записывать его в свойство text объекта.
*/
console.log("\n***Ex 1.2 (a)***");

function PostEs5(author, text) {
    this.author = author;
    this.text = text;
    this.date = new Date();
}

PostEs5.prototype.edit = function (text) {
    this.text = text;
}

let postEs5 = new PostEs5("Nikki", "Hi, bro");

console.log(`Text before: ${postEs5.text}`);

postEs5.edit("Changed text");

console.log(`Text after: ${postEs5.text}`);

class PostEs6 {
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.date = new Date();
    }

    edit(text) {
        this.text = text;
    }
}

let postEs6 = new PostEs6("Trikky", "By, dude");

console.log(`\nText before: ${postEs6.text}`);

postEs6.edit("Changed text Es6");

console.log(`Text after: ${postEs6.text}`);


/*
***EX 1.2 (6)***
Конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. 
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
который будет назначать свойству highlighted значение true.
*/
console.log("\n***Ex 1.2 (б)***");

function AttachedPostEs5(author, text) {
    PostEs5.call(this, author, text);
    this.highlighted = false;
}

AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}
/*
***ВОПРОС***
Для чего это? это пример с вашего решения
AttachedPost.prototype.constructor = AttachedPost; 
*/

let attachedPostEs5 = new AttachedPostEs5("Mark", "attchd post es5");

console.log(`\nText before: ${attachedPostEs5.text}`);

attachedPostEs5.edit("kerjgberojgbero ES555555");

console.log(`Text after: ${attachedPostEs5.text}`);


class AttachedPostEs6 extends PostEs6 {
    constructor(author, text) {
        super(author, text);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let attachedPostEs6 = new AttachedPostEs6("John", "attchd post es6");

console.log(`\nText before: ${attachedPostEs6.text}`);

attachedPostEs6.edit("regerger ES66666");

console.log(`Text after: ${attachedPostEs6.text}`);