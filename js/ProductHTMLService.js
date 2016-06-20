var ProductHTMLService = {

displayAddedProduct: function(item) {
        var tb = document.createElement('tbody');
        var nome = item.nome;
        var tr = document.createElement('tr');
        var td = tr.appendChild(document.createElement('td'));
        td.innerHTML = nome;
        var td2 = tr.appendChild(document.createElement('td'));
        td2.innerHTML = item.preco;
        var td3 = tr.appendChild(document.createElement('td'));
        td3.innerHTML = item.estoque;        
        document.getElementById("tbl-products").appendChild(tr);
    }
}