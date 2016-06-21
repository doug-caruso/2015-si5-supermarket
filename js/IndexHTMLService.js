var IndexHTMLService = {

    displayProducts: function(item) {
        var div = document.createElement('div');
        div.className = "col-md-2 divproduto";
        var img;
        img = item.imagem.replace("C:\\fakepath\\", "C:\\Users\\suporte01\\Documents\\web\\tr\\TRABALHO\\img\\");
        div.innerHTML = ('<img src=\"'+img+'\"height="100" width="100" class="img_produto" />');
        var p = document.createElement('p');
        p.innerHTML = item.nome;
        div.appendChild(p);
        var p2 = document.createElement('p');
        p2.innerHTML = "R$"+item.preco+"/un";
        p2.className = "preco";
        div.appendChild(p2);
        document.getElementById("list-all-products").appendChild(div);
    }
}