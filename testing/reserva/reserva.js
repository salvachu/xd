const axios = require("axios");

const url_register  = "https://mj8h12vo9d.execute-api.us-east-1.amazonaws.com/dev/reserva";

const headers = {
	'Content-Type':'application/json'
};

async function test(){
	const info = {
		correo_user:"joel@gmail.com",
        correo_driver:"joel@jimenez.com",
        telefono_driver:"985917984",
        inicio:"Av. Principal 123",
        llegada:"Calle Secundaria 456",
        metodo_de_pago:"efectivo",
        placa:"TUMAMA2",
        fecha:"2024-10-25",
        hora:"08:00",
        precio:"150",
        comentarios:"Carga Fragil, porfavor maximo cuidado",
		token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJqb2VsQGdtYWlsLmNvbSIsImlhdCI6MTcyOTcyNjA0MiwiZXhwIjoxNzI5NzM2ODQyfQ.IAdg3r7RZo3vHH4Kpw5DHVmELQj_Oe1777JDcQfsUOQ"

	};
	const json_data = {
		httpMethod:"POST",
		path:"/reserva",
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


