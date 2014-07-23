$( document ).ready(function() {
	if(window.postMessage){
		var canal = generarCanal(PISTA_KEY);
		
		canal.port1.addEventListener('message', recibirCancion, false);
		canal.port1.start();
		
		function recibirCancion(event){
			$('#titulo_cancion').html(event.data.titulo);
			$('#desc_cancion').html(event.data.descripcion);
		}
	}
});