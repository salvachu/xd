const axios = require("axios");

const url_register  = "https://h8019u59m4.execute-api.us-east-1.amazonaws.com/dev/get-vehiculos";

const headers = {
	'Content-Type':'application/json'
};

async function test(){
	const info = {
        parametro:"tipo_transporte",
        valor:"camión"
	};
	const json_data = {
		httpMethod:"GET",
		path:"/get-vehiculos",
		body: JSON.stringify(info)
	}
	const method = 'GET';
	axios({
		method: method,
		url: url_register,
		headers: headers,
		data: json_data
	}).then(response => {
		console.log(response.data.body);
		return response
	}).catch(error => {
		console.log("ERROR: ",error);
	});
}

console.log(test());

module.exports.test = test;
