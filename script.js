'use strict';

const form = document.querySelector('#form');
form.addEventListener('submit', formSend);

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
	const objData = {};

	if (validData) {
		const input = form.querySelectorAll('.data');

		input.forEach((elem) => {
			objData[elem.name] = elem.value;
		});

		const buttonSubmit = document.querySelector('.create-job');
		buttonSubmit.textContent = 'Request is sent';

		saveData(objData);
	}
}

function saveData(objData) {
	const link = 'https://api.pipedrive.com/v1/deals?api_token=YOUR_API_TOKEN';
	console.log('objData:', objData);

	fetch(link, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: 'New deal',
			value: objData
		})
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => console.log(data))
	.catch(error => console.error('Fetch error:', error));
}