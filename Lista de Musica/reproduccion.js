$( document ).ready(function() {	
	if(window.postMessage){
		var canal = generarCanal(REPRODUCCION_KEY);
		
		canal.port1.addEventListener('message', recibirCancion, false);
		canal.port1.start();
		
		function recibirCancion(event){
			$('#listaRep').append('<p>' + event.data + '</p>');
		}
	}
});