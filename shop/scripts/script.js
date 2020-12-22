"use strict";
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (item) => {
    return `<div class="goods-item">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
            </div>`;
};

// Зачем использовать значения по умолчанию, в данном случае?
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    console.log(goodsList);
    // document.querySelector('.goods-list').innerHTML = goodsList; //передаём сразу массив, сепаратор - ",", вот у нас и возникают запятые
    goodsList.forEach(element => {
        document.querySelector('.goods-list').insertAdjacentHTML("beforeend", element);
    });
}

renderGoodsList(goods);