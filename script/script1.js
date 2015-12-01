

function startGame() {

  document.turn = "red";

}

var el = document.getElementById('two');

var spinner = document.getElementById('two');
spinner.addEventListener('click', function () {
  if (spinner.style.backgroundColor == "") {
    spinner.style.backgroundColor = document.turn;

   /* generateTable();*/
    //nextPlayer is called in order to change colors
    nextPlayer();
    /*console.log(nextPlayer);*/
  }else if(spinner.style.backgroundColor == "blue") {
    spinner.style.backgroundColor = 'red';
  }
   else {
    spinner.style.backgroundColor = document.turn;
  }
})

//changes colors/players, nextPlayer is called in the click function
function nextPlayer() {
  if (document.turn == 'red') {
    document.turn = 'blue';
  } else {
    document.turn = 'red';
  }
}

/////////////////////// Creating the wheel of fortune board

function generateTable() {

  //reference for body
  var main = document.getElementById('phrase');
  //creating table and tbody elements
  var tble = document.createElement("table");
  var tblebody = document.createElement("tbody");
  // sets border attributes
  tble.setAttribute('border', '1');

  var i;
  var j;

  //creating cells
  for (i=0; i<4; i++) {
    //creates table row
    var row = document.createElement('tr');
    for (j=0; j<14; j++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
    setTableBorder(i, j);
      }
    tblebody.appendChild(row);
    }

  // add the tblebody to the table
  tble.appendChild(tblebody);
  // append the table to the body
  main.appendChild(tble);
}


function setTableBorder (row, column) {
  if (row===0&&column===13) {
    $('td').addClass('test');
  }

}


//tried to make a function that only set borders for certain criteria
/*function setTableBorder () {
  for(var i=0; i<4; i++) {
    if (i==0 || i==3) {
      for (var j=0; j<14; j++) {
        if (j==0 || j==13) {
          document.getElementsByTagName('td')[0][0].setAttribute('border', 'none');
          document.getElementsByTagName('td')[0][13].setAttribute('border', 'none');
        }
      }

    } else {
      document.getElementsByTagName('td').setAttribute('border', 'none');
    }
  }
}*/



generateTable();
