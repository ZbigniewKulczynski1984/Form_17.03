const form = document.getElementById('form');
const questions = document.querySelectorAll('h2');
const trueInputs = document.querySelectorAll('#true');
const falseInputs = document.querySelectorAll('#false');
const btn = document.getElementById('submit');
const output = document.getElementById('output');
const number = document.querySelector('#number');
const h1 = document.getElementById('h1');

// console.log(trueInputs);
// console.log(falseInputs);

const arrInputs = [...falseInputs];
// console.log(arrInputs[1]);

const arrInputs2 = [...trueInputs];
// console.log(arrInputs2);

const arrQuest = [...questions];

function checkAnswer() {
	if (1 < 2) {
		arrInputs[0].addEventListener('click', test);
		output.textContent = 'Sorry, you are not a Student... Goodbye!!!';
	}
}
checkAnswer();

function checkAnswer2() {
	if (1 < 2) {
		arrInputs[1].addEventListener('click', () => {
			arrQuest[5].remove();
			output.remove()
		});
	}
}
checkAnswer2();

arrQuest[1].addEventListener('keyup', (e) => {
	console.log(e);
	if (
		e.keyCode === 73 ||
		e.keyCode === 84 ||
		e.keyCode === 16 ||
		e.keyCode === 13
	) {
		// e.preventDefault()
	} else {
		test()
		h1.remove();
		btn.remove();
		output.textContent = "You are Student, but seems like You don't study on IT field. Goodbye!!!";
	}
});

number.addEventListener('keyup', (e) => {
	console.log(e);
	if (
		e.keyCode === 49 ||
		e.keyCode === 50 ||
		e.keyCode === 51 ||
		e.keyCode === 52
	) {
		arrQuest[0].remove();
		arrQuest[1].remove();
		arrQuest[2].remove();
		arrQuest[3].remove();
		arrQuest[4].remove();
		arrQuest[5].remove();
		h1.remove();
		output.textContent = 'You study less than 4 years, you can let us know what sport do you like :)';
	}
});

btn.addEventListener('click', () => {
	test()
	h1.remove();
	btn.remove();
	output.textContent = 'Thank you for filling up the form, have a nice day :)';
});

