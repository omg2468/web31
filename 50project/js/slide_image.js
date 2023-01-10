const body = document.body
const allSlide = document.querySelectorAll('.slide')
let count = 0;
const leftButton = document.querySelector('.left-arrow')
const rightButton = document.querySelector('.right-arrow')

let bodyBackground = function(){
  body.style.backgroundImage = allSlide[count].style.backgroundImage
}
bodyBackground();
let change = function(){
  count++;
  if(count == allSlide.length){
    count = 0
  }
  for(let i = 0; i< allSlide.length; i++){
    if(i == count){
      allSlide[i].classList.add('active')
    } else allSlide[i].classList.remove("active");
  }
  bodyBackground()
}

setInterval(change, 1000)