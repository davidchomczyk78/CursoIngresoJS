function mostrar()
{
	var estadia = 15000;
		estadia = parseInt(estadia);
	var aunmento = 0 ;
	aunmento = parseInt(aunmento);
	var descuento = 0;
		descuento = parseInt(descuento);
	var PrecioFinal;
		PrecioFinal = parseInt(PrecioFinal);

	var estacionIngresada = txtIdEstacion.value;
	var DestinoIngresado = txtIdDestino.value;
	
	switch(estacionIngresada){
		case "Invierno":
			if(DestinoIngresado == "Bariloche"){
	         PrecioFinal = estadia * 0.20;
		     aunmento = PrecioFinal + estadia;
			  alert(" su precio final seria de " +  aunmento);

			}
			else if((DestinoIngresado == "Cataratas") || (DestinoIngresado == "Cordoba")){
				PrecioFinal = estadia * 0.10;
				descuento = PrecioFinal + estadia;
				 alert(" su precio final seria de " +  descuento);
			}	
			 if(DestinoIngresado == "Mar del plata"){
                PrecioFinal = (estadia * 0.20)-estadia;   
				descuento = PrecioFinal;
				 alert(" su precio final seria de " +  descuento);   
			}		
		 break;

		 case "Verano":
			if(DestinoIngresado == "Bariloche"){
	         PrecioFinal = estadia * 0.20;
		     descuento = PrecioFinal - estadia;
			  alert(" su precio final seria de " +  descuento);

			}
			else if((DestinoIngresado == "Cataratas") || (DestinoIngresado == "Cordoba")){
				PrecioFinal = estadia * 0.10;
				aunmento = PrecioFinal + estadia;
				 alert(" su precio final seria de " +  aunmento);
			}	
			 if(DestinoIngresado == "Mar del plata"){
                PrecioFinal = (estadia * 0.20)+estadia;   
				aunmento = PrecioFinal;
				 alert(" su precio final seria de " +  aunmento);  
			 }
			break;	 

			case "Otoño":
			case "Primavera":	
				if(DestinoIngresado == "Bariloche"){
				 PrecioFinal = estadia * 0.0;
				 aunmento = PrecioFinal + estadia;
				  alert(" su precio final seria de " +  aunmento);
	
				}
				 else if(DestinoIngresado == "Cataratas"){
					PrecioFinal = estadia * 0.10;
					aunmento = PrecioFinal + estadia;
					 alert(" su precio final seria de " +  aunmento);
				}	
				 else if(DestinoIngresado == "Mar del plata"){
					PrecioFinal = (estadia * 0.10)+estadia;   
					aunmento = PrecioFinal;
					 alert(" su precio final seria de " +  aunmento); 

				} if(DestinoIngresado == "Cordoba"){
					alert("el precio es de " + estadia);
					
				}
				break;	 
    
	}
	

}//FIN DE LA FUNCIÓN