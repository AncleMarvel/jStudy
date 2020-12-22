"use strict";
const feauteredItems = [
    { id: 1, itemName: 'MANGO PEOPE T-SHIRT', price: 150 },
    { id: 2, itemName: 'MANGO PEOPE T-SHIRT', price: 50 },
    { id: 3, itemName: 'MANGO PEOPE T-SHIRT', price: 99 },
    { id: 4, itemName: 'MANGO PEOPE T-SHIRT', price: 22 },
    { id: 5, itemName: 'MANGO PEOPE T-SHIRT', price: 300 },
    { id: 6, itemName: 'MANGO PEOPE T-SHIRT', price: 499 },
    { id: 7, itemName: 'MANGO PEOPE T-SHIRT', price: 876 },
    { id: 8, itemName: 'MANGO PEOPE T-SHIRT', price: 299 }
];

const renderGoodsItem = (item) => {
    return `<article class="featuredItem">
                <div class="featuredImg">
                    <div class="featuredBuy">
                        <button><img src="assets/addToCart.png" alt="addToCart">Add to Cart</button>
                    </div>
                    <img src="assets/featuredItem${item.id}.jpg" alt="featuredItem" class="featuredProduct">
                </div>
                <h3 class="itemName">${item.itemName}</h3>
                <span class="itemPrice">&#36; ${item.price}</span>
            </article>`;
};

// Зачем использовать значения по умолчанию, в данном случае?
const renderGoodsList = (list) => {
    let feauteredItems = list.map(item => renderGoodsItem(item));
    // document.querySelector('.goods-list').innerHTML = goodsList; //передаём сразу массив, сепаратор - ",", вот у нас и возникают запятые
    feauteredItems.forEach(item => {
        document.querySelector('.featuredItems').insertAdjacentHTML("beforeend", item);
    });
}

renderGoodsList(feauteredItems);