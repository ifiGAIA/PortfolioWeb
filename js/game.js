let list = document.querySelectorAll('li');
let part1 = document.getElementById('part1');
let part2 = document.getElementById('part2');
let part3 = document.getElementById('part3');
let part4 = document.getElementById('part4');
let home = document.getElementById('home');
let canknock = false;
part1.hidden = true;
part2.hidden = true;
part3.hidden = true;
part4.hidden = true;
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
            let color = event.target.getAttribute('data-color');
            bg.style.backgroundColor = color;
            if(event.target.dataset.index == '2')
            {
                part1.hidden = false;
                part2.hidden = true;
                part3.hidden = true;
                part4.hidden = true;
                home.hidden = true;
            }
            else if(event.target.dataset.index == '3')
            {
                part1.hidden = true;
                part2.hidden = false;
                part3.hidden = true;
                part4.hidden = true;
                home.hidden = true;
            }
            else if(event.target.dataset.index == '4')
            {
                part1.hidden = true;
                part2.hidden = true;
                part3.hidden = false;
                part4.hidden = true;
                home.hidden = true;
            }
            else if(event.target.dataset.index == '5')
            {
                part1.hidden = true;
                part2.hidden = true;
                part3.hidden = true;
                part4.hidden = false;
                home.hidden = true;
            }
            else
            {
                part1.hidden = true;
                part2.hidden = true;
                part3.hidden = true;
                part4.hidden = true;
                home.hidden = false;
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

function BubbleMove()
{
    let amount = 20;
    let bubblemanager = document.querySelector('.part2');
    let i = 0;
    while(i < amount)
    {
        let bubble = document.createElement('i');
        let posX = Math.floor(Math.random() * window.innerWidth);
        let posY = Math.floor(Math.random() * window.innerHeight);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5 + 10;
        
        bubble.style.left = posX + 'px';
        bubble.style.animationDelay = delay + 's';
        bubble.style.animationDuration = duration + 's';
        bubblemanager.appendChild(bubble);
        i++;
    }
}
BubbleMove();

function getRandom(x){
    return Math.floor(Math.random()*x);
};
let creakcount = 0;
let knockSpotmanager = document.querySelector('.part4 .glass');
let crackmanager = document.querySelector('.part4 .creakmanager');
let playagainbtn = document.querySelector('.part4 .plot button');
playagainbtn.hidden = true;
function KnockSpot()
{
    let amount = 1;
    let i = 0;
    while(i < amount)
    {
        let knockSpot = document.createElement('i');
        let posX = getRandom(4) * 100; 
        let posY = getRandom(5) * 100; 
        
        knockSpot.style.left = posX + 30 + 'px'; //50~350
        knockSpot.style.top = posY + 20 + 'px'; //50~450
        knockSpotmanager.appendChild(knockSpot);
        i++;
        knockSpot.addEventListener('click', function(){
            const audio = document.querySelector(`audio[data-key="${65}"]`);
            audio.play();
            knockSpot.remove();
            creakcount += 1;
            GlassIsBroke();
            setTimeout(() =>{
                KnockSpot();
            }, 1000);
        })
        knockSpot.addEventListener("mouseover", (event) => {
            canknock = true;
        });
        knockSpot.addEventListener("mouseout", (event) => {
            canknock = false;
        });
        knockSpotmanager.addEventListener("mouseout", (event) => {
            canknock = false;
        });
    }
}
function GlassIsBroke()
{
    const audioshatter = document.querySelector(`audio[data-key="${85}"]`);
    if(creakcount >= 5)
    {
        audioshatter.play();
        knockSpotmanager.style.opacity = 0;
        crackmanager.remove();
        creakcount = 0;
        setTimeout(() =>{
            playagainbtn.hidden = false;
        }, 4000);
    }
}
KnockSpot();
function Playagain()
{
    playagainbtn.hidden = true;
    setTimeout(() =>{
        knockSpotmanager.style.opacity = 1;
        part4.appendChild(crackmanager);
    }, 3000);
}
window.addEventListener('click',function(e){
    let crack = document.createElement('i');
    crack.style.position = 'absolute';
    crack.style.left = e.offsetX + 'px';
    crack.style.top = e.offsetY + 'px';
    crack.style.backgroundImage = `url('./img/glassbimg/crack${getRandom(3)+1}.png')`;
    if(part4.hidden == false && canknock == true)
    {
        crackmanager.appendChild(crack);
        setTimeout(() =>{
            crack.remove()
        }, 8000);
    }
})

const bactop = document.querySelector('.js-back-to-top');

const part1plot = document.getElementById('part1plot');
const part1videointro = document.getElementById('part1videointro');
const part2uiintro = document.getElementById('part2uiintro');
const part3plot = document.getElementById('part3plot');
const part3videointro = document.getElementById('part3videointro');
const part4plot = document.getElementById('part4plot');
const part4videointro = document.getElementById('part4videointro');
bactop.hidden = true;
window.addEventListener('scroll',function(event){
    var valueY = window.scrollY;
    var valueX = window.scrollX;
    part1plot.style.top = -valueY * 0.5 + 630 + 'px';
    part2uiintro.style.top = -valueY * 0.5 + 700 + 'px';
    part3plot.style.top = -valueY * 0.5 + 630 + 'px';
    part1videointro.style.top = -valueY * 0.5 + 1950 + 'px';
    part3videointro.style.top = -valueY * 0.5 + 1950 + 'px';
    part4plot.style.top = -valueY * 0.5 + 600 + 'px';
    part4videointro.style.top = -valueY * 0.5 + 1950 + 'px';
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