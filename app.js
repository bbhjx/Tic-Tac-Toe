let cells = document.querySelectorAll('.cell');
let playerX = 'X';
let playerO = 'O';




cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});


let player = 2

function cellClicked(e) {

    if (player % 2 === 0 && e.target.textContent !== "X" && e.textContent !== "O") {
        e.target.textContent = 'X'

    } 
    
    else {
        e.target.textContent = 'O'

    }

    player++;
    console.log(player);
};

