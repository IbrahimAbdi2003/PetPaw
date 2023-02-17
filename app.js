var shop = [
    {
        title: 'hello',
        image: 'hello',
        price: 'ello',
    }
]
var postHTML = " "
  
 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5></span>';
    var image = '<img src="' + shop[i].image + '"/>';
    var price = '<p>$' + shop[i].price + '</p></span>';
    var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>';
    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis;
  }
  
  document.getElementById('market').innerHTML = postHTML;