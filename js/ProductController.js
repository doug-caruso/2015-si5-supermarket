var ProductController = {
    init: function() {
        ProductController.displayProdutos();
    },

    displayProdutos: function () {
        var produtos = ProductService.getProducts();
        produtos.forEach(ProductHTMLService.displayAddedProduct);
    },

};

ProductController.init();

function displayProductsLess10() {
    document.getElementById('tbl-products-10').innerHTML="<th>Código</th><th>Produto</th><th>Marca</th><th>Departamento</th><th>Preço</th><th>Estoque</th><th>Imagem</th>";
    var produtos = ProductService.getProducts();
    produtos.forEach(ProductHTMLService.displayProducts10);
}

function displayMoreThan100() {
    document.getElementById('tbl-products-10').innerHTML="<th>Código</th><th>Produto</th><th>Marca</th><th>Departamento</th><th>Preço</th><th>Estoque</th><th>Imagem</th>";
    var produtos = ProductService.getProducts();
    produtos.forEach(ProductHTMLService.displayProducts100);
}

function alertInnerHTML(e)
{
    var json = JSON.parse(localStorage['list-products']);
    for (i=0;i<json.length;i++){
            if (json[i].codigo == this.innerHTML){
                var r;
                r = confirm("Deseja excluir o produto "+json[i].nome+"?");
                if(r==true)
                    json.splice(i,1);
            }
    }
    localStorage['list-products'] = JSON.stringify(json);
}
var theTbl = document.getElementById('tb');
for(var i=0;i<theTbl.rows.length;i++)
{
    for(var j=0;j<theTbl.rows[i].cells.length;j++)
    {
        theTbl.rows[i].cells[j].onclick = alertInnerHTML;
    }
}