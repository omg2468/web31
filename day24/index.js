const api = "https://dog.ceo/api/breeds/list/all";

async function getApi() {
  return fetch(api).then((respon) => respon.json());
}



let body = document.body;
let select = document.getElementById("dog");
const list = document.querySelector(".list");
const button = document.querySelector("button");
const random = document.querySelector('.random')
console.log(list);

let renderUI = function () {
  getApi().then(function (data) {
    console.log(data.message);
    for (let value in data.message) {
      select.innerHTML += `<option value="${value}" class="option">${value}</option>`;
    }
  });
};

window.onload = renderUI;

const getchange = function () {
    random.innerHTML = ''
  getApi().then(function (data) {
    for (let key in data.message) {
      if (select.value == key) {
        if (data.message[key].length > 0) {
          list.innerHTML = "";
          for (let i = 0; i < data.message[key].length; i++) {
            list.innerHTML += `
                <li>${data.message[key][i]}</li>
            `;
          }
        } else list.innerHTML = `<li>Không có gì đâu đừng nhìn</li>`;
      }
    }
  });
};

const randomNumber = function(x){
    return Math.floor(Math.random()*x)
}

// const img = `https://dog.ceo/api/breed/hound/afghan/images`;



const randomImg = function (a) {
  getImg().then(function (data) {
    if (list.innerHTML == `<li>Không có gì đâu đừng nhìn</li>`) {
      random.innerHTML = `<p>Không có bấm làm gì</p>`;
    } else {
      random.innerHTML = `<img src="${
        data.message[randomNumber(data.message.length)]
      }" alt="">`;
    }
  });
};

button.addEventListener("click", getchange);
list.addEventListener('click', function(a){
    async function getImg() {
      return fetch(img).then((respon) => respon.json());
    }
  let img = `https://dog.ceo/api/breed/${select.value}/${a.target.innerHTML}/images`;
  getImg().then(function (data) {
    if (list.innerHTML == `<li>Không có gì đâu đừng nhìn</li>`) {
      random.innerHTML = `<p>Không có bấm làm gì</p>`;
    } else {
      random.innerHTML = `<img src="${
        data.message[randomNumber(data.message.length)]
      }" alt="">`;
    }
  });
})
