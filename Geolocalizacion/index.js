$( document ).ready(function() {

if(navigator.geolocation)
	var tareaId = null;
	var lat_ini = null;
	var distAcumulada = 0;
	var lon_ini = null;
	function displayData(iniLat, iniLon, lat, lon, dist){
		$('#ini_lat').html(iniLat + 'º');
		$('#ini_lon').html(iniLon + 'º');
		$('#lat').html(lat + 'º');
		$('#lon').html(lon + 'º');
		$('#distancia').html(dist + 'km');
	}

	function exito(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		if(lat_ini == null){
			lat_ini = lat;
		}
		if(lon_ini == null){
			lon_ini = lon;
		}
		distAcumulada = distAcumulada + distancia(lat_ini, lon_ini, lat, lon);
		displayData(lat_ini, lon_ini, lat, lon, distAcumulada)
	}
	
	function error(error){
	console.log(error);
		switch(error.code){
			case 0:
				alert('Error desconocido');
				break;
			case 1:
				alert('Permiso denegado');
				break;			
			case 2:
				alert('Posición no disponible');
				break;
			case 3:
				alert('Tiempo de espera superado');
				break;
			default:
				alert('Error desconocido');
				break;
				
		}
	}
	
	$("#inicio").click(function(){
		tareaId = navigator.geolocation.watchPosition(exito, error);
		return false;
	});
	
	$("#fin").click(function(){
		if(tareaId != null){
			//se detiene la captura de posición
			navigator.geolocation.clearWatch(tareaId);
		}
		tareaId = null;
		return false;
	});
});