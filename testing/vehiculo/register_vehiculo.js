const axios = require("axios");

const url_register = "https://h8019u59m4.execute-api.us-east-1.amazonaws.com/dev/register-vehiculo";

const headers = {
	'Content-Type': 'application/json'
};

async function test() {
	const info = {
		telefono: "985917984",
		placa: "NADA",
		correo_conductor: "joel@jimenez.com",
		nombre_conductor: "Joel Jimenez",
		tipo_carga: "Material Radioactivo",
		tipo_transporte: "Furgon",
		dimensiones: {
			largo: "10",
			ancho: "2.5",
			altura: "3"
		},  //no olvidar que este es token de conductor
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJqb2VsQGppbWVuZXouY29tIiwibm9tYnJlX2NvbmR1Y3RvciI6ImpvZWwiLCJpYXQiOjE3Mjk3Mjc1MzcsImV4cCI6MTcyOTczODMzN30.Bgg4d5l4ammu8427zm3MbXPDk_NFvihMyn7kS8wGf-s"
    };

	const json_data = {
		httpMethod: "POST",
		path: "/register-vehiculo",
		body: JSON.stringify(info)
	};

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
		console.log("ERROR: ", error);
	});
}

console.log(test());

module.exports.test = test;
