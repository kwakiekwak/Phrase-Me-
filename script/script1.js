

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
  var body = document.getElementsByTagName('body')[0];
  //creating table and tbody elements
  var tble = document.createElement("table");
  var tblebody = document.createElement("tbody");

  //creating cells
  for (var i=0; i<4; i++) {
    //creates table row
    var row = document.createElement('tr');
    if (i===0 || i===3) {
      //if it is the first or last row
      for (var j=0; j<14; j++) {
        if (i!=0||i!=13) {
          var cell = document.createElement('td');
        } else {

        }

       /* var cellText = document.createTextNode("cell in row "+i+", column "+j);
*/

       /* cell.appendChild(cellText);*/

        // add the cell to the end of the row
        row.appendChild(cell);
      }
    } else {
      for (var j=0; j<14; j++) {
        var cell = document.createElement('td');

        // add the row to the end of the table body
        row.appendChild(cell);
      }
    }
  tblebody.appendChild(row);
  }
  // add the tblebody to the table
  tble.appendChild(tblebody);
  // append the table to the body
  body.appendChild(tble);
  // sets border attributes
  /*tble.setAttribute('border', '1');*/
  setTableBorder();
}
//tried to make a function that only set borders for certain criteria
function setTableBorder () {
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
}

generateTable();
