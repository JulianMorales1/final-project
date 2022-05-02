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

	//let booksAnswered = false;
	let selectedOne = false;
	let selectedTwo = false;
	let selectedThree = false;

	// for image
	const img = document.getElementById('main-image');
	const offsetTop = img.offsetTop;
	const offsetLeft = img.offsetLeft;

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


	img.addEventListener('click', function (event) {
		

		console.log(event.clientX - offsetLeft);
		console.log(event.clientY - offsetTop);

		let x = event.clientX - offsetLeft;
		let y = event.clientY - offsetTop;

		//  Please, check coordinates with console logs for correct x y coordinates based on monitor size

		// 590 175
		// 812 144

		// Modal 1
		if (x >= 971 && x <= 1077) {
			if (y >= 312 && y <= 375) {
				if (!selectedOne && !selectedTwo) {
					modalOne.style.display = 'block';
				}
			}
		}


		// Modal 2
		if (x >= 615 && x <= 814) {
			if (y >= 105 && y <= 214) {
				if (!selectedTwo && selectedOne) {
					modalTwo.style.display = 'block';
				}
			}
		}

		// Modal 3
		if (x >= 356 && x <= 404) {
			if (y >= 61 && y <= 101) {
				if (!selectedThree && selectedTwo) {
					modalThree.style.display = 'block';
				}
			}
		}

		// Item 4
		if (x >= 741 && x <= 770) {
			if (y >= 161 && y <= 211) {
				if (!selectedThree) {
					console.log('working here');
					dialogueBox.style.backroundImage =
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0pwcW_9PqoSban3fhoXi7PT6tV4PWYsNuw&usqp=CAU';
				}
			}
		}

		// output.innerHTML =
		// '(' + event.clientX - offsetLeft + ', ' + event.clientY - offsetTop + ')';
	});
};

escapeRoom();



// //      modal 1       //

submitOne.onclick = function () {
	modalOne.style.display = 'block';
};

spanOne.onclick = function () {
	modalOne.style.display = 'none';
};


// //      modal 2       //

submitTwo.onclick = function () {
	modalTwo.style.display = 'block';
};

spanTwo.onclick = function () {
	modalTwo.style.display = 'none';
};

// //      modal 3      //

submitThree.onclick = function () {
	modalThree.style.display = 'block';
};

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


