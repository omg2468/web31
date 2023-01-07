let allImg = document.querySelectorAll("img");

window.onload = function change() {
  allImg.forEach((img) => {
    img.style.zIndex = 0
  })
  allImg[0].style.zIndex = 1;
  changeImg();
};

let changeImg = () => {
  for (let x = 0; x < allImg.length; x++) {
    console.log(allImg[x].style.zIndex)
    }
  }
;

// setInterval(changeImg, 2000);
