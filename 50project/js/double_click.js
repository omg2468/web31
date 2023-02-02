const count_sentence = document.querySelector('.like')
const img = document.querySelector('.img')
const some = document.querySelector('.some')
const container = document.querySelector('.container')
const box = document.querySelector('.box')
console.log(container)
console.log(count_sentence)

let x = 0
let incress = (e) => {
    console.log(e.offsetX);
    console.log(e.offsetY);
    box.innerHTML = `<div class="heart" style="top:${e.offsetY}px; left:${e.offsetX}px">        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg></div>
                      <div class="img">
                <img
                  src="https://phunugioi.com/wp-content/uploads/2021/11/anh-xe-do.jpg"
                  alt=""
                />
              </div>`;
    x++;
    count_sentence.innerHTML = `You liked it ${x} times`
}

box.addEventListener("dblclick", incress);


