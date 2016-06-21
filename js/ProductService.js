var ProductService = {
    
    produtos: [],

    produtosFiltrados: [],

    getProducts: function () {
        ProductService.loadProducts();
        return ProductService.produtos;
    },
    
    filtrarProdutos: function (filtro) {
        ProductService.produtosFiltrados = [];
        ProductService.loadProducts();
        ProductService.produtos.forEach(function(element) {
            if(element.departamento == filtro){
                ProductService.produtosFiltrados.push(element);    
            }
        }, this);
        return ProductService.produtosFiltrados;
    },

    loadProducts: function () {
        var jsonStr = window.localStorage.getItem('list-products');
        if(jsonStr) {
            ProductService.produtos = JSON.parse(jsonStr);
        }  
    }
}