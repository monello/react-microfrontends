"use strict";
exports.__esModule = true;
var faker = require("faker");
var products = '';
for (var i = 0; i < 3; i++) {
    var name_1 = faker.commerce.productName();
    products += "<div>".concat(name_1, "</div>");
}
console.log(products);
