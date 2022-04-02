"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
const faker_1 = __importDefault(require("faker"));
const mount = (el) => {
    const cartText = `You have ${faker_1.default.random.number()} items in your cart`;
    el.innerHTML = cartText;
};
exports.mount = mount;
if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="cart"]');
    if (isStandAlone) {
        mount(document.querySelector('#dev-cart'));
    }
}
//# sourceMappingURL=bootstrap.js.map