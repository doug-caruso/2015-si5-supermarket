var ProductService = {
    
    produtos: [],

    getProducts: function () {
        ProductService.loadProducts();
        return ProductService.produtos;
    },
    
    loadProducts: function () {
        var jsonStr = window.localStorage.getItem('list-products');
        if(jsonStr) {
            ProductService.produtos = JSON.parse(jsonStr);
        }  
    }
}