// go get all the cells
let cells = document.querySelectorAll('.cell');


// click on all the cells
cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

// starting player is X, alternate, and do not allow cells to be overwritten
let player = 2

function cellClicked(e) {

    if (player % 2 === 0 && e.target.textContent == '' && gameOver == false) {
        e.target.textContent = 'X'
        player++;
        checkWin();
    }

    else if (e.target.textContent == '' && gameOver == false) {
        e.target.textContent = 'O'
        player++;
        checkWin();
    }


    
}


// cell content array
const cellContent = [
    document.getElementsByClassName('top left')[0],
    document.getElementsByClassName('top middle')[0],
    document.getElementsByClassName('top right')[0],
    document.getElementsByClassName('middle left')[0],
    document.getElementsByClassName('center')[0],
    document.getElementsByClassName('middle right')[0],
    document.getElementsByClassName('bottom left')[0],
    document.getElementsByClassName('bottom middle')[0],
    document.getElementsByClassName('bottom right')[0]
]


// check for game winner
let gameOver = false;

function checkWin(e) {
    if (cellContent[0].textContent === "X" && cellContent[1].textContent === "X" && cellContent[2].textContent === "X" ||
        cellContent[3].textContent === "X" && cellContent[4].textContent === "X" && cellContent[5].textContent === "X" ||
        cellContent[6].textContent === "X" && cellContent[7].textContent === "X" && cellContent[8].textContent === "X" ||
        cellContent[0].textContent === "X" && cellContent[3].textContent === "X" && cellContent[6].textContent === "X" ||
        cellContent[1].textContent === "X" && cellContent[4].textContent === "X" && cellContent[7].textContent === "X" ||
        cellContent[2].textContent === "X" && cellContent[5].textContent === "X" && cellContent[8].textContent === "X" ||
        cellContent[0].textContent === "X" && cellContent[4].textContent === "X" && cellContent[8].textContent === "X" ||
        cellContent[2].textContent === "X" && cellContent[4].textContent === "X" && cellContent[6].textContent === "X") {
        gameOver = true;
        winner = "X"
        document.getElementById("message").innerHTML = "X wins!";
    }

    else if (cellContent[0].textContent === "X" && cellContent[1].textContent === "O" && cellContent[2].textContent === "O" ||
        cellContent[3].textContent === "O" && cellContent[4].textContent === "O" && cellContent[5].textContent === "O" ||
        cellContent[6].textContent === "O" && cellContent[7].textContent === "O" && cellContent[8].textContent === "O" ||
        cellContent[0].textContent === "O" && cellContent[3].textContent === "O" && cellContent[6].textContent === "O" ||
        cellContent[1].textContent === "O" && cellContent[4].textContent === "O" && cellContent[7].textContent === "O" ||
        cellContent[2].textContent === "O" && cellContent[5].textContent === "O" && cellContent[8].textContent === "O" ||
        cellContent[0].textContent === "O" && cellContent[4].textContent === "O" && cellContent[8].textContent === "O" ||
        cellContent[2].textContent === "O" && cellContent[4].textContent === "O" && cellContent[6].textContent === "O") {
        gameOver = true;
        winner = "O"
        document.getElementById("message").innerHTML = "O wins!"
    }
    
}


