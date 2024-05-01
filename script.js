// Declare an array of products as objects with properties using const
const products = [
    { name: 'Apples(1kg)', category: 'Fruit', price: 4.25 },
    { name: 'Bananas(1kg)', category: 'Fruit', price: 1.55 },
    { name: 'Oranges(1kg)', category: 'Fruit', price: 3.58 },
    { name: 'Carrot', category: 'Vegetable', price: 0.5 },
    { name: 'Potato', category: 'Vegetable', price: 0.4 },
    { name: 'Shampoo(300ml)', category: 'Toiletries', price: 3.99 },
    { name: 'Deodarant', category: 'Toiletries', price: 4.21 },
    { name: 'Fanta', category: 'Drinks', price: 1.05 },
    { name: 'Monster', category: 'Drinks', price: 2.00 }


];

// Function to render the list of products
const renderProducts = (productList) => {
    // Use let to declare a block-scoped variable for the product list element
    let productListElement = document.getElementById('product-list');

    // Clear the current list
    productListElement.innerHTML = '';

    // Use the forEach method to iterate over the product list
    productList.forEach(product => {
        // Use template literals (ES6 feature) to create the list item text
        let listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)} (${product.category})`;
        productListElement.appendChild(listItem);
    });
};

// Function to calculate the total price of products
const calculateTotalPrice = (productList) => {
    // Use let for block-scoped variable
    let totalPrice = productList.reduce((total, product) => total + product.price, 0);

    // Update the total price display
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
};

// Event listener for filtering products by category
document.getElementById('category-filter').addEventListener('change', (event) => {
    // Use let for block-scoped variable
    let selectedCategory = event.target.value;

    // Filter products based on the selected category
    let filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // Render the filtered products and calculate total price
    renderProducts(filteredProducts);
    calculateTotalPrice(filteredProducts);
});

// Initial render of all products and calculation of total price
renderProducts(products);
calculateTotalPrice(products);
