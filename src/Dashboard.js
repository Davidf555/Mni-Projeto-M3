function viewProducts() {
    const bntViewProducts = document.getElementById('bnt-view-products')
    bntViewProducts.addEventListener('click', () => {
        window.location.href = 'Products.html';
    });
}
viewProducts();

