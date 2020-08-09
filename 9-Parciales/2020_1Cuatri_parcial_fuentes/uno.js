
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
	var AlcoholMaBarto;
	var contadorAlcohol = 0;
	var contadorBarbijo =0;
	var contadorJabon =0;
	var acumuladordAlcohol = 0;
	var acumuladorBarbijo =0;
	var acumuladorJabon =0;
	var PrimerAlcohol = 0;
	var cantidadAlcoholBarato;
	var FabricanteMasBarato;
	var precioAlcoholBarato;
	var mayorTipo;
	var promedioCantidad;
	var mensajeAlcohol = " Nose compraron alcoholes ";
	

	for(var i =0 ; i <5 ; i++){

		tipo = prompt(" elija su opcion A.(Barbijo) B.(Jabon) C(Alcohol) ");
			while(tipo !="A" || tipo!="B" || tipo!="C"){
		tipo = prompt(" Error ingrese las opciones correctas");		
			}
		precio = parent(prompt(" ingrese un precio desde 100 hasta 300"));
			while(isNaN(precio)|| precio <100 || precio>300){		
		precio = parent(prompt(" Error ingrese bien los importes"));
			}	
		cantidad = parent(prompt(" ingrese la cantidad de unidades entre 1 y 1000"));
			while(isNaN(cantidad)&& cantidad <1 && cantidad >1000 ){
		cantidad = parent(prompt(" Error ingrese nuevamente las unidades"));
			}	
		marca = prompt("ingrese marca del producto");
		fabricante = prompt(" ingrese el fabricante");
			// punto A.
		switch(tipo){
			case "Alcohol":
				acumuladordAlcohol+= cantidad;
				contadorAlcohol++;

				if(PrimerAlcohol == 0 || precioAlcoholBarato > precio){
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					FabricanteMasBarato = fabricante;
					PrimerAlcohol = 1;
				}


				break;
			case "Barbijo":
				acumuladorBarbijo+= cantidad;
				contadorBarbijo++;

				break;	
			case "Jabon":
				acumuladorJabon+= cantidad;
				contadorJabon++;

				break;
		}//switch cierre

	}// for cierre
				if(acumuladordAlcohol > acumuladorBarbijo && acumuladordAlcohol > acumuladorJabon){
						mayorTipo = "Alcohol";
						promedioCantidad = acumuladordAlcohol / contadorAlcohol;

				}
				else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladordAlcohol)
				{
					mayorTipo = "Barbijo";
					promedioCantidad = acumuladorBarbijo / contadorBarbijo;

				}
				else {
					mayorTipo = "Jabon";
					promedioCantidad = acumuladorJabon / contadorJabon;

				}
				

	document.write(" del mas barato de los alcoholes  " + precioAlcoholBarato + " la cantidad de unidades son " + cantidadAlcoholBarato + " y el fabricante mas barato es " + FabricanteMasBarato);
	document.write(" la cantidad de unidades de jabones en total son " + acumuladorJabon);
	document.write(" el p")

}
