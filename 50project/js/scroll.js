let boxes = document.querySelectorAll(".box");




window.addEventListener('scroll', scrollShow)

function scrollShow() {
  const currenHeight = (window.innerHeight/5)*4;
  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;
    if(topBox < currenHeight){
        box.classList.add('show')
    } else box.classList.remove('show')
  });
}


