let im0=document.getElementById('im0');
let im1=document.getElementById('im1');
let im2=document.getElementById('im2');
let im3=document.getElementById('im3');
let im4=document.getElementById('im4');
let im5=document.getElementById('im5');
let im6=document.getElementById('im6');
let im7=document.getElementById('im7');
let im8=document.getElementById('im8');
let im9=document.getElementById('im9');
let sub=document.getElementById('sub')
let plus=document.getElementById('plus')
let num=document.getElementById('num');
let check=document.getElementById('check');
let add=document.getElementById('add');
let NumRep=document.getElementById('NumRep');
let shp=document.querySelector('#shp');
let notf=document.querySelector('.notf');
let numP=document.getElementById('numP');
let remo=document.getElementById('remo');
let checkIm=document.getElementById('checkIm');
let prev=document.getElementById('prev');
let nxt=document.getElementById('nxt');
let cls=document.getElementById('cls');
let panier=document.querySelector('#panier');
let bust=document.querySelector('#bust');
let empt=document.querySelector('#empt');
let header=document.querySelector("header");
let content=document.querySelector(".content");
let nav=document.querySelector("nav");
let menu=document.getElementById('menuu');
let fhe=document.getElementById('fhe');
let sed=document.getElementById('clls');


let num1=0;
var back={  
            img0:"./images/image-product-1.jpg",
            img1:"./images/image-product-2.jpg",
            img2:"./images/image-product-3.jpg",
            img3:"./images/image-product-4.jpg"
        }


menu.addEventListener("click",function(){
    nav.classList.toggle('vsbl')

})




// nxt.onclick=function(){
//     // for(let i=0;i<back.length;i++){
//         im0.src=back.img0
        
//     // }
// }

// for(let i=0;i<back.length;i--){
//     prev.addEventListener("click",function(){
//         im5.src=back[i]
//     })
// }
im1.onclick=function(){
    im0.src='./images/image-product-1.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im2.onclick=function(){
    im0.src='./images/image-product-2.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im3.onclick=function(){
    im0.src='./images/image-product-3.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im4.onclick=function(){
    im0.src='./images/image-product-4.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im6.onclick=function(){
    im5.src='./images/image-product-1.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im7.onclick=function(){
    im5.src='./images/image-product-2.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im8.onclick=function(){
    im5.src='./images/image-product-3.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
im9.onclick=function(){
    im5.src='./images/image-product-4.jpg';
    this.style.border="hsl(26, 100%, 55%,1) solid 2px";
    this.style.opacity="30%";
}
plus.addEventListener('click',function(){
    if(num1!=5){
        num1+=1
        
        num.innerHTML=num1
        return num
    }
})
sub.addEventListener('click',function(){
    if(num1!=0){
        num1-=1
        num.innerHTML=num1
        return num
        
    }
    
})

add.addEventListener("click",function(){
    if(num1==0){
        alert("you must to add the number of product  ")
    }
    else{
        numP.innerHTML=num1;
        NumRep.innerHTML=num1;
        notf.style.display="block";
        empt.style.display="none";
        bust.style.display="block";
        
    
    }
    
    
    
})
shp.addEventListener("click",function(){
    panier.classList.toggle('hide');
    notf.style.display="none"

})
remo.onclick=function(){
    empt.style.display="block";
    bust.style.display="none";
    num1.innerHTML=0
}
check.addEventListener("click",function(){
    header.style.opacity="10%";
    content.style.opacity="10%";
    checkIm.classList.remove('hide')
    nxt.classList.add('hide');
    prev.classList.add('hide');

})
cls.addEventListener("click",function(){
    header.style.opacity="100%";
    content.style.opacity="100%";
    checkIm.classList.add('hide')

})
