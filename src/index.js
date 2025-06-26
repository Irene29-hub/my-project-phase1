document.addEventListener('DOMContentLoaded', fetchProducts);

function fetchProducts() {
    const apiURL = 'https://dummyjson.com/products';  
    const container = document.getElementById('productsContainer');

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        })
        .then(products => {
            container.innerHTML = '';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price:$${product.price}</p>
                `;
                container.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
