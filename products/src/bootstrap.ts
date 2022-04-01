import faker from 'faker';

const mount = (el: string) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    document.querySelector(el)!.innerHTML = products;
};

// Check if the app is running in development mode
// - "process.env.NODE_ENV" is set by webpack baseed on the "mode" property in your relevant webpack config
if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="products"]');
    if (isStandAlone) {
        mount('#dev-products');
    }
}

// This export is available to Container apps
export { mount };
