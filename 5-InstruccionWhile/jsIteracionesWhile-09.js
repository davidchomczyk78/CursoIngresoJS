/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero = true;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta = 'si';
	var contador = 0;

	do{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("ingrese un numero"));	
			contador ++;
			acumulador +=numeroIngresado;
		}

		if(banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;

		}else if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroMaximo;
		}
		else if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado; 

		}

        respuesta = prompt("quiere seguir");
           
	}while(respuesta == 'si')	;
	
	
	
		


document.getElementById("txtIdMaximo").value = numeroMaximo;
document.getElementById("txtIdMinimo").value = numeroMinimo;
			
}