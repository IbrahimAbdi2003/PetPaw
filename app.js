var shop = [
    {
        title: '',
        image: '',
        price: '',
    }
]
var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
for (var i=0; i < shop.length ; i++){
    var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i] + '"/'
    var price = '<p> $' + .price + '</p></span>'
    var description = '<div class=""><p>'+ .description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis
}
document.getElementById('market').innerHTML = postHTML