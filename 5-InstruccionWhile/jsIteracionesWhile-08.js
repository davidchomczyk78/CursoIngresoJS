/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numero;
	var contador = 0;
	var respuesta = "si"
	var sumaPositivos = 0;
	var multiplicacionNegativos = 1;


	do{
		numero = parseInt(prompt("Ingrese un numero"));
		if(numero <1){
			multiplicacionNegativos *= numero;
		}
		else if (numero >0){
			sumaPositivos += numero;
		}
		
		contador++;
		
		
		respuesta = prompt(" quieere seguir");

	}while(respuesta =="si");

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN