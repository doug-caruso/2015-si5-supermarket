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

function alertInnerHTML(e)
{
    console.log("ABC");
    var json = JSON.parse(localStorage['list-products']);
    console.log("ABC");
    for (i=0;i<json.length;i++){
            if (json[i].nome == this.innerHTML){
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