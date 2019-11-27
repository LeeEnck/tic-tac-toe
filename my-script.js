let grid = document.getElementsByClassName('box')
for(let i=0; i < grid.length; i++){
  grid[i].addEventListener('click', addPlayerMark);
}

let turn = 1;
let winning_combos = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], ["1", "5", "9"], ["3", "5", "7"]];

let piece = "";
let number = 0;
number = Math.round(Math.random());

function addPlayerMark(event) {
  number = 1 - number;
  if (number == 0) {
    piece = "O";
  } else {
    piece = "X";
  }
  document.body.addEventListener("click", event => {
    if (event.target.nodeName == "TD") {
      event.target.innerHTML = piece;
    }
  });
  let cell1 = document.getElementById([id="1"]);
  let cell2 = document.getElementById([id="2"]);
  let cell3 = document.getElementById([id="3"]);
  let cell4 = document.getElementById([id="4"]);
  let cell5 = document.getElementById([id="5"]);
  let cell6 = document.getElementById([id="6"]);
  let cell7 = document.getElementById([id="7"]);
  let cell8 = document.getElementById([id="8"]);
  let cell9 = document.getElementById([id="9"]);


}
// Don't overwrite pieces
// Set win conditions
  // If table cells are not empty and all the same, win
// Reset the board
