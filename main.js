var currentsymbol= 'X'; 
var currentplayer = document.getElementById('display_player');


const newbtn = document.querySelector('new_game');
const resetbtn = document.querySelector('reset');

//found out to NOT USE onclicks instead use addevent listener. on click gives me an uncaught reference error

//deciding when to display X or when to display the O
//X always starts first
var player = 1;

function switchTurn(){
    if (player == 1) {
            player = 0;
    }
    else {
        player = 1;
    }

}

//display turn message
function displayTurn(cell) {
    if (player == 1) {
       currentplayer.innerHTML = 'X';
       currentsymbol = 'X';
        player = 0;
    }
    else {
       currentplayer.innerHTML = "O";
       currentsymbol = 'O'; 
       player = 1;
    }
}


// this will be where i mark the box

//document.getElementsByClassName("xo").addEventListener ("click", )
function cellPicker(cell) {
    if (cell.innerHTML == "") {                     //if empty then fill it in
        cell.innerHTML = currentsymbol;
        displayTurn();
    }

}





function newGame() {
    currentsymbol = 'X';
    document.getElementById('one').value = '';
    document.getElementById("two").value = '';
    document.getElementById("three").value = '';
    document.getElementById("four").value = '';
    document.getElementById("five").value = '';
    document.getElementById("six").value = '';
    document.getElementById("seven").value = '';
    document.getElementById("eight").value = '';
    document.getElementById("nine").value = '';
  
}

document.getElementsByClassName("new_game").addEventListener ("click", newGame, false);

// Function to reset game


function resetGame() {
    location.reload();
    document.getElementById('one').value = '';
    document.getElementById("two").value = '';
    document.getElementById("three").value = '';
    document.getElementById("four").value = '';
    document.getElementById("five").value = '';
    document.getElementById("six").value = '';
    document.getElementById("seven").value = '';
    document.getElementById("eight").value = '';
    document.getElementById("nine").value = '';
  
}

document.getElementsByClassName("reset").addEventListener ("click", resetGame, false);




//winner checker
function winnercheck()