function distancia(lat1, log1, lat2, log2) 
{
  		var R = 6371;
  		var dLat = (lat2-lat1) * (Math.PI / 180);
  		var dLog = (log2-log1) * (Math.PI / 180);
  		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLog/2) * Math.sin(dLog/2);
 		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  		var d = R * c;
  		return d;
}