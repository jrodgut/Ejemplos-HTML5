var REPRODUCCION_KEY ="reproduccion";

var PISTA_KEY ="pista";

function generarCanal(mensaje){
	var canal = new MessageChannel();
		
	var protocol = window.location.protocol;
	var host = window.location.host;
	var org = protocol + '//' + host;
		
	window.parent.postMessage(mensaje, org, [canal.port2]);;
	return canal;
}