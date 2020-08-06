
function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var AlcoholMaBarto;
	var contadorAlcohol = 0;
	var cantidadAlcohol;
	var PrimerAlcohol = true;
	var FabricanteMasBarato;
	var Cantidadjabon =0;

	for(var i =0 ; i >5 ; i++){

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
			
		if(tipo =="B" && (PrimerAlcohol == true) && AlcoholMaBarto < precio ){
			AlcoholMaBarto = precio;
			FabricanteMasBarato = fabricante;
			cantidadAlcohol = cantidad;
			PrimerAlcohol = false;

		}
		if(tipo == "Jabon"){
			Cantidadjabon += cantidad;

		}




	}
	document.write("")

}
