const product = [
    {
        id: 0,
        image: 'images/business pics/z fold mobile',
        title: 'z Flip foldable Mobile',
        price: 120000,
    },
    {
        id: 1,
        image: 'images/business pics/airpods.jfif',
        title: 'Air pods Pro',
        price: 6000,

    },
     {
        id: 2,
        image: 'images/business pics/camera.jfif',
        title: '250D DSLR Camera',
        price: 230000,
    },
     {
        id: 3,
        image: 'images/business pics/headphones.jfif',
        title: 'Head phones',
        price: 5000,
    },

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} =item;
    return(
        `<div class='box'>
        <div class='img-box'>
            <img class='images ' src=${image}></img>
        </div>
       <div class="bottom">
           <p>${title}</p>
           <h2>ksh ${price}.00</h2>`+
           "<button onClick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
        </div>`
    )
}).join('');

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElements(a) {
    cart.splice(a, 1)
    displaycart()

}
function displaycart(a) {
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length==0){
        document.getElementById('cartItem').innerHTML ="Your cart is empty"
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else {
         document.getElementById('cartItem').innerHTML = cart.map((items)=>
         {
             var{image, title, price} = items;
             total=total+price;
             document.getElementById("total").innerHTML = "$ "+total+".00";
             return(
                 `<div class='cart-item'>
                 <div class='row-img'>
                       <img class='rowimg' src=${image}>
                 </div>
                 <p style='font-size: 12px;'>${title}</p>
                 <h2 style='font-size: 15px;'>ksh ${price}.00</h2>`+
                  "<i class='fa-solid fa-trash' onclick='delElements("+ (j++) +")'></i></div>"
             );
         }).join('');
    }

}