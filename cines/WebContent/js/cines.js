/*
 * 	Si los datos del formulario son correctos llama a otra
 *  funcion para calculas el precio de la entrada del cine
 *  @return: pinta en #precio el precio seguido de €
 */

function calcularEntrada(){

	// objeto.value retorna su valor
	var opcion = document.getElementById("listaDias").value;
	var edad = document.getElementById("edad").value;
	console.info("dia seleccionado: " + opcion);
	console.info("Edad: " + edad);
	if (!isNaN(edad)){
		
		//objeto.innerHTML modifica el HTML interno del objeto
		
		var precio = document.getElementById("precio");
		precio.innerHTML=calcular(opcion,edad)+'€';
	}
	else {
		document.getElementById("edad").innerHTML='16';
	}
} 

/*
 *	Calcula el precio de las entradas de los cines Cinesa
 *	@param edad: edad de la persona, en formato numérico entero
 *  @param dia: dia de la semana (lunes, martes, miercoles,jueves,viernes,sabado,domingo)
 *	@return precio
 *
 */

function calcular(dia,edad){
	var resultado=0;

	
	if ((edad<0)||(typeof(edad)=="undefined")||(edad % 1 != 0)) return 8888;
	switch (dia){
		case 'lunes':
			if (edad>=0 && edad<=35) resultado=2
			else resultado=5;
			break;
		case 'martes':
			if (edad>=0 && edad<=25) resultado=2
			else if (edad>25 && edad<=50) resultado=5
				else resultado=7;
			break;
		case 'miércoles':
			if (edad>=0 && edad<=18) resultado=3
			else if (edad>18 && edad<=50) resultado=5
			else resultado=8;
			break;
		case 'jueves':
			if (edad>=0 && edad<=18) resultado=5
			else resultado=7;
			break;
		case 'viernes':
		case 'sabado':
		case 'domingo':
			resultado=10;
			break;
		default:
			resultado=99;
		}//switch
	return resultado;
}//end:calcular_entrada


