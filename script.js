let totalPrice = 0;


const cartTotalElement = document.getElementById('total-price');


const productListElements = document.getElementsByTagName('li');


for (let i = 0; i < productListElements.length; i++) {
    const productElement = productListElements[i];
    const addButton = productElement.querySelector('.add-to-cart');
    const priceElement = productElement.querySelector('span:nth-child(2)');

    addButton.addEventListener('click', () => {
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        totalPrice += price;
        cartTotalElement.textContent = totalPrice.toFixed(2);
    });
}


document.getElementById('clear-cart').addEventListener('click', () => {
    totalPrice = 0;
    cartTotalElement.textContent = '0.00';
});
