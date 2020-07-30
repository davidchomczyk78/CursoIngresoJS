function mostrar()
{
	var contador = 0;;
	var acumulador =0;
	var promedio;
	var numero;


         while(contador <5){
			 
	            numero = parseInt(prompt(" Ingrese un numero"));
		acumulador = acumulador + numero;
				
		contador++;
	

		}
		promedio = acumulador /5;
	
	document.getElementById("txtIdSuma").value=acumulador;

	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN
