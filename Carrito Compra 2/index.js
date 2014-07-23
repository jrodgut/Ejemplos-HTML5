$( document ).ready(function() {
	if(sessionStorage){
		//cada vez que se hace click en el botón comprar se guarda la nueva compra y
		//se repinta la tabla
		$('.comprar_button').click(function(){
			var id = $(this).attr('data-id');
			var productoId = $(this).attr('data-name');
			var precioId = $(this).attr('data-price');
			var producto = $('#' + productoId).html();
			var precio = $('#' + precioId).html().replace("€","");
			var amountId = $(this).attr('data-amount');
			var amount = $('#' + amountId).val();
			if(!$.isNumeric(amount)){
				alert('La cantidad indicada no es numérica');
				return false;
			}
			if(amount <= 0){
				alert('La cantidad indicada no es válida');
				return false;
			}
			var fila = {
				id : precioId,
				producto : producto,
				precio : parseFloat(precio, 10),
				amount : parseInt(amount, 10)
			};
			
			saveFila(fila);
			repintarFilas();
		});
		
		//Se añade el evento para los elemento que se creen para borrar la compra
		$( document ).on( 'click', '.borrar', function() {
			var id = $(this).attr('data-id');
			deleteFila(id);
			repintarFilas();
		});
		
		//Borra la entrada de esa compra en la BD
		function deleteFila(id){
			var oldFila = sessionStorage.removeItem(id);
		}
		
		//Guarda esa compra o añade cantidad si ya existe
		function saveFila(fila){
			var oldFilaStr = sessionStorage.getItem(fila.id);
			if(oldFilaStr != null){
				//La compra ya existe, se reconvierte el string a objeto
				//y se añade la nueva cantidad
				var oldFila = JSON.parse(oldFilaStr);
				fila.amount = fila.amount + oldFila.amount;
			}
			//se guarda el objeto con los nuevos datos
			sessionStorage.setItem(fila.id, JSON.stringify(fila));
		}
		
		//Se pinta de nuevo la tabla de compra
		function repintarFilas(){
			//se borra la tabla de compra
			$('#compra').find('tbody').empty();
			//Se pinta lo que haya en base de datos
			var total = 0;
			for(var i = 0; i < sessionStorage.length; i++){
				var key = sessionStorage.key(i);
				var filaStr = sessionStorage.getItem(key);
				if(filaStr != null){
					var fila = JSON.parse(filaStr);
					mostrarFila(fila);
					total = total + (fila.precio * fila.amount);
				}				
			}
			//Se pinta el total
			$('#total').html(total);
		}
		
		//Pinta una fila de la nueva compra
		function mostrarFila(fila){
			var f = $('<tr><td></td><td></td><td></td><td></td><td></td></tr>');
			f.find('td').eq(0).html(fila.producto);
			f.find('td').eq(1).html(fila.precio);
			f.find('td').eq(2).html(fila.amount);
			f.find('td').eq(3).html(fila.precio * fila.amount);
			f.find('td').eq(4).html('<img class="borrar" src="eliminar.jpg" data-id="' + fila.id + '"/>');
			$('#compra').find('tbody').append(f);		
		}
		
		//se pinta al inicio
		repintarFilas();
	}
});