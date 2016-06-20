var ProductHTMLService = {

displayAddedItem: function(item) {
        var dt = HTMLService.createDT(item.nome);
        var dd = HTMLService.createDD(item.preco);
        HTMLService.addToDefinitionList(dt);
        HTMLService.addToDefinitionList(dd);
        HTMLService.displayTotal(item.price);
    },
    
    createDT: function(itemName) {
        var dt = document.createElement('dt');
        dt.innerHTML = itemName;
        return dt;
    },
    
    createDD: function(itemPrice) {
        var dd = document.createElement('dd');
        dd.innerHTML = itemPrice;
        return dd;
    },
    
    addToDefinitionList: function (item) {
        var dl = document.getElementById('list-products');
        dl.appendChild(item);
    }
}