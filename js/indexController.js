var IndexController = {
    init: function() {
        IndexController.displayProdutos();
    },

    displayProdutos: function () {
        var produtos = ProductService.getProducts();
        document.getElementById('list-all-products').innerHTML="";
        produtos.forEach(IndexHTMLService.displayProducts);
    }
};

IndexController.init();

function filtrarProdutos(filtro) {
    var produtos = ProductService.filtrarProdutos(filtro);
    document.getElementById('list-all-products').innerHTML="";
    produtos.forEach(IndexHTMLService.displayProducts);
}