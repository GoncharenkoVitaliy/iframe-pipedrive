"use strict"

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

function formAddError(element) {
	element.setAttribute('required', '');
	element.classList.add('_error');
}

function formRemoveError(element) {
	element.removeAttribute('required');
	element.classList.remove('_error');
}

async function formSend(event) {
	event.preventDefault();

	const formRequest = document.querySelectorAll('._req');
	const validData = formValidate(formRequest);
	const objData = {};

	if (validData) {
		const input = form.querySelectorAll('.data');

		input.forEach((elem) => {
			objData[elem.name] = elem.value;
		});

		const buttonSubmit = document.querySelector('.create-job');
		buttonSubmit.textContent = 'Request is sent';
		buttonSubmit.style.background = 'red';

		saveData(objData);
	}
}

function saveData(objData) {
	const link = 'https://goncharenkovitaliy.github.io/iframe-pipedrive/?code=13525530.21566062.86af426f50b7a1bf8250371b477ac7c19af68c5a';
	// console.log('objData:', objData);

	fetch(link, {
		method: 'POST',
		client_id: '66ebd1fa62e84fbb',
		client_secret: '90ec2d3231f61cccd92890e50104817cf8a47550',
		api_token: 'bed5a485c9d152488ae0c9cc8adfac328142e0d3',
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
			throw new Error('The network response was incorrect');
		}
		console.log('response', response);
		return response.json();
	})
	.catch(error => console.error('Fetch error:', error));
}