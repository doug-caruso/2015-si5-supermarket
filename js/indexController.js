var IndexController = {
    init: function() {
        IndexController.displayProdutos();
    },

    displayProdutos: function () {
        var produtos = ProductService.getProducts();
        produtos.forEach(IndexHTMLService.displayProducts);
    }
};

IndexController.init();