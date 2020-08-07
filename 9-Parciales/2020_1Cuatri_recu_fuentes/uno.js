
function mostrar()
{
var cantidad;	
var producto;
var precio;
var marca;
var fabricante;
var EsprimerJabon = true;
var CantidadJabon = 0;
var CantidadBarbijo = 0;
var acumuladorBarbijos =0;
var FabriJabonMasCaro ;
var PrecioMasCaroJabon;
var TipoProducMasUni;
var EsprimerProducto = true;
var promedioProducto;

 for(var i = 0; i < 2; i++){
	 producto = prompt("ingrese un producto  A.Barbijo .B jabon . C Alcohol");
	 while(producto != "A" && producto !="B" && producto !="C"){
		 producto = prompt(" Ingrese correctamente los productos");
		 } 
	precio = parseInt(prompt(" Ingrese importe de un valor entre 100 y 300"));
		while(isNaN(precio)|| precio < 100 || precio >300){
		precio = parseInt(prompt(" Error Ingrese el precio correcto"));	
		}	 
	cantidad = parseInt(prompt(" Ingrese la cantidad limite desde 1 hasta 1000"));
		while(isNaN(cantidad)|| cantidad <1 || cantidad >1000){
		cantidad = parseInt(prompt(" Error ingrese la cantidad correcta"));	
		}	
	marca = prompt(" Ingrese marca del producto");
	fabricante = prompt(" Ingrese fabricante del producto");

// a: mas caro de los barbijo  ,,cantidadde uni. y fabricante	
		if(EsprimerJabon == true || PrecioMasCaroJabon > precio ){
			PrecioMasCaroJabon = precio;
			FabriJabonMasCaro = fabricante;
			CantidadJabon = cantidad;
			EsprimerJabon = false;

		}//c. unidades de barbijo
		else if(producto =="A"){
			CantidadBarbijo += cantidad;
			acumuladorBarbijos++;
		}// b tipo de producto y promedio
		if( EsprimerProducto == true && TipoProducMasUni > cantidad){
			TipoProducMasUni = cantidad;
			EsprimerProducto = false;

		}


 }	
 promedioProducto = TipoProducMasUni / cantidad;

 document.write("el mas caro de los jabones es " + PrecioMasCaroJabon + "<br>" + " la cantidad de unidades " + CantidadJabon + "<br>" + " y el fabricante " + FabriJabonMasCaro );
 document.write(" el tipo de procducto  con mas unidades es " + TipoProducMasUni + "<br>" + " y el promedio por compra fue de " + promedioProducto);
 document.write(" las cantidad de unidades de barbijos fueron " + CantidadBarbijo);
}
