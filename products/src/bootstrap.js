"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
const faker_1 = __importDefault(require("faker"));
const mount = (el) => {
    let products = '';
    for (let i = 0; i < 3; i++) {
        const name = faker_1.default.commerce.productName();
        products += `<div>${name}</div>`;
    }
    el.innerHTML = products;
};
exports.mount = mount;
if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="products"]');
    if (isStandAlone) {
        mount(document.querySelector('#dev-products'));
    }
}
//# sourceMappingURL=bootstrap.js.map