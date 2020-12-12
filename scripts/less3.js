"use strict";

//1. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно...
console.log("***Ex 1***");

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 == 0) {
        console.log(i + " - это четное число")
    } else {
        console.log(i + " - это не четное число")
    }
}

//2. Выведите в консоль значения, указанные рядом с комментариями: 
console.log("\n***Ex 2***");

const post = {
    author: "John", //display it
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "Lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //display it
            }
        },
        {
            userId: 5, //display it
            userName: "Jane",
            text: "Lorem ipsum dolum", //display it
            rating: {
                likes: 3,
                dislikes: 1
            }
        }
    ]
};

console.log("author: " + post.author);
console.log("dislikes: " + post.comments[0].rating.dislikes);
console.log("userId : text => " + post.comments[1].userId + " : " + post.comments[1].text)

//3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%...
console.log("\n***Ex 3***");

let discount = 15;

function priceWithDiscount(discount, productPrice) {
    let price = productPrice - (productPrice / 100) * discount
    return price;
};

let products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

products.forEach(function (obj) {
    obj.price = priceWithDiscount(discount, obj.price);
});

console.log(products);

//4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:

products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    }
];
//1. Получить все tовары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
//Непонятно условие, мол только такое условие: есть ли поле photos у объекта, или + к этому поле может быть, но значения нету, и такое тоже фильтровать?
//Ибо у объекта с ид 8 нету поле photos, а у id: 5 есть, но там пустой массив
//Можно сказать, что у ид 8 нету, а у ид 5 пока что нету)))
console.log("\n***Ex 4.1***");
function filterContainPhoto(obj) {
    if ("photos" in obj && obj.photos.length != 0) {
        return true;
    } else {
        return false;
    }
}
let productsWithPhotos = products.filter(filterContainPhoto);

console.log("Products with photos: ");
console.log(productsWithPhotos);

//2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
console.log("\n***Ex 4.2***");
// Я сначала не понял как сортировать объекты, 
// понял только как сортировать елементы массива
// По этому я написал свою функцию)))

function swap(arr, i) {
    arr.push(arr[i]);
    arr.splice(i, 1);
    return arr;
};

for (let i = 0; i < productsWithPhotos.length - 1; i++) {
    if (productsWithPhotos[i].price > productsWithPhotos[i + 1].price) { // А тут не видит
        swap(productsWithPhotos, i);
        i--;
    };
};

// Потом разобрался:
products.sort((obj1, obj2) => {
    return obj1.price - obj2.price;
});

console.log(products);

//5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
//for(…){/* здесь пусто */}
console.log("\n***Ex 5***");

function withoutBody(i) {
    console.log(i);

};

for (let i = 0; i <= 9; withoutBody(i), i++) { };

// 6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
console.log("\n***Ex 6***");

function printPiramide() {
    let star = "x";

    for (let i = 0; i < 5; i++) {
        if (i == 0) {
            console.log(star[i]);
        } else {
            star += "x";
            console.log(star);
        };
    };
};

printPiramide();

