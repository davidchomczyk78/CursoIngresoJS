function mostrar()
{
  var tipo;
  var cantidadBolsa;
  var precioPorBolsa;
  var respuesta = "si";
  var precioBrutoTotal;
  var acumuladorbolsa = 0;
  var acumuladorArena =0;
  var acumuladorCal =0;
  var acumuladorCemento =0;
  var precioTotalConDescuento;
  var primeraBolsa = 0;
  var CantidadMasBolsas;
  var TipoMasCaro;
  var tipoConMasCantidadBolsa;
  var descuento;

  do{

  tipo = prompt(" ingrese el prodcuto sea : Arena /  Cal / Cemento ");
    while(tipo !="Arena" && tipo!="Cal" && tipo!="Cemento")
    {
  tipo = prompt(" Error ingrese los productos correctos");  
    }
  cantidadBolsa = parseInt(prompt(" ingrese la cantidad de bolsas"));
    while(isNaN(cantidadBolsa) || cantidadBolsa <1)
    {
  cantidadBolsa = parseInt(prompt(" ERrror ingrese la opcion "));    
    }
  precioPorBolsa = parseInt(prompt(" ingrese el precio por bolsa"));
    while(isNaN(precioPorBolsa)|| precioPorBolsa <1) 
    {
  precioPorBolsa = parseInt(prompt(" Error ingrese la cantidad pedida"));
    } 
    acumuladorbolsa += cantidadBolsa;
    precioBrutoTotal = precioPorBolsa + cantidadBolsa;

    if(primeraBolsa == true &&   tipoConMasCantidadBolsa > cantidadBolsa ){
      tipoConMasCantidadBolsa = cantidadBolsa;
      primeraBolsa = false;
    }
      


     switch(tipo){
       case "Arena":
         acumuladorArena+=CantidadMasBolsas;
        

         break;
       case "Cal":
         acumuladorCal+=cantidadBolsa;

         break;
       case "Cemento":
         acumuladorCemento+=cantidadBolsa;
         break;    
     }
    



respuesta = prompt("quiere seguir");
}while(respuesta =="si");



if(cantidadBolsa > 10)
{
  descuento = 15;
}
else
 if(cantidadBolsa > 30)
{
  descuento = 25;
}else{
  descuento = 0;
}






}
