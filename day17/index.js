function isTable(element){
    return element.tagName === "TABLE";

}

const table = Array.from(document.body.childNodes).find(isTable)
console.log(table.tagName)
console.log(table)
const rows = table.rows;

for(let i = 0; i < rows.length; i++){
    rows[i].cells[rows.length - i - 1].style.backgroundColor = "red"
}

var headingnode = document.querySelector(".heading");
headingnode.innerHTML = 'éo'

const boxWrapper = document.getElementById('box-wrapper');
const boxes = boxWrapper.children; // HTMLCollection

console.log(boxes[0]); // Using Index WORKS!
console.log(boxes.namedItem("id-box1")); // Using ID WORKS!
console.log(boxes.namedItem("nm-box1")); // Using Name WORKS!
console.log(boxes.namedItem("cls-box1")); // Using Class NULL