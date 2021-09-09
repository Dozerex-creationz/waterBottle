const b1=document.querySelector('.ele');
const drink=document.querySelector('.drink');
const reset=document.querySelector('.refill');

var fill=500;
drink.addEventListener('click',()=>{fill-=30;b1.style.height=`${fill}px`});

reset.addEventListener('click',()=>{fill=500;b1.style.height=`500px`});