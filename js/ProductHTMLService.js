var ProductHTMLService = {

    displayAddedProduct: function(item) {
        var tb = document.createElement('tbody');
        var tr = document.createElement('tr');
        if(item.estoque<=10)
            tr.className = "danger";
        var td = tr.appendChild(document.createElement('td'));
        td.innerHTML = item.codigo;    
        var td1 = tr.appendChild(document.createElement('td'));
        td1.innerHTML = item.nome;
        var td2 = tr.appendChild(document.createElement('td'));
        td2.innerHTML = item.marca;
        var td3 = tr.appendChild(document.createElement('td'));
        td3.innerHTML = item.departamento;
        var td4 = tr.appendChild(document.createElement('td'));
        td4.innerHTML = item.preco;  
        var td5 = tr.appendChild(document.createElement('td'));
        td5.innerHTML = item.estoque;
        var td6 = tr.appendChild(document.createElement('td'));
        //var img;
        //img = item.imagem.replace("C:\\fakepath\\", "C:\\Users\\doug-\\OneDrive\\Documentos\\WEB\\supermarket\\img\\");
        td6.innerHTML = ('<img src=\"'+item.imagem+'\"height="30" width="30" />');
        document.getElementById("tbl-products").appendChild(tr);
    },

    displayProducts10: function(item) {
        if(item.estoque<=10){
            var tb = document.createElement('tbody');
            var tr = document.createElement('tr');
            var td = tr.appendChild(document.createElement('td'));
            td.innerHTML = item.codigo;    
            var td1 = tr.appendChild(document.createElement('td'));
            td1.innerHTML = item.nome;
            var td2 = tr.appendChild(document.createElement('td'));
            td2.innerHTML = item.marca;
            var td3 = tr.appendChild(document.createElement('td'));
            td3.innerHTML = item.departamento;
            var td4 = tr.appendChild(document.createElement('td'));
            td4.innerHTML = item.preco;  
            var td5 = tr.appendChild(document.createElement('td'));
            td5.innerHTML = item.estoque;
            var td6 = tr.appendChild(document.createElement('td'));
            var img;
           // img = item.imagem.replace("C:\\fakepath\\", "C:\\Users\\doug-\\OneDrive\\Documentos\\WEB\\supermarket\\img\\");
            td6.innerHTML = ('<img src=\"'+item.imagem+'\"height="30" width="30" />');
            document.getElementById("tbl-products-10").appendChild(tr);
        }
    },

        displayProducts100: function(item) {
        if(item.preco>=100){
            var tb = document.createElement('tbody');
            var tr = document.createElement('tr');
            var td = tr.appendChild(document.createElement('td'));
            td.innerHTML = item.codigo;    
            var td1 = tr.appendChild(document.createElement('td'));
            td1.innerHTML = item.nome;
            var td2 = tr.appendChild(document.createElement('td'));
            td2.innerHTML = item.marca;
            var td3 = tr.appendChild(document.createElement('td'));
            td3.innerHTML = item.departamento;
            var td4 = tr.appendChild(document.createElement('td'));
            td4.innerHTML = item.preco;  
            var td5 = tr.appendChild(document.createElement('td'));
            td5.innerHTML = item.estoque;
            var td6 = tr.appendChild(document.createElement('td'));
            var img;
            //img = item.imagem.replace("C:\\fakepath\\", "C:\\Users\\doug-\\OneDrive\\Documentos\\WEB\\supermarket\\img\\");
            td6.innerHTML = ('<img src=\"'+item.imagem+'\"height="30" width="30" />');
            document.getElementById("tbl-products-10").appendChild(tr);
        }    
    }
}