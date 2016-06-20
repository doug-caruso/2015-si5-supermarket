var ProductController = {
    init: function() {
        ProductController.displayProdutos();
    },

    displayProdutos: function () {
        var produtos = ProductService.getProducts();
        produtos.forEach(ProductHTMLService.displayAddedProduct);
    }
};

ProductController.init();