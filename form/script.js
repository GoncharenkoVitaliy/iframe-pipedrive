'use strict';

const form = document.querySelector('#form');
form.addEventListener('submit', formSend);
const objData = {};

function formValidate(formRequest) {
	let validData = true;
	formRequest.forEach((element) => {
		formRemoveError(element);
		if (element.value === '') {
			formAddError(element);
			validData = false;
		}
	});
	return validData;
}

function formAddError(input) {
	input.setAttribute('required', '');
	input.classList.add('_error');
}

function formRemoveError(input) {
	input.classList.remove('_error');
	input.removeAttribute('required');
}

async function formSend(event) {
	event.preventDefault();
	let formRequest = document.querySelectorAll('._req');
	const validData = formValidate(formRequest);

	if (validData) {
		const input = form.querySelectorAll('.data');
		
		input.forEach((elem) => {
			objData[elem.name] = elem.value;
		});

		window.parent.postMessage({ type: 'formData', data: objData }, '*');
		
		const buttonSubmit = document.querySelector('.create-job');
		buttonSubmit.textContent = 'Request is sent';
	}
}