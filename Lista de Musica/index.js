$( document ).ready(function() {
	window.addEventListener('message', redireccionar, false);
	
	function redireccionar(event){
		var protocol = window.location.protocol;
		var host = window.location.host;
		var org = protocol + '//' + host;
		
		var cancionesIframe = $('#cancionesiframe').get(0);
		cancionesIframe.contentWindow.postMessage(event.data, org, event.ports);
	}
});