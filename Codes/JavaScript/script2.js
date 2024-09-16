document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById('cartIcon');
    const cartItems = document.getElementById('cartItems');
    const addToCartButtons = document.querySelectorAll('.product button');
    const cartItemCount = document.getElementById('cartItemCount');

    // Array to store cart items
    let itemsInCart = [];

    // Function to display cart items
    function displayCartItems() {
        cartItems.innerHTML = '';
        let grandTotal = 0; // Initialize grand total
        itemsInCart.forEach(item => {
            const itemElement = document.createElement('p');
            const subtotal = parseFloat(item.price.slice(3)) * item.quantity; // Calculate subtotal
            grandTotal += subtotal; // Add subtotal to grand total
            itemElement.innerHTML = `<span style="font-size: 15px; font-weight: bold;">${item.quantity} x ${item.name} - ${item.price} (Total: रु ${subtotal.toFixed(2)})</span>`; // Display subtotal along with item details
            cartItems.appendChild(itemElement);
        });
        // Display grand total
        const totalElement = document.createElement('p');
        totalElement.innerHTML = `<span style="font-size: 18px; font-weight: bold;"><br><hr><br>Grand Total: रु ${grandTotal.toFixed(2)}</span>`;
        cartItems.appendChild(totalElement);
        // Update cart item count
        cartItemCount.textContent = itemsInCart.reduce((total, item) => total + item.quantity, 0);
        // Show or hide cart item count badge based on item count
        if (itemsInCart.length > 0) {
            cartItemCount.style.display = 'inline-block';
        } else {
            cartItemCount.style.display = 'none';
        }
    }
    

    // Function to handle "Add to Cart" button click
    function addToCart(event) {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('.product-details p b').textContent;
        const productQuantity = parseInt(product.querySelector('input[name="quantity"]').value);

        // Check if the product is already in the cart
        const existingItemIndex = itemsInCart.findIndex(item => item.name === productName);
        if (existingItemIndex !== -1) {
            // If yes, update the quantity
            itemsInCart[existingItemIndex].quantity += productQuantity;
        } else {
            // If not, add the product to the cart
            itemsInCart.push({
                name: productName,
                price: productPrice,
                quantity: productQuantity
            });
        }

        // Display updated cart items
        displayCartItems();
    }

    // Add click event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Toggle cart items visibility on cart icon click
    cartIcon.addEventListener('click', function() {
        cartItems.style.display = cartItems.style.display === 'none' ? 'block' : 'none';
    });

    // Display initial cart items
    displayCartItems();
});


// JavaScript code to handle image slider animation
const slides = document.querySelector('.slides');
let slideIndex = 0;

function slide() {
    // Increment slide index
    slideIndex++;

    // Check if slideIndex exceeds number of slides
    if (slideIndex >= slides.children.length) {
        slideIndex = 0; // Reset slideIndex to loop back to the first slide
    }

    // Calculate translation value based on slide index
    const translationValue = `translateX(-${slideIndex * 100}%)`;

    // Apply transform to slides
    slides.style.transform = translationValue;

    // Call the slide function recursively after a delay
    setTimeout(slide, 2000); // Adjust the delay as needed 
}

// Call the slide function to start the animation
slide();
