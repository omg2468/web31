const text = document.querySelector(".text");
const result = document.querySelector(".result-calculator");
const allButton = document.querySelectorAll(".button");
const clearButton = document.querySelector(".button.clear");
const equal = document.querySelector(".button.btn_result");
const dot = document.querySelector(".button.dot");

let obj = {
  yang: true,
  finalResult: [],
  break: false,
  resultClick: false,
};

// This is button number
let buttonNumber = (e) => {
  if (obj.resultClick == true) {
    text.innerHTML = e.target.innerHTML;
    result.innerHTML = "";
    obj.resultClick = false;
    obj.finalResult = [];
  } else if (obj.break == true) {
    text.innerHTML = e.target.innerHTML;
    obj.break = false;
  } else if (text.innerHTML == 0 || text.innerHTML == "ERROR!") {
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
const hasDot = (dot) => {
  for(let i = 0; i< dot.length;i++){
    if(dot[i] == '.'){
      return true
    }
  }
  return false
}

const dotButton = (e) => {
  let b = text.innerHTML;
  if (hasDot(b)){
    console.log('ok')
  } else buttonNumber(e);
};

dot.addEventListener("click", dotButton);
// This is all button else
let buttonelse = (e) => {
  obj.break = true;
  if (text.innerHTML == "ERROR!"){
    return 'ok'
  }
   else if (obj.resultClick == true) {
      result.innerHTML = text.innerHTML + e.target.innerHTML;
      obj.break = false;
      obj.resultClick = false;
      obj.finalResult.push(e.target.innerHTML);
    } else {
      result.innerHTML += text.innerHTML + e.target.innerHTML;
      obj.finalResult.push(Number(text.innerHTML), e.target.innerHTML);
    }
  console.log(obj)
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
  console.log(a)
  if(obj.resultClick == true){result.innerHTML = text.innerHTML;
  return}
 else if (a.length > 1) {
    a.push(Number(text.innerHTML));
  } else console.log(obj.finalResult)
  result.innerHTML += text.innerHTML;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "/") {
      a[i + 1] = (a[i - 1]) / (a[i + 1]);
      a[i - 1] = 0;
      a[i] = 0;
      console.log(a[i+1])
    } else if (a[i] == "*") {
      a[i + 1] = (a[i - 1]) * (a[i + 1]);
      a[i - 1] = 0;
      a[i] = 0;
      console.log(a[i+1])
    }
  }
  console.log(obj)
  for(let i = 0; i< a.length; i++){
    if(a[i] == '+'){
            a[i + 1] = a[i - 1] + a[i + 1];
            a[i - 1] = 0;
            a[i] = 0;
    }
    else if(a[i] == '-'){
                  a[i + 1] = a[i - 1] - a[i + 1];
                  a[i - 1] = 0;
                  a[i] = 0;
    }
  }
  obj.resultClick = true;
  text.innerHTML = a.reduce((a, b) => a + b);
  a = [text.innerHTML];
  console.log(a)
  if (isNaN(text.innerHTML || text.innerHTML == "Infinity")) {
    clear();
    text.innerHTML = "ERROR!";
  }
  console.log(obj);
};

equal.addEventListener("click", equalSign);

