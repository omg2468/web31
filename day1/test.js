let a = 0
let numb = () => {
  let container = document.querySelector('.container');
  a = a + 100;
  container.innerHTML = a;
  if(a == 12000){
    clearInterval(b)
  }
}

let b = setInterval(numb, 20);

