var home_shop = document.getElementsByClassName('ctg-cnt-elem-menu2')[0];
var accordion_li = document.querySelectorAll('.accordion ul li');
var shopdesigntype = document.querySelectorAll('.shop-right-top-right-2 li');
console.log(shopdesigntype);
var product = document.querySelectorAll('.shop-right .products .product');
var products1 = document.querySelector('.shop-right .products1');
var products2 = document.querySelector('.shop-right .products2');

document.querySelector('.ctg-cnt-elem2').addEventListener('mouseenter', ()=>{
    // if(document.querySelector('.ctg-cnt-elem-menu2-menu-elem1').style=' background-color: white;color: black;') return;
    document.querySelector('.ctg-cnt-elem-menu2-contents1').style='display: flex;';
    document.querySelector('.ctg-cnt-elem-menu2-menu-elem1').style=' background-color: white;color: black;';
    
})


function home_shop_mouseover(a){
    for (let index = 1; index <= 4; index++) {
        
        if(index==a){
            continue;
        }
        document.querySelector('.ctg-cnt-elem-menu2-menu-elem'+index).style=' background-color: #83b735;color: white;';
        document.querySelector('.ctg-cnt-elem-menu2-contents'+index).style='display: none;';
    }
    document.querySelector('.ctg-cnt-elem-menu2-menu-elem'+a).style=' background-color: white;color: black;';
    document.querySelector('.ctg-cnt-elem-menu2-contents'+a).style='display: flex;';
   
}

function home_shop_mouseout(){
    for (let index = 1; index <= 4; index++) {
        document.querySelector('.ctg-cnt-elem-menu2-contents'+index).style='display: none;';
        document.querySelector('.ctg-cnt-elem-menu2-menu-elem'+index).style=' background-color: #83b735;color: white;';
    }
   
    
}
function accordion(t){
    for (let index = 0; index <= 4; index++) {
        accordion_li[index].querySelector('.accordion-desc').style = "height: 0px;visibility: hidden;";
    }
    accordion_li[t].querySelector('.accordion-desc').style = "height: 100px;visibility: visible;";
}
function shopdesign(t){
    
    for(let i = 0; i<=2; i++){
        shopdesigntype[i].querySelector('i').style = 'color: #bbb;';
        if(i==t){
            shopdesigntype[i].querySelector('i').style = 'color: #333;';
            if(t==0){
                for(let j = 0;j<product.length;j++){
                    product[j].style = 'width: 80%';
                    products1.style = 'opacity:0;visibility:hidden;display:none';
                    products2.style = 'opacity:1;visibility:visible;display:block';          
                }
            }
            else if(t==1){
                for(let j = 0;j<product.length;j++){
                    product[j].style = 'width: 47.8%';
                    products1.style = 'opacity:1;visibility:visible;display:flex';
                    products2.style = 'opacity:0;visibility:hidden;display:none';          
                }
            }
            else if(t==2){
                for(var j = 0;j<product.length;j++){
                    product[j].style = 'width: 30%';
                    products1.style = 'opacity:1;visibility:visible;display:flex';
                    products2.style = 'opacity:0;visibility:hidden;display:none';
                }
            }
            continue;
        }
       
    }
    
}