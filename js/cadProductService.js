var cadProductService = {
    
    produtos: [],

    getProducts: function () {
        cadProductService.loadProducts();
        return cadProductService.produtos;
    },
    
    addProduct: function (produto) {
        cadProductService.produtos.push(produto);
        cadProductService.saveProducts();
    },

    saveProducts: function () {
        var strPro = JSON.stringify(cadProductService.produtos);
        window.localStorage.setItem('list-products',strPro);
    },

    loadProducts: function () {
        var jsonStr = window.localStorage.getItem('list-products');
        if(jsonStr) {
            cadProductService.produtos = JSON.parse(jsonStr);
        }  
    }
}