// const THEME_BUTTON = document.querySelector("#theme-button");
// const BODY = document.querySelector("body");

// THEME_BUTTON.addEventListener('click', () => {
//     if (BODY.classList.contains("dark")) {
//         BODY.classList.remove("dark");
//         BODY.classList.add("light");
//     } else {
//         BODY.classList.remove("light");
//         BODY.classList.add("dark");
//     }
// })


import { print } from './page.js'
let products;

print();
// await fetch('http://localhost:5000/products/')
//     .then(res => res.json())
//     .then(data => products = data)
//     .then(() => console.log(products));


// async function getProducts() {
//     try {
//         let exam;
//         const response = await (await fetch('https://www.boredapi.com/api/activity')
//             .then(res => res.json())
//             .then(data => exam = data));

//         return exam;
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// products = getProducts();

// console.log(products);

const HAMBURGER = document.querySelector('.hamburger');
const SIDE_BAR = document.querySelector('#side-bar');

const toggleSideBar = () => {
    HAMBURGER.classList.toggle('hamburger--active');
    SIDE_BAR.classList.toggle('hide');
}

HAMBURGER.addEventListener('click', toggleSideBar);