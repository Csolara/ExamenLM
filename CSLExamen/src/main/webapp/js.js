/**
 * 
 */

var basedeDatos = [];

//Esta funcion añade un nuevo envio con todos sus campos correspondientes.
function añadirEnvio() {

	var ID = prompt("Introduzca el ID: ")
	var nombre = prompt("Introduzca el nombre: ");

	var anyo = prompt("Introduzca el año recibido: ")
	var mes = prompt("Introduzca el mes recibido: ")
	var dia = prompt("Introduzca el dia recibido: ")

	var fechaRecibido = new Date(anyo, mes - 1, dia)
	var coste = prompt("Introduzca el coste del envio: ");
	var fechaSalida = new Date(anyo, mes - 1, dia - 5)

	basedeDatos.push(ID);
	basedeDatos.push(nombre);
	basedeDatos.push(fechaRecibido);
	basedeDatos.push(coste);
	basedeDatos.push(fechaSalida);   

	//variable que contiene toda la informacion del envio.
	var todo = (ID + " " + nombre + " " + coste + " " + fechaRecibido + " " + fechaSalida)
	
	document.getElementById("todo").innerHTML = todo

	for (let i = 0; i < basedeDatos.length; i++) {
		alert(basedeDatos[1]);
	}
}

//Esta funcion quita toda la informacion del envio cuyo ID se introduzca.
function quitarEnvio() {

	

}












