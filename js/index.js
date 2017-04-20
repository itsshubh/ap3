var total=0;
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
        var sizeTag = $('<div class="size hidden"></div>').html(size);
        var priceTag = $('<div class="price hidden"></div>').html(price);
        var soldTag = $('<div class="sold-by hidden"></div>').html(sold_by);
        var quantityTag = $('<div class="quantity hidden"></div>').html(quantity);
        var genderTag = $('<div class="gender  hidden"></div>').html(gender);
        var itemCtgTag = $('<div class="item-ctg hidden"></div>').html(item_category);
        var imageTag = $('<img class="product-img" width="200px" height="200px">').attr("src",image);
        var brandTag = $('<div class="brand"></div>').html(brand);
        var descriptionTag = $('<div class="description hidden"></div>').html(description);
        var cartIcon = $('<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTldp8foyR-5_H1uUxZVj541kaf-trCx8oXiloDWctSLoYnzs82" height = "20px" width = "20px">');
        
        var productContainer = $('<div class="product-container col-md-3 col-md-offset-1 col-xs-8 col-xs-offset-2"></div>').append(imageTag, productNameTag, brandTag, priceTag, descriptionTag, quantityTag, sizeTag, soldTag, cartIcon);
        $('.container').append(productContainer);

        $(cartIcon).click(function(){
                var pn = $($(this).parent().find(".product-name")).text();
                var p = $($(this).parent().find(".price")).text();
                var td1 = $('<td></td>').text(pn);
                var td2 = $('<td></td>').html("<input type ='text' id='quantityc' value='1'>");
                var td3 = $('<td></td>').text(p);
                var td4 = $('<td class="total1"></td>').text(p);
                var tableRow = $('<tr></tr>').append(td1, td2, td3, td4);
                $('.table-heading').after(tableRow);
        });
        $('#quantityc').on('keyup',function(){
            var p1 = $($(this).parent().parent().find('.price')).html();
            var qty1 = $('this').value;
            total = p1*qty1;
            $('.total1').append(total);
        })
        

        $(imageTag).click(function(){
            var productName = $($(this).parent().find(".product-name")).html();
            var size = $($(this).parent().find('.size')).html();
            var price = $($(this).parent().find('.price')).html();
            var sold = $($(this).parent().find('.sold-by')).html();
            var quantity = $($(this).parent().find('.quantity')).html();
            var itemCtg = $($(this).parent().find('.item-ctg')).html();
            var imageSrc = $($(this).parent().find('img')).attr("src");
            var brand = $($(this).parent().find('.brand')).html();
            var description = $($(this).parent().find('.description')).html();
            console.log(productName, size, price, sold, quantity, itemCtg, imageSrc, brand, description, price);
            localStorage.setItem("productName", productName);
            localStorage.setItem("size", size);
            localStorage.setItem("price", price);
            localStorage.setItem("sold-by", sold);
            localStorage.setItem("quantity", quantity);
            localStorage.setItem("item-category", itemCtg);
            localStorage.setItem("image", imageSrc);
            localStorage.setItem("brand", brand);
            localStorage.setItem("description", description);
            window.location.href = "product-page.html";
        });

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

        getProductList(0);
     
        $('.pagination a').click(function(){
                var pageNumber = parseInt($(this).text());
                getProductList(pageNumber - 1);
        });


        $('.search-btn').click(function (argument) {
        var searchQuery = $('.search-box').val();
        $.ajax({
            url: "http://acadprojects.com/py/fabricKart/filter/items",
            type: "POST",
            beforeSend: function (arg) {
                arg.setRequestHeader("content-type", "application/json");
            },
            data: JSON.stringify({
                "page":0,
                "filters":[
                {
                    "name":"brand",
                    "value":[searchQuery]
                }
                ]
        }),
        success: function (response) {
            fillProductList(response);
        }
        });
    });


        $('.search-btn').click(function (argument) {
        var searchQuery = $('.search-box').val();
        $.ajax({
            url: "http://acadprojects.com/py/fabricKart/filter/items",
            type: "POST",
            beforeSend: function (arg) {
                arg.setRequestHeader("content-type", "application/json");
            },
            data: JSON.stringify({
                "page":0,
                "filters":[
                {
                    "name":"item_category",
                    "value":[searchQuery]
                }
                ]
        }),
        success: function (response) {
            fillProductList(response);
        }
        });
    });

        $('.search-btn').click(function (argument) {
        var searchQuery = $('.search-box').val();
        $.ajax({
            url: "http://acadprojects.com/py/fabricKart/filter/items",
            type: "POST",
            beforeSend: function (arg) {
                arg.setRequestHeader("content-type", "application/json");
            },
            data: JSON.stringify({
                "page":0,
                "filters":[
                {
                    "name":"item_name",
                    "value":[searchQuery]
                }
                ]
        }),
        success: function (response) {
            fillProductList(response);
        }
        });
    });

});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}