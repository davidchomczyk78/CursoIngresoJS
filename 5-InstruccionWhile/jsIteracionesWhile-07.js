/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = 's';
	var promedio;
	

	do{
		numero = parseInt(prompt(" Ingrese un numero"));
		acumulador = acumulador + numero;		
		contador++;

	    respuesta  = prompt(" quiere seguir ???");	
		
	}while(respuesta == 's')

	promedio = acumulador /contador;
	document.getElementById("txtIdSuma").value=acumulador;

	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN