async function fetchdata() {
    const url = "https://dummyjson.com/products";

    try {
        const response = await fetch(url);
        const result = await response.json();
        placedata(result);
    } catch (error) {
        console.error(error);
    }
}
fetchdata();
const container = document.querySelector(".container");
const card = document.querySelector("template").content;

// console.log(card);
function placedata(Products) {
    Products.products.forEach((product) => {
        const node = card.cloneNode(true);
        node.querySelector("img").src = product.thumbnail;
        node.querySelector(".title").innerHTML = product.title;
        node.querySelector(".price span").innerHTML = product.price;
        container.appendChild(node);
        console.log(node);
    });
}
