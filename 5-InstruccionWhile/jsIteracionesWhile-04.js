/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var contador = 0;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

		while(isNaN(numeroIngresado) <=0 && isNaN(numeroIngresado) >=9){
	numeroIngresado = parseInt(prompt(" ingrese corrctamente los numeros"));
	
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
	
}//FIN DE LA FUNCIÓN