$( document ).ready(function() {
	window.addEventListener('message', recibirMensaje, false);
	
	function recibirMensaje(event){
		if(event.data == REPRODUCCION_KEY){
			var port = event.ports[0];
			$('.buttonAdd').click(function(){
				var infoId = $(this).attr('data-titulo');
				var info = $('#' + infoId).html();
				port.postMessage(info);
			});			
		}
		if(event.data == PISTA_KEY){
			var port = event.ports[0];
			$('.buttonInfo').click(function(){
				var info = {};
				var tituloId = $(this).attr('data-titulo');
				var titulo = $('#' + tituloId).html();
				info.titulo = titulo;
				var descripcionId = $(this).attr('data-desc');
				var descripcion = $('#' + descripcionId).html();
				info.descripcion = descripcion;
				port.postMessage(info);
			});	
		}
	}
});