

let elements = document.querySelectorAll('td')
for (let i = elements.length - 1; i >= 0; i--) {
    elements[i].draggable = 'true';
}

let myX = '';
let myY = '';
let tableCell = '';

document.querySelector('table').addEventListener('dragstart', function (e) {
    tableCell = e.target;
    myX = e.offsetX;
    myY = e.offsetY;
    tableCell.style.position = 'absolute';
    tableCell.style.border = '1px solid red';
}, false)

document.querySelector('table').addEventListener('dragover', function (e) {
    e.preventDefault();
}, false)

document.querySelector('table').addEventListener('drop', function (e) {
    e.preventDefault();
    tableCell.style.left = e.pageX - myX + 'px';
    tableCell.style.top = e.pageY - myY + 'px';
}, false)

