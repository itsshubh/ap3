function fillProductList(response){
     $('.container').empty();
        console.log(response);
        var data = response["data"];
        data.forEach(function(product,index){
        var id = product["id"];
        var productName = product["item_name"];
        var size = product["size"];
        var price = product["price"];
        var sold_by = product["sold_by"];
        var quantity = product["quantity"];
        var gender = product["gender"];
        var item_category = product["item_category"];
        var image = product["image"];
        var brand = product["brand"];
        var description = product["description"]


        var productNameTag = $('<div class="product-name"></div>').html(productName);
        var sizeTag = $('<div class="size"></div>').html(size);
        var priceTag = $('<div class="price"></div>').html(price);
        var soldTag = $('<div class="sold-by"></div>').html(sold_by);
        var quantityTag = $('<div class="quantity"></div>').html(quantity);
        var genderTag = $('<div class="gender"></div>').html(gender);
        var itemCtgTag = $('<div class="item-ctg"></div>').html(item_category);
        var imageTag = $('<img class="product-img" width="200px" height="200px">').attr("src",image);
        var brandTag = $('<div class="brand"></div>').html(brand);
        var descriptionTag = $('<div class="description hidden"></div>').html(description);
        var cartIcon = $('<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTldp8foyR-5_H1uUxZVj541kaf-trCx8oXiloDWctSLoYnzs82" height = "20px" width = "20px">');
        
        var productContainer = $('<div class="product-container col-md-3 col-md-offset-1 col-xs-8 col-xs-offset-2"></div>').append(imageTag, productNameTag, brandTag, priceTag, descriptionTag, quantityTag, sizeTag, soldTag, cartIcon);
        $('.container').append(productContainer);

});
}

function getProductList(pageNumber){
           $.ajax({
                url:"http://acadprojects.com/py/fabricKart/sort/items",
                type:'GET',
                data:{
                    "sort_by": "relevance",
                    "page": pageNumber
                },
                success: function(response){
                    fillProductList(response);                               
                }
        });
}

$(document).ready(function(){
	
      $('.myntra-logo').click(function(){
            getProductList(0);
     
        $('.pagination a').click(function(){
                var pageNumber = parseInt($(this).text());
                getProductList(pageNumber - 1);
        });
      });


      var productName = localStorage.getItem("productName");
      var size = localStorage.getItem("size");
	var price = localStorage.getItem("price");
      var sold = localStorage.getItem("sold-by");
      var quantity = localStorage.getItem("quantity");
      var itemCtg = localStorage.getItem("item-category");
      var imageSrc = localStorage.getItem("image");
	var brand = localStorage.getItem("brand");
      var description = localStorage.getItem("description");
	

	$('.product-name').text(productName);
      $('.size').text(size);
	$('.price').text(price);
      $('.sold-by').text(sold);
      $('.quantity').text(quantity);
      $('.item-ctg').text(itemCtg);
      $('.product-img img').attr("src",imageSrc);
	$('.brand').text(brand);
      $('.description').text(description);
	


});




	