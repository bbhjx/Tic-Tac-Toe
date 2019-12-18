// go get all the cells
let cells = document.querySelectorAll('.cell');


// click on all the cells
cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

// starting player is X, alternate
let player = 2

function cellClicked(e) {

    if (player % 2 === 0 && e.target.textContent == '') {
        e.target.textContent = 'X'
        player++;
    } 
    
    else if (e.target.textContent == ''){
        e.target.textContent = 'O'
        player++;
    }

    
    console.log(player);
};

