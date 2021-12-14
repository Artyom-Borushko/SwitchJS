
function createTable(rows, columns) {
    const table = document.createElement('table');
    document.body.appendChild(table);
    for (let row = 1; row <= rows; row++) {
        const tableRow = table.insertRow();
        for (let column = 1; column <= columns; column++) {
            const tableColumn = tableRow.insertCell();
            tableColumn.style.border = '1px solid black';
            tableColumn.style.padding = '5px';
            tableColumn.draggable = 'true';
        };
    };
};
createTable(100, 100);


let myX = '';
let myY = '';
let tableCell = '';

const tableLocator = document.querySelector('table');

function onTableCellClick(event) {
    if (event.target.nodeName === 'TD') alert('Clicked');
};


tableLocator.addEventListener('click', onTableCellClick);

tableLocator.addEventListener('dragstart', function (e) {
    tableCell = e.target;
    myX = e.offsetX;
    myY = e.offsetY;
    tableCell.style.position = 'absolute';
    tableCell.style.border = '1px solid red';
}, false);

tableLocator.addEventListener('dragover', function (e) {
    e.preventDefault();
}, false);

tableLocator.addEventListener('drop', function (e) {
    e.preventDefault();
    tableCell.style.left = e.pageX - myX + 'px';
    tableCell.style.top = e.pageY - myY + 'px';
}, false);

