
function mostrar()
{
/*

var sexo;
var altura;
var edad;
var nombre;
var respuesta="si";
var NombreAltaMujer;
var primerMujer = true;
var primerViejo = true;
var PrimerAdolecente = true;
var EdadMasViejo;
var MasAltaMujer;
var NombreMasViejo;
var NombrePrimerAdo;
var EdadAdolecente;
var acumuladorMujer =0;
var acumuladorHombre =0;
var acumuladorEdad =0;
var contadorAdole =0;
var contador =0;
var contadorEdad = 0;
var mensajeAdolecente = " A- No se incluyo ninguna dolecente";
var mensajeNomViejo;
var mensajeAlta;

respuesta ="si"
while(respuesta =="si")
{
			sexo = prompt(" ingrese sexo de la presona 'f' / 'm' ");
				while(sexo !="f" && sexo!="m")
				{
			sexo = prompt(" Error seleccione bien sus opciones");
				}
			altura = parseInt(prompt(" ingrese altura deseada"));
				while(isNaN(altura))
				{
			altura = parent(prompt(" Ingrese bien lo sujerido"));	
				}
			edad = parseInt(prompt("ingrese edad deseada"));
				while(isNaN(edad)){
			edad = parseInt(prompt("Error ingrese edad numero"));
				}
			nombre = prompt("ingrese un nombre el q mas te gusta");	

				if(primerMujer == true && sexo!="m")
				{	
					acumuladorMujer+=nombre;
					contador++;
					MasAltaMujer = altura;
					NombreAltaMujer = nombre;
					primerMujer = false;
					
				}	
				
				if(primerViejo == true || EdadMasViejo > nombre)
				{
					acumuladorHombre+=nombre;
					contadorEdad++;
					NombreMasViejo = nombre;
					EdadMasViejo = edad;
					primerViejo = false;
					
				}	
				if(PrimerAdolecente == true || edad <13 || edad >17)
				{

                    acumuladorEdad+=edad;
					contadorAdole++;
					EdadAdolecente = edad;
					NombrePrimerAdo = nombre;
					PrimerAdolecente = false;
					
				}
				
				
			
		
        respuesta = prompt("quiere seguir");
}//while	

			if(PrimerAdolecente == true){
				mensajeAdolecente = "A- No se incluyo ningun adolecente " + EdadAdolecente ;
			
			}
			mensajeAlta = "B- el Nombre de la mas alta " + MasAltaMujer;
			mensajeNomViejo = " C- El hombre mas viejo " + NombreMasViejo;
			alert(mensajeAdolecente + "\n" + mensajeAlta + "\n" + mensajeNomViejo);

}

*/
var tipo;
var precio;
var cantidad;
var marca;
var fabricante;
var AlcoholMasBarato;
var cantidadAlcoholBarato;
var fabricanteAlcoholBarato;
var acumuAlcoholBarato = 0;
var contadorAlcoBarato = 0;
var acumuladorBarbijo =0;
var acumuladorJabon =0;
var contadorBarbijo =0;
var contadorJabon =0;
var MayorTipo;
var PromedioCompra;
var PrimerAlcohol = 0;
var mensajeAlcohol =" A - no hay alcohol ingresado";
var mensajeBar;
var mensajeJabon;

	for(var i = 0; i <3 ; i++){

		tipo = prompt(" ingrese el tipo de producto A. 'Barbijo' B. 'Jabon' C. 'Alcohol'");
			while(tipo !="Barbijo" && tipo !="Jabon" && tipo!="Alcohol")
			{
		tipo = prompt("Error ingrese una opcion seleccionada");
			}
			
		precio = parseFloat(prompt(" ingrese importe del producto  desde 100 hasta 300"));
			while(isNaN(precio)|| precio <100 || precio >300)
			{
				precio = parseFloat(prompt(" Error ingrese importe del producto  desde 100 hasta 300"));
			}
		cantidad = parseInt(prompt(" Ingrese la cantidad de producto 1 hasta 1000"));
			while(isNaN(cantidad)|| cantidad <1 || cantidad >1000)
			{
		cantidad = parseInt(prompt(" Error Ingrese la cantidad de producto 1 hasta 1000"));	
			}
			
		marca = prompt(" ingrese la marca del producto");
		fabricante = prompt (" ingrese el fabricante del producto");

			switch(tipo){
				case "Alcohol":// A-mas barato  alcohol cantidad, y fabricante
					if(PrimerAlcohol == 0)
					{

						acumuAlcoholBarato+=cantidad;
						contadorAlcoBarato++;
						AlcoholMasBarato = precio;
						cantidadAlcoholBarato = cantidad;
						fabricanteAlcoholBarato = fabricante;
						PrimerAlcohol = 1;
					}

					break;
				case "Barbijo":
						acumuladorBarbijo+=cantidad;
						contadorBarbijo++;

					break;
					// C- cantidad de jabones
				case "Jabon":
						acumuladorJabon+=cantidad;
						contadorJabon++;

					break;		

			}//switch

	}// for
	// B-tipos de unidades y promedios
		if(acumuAlcoholBarato > acumuladorBarbijo && acumuAlcoholBarato > acumuladorJabon)
		{
				MayorTipo = "Alcohol";
		        promedioCompra = acumuAlcoholBarato / contadorAlcoBarato;
     	}
		else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >=acumuAlcoholBarato )
		{
				MayorTipo ="Barbijo";
				PromedioCompra = acumuladorBarbijo / contadorBarbijo;
	    }
		else
		{
		       MayorTipo = "Jabon";
		       PromedioCompra = acumuladorJabon / contadorJabon;

		}
		
		if(PrimerAlcohol == 1)
		{
			mensajeAlcohol = " A- el fabricante de alcohol barato " + fabricanteAlcoholBarato +
		    "\nCantidad" + cantidadAlcoholBarato +
			"\nPrecio" + AlcoholMasBarato;

		}	
			mensajeBar = " B- el tipo con mas unidades " + MayorTipo + " promedio " + promedioCompra;
			mensajeJabon = " C- unidades de jabon " + acumuladorJabon;

			alert(mensajeAlcohol + "\n" + mensajeBar + "\n" + mensajeJabon);



}
