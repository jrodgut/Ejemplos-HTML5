$( document ).ready(function() {
	var votos_necesarios = 100;
	
	var votos_c_sharp = 0;
	var votos_java = 0;
	var votos_python = 0;

	$('#button1').click(function(){
		votos_c_sharp++;
		pintarPantalla();
		return false;
	});
	$('#button2').click(function(){
		votos_java++;
		pintarPantalla();
		return false;
	});
	$('#button3').click(function(){
		votos_python++;
		pintarPantalla();
		return false;
	});
	
	function pintarPantalla(){
		var votos_totales = votos_c_sharp + votos_java + votos_python;
		if(votos_totales <= votos_necesarios){
			$('#pb_total').val(votos_totales);
			$('#votos_rx').html(votos_totales);
			$('#votos_rx_per').html(100 * votos_totales/votos_necesarios);
			
			$("#pb_c_sharp").val(votos_c_sharp);
			$("#votos_rx_c_sharp").html(formatear_votos(votos_c_sharp));
			
			$("#pb_java").val(votos_java);
			$("#votos_rx_java").html(formatear_votos(votos_java));
			
			$("#pb_python").val(votos_python);
			$("#votos_rx_python").html(formatear_votos(votos_python));
		}else{
			alert('Se han alcanzado los votos totales');
		}
	}
	
	function formatear_votos(votos){
		if(votos == 1){
			return '1 Voto';
		}else{
			return votos + ' Votos';
		}
	}
});