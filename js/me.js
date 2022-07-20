let list = document.querySelectorAll('li');
let card = document.getElementById('card');
let front = document.getElementById('front');
let game = document.getElementById('game');
let coffeeShop = document.getElementById('coffeeShop');
front.hidden = true;
game.hidden = true;
coffeeShop.hidden = true;
for (let i=0; i<list.length; i++){
    list[i].onmouseover = function(){
        let j =0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

list.forEach(elements => {
    elements.addEventListener('mouseenter',function(event){
        let bg = document.querySelector('body');
        let color = event.target.getAttribute('data-color')
        bg.style.backgroundColor = color;
        if(event.target.dataset.index == '1')
        {
            card.hidden = false;
            front.hidden = true;
            game.hidden = true;
            coffeeShop.hidden = true;
        }
        else if(event.target.dataset.index == '2')
        {
            card.hidden = true;
            front.hidden = false;
            game.hidden = true;
            coffeeShop.hidden = true;
        }
        else if(event.target.dataset.index == '3')
        {
            card.hidden = true;
            front.hidden = true;
            game.hidden = false;
            coffeeShop.hidden = true;
        }
        else
        {
            card.hidden = true;
            front.hidden = true;
            game.hidden = true;
            coffeeShop.hidden = false;
        }
    })
})

const contentflow = document.querySelectorAll('a');
contentflow.forEach(btn => {btn.addEventListener('mouseenter',function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() =>{
        ripples.remove()
    }, 1000);
})})

const bactop = document.querySelector('.js-back-to-top');
const coffeeShopplot = document.getElementById('coffeeShopplot');
const coffeeShopvideointro = document.getElementById('coffeeShopvideointro');
bactop.hidden = true;
window.addEventListener('scroll',function(event){
    var valueY = window.scrollY;
    var valueX = window.scrollX;
    coffeeShopplot.style.top = -valueY * 0.5 + 630 + 'px';
    coffeeShopvideointro.style.top = -valueY * 0.5 + 1950 + 'px';
    if(window.pageYOffset>200)
    {
        bactop.hidden = false;
    }
    else
    {
        bactop.hidden = true;
    }
})
bactop.addEventListener("click", (event) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
});