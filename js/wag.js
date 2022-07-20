let list = document.querySelectorAll('li');
let part1 = document.getElementById('part1');
let part2 = document.getElementById('part2');
let part3 = document.getElementById('part3');
let part4 = document.getElementById('part4');
let home = document.getElementById('home');
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
            let color = event.target.getAttribute('data-color')
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

const button = document.querySelector('button');
button.addEventListener('mousedown', event => {
  button.innerHTML = `<img src="./img/moodimg/btn3.png">`;
  const audio = document.querySelector(`audio[data-key="${65}"]`);
  audio.play();
});
button.addEventListener('mouseup', event => {
    button.innerHTML = `<img src="./img/moodimg/btn2.png">`;
});

const bactop= document.querySelector('.js-back-to-top');

bactop.hidden = true;
window.addEventListener('scroll',function(event){
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