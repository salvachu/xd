const axios = require("axios");

const url_register  = "https://mj8h12vo9d.execute-api.us-east-1.amazonaws.com/dev/mod-reserva";

const headers = {
	'Content-Type':'application/json'
};

async function test(){
	const info = {
		correo:"joel@gmail.com",
        reserva_id:"784d9e87-7ddd-45f3-b116-ddcf36582b5c",
        nuevo_estado:"nose",
		token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJqb2VsQGdtYWlsLmNvbSIsImlhdCI6MTcyOTcyNjA0MiwiZXhwIjoxNzI5NzM2ODQyfQ.IAdg3r7RZo3vHH4Kpw5DHVmELQj_Oe1777JDcQfsUOQ"
	};
	const json_data = {
		httpMethod:"POST",
		path:"/mod-reserva",
		body: JSON.stringify(info)
	}
	const method = 'POST';
	axios({
		method: method,
		url: url_register,
		headers: headers,
		data: json_data
	}).then(response => {
		console.log(response);
		return response;
	}).catch(error => {
		console.log("ERROR: ",error);
	});
}

console.log(test());

module.exports.test = test;


