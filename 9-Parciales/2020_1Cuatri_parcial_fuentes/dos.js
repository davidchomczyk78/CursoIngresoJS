function mostrar()
{
  var tipo;
  var cantidadBolsa;
  var precioPorBolsa;
  var respuesta = "si";
  var precioBrutoTotal;
  var acumuladorbolsa = 0;
  var precioTotalConDescuento;
  var CantidadMasBolsas;
  var TipoMasCaro;
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

    precioBrutoTotal = precioPorBolsa + cantidadBolsa;

        if(cantidadBolsa > 10)
        {
          descuento = 15;
        }
        else if(cantidadBolsa > 30)
        {
          descuento = 25;
        }
    

acumuladorbolsa += cantidadBolsa;

respuesta = prompt("quiere seguir");
}while(respuesta =="si");
alert(descuento);

}
