// ///           Room                ///

let modalOne = document.getElementById('riddleOne');
let spanOne = document.getElementById('closeOne');

let modalTwo = document.getElementById('riddleTwo');
let spanTwo = document.getElementById('closeTwo');

let modalThree = document.getElementById('riddleThree');
let spanThree = document.getElementById('closeThree');

let escapeRoom = function () {
	let answerOne = document.querySelector('#answerOne');
	let answerTwo = document.querySelector('#answerTwo');
	let answerThree = document.querySelector('#answerThree');

	let lockOne = document.querySelector('#lockOne');
	let lockTwo = document.querySelector('#lockTwo');
	let lockThree = document.querySelector('#lockThree');

	let submitOne = document.querySelector('#submitOne');
	let submitTwo = document.querySelector('#submitTwo');
	let submitThree = document.querySelector('#submitThree');

	let h1 = document.querySelector('h1');
	let h3 = document.querySelector('h3');
	let dialogueBox = document.querySelector('#dialogue');

	//let Riddles Answered = false;
	let selectedOne = false;
	let selectedTwo = false;
	let selectedThree = false;

	// for image
	const img = document.getElementById('main-image');
	const offsetTop = img.offsetTop;
	const offsetLeft = img.offsetLeft;


	// Submit One
	submitOne.addEventListener('click', function () {
		if (answerOne.value.toLowerCase() === 'elephant') {
			lockOne.src =
				'https://www.freeiconspng.com/thumbs/lock-icon/unlock-icon-27.jpeg';
			selectedOne = true;
			modalOne.style.display = 'none';
			return;
		} else {
			alert('wrong answer');
		}
	});
	answerOne.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			if (answerOne.value.toLowerCase() === 'elephant') {
			lockOne.src =
				'https://www.freeiconspng.com/thumbs/lock-icon/unlock-icon-27.jpeg';
			selectedOne = true;
			modalOne.style.display = 'none';
			return;
			} else {
			alert('wrong answer');
			}
		}
	});


	// Submit Two
	submitTwo.addEventListener('click', function () {
		if (answerTwo.value.toLowerCase() === 'mirror') {
			lockTwo.src =
				'https://www.freeiconspng.com/thumbs/lock-icon/unlock-icon-27.jpeg';
			selectedTwo = true;
			modalTwo.style.display = 'none';
			return;
		} else {
			alert('wrong answer');
		}
	});
	answerTwo.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			if (answerTwo.value.toLowerCase() === 'mirror') {
			lockTwo.src =
				'https://www.freeiconspng.com/thumbs/lock-icon/unlock-icon-27.jpeg';
			selectedTwo = true;
			modalTwo.style.display = 'none';
			return;
			} else {
			alert('wrong answer');
			}
		}
	});
	
	


	// Submit Three
	submitThree.addEventListener('click', function () {
		if (answerThree.value.toLowerCase() === 'spartan') {
			lockThree.src =
				'https://www.freeiconspng.com/thumbs/lock-icon/unlock-icon-27.jpeg';
			selectedThree = true;
			modalThree.style.display = 'none';
		} else {
			alert('wrong answer');
		}
	});
	answerThree.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			if (answerThree.value.toLowerCase() === 'spartan') {
			lockThree.src =
				'https://www.freeiconspng.com/thumbs/lock-icon/unlock-icon-27.jpeg';
			selectedThree = true;
			modalThree.style.display = 'none';
			} else {
			alert('wrong answer');
			}
		}
	});


	


	img.addEventListener('click', function (event) {
		

		console.log(event.clientX - offsetLeft);
		console.log(event.clientY - offsetTop);

		let x = event.clientX - offsetLeft;
		let y = event.clientY - offsetTop;

		//  Please, check coordinates with console logs for correct x y coordinates based on monitor size

		// 
		// 

		// Modal 1
		if (x >= 971 && x <= 1077) {
			if (y >= 312 && y <= 375) {
				if (!selectedOne && !selectedTwo) {
					modalOne.style.display = 'block';
					answerOne.focus();
				}
			}
		}


		// Modal 2
		if (x >= 615 && x <= 814) {
			if (y >= 105 && y <= 214) {
				if (!selectedTwo && selectedOne) {
					modalTwo.style.display = 'block';
					answerTwo.focus();
				}
			}
		}

		// Modal 3
		if (x >= 483 && x <= 527) {
			if (y >= 94 && y <= 137) {
				if (!selectedThree && selectedTwo) {
					modalThree.style.display = 'block';
					answerThree.focus();
				}
			}
		}

		// Item 4
		if (x >= 986 && x <= 1007) {
			if (y >= 220 && y <= 284) {
				if (selectedThree && selectedOne && selectedTwo) {
					console.log('working');
					h1.innerText = ' You Escaped!';
					h3.innerText = '';
					dialogueBox.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0pwcW_9PqoSban3fhoXi7PT6tV4PWYsNuw&usqp=CAU')";
					dialogueBox.style.height = '167px';
					dialogueBox.style.width = '300px';
					dialogueBox.style.marginLeft = '900px';
					dialogueBox.style.marginTop = '700px';
					dialogueBox.style.marginRight = '200px';
					dialogueBox.style.backgroundRepeat ='no-repeat';
					h1.style.fontSize = 'large';
				}
			}
		}
	});
};

escapeRoom();



// //      modal 1       //

spanOne.onclick = function () {
	modalOne.style.display = 'none';
};

// //      modal 2       //

spanTwo.onclick = function () {
	modalTwo.style.display = 'none';
};

// //      modal 3      //

spanThree.onclick = function () {
	modalThree.style.display = 'none';
};

///////////////////////////////////////////////////////////////
window.onclick = function (event) {
	if (event.target == modalOne) {
		modalOne.style.display = 'none';
	}
	if (event.target == modalTwo) {
		modalTwo.style.display = 'none';
	}
	if (event.target == modalThree) {
		modalThree.style.display = 'none';
	}
};




