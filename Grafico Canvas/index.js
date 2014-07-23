$( document ).ready(function() {
	
	//constantes del margen
	var radio = 225;
	var x = 250;
	var y = 250;
	
	//Canvas para pintar la imagen global
	var $canvas_grafico = $('#canvas_grafico');
	var canvas_grafico = $canvas_grafico.get(0);
	var canvas_grafico_ctx = canvas_grafico.getContext('2d');
	
	$('form').submit(function(){
		return false;
	});
	$('#button_graficar').click(function(){
		dibujarSectores();
		return false;
	});
	
	function dibujarSectores(){
		var total = 0;
		var entradas = [];
		$('.grupos').each(function(){
			var v = $(this).val();
			var valor;
			if(isNaN(v)){
				valor = 0;
			}else{
				valor = parseInt(v, 10);
			}			
			total = total + valor;
			var el = {};
			el.valor = valor;
			var id = $(this).attr('id');
			var label = $('label[for="' + id + '"]');
			el.color = label.css('background-color');
			entradas.push(el);
		});
		if(total > 0){
			var angulo_anterior = 0;
			
			$.each(entradas, function(index, el){
				var angulo = (2 * Math.PI * el.valor) / total;
				var color = el.color;
				var alfa = angulo_anterior;
				var beta = angulo_anterior + angulo;
				console.log('a- b', alfa + ' - ' + beta);
				dibujarSector(alfa, beta, color);
				angulo_anterior = angulo_anterior + angulo;
			});
		}else{
			canvas_grafico_ctx.clearRect(0, 0, 500, 500);
		}
		
		function dibujarSector(alfa, beta, color){
			canvas_grafico_ctx.fillStyle = color;
			canvas_grafico_ctx.beginPath();
			canvas_grafico_ctx.arc(x, y, radio, alfa, beta, false);
			canvas_grafico_ctx.lineTo(x, y);
			canvas_grafico_ctx.closePath();
			canvas_grafico_ctx.fill();
		}
	}
	
});