'use strict';

function saveData(objData) {
	fetch('https://api.pipedrive.com/v1/deals?api_token=YOUR_API_TOKEN', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: 'New deal',
			value: objData
		})
	})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error('Error:', error));
}

window.addEventListener('message', function (event) {
	if (event.data && event.data.type === 'formData') {
		const objData = event.data.data;
		saveData(objData);
	}
});