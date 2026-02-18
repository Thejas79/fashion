let allProducts = [];
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupNavigation();
});

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterAndDisplayProducts();
        });
    });
}

async function loadProducts() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error('Failed to load products');
        }
        allProducts = await response.json();
        document.getElementById('loading').style.display = 'none';
        filterAndDisplayProducts();
    } catch (error) {
        console.error('Error loading products:', error);
        document.getElementById('loading').innerHTML = 'Error loading products. Please try again later.';
    }
}

function filterAndDisplayProducts() {
    const filteredProducts = currentCategory === 'all' 
        ? allProducts 
        : allProducts.filter(product => product.category === currentCategory);
    
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image" 
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+'">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-category">${product.category}</div>
            <p class="product-description">${product.description}</p>
        </div>
    `;
    
    card.addEventListener('click', () => {
        showProductDetails(product);
    });
    
    return card;
}

function showProductDetails(product) {
    alert(`Product Details:\n\nTitle: ${product.title}\nPrice: $${product.price.toFixed(2)}\nCategory: ${product.category}\n\n${product.description}`);
}
