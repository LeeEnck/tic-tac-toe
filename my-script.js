let boxes = document.getelementbyclassname('box')
for(let i=0; i<boxes.length;i++){
  boxes[i].addeventlistener('click',addPlayerMark);
}

let turncounter = 1;
let xMarks = [];
let oMarks = [];
let winning combos =
[["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]]

function addPlayerMark(event)
