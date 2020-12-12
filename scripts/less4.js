/*1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)*/

/*Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
console.log("***Ex 1***");
let num = prompt("Enter num from 0 to 999");

// Мне кажется - это далеко не изящная функция, типа что есть придётся передать число [-999999999999, 999999999999]?
// Придётся писать оч много if
function numToObj(num) {
    let obj = {
        units: 0,
        tens: 0,
        hudreds: 0
    }

    numInt = +num;

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

/* 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
конструктор Product, который принимает параметры name и price,
сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену
в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать
отдельный объект-прототип (как объект transport в уроке).*/
console.log("\n***Ex 1.1***");

function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}

ProductEs5.make25PercentDiscount = function (obj, discount = 25) {
    let price = obj.price;
    let newPrice = price - (price / 100) * discount;
    obj.price = newPrice;
}

let productEs5 = new ProductEs5("T-shirt", 200);
console.log("productEs5.price without discount");
console.log(productEs5.price);

ProductEs5.make25PercentDiscount(productEs5);
console.log("productEs5.price with discount");
console.log(productEs5.price);

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static make25PercentDiscount(obj, discount = 25) {
        let price = obj.price;
        let newPrice = price - (price / 100) * discount
        obj.price = newPrice;
    }
}

let productEs6 = new ProductEs6("Dress", 500);
console.log("\nproductEs6.price without discount");
console.log(productEs6.price);

ProductEs6.make25PercentDiscount(productEs6);
console.log("productEs6.price with discount");
console.log(productEs6.price);

/*Изначально хотел сделать типа такого:
this.price =  this.price - (this.price / 100) * discount;
productEs6.make25PercentDiscount;
Но, почему-то, скидка не применялась на прайс(((*/



//1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
console.log("\n***Ex 1.2***");


/*а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
2 (это задание не является частью учебной программы, делайте его по желанию). Для игры бродилка (которая есть в дополнительных видео), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку и игрок оставался на том же месте где стоял.
3 (это задание не является частью учебной программы, делайте его по желанию). На базе игры (приняв за пример), созданной в дополнительных видео, реализовать игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.*/