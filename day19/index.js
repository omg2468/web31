let cat = document.querySelector('.cat')
console.log(cat)

window.addEventListener("mousemove", function (e) {
  cat.style.top = e.y + "px";
  cat.style.left = e.x + "px";
});

// const backToTop = document.querySelector('.back')


// window.addEventListener("scroll", function (e) {
//   let y = document.documentElement.scrollTop;
//   if (y>200){
//     backToTop.style.display = 'block'
//   } else {
//     backToTop.style.display = 'none'
//   }
// });

// backToTop.addEventListener('click', function(){
//     window.scrollTo(0,0)
// })





