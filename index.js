//adding rows to table
var table = document.getElementById("table1");

var addButton = document.getElementById("addButton");
addButton.onclick = addPerson;

var numR = 1;

function addEntry(name, age, city, gender) {
  var rowID = "row " + numR;
  var row = document.createElement("TR");
  row.setAttribute("id", rowID);
  table.appendChild(row);

  var colID = "col " + numR + " " + 0;
  var col1 = document.createElement("TD");
  col1.setAttribute("id", colID);
  row.appendChild(col1);

  var txt = document.createTextNode(name);
  col1.appendChild(txt);

  var colID = "col " + numR + " " + 1;
  var col2 = document.createElement("TD");
  col2.setAttribute("id", colID);
  row.appendChild(col2);

  if (gender == 1) {
    var txt = document.createTextNode("Male");
    col2.appendChild(txt);
  } else {
    var txt = document.createTextNode("Female");
    col2.appendChild(txt);
  }

  var colID = "col " + numR + " " + 2;
  var col3 = document.createElement("TD");
  col3.setAttribute("id", colID);
  row.appendChild(col3);

  var txt = document.createTextNode(age);
  col3.appendChild(txt);

  var colID = "col " + numR + " " + 3;
  var col4 = document.createElement("TD");
  col4.setAttribute("id", colID);
  row.appendChild(col4);

  var txt = document.createTextNode(city);
  col4.appendChild(txt);

  var colID = "colU " + numR + " " + 4;
  var col5 = document.createElement("TD");
  col5.setAttribute("id", colID);
  row.appendChild(col5);

  var txt = document.createTextNode("UPDATE");
  col5.appendChild(txt);

  var txt2 = document.createTextNode(" / ");
  col5.appendChild(txt2);

  var colID = "colR " + numR + " " + 4;
  var col6 = document.createElement("TD");
  col6.setAttribute("id", colID);
  row.appendChild(col6);

  var txt3 = document.createTextNode("REMOVE");
  col6.appendChild(txt3);
}

var f1 = document.getElementById("female");
f1.onchange = femaleSelect;

var m1 = document.getElementById("male");
m1.onchange = maleSelect;

function maleSelect() {
  document.getElementById("female").checked = false;
}

function femaleSelect() {
  document.getElementById("male").checked = false;
}

function addPerson() {
  var name = document.getElementById("nameField").value;
  var age = document.getElementById("ageField").value;
  var city = document.getElementById("cityField").value;
  var gender = 0;
  if (document.getElementById("male").checked == true) {
    gender = 1;
  }
  if (document.getElementById("female") == true) {
    gender = 2;
  }
  if (name != null && age != null && city != null && gender != null) {
    addEntry(name, age, city, gender);
  }
}