const text = document.querySelector(".text");
const result = document.querySelector(".result-calculator");
const allButton = document.querySelectorAll(".button");
const clearButton = document.querySelector(".button.clear");
const equal = document.querySelector(".button.btn_result");
const dot = document.querySelector('.button.dot')
console.log(dot)

console.log(result);

let obj = {
  finalResult: [],
  break: false,
  resultClick: false,
};

// This is button number
let buttonNumber = (e) => {
  if(obj.resultClick == true){
    text.innerHTML = e.target.innerHTML;
    result.innerHTML = '';
    obj.resultClick = false;
    obj.finalResult = []
  }
 else if (obj.break == true) {
    text.innerHTML = e.target.innerHTML;
    obj.break = false;
  } else if (text.innerHTML == 0 || text.innerHTML == 'ERROR!') {
    text.innerHTML = e.target.innerHTML;
  } else {
    text.innerHTML += e.target.innerHTML;
  }
};

allButton.forEach((button) => {
  if (button.className == "button number") {
    button.addEventListener("click", buttonNumber);
  }
});

//This is dot button
const dotButton = (e) => {
  let b = text.innerHTML
  if(b[b.length - 1] == '.' || b[0] == '.'){}
  else buttonNumber(e);
}

dot.addEventListener('click', dotButton)
// This is all button else
let buttonelse = (e) => {
  console.log(obj)

  obj.break = true;
  if (obj.resultClick == true) {
    result.innerHTML = text.innerHTML + e.target.innerHTML;
    obj.break = false;
    obj.resultClick = false;
  } else if (e.target.innerHTML == "+" || e.target.innerHTML == "-") {
    result.innerHTML += text.innerHTML + e.target.innerHTML;
    obj.finalResult.push(Number(e.target.innerHTML + text.innerHTML));
  } else {
    obj.finalResult.push(e.target.innerHTML, text.innerHTML);
    result.innerHTML += text.innerHTML + e.target.innerHTML;
  }

  text.innerHTML = 0;
};

allButton.forEach((button) => {
  if (button.className == "button") {
    button.addEventListener("click", buttonelse);
  }
});
// This is clear button
let clear = () => {
  text.innerHTML = 0;
  result.innerHTML = "";
  obj.finalResult = [];
  obj.break = false;
};

clearButton.addEventListener("click", clear);

// This is equal sign
let equalSign = () => {
  let a = obj.finalResult;
  result.innerHTML += text.innerHTML
    if (text.innerHTML != 0) {
      a.push(Number(text.innerHTML));
    }
    
  for (let i = 0; i < obj.finalResult.length; i++) {
    if (a[i] == "/") {
      a[i + 1] = Number(a[i - 1]) / Number(a[i + 1]);
      a[i - 1] = 0;
      a[i] = 0;
    } else if (a[i] == "*") {
      a[i + 1] = Number(a[i - 1]) * Number(a[i + 1]);
      a[i - 1] = 0;
      a[i] = 0;
    }
  }
  obj.resultClick = true
  text.innerHTML = a.reduce((a, b) => a + b);
  a = [text.innerHTML];
  if(isNaN(text.innerHTML)){
    clear();
    text.innerHTML = 'ERROR!';
  }
  console.log(a.length)
};

equal.addEventListener("click", equalSign);
