function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var EstadoCivil;
	var Temperatura;
	var bandera = true;
	var temperaturaMasAlta;
	var MayoresDeEdadSolteros;
	var contadorSoltero =0;
	var acumuSoltero = 0;
	var ContadorMujeresSolViu =0;
	var acumuMujeresCaVi =0;
	var contadorTercerEdad = 0;
	var	acumuladorTercerEdad =0;
	var PromedioEdadMujeres;
	var respuesta ="si";

	do{
		nacionalidad = prompt("ingrese la nacionalidad del pasajero");
		nombre = prompt("ingrese nombre");
		edad = parseInt(prompt(" ingrese edad de la persona"));
			while(isNaN(edad)&& edad >18){
		edad = parseInt(prompt(" Error ingrese edad correcta"));		
			}
		sexo = prompt(" ingrese el sexo del pasajero f/m");
			while(sexo !="f" && sexo!="m"){
		sexo = prompt(" Error ingrese correctamente las opciones")		
			}	
		EstadoCivil = prompt(" ingrse estado civil  A. Casado B. Soltero C. Viudo")
			while(EstadoCivil !="A" && EstadoCivil!="B" && EstadoCivil!="C"){
		EstadoCivil = prompt("Error ingrese las opciones correctas ");
			}

		Temperatura = parseInt(prompt(" ingrese temperatura corporal"));
			while(isNaN(Temperatura )&& Temperatura >32){
		temperatura = parent(prompt("ingrese nuevamente temperatura corporal"));
		}
			if(bandera == true && temperatura >38){
				NacioPersonaConMasTempe = nacionalidad;
				temperaturaMasAlta = temperatura;
				bandera = false;
			}	
			if(edad > 17 && EstadoCivil !="C"){
				contadorSoltero+= edad;
				acumuSoltero++;
			}
			if(sexo!="m" && EstadoCivil !="B" || EstadoCivil !="C"){
				ContadorMujeresSolViu += EstadoCivil;
				acumuMujeresCaVi++;

			}
			if(edad >60 && temperatura >38){
				contadorTercerEdad+= edad;
				acumuladorTercerEdad++;
			}
respuesta = prompt(" quiere seguir");
	}while(respuesta == "si");
	document.write("la Nacionalidad de la persona con mas temperatura. " + temperaturaMasAlta + " y su nacionalidad es " + NacioPersonaConMasTempe );


}

