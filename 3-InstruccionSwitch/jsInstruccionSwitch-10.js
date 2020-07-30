function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var DestinoIngresado = txtIdDestino.value;
	
	switch(estacionIngresada){
		case "Invierno":
			if(DestinoIngresado == "Bariloche"){
			  alert(" se viaja");
			}
			else{
				 alert(" demas destinos no se viaja" );
			}	
		 break;

		 case "Verano":
			if((DestinoIngresado == "Mar Del Plata") && (DestinoIngresado == "Cataratas")){
	        
			  alert(" Si se Viaja ");
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