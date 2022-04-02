"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsIndex_1 = require("products/ProductsIndex");
const CartShow_1 = require("cart/CartShow");
console.log('Container!');
(0, ProductsIndex_1.mount)(document.querySelector('#container-products'));
(0, CartShow_1.mount)(document.querySelector('#container-cart'));
//# sourceMappingURL=bootstrap.js.map