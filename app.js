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