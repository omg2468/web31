const headers = {
  "X-RapidAPI-Key": "7a22e4f96cmsh7a213db203e0edcp166cbbjsnee0006838ae5",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};
const getGameList = function () {
  const options = {
    method: "GET",
    headers,
  };

  return fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    options
  ).then((res) => res.json());
};

const getGameDetail = function (id) {
  const options = {
    method: "GET",
    headers,
  };

  return fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452",
    options
  ).then((res) => res.json());
};

const toGameCard = function (game) {
  return `<a href="detail.html?game=${game.id}">
        <div class="item">
          <div class="img">
            <img
              src="${game.thumbnail}"
              alt="${game.title}"
            />
          </div>
          <div class="game-description">
            <div class="game-detail">
              <div class="title">
                <p>${game.title}</p>
                <div class="price">Free</div>
              </div>
              <div class="detail">${game.short_description}</div>
              <div class="genre">${game.genre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-microsoft" viewBox="0 0 16 16">
              <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
            </svg></div>
            </div>
          </div>
        </div>
      </div>
      </a>`;
};

let gameList = document.querySelector(".total-item");
console.log(gameList);

let loading = function (min, max) {
  getGameList().then(function (games) {
    for (let i = min; i < max; i++) {
      gameList.innerHTML += toGameCard(games[i]);
    }
  });
};

window.onload = loading(0, 30);

let a = 900;
let b = 31;
let c = 60;
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > a || document.documentElement.scrollTop > a) {
    console.log(a);
    a = a + 900;
    loading(b, c);
    b = b + 30;
    c = c + 30;
  }
});
