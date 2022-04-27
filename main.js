///           Room                ///

//(book)


//      modal 1       //
let modalOne = document.getElementById("riddleOne");
let btnOne = document.getElementById("myBtnOne");
let spanOne = document.getElementById("closeOne");

btnOne.onclick = function() {
  modalOne.style.display = "block";
}

spanOne.onclick = function() {
  modalOne.style.display = "none";
}

// elephant

//      modal 2       //
let modalTwo = document.getElementById("riddleTwo");
let btnTwo = document.getElementById("myBtnTwo");
let spanTwo = document.getElementById("closeTwo");

btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

// mirror

//      modal 3       //
let modalThree = document.getElementById("riddleThree");
let btnThree = document.getElementById("myBtnThree");
let spanThree = document.getElementById("closeThree");

btnThree.onclick = function() {
  modalThree.style.display = "block";
}

spanThree.onclick = function() {
  modalThree.style.display = "none";
}










// window.onclick = function(event) {
//   if (event.target == modalOne || modalTwo || modalThree) {
//     modalOne.style.display = "none";
//     modalTwo.style.display = "none";
//     modalThree.style.display = "none";
//   }
// }
