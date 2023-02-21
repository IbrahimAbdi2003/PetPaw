var shop = [
    {
        title: 'Goldendoodle',
        image: './photos/Gold-dood.webp',
        price: '499.99',
    },
    {
        title: 'Budgerigar',
        image: './photos/Par_Par.jpg',
        price: '139.99',
    },
    {
        title: 'Syrian Hamster',
        image: './photos/syrian_ham.avif',
        price: '19.99',
    },
    {
        title: 'Mickey Mouse Platy',
        image: './photos/red_micky.webp',
        price: '499.99',
    },
    {
        title: 'Scottish fold',
        image: './photos/scott_cat.jpg',
        price: '499.99',
    },
    {
        title: 'Abyssinian cat',
        image: './photos/east_boi.webp',
        price: '499.99',
    },
    {
        title: 'Bearded Dragon',
        image: './photos/black_beard.avif',
        price: '499.99',
    },
    {
        title: 'Red Factor Canary',
        image: './photos/red_factor.webp',
        price: '499.99',
    },
    {
        title: 'Panther Chameleon',
        image: './photos/pan_cham.jpg',
        price: '499.99',
    },
    {
        title: 'Cockatoo',
        image: './photos/rio_rio.webp',
        price: '499.99',
    },
    {
        title: 'Bulldog',
        image: './photos/Belle_Bull.jpeg',
        price: '499.99',
    },
    {
        title: 'Dog Food',
        image: './photos/who_me.webp',
        price: '499.99',
    },
    {
        title: 'Dry Cat Food',
        image: './photos/meow_mix.webp',
        price: '499.99',
    },
    {
        title: 'Kitty Litter',
        image: './photos/fresh_step.jpg',
        price: '499.99',
    },
    {
        title: 'Fish Tank',
        image: './photos/fish_tank.jpg',
        price: '499.99',
    },
    {
        title: 'Bird Cage',
        image: './photos/bird_cage.jpg',
        price: '499.99',
    },
    {
        title: 'Hamster Bedding',
        image: './photos/ham_bed.jpg',
        price: '499.99',
    },
    {
        title: 'Reptail cage',
        image: './photos/rep_cage.jpg',
        price: '499.99',
    },
]
var postHTML = " ";
  
 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  

for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product col-lg-4"><span><h5>' + shop[i].title + '</h5></span>';
    var image = '<img class="card-img-top shop-img" src="' + shop[i].image + '"/>';
    var price = '<div style="display: flex; flex-direction: column; class="text-center"><span class="price text-center">$' + shop[i].price + '</span>';
    var description = '<button type="button" class="btn btn-warning">add to cart</button></div></div>';
    var concatThis = heading + image + price + description;
    postHTML += concatThis;
  }
  
  document.getElementById('market').innerHTML = postHTML;