'use strict';

// function saveData() {
// 	fetch('https://api.pipedrive.com/v1/deals?api_token=YOUR_API_TOKEN', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			title: 'New deal',
// 			value: objData
// 		})
// 	})
// 		.then(response => response.json())
// 		.then(data => console.log(data))
// 		.catch(error => console.error('Error:', error));
// }

// window.addEventListener('message', function (event) {
// 	if (event.data && event.data.type === 'formData') {
// 		const objData = event.data.data;
// 		saveData(objData);
// 	}
// });

// pipedriveUI.modal.openByName('NEW Create a job three');

// function saveData() {
// 	const link = 'https://goncharenkovitaliy.github.io/iframe-pipedrive/?code=13525530.21566062.3414aafa12ac87d2317a1241a393e0d952c21a3e';
// 	// console.log('objData:', objData);

// 	fetch(link, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			title: 'New deal',
// 			// value: objData
// 		})
// 	})
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error('The network response was incorrect');
// 		}
// 		console.log('response', response);
// 		return response.json();
// 	})
// 	.catch(error => console.error('Fetch error:', error));
// }