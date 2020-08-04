/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var contador =0;
	var acumulador =0;
	var numeroIngresado;
	var sumaNegativos= 0;
	var sumaPositivos =0;
	var CantidadNegativos =0;
	var CantidadPositivos =0;
	var CantidadCeros = 0;
	var CantidadPar =0;
	var PromedioPositivos =0;
	var PromedioNegativos =0;
	var BanderaPosiNega = true;
	var respuesta ="si";
/*
	respuesta="si";

	*/do{
	    numeroIngresado = parseInt(prompt(" Ingrese un numero"));

		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("  Error Ingrese un numero"))

		}
		if(numeroIngresado == 0){
			CantidadCeros++;
          }
		else if(numeroIngresado < 0){
			sumaNegativos += numeroIngresado;
			CantidadNegativos++;
		}
		else if(numeroIngresado > 0){
			sumaPositivos +=numeroIngresado;
			CantidadPositivos++;
		}
		
	       if(numeroIngresado %2 == 0){
			CantidadPar++;
		}
		if(BanderaPosiNega == true){
			numeroIngresado = CantidadPositivos;
			numeroIngresado = CantidadNegativos;
			BanderaPosiNega = false;

		}
		/*
		else if(CantidadPositivos > 0){
			CantidadPositivos = numeroIngresado;

		}
		else if( CantidadNegativos < 0){
			CantidadNegativos = numeroIngresado;
		}
	
		*/
		
		
	
		contador ++;
		acumulador+=numeroIngresado;
		
		respuesta=prompt("desea continuar?");
	}while(respuesta=="si");
	PromedioPositivos = sumaPositivos/CantidadPositivos;
	PromedioNegativos =  sumaNegativos/CantidadNegativos;

	document.write("la suma de negativos es :"+ sumaNegativos + " <br>");
	document.write(" la suma de los positivos son:"+ sumaPositivos + "<br>");
	document.write(" La cantidad de negativos son:" + CantidadNegativos + "<br>");
	document.write(" La cantidad de positivos son:" + CantidadPositivos + "<br>");
	document.write(" La cantida de ceros son:"+ CantidadCeros + " <br>");
	document.write(" La cantidad de numeros pares son:"+ CantidadPar + "<br>");
	document.write(" el promedio de positivos son:" + PromedioPositivos  + "<br>");
	document.write(" el promedio de negativos son:" +PromedioNegativos + "<br>");
}//FIN DE LA FUNCIÓN