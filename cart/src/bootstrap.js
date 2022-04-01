"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const cartText = `You have ${faker_1.default.random.number()} items in your cart`;
document.querySelector('#dev-cart').innerHTML = cartText;
//# sourceMappingURL=bootstrap.js.map