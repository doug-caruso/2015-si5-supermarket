var ProductService = {
    
    produtos: [],

     getProducts: function (abc) {
        ProductService.loadProducts();
        return ProductService.produtos;
    },
    
    addProduct: function (produto) {
        ProductService.produtos.push(produto);
        ProductService.saveProducts();
    },

    saveProducts: function () {
        var strPro = JSON.stringify(ProductService.produtos);
        window.localStorage.setItem('list-products',strPro);
    },

    loadProducts: function () {
        var jsonStr = window.localStorage.getItem('list-products');
        if(jsonStr) {
            ShoppingService.produtos = JSON.parse(jsonStr);
        }  
    }
};