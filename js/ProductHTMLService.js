var ProductHTMLService = {

displayAddedProduct: function(item) {
        var tb = document.createElement('tbody');
        var tr = document.createElement('tr');
        var td = tr.appendChild(document.createElement('td'));
        td.innerHTML = item.nome;
        var td2 = tr.appendChild(document.createElement('td'));
        td2.innerHTML = item.marca;
        var td3 = tr.appendChild(document.createElement('td'));
        td3.innerHTML = item.preco;
        var td4 = tr.appendChild(document.createElement('td'));
        td4.innerHTML = item.estoque;        
        document.getElementById("tbl-products").appendChild(tr);
    }
}