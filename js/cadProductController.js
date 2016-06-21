var cadProductController = {
    init: function() {
        cadProductController.setForm();
        cadProductService.loadProducts();
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
        produto.estoque = document.getElementById("estoque").value;
        produto.imagem = document.getElementById("imagem").value;
        cadProductController.addProduto(produto);
        window.open("produtos.html");
    },

    addProduto: function (produto) {
        cadProductService.addProduct(produto);
    },

};

cadProductController.init();