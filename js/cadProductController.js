var cadProductController = {
    init: function() {
        cadProductController.setForm();
        cadProductController.displayProdutos();
    },

    setForm: function () {
        var form = document.getElementById("form-prod");
        form.addEventListener("submit", cadProductController.eventSubmitHandler);
    },

    eventSubmitHandler: function () {
        event.preventDefault();
        var produto = {};
        produto.codigo = document.getElementById("codigo").value;
        produto.nome = document.getElementById("nome").value;
        produto.marca = document.getElementById("marca").value;
        produto.preco = document.getElementById("preco").value;
        produto.departamento = document.getElementById("departamento").value;
        produto.codigo = document.getElementById("nome").value;
        produto.estoque = document.getElementById("estoque").value;
        produto.imagem = document.getElementById("imagem").value;
        cadProductController.addProduto(produto);
    },

    addProduto: function (produto) {
        ProductService.addProduct(produto);
        ProductHTMLService.displayAddedProduct(produto);
    },

    displayProdutos: function () {
        var produtos = ProductService.getProducts();
        produtos.forEach(ProductHTMLService.displayAddedProduct);
    }
};

cadProductController.init();