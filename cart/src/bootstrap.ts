import faker from 'faker';

const mount = (el: HTMLElement) => {
    const cartText = `You have ${faker.random.number()} items in your cart`;
    el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="cart"]');
    if (isStandAlone) {
        mount(document.querySelector('#dev-cart')!);
    }
}

export { mount };
