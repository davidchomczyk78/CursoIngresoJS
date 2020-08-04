/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var promedio;
	

	do{
		numero = parseInt(prompt(" Ingrese un numero"));
		acumulador += numero;		
		contador++;

	    respuesta  = prompt(" quiere seguir ???");	
	}while(respuesta == "si");
	
		
	

	promedio = acumulador /contador;
	document.getElementById("txtIdSuma").value=acumulador;

	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN