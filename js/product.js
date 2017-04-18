$(document).ready(function(){
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




	