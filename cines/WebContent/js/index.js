/*
	Pimer JavaScript para trastera con el 

	version:  1.0
	author:   Ander Uraga Real
	date: 	  20150518


*/

//array con todos los afortunados

var afortunados = [
					"Profe", 
					"Javier", 
					"Cristina",
					"Jorge",
					"Mihai",
					"Ieltxu",
					"Aritz",
					"Ander",
					"Javi",
					"Jon",
					"Raul",
					"Jaione",
					"David",
					"Lara",	
					"", //sitio sin ocupar		
					"Unai",
					"Mikel"
				];

function init(){
	//alert( 'onload body ok');
	
	
	//set o guardar valor
	localStorage["l1"] = "pepe";
	localStorage.setItem ("l2", "pepa");
	
	//se pierde si cerramos el navegador
	sessionStorage.setItem ("s1", "se pierde si cerramos el navegador");
	
	
	//recuperar valor por su Key	
	console.debug ( localStorage["l1"] );
	console.debug ( localStorage.getItem ("l2") );
	
	//eliminar elemento
	//localStorage.removeItem("l2");
	//console.debug (" Cuidaddo que hemos eliminado a PEPA");
	
	
	var listado_keys = Object.keys(localStorage);
	
}

	
	
	
	
function allStorage(){

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0;

    for (; i < keys.length; i++) {
        archive.push( localStorage.getItem(keys[i]) );
    }

    return archive;
}

/**
  genera un numero aleatorio entre el 1 y 15	
  lo muestra en el <label> con id='afortunado'
*/
function obtener_ganador(){
	console.debug('click ok');
	
	//console.debug( afortunados[0] );
	//console.debug( afortunados[15] );
	console.debug( 'Todos los afortunados son : ' + afortunados.length );
	for (i = 0; i < afortunados.length; i++) { 
		
		console.debug( 'posicion:' + i + ' persona:' + afortunados[i] );
	}
	
	
	
	var lb_afortunado = document.getElementById('afortunado');
	var num_aleatorio = Math.floor(Math.random() * (afortunados.length-1) ) + 1;
	
	//como tenemos un sitio sin ocupar a partir del alumno 14, sumamos uno
	if ( num_aleatorio >= 14 ){
		num_aleatorio++;
	}
	
	lb_afortunado.innerHTML = num_aleatorio + ' - ' + afortunados[num_aleatorio];
	
	//declaramos variable para recoger todas las celdas de la pagina
	var celdas = document.getElementsByTagName('td');
	//recorremos todas las celdas
	for (i = 0; i < celdas.length; i++) { 
		//cambiamos su estilo y ponemos color de fondo white
		celdas[i].style.backgroundColor = '#FFF';
	}
	
	celdas[num_aleatorio].style.backgroundColor = '#7c01f6';
	celdas[num_aleatorio].style.color = '#FFF';
	
	
}

 











