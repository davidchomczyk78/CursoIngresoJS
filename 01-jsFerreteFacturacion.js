/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioUno;
   
    var PrecioDos;
    
    var PrecioTres;
  
    var Sumar;
    
     PrecioUno = txtIdPrecioUno.value;
     PrecioDos = txtIdPrecioDos.value;
     PrecioTres = txtIdPrecioTres.value;
     PrecioUno = parseInt(PrecioUno);
     PrecioDos = parseInt(PrecioDos);
     PrecioTres = parseInt(PrecioTres);
        Sumar = PrecioUno + PrecioDos + PrecioTres;

       alert("la suma de los precios es de " + Sumar);

} 

function Promedio () 
{
	  var PrecioUno;
   
    var PrecioDos;
    
    var PrecioTres;
  
    var Sumar;
    var promedio;
    
     PrecioUno = txtIdPrecioUno.value;
     PrecioDos = txtIdPrecioDos.value;
     PrecioTres = txtIdPrecioTres.value;
     PrecioUno = parseInt(PrecioUno);
     PrecioDos = parseInt(PrecioDos);
     PrecioTres = parseInt(PrecioTres);
        Sumar = (PrecioUno + PrecioDos + PrecioTres) /3;
        promedio = Sumar;
        
       alert("El promedio tptal seria de : " + promedio);
}
function PrecioFinal () 
{
    var PrecioUno;
   
    var PrecioDos;
    
    var PrecioTres;
  
    var Sumar;
    var iva;

    
     PrecioUno = txtIdPrecioUno.value;
     PrecioDos = txtIdPrecioDos.value;
     PrecioTres = txtIdPrecioTres.value;
     PrecioUno = parseInt(PrecioUno);
     PrecioDos = parseInt(PrecioDos);
     PrecioTres = parseInt(PrecioTres);
        Sumar = (PrecioUno + PrecioDos + PrecioTres);
        iva  = Sumar * 0.21;
        precioConIva = iva;
        
       alert("la suma en total seriA de: " + Sumar +" mas el iva de" + iva);
}