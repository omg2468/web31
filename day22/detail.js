const headers = {
  "X-RapidAPI-Key": "7a22e4f96cmsh7a213db203e0edcp166cbbjsnee0006838ae5",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

const getGameDetail = function (id) {
  const options = {
    method: "GET",
    headers,
  };

  return fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  )
    .then((response) => response.json())
};
let url = new URL(location.href);
const game = url.searchParams.get("game");
console.log(game)

window.onload = function(){
    const url = new URL(location.href)
    const game = url.searchParams.get('game')
    let body = document.body

    getGameDetail(game).then(function(data){
        body.innerHTML = `<p>${data.title}</p>`
    })
}