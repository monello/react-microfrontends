"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
var products = '';
for (var i = 0; i < 3; i++) {
    var name_1 = faker_1["default"].commerce.productName();
    products += "<div>".concat(name_1, "</div>");
}
console.log(products);
