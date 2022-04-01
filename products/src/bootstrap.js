"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
let products = '';
for (let i = 0; i < 3; i++) {
    const name = faker_1.default.commerce.productName();
    products += `<div>${name}</div>`;
}
document.querySelector('#dev-products').innerHTML = products;
//# sourceMappingURL=bootstrap.js.map