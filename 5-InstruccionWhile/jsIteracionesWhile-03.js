/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada = "utn750" ;
	var contador =0;

	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750"){
		
contador ++;
		if(contador ==3){
			alert(" ya no tenes mas intentos");
		break;
		}
	
	     claveIngresada = prompt("ingrese la clave correcta.");
		
	}
alert("bienvenido");
	
}//FIN DE LA FUNCIÓN
