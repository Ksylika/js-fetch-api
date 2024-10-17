const response1 = fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
.then(response => response.json().then(data => console.log(data)))
.catch(error => console.log(error));


const response2 = fetch('https://petstore3.swagger.io/api/v3/pet/findByTags?tags=tag1')
.then(response => response.json().then(data => console.log(data)))
.catch(error => console.log(error));



const response3 = fetch('https://petstore3.swagger.io/api/v3/pet/1')
.then(response => response.json().then(data => console.log(data)))
.catch(error => console.log(error));


const response4 = fetch('https://petstore3.swagger.io/api/v3/store/inventory')
.then(response => response.json().then(data => console.log(data)))
.catch(error => console.log(error));
