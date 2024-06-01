document.addEventListener("DOMContentLoaded", function() {
    const heroButton = document.querySelector('.hero button');

    heroButton.addEventListener('click', function() {
        alert('Shop Now button clicked!');
    });

    const productButtons = document.querySelectorAll('.product-card button');

    productButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});
