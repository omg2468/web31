const fruitList = [
    'apple',
    'banana',
    'tomato',]


const div = document.querySelector("div#app");

// const firstCharUpper = function(fruit){
//     return fruit[0].toUpperCase() + fruit.slice(1).toLowerCase();
// };

const creatFruitItem = function(fruit){
    const li = document.createElement('li');a
    li.textContent = firstCharUpper(fruit);
    li.className = 'fruit-item';
    return li
};


const creatFruitList = function(fruitList){
    const ul = document.createElement('ul')
    for(let i = 0; i < fruitList.length; i++){
        const fruit = fruitList[i];
        const li = creatFruitItem(fruit);
        ul.append(li)
    }
    return ul
}


div.append(creatFruitList(fruitList));


// const toListItem = function(fruit){
//     return `<li class ='fruit-items'>${firstCharUpper(fruit)}</li>`;
// }


// const items = fruitList.map(toListItem).join("")
// console.log(items)

// const ul = document.createElement('ul')
// ul.className = 'fruit-list';
// ul.innerHTML = items;

// div.append(ul)




