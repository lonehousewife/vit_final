var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
  var message = document.getElementById("message").value;

  if(!message) {
      alert("Please fill in your requested task");
      return;
   }

   var display = document.getElementById("display");

   var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);

cell1.innerHTML = message;

row++;

}