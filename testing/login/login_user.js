const axios = require("axios");

const url_register  = "https://z9i523elr0.execute-api.us-east-1.amazonaws.com/dev/login";

const headers = {
	'Content-Type':'application/json'
};

async function test(){
	const info = {
		correo:"joel@gmail.com",
		password:"joel123",
	};
	const json_data = {
		httpMethod:"POST",
		path:"/login-user",
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
