
document.getElementById("display").innerHTML = 0;
var display = " ";

function btnPressed(btnValue){
  display = display + btnValue;
  document.getElementById("display").innerHTML = display;
}
