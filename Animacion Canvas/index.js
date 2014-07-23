$( document ).ready(function() {
	var $canvas = $('#canvas_grafico');
	var canvas = $canvas.get(0);
	var canvas_ctx = canvas.getContext('2d');
	
	var canvas_height = parseInt($canvas.attr('height'), 10);
	var canvas_width = parseInt($canvas.attr('width'), 10);

	//Imagen a pintar
	var img = new Image();
	img.src = 'mov.jpg';
	var img_height = 53;
	var img_width = 70
	//La máxima longitud de la imagen es la diagonal de la imagen
	var img_max = Math.sqrt(Math.pow(img_width, 2) + Math.pow(img_height, 2));
	
	//Centro de rotacion;
	var x = parseInt(canvas_width / 2, 10);
	var y = parseInt(canvas_height / 2, 10);
	canvas_ctx.translate(x, y);
	
	//tiempo por paso (ms)
	var tmp = 100;
	
	//Numero de pasos por vuelta
	var paso = 10;
	
	var angulo_actual = 0;
	
	var angulo_paso = 2 * Math.PI / paso;
	
	img.onload = dibujar;
	
	function dibujar(){
		if(angulo_actual >= (2 * Math.PI)){
			canvas_ctx.translate(-x, -y);
			recalcular_centro();
			canvas_ctx.translate(x, y);
			angulo_actual = 0;
		}else{
			canvas_ctx.rotate(angulo_actual);
			canvas_ctx.drawImage(img, 0, 0/*, img_width, img_height*/);
			canvas_ctx.rotate(-angulo_actual);			
			angulo_actual += angulo_paso;
		}
		setTimeout(dibujar, tmp);
	}
	
	//genera una posición aleatoria entre
	// x --> [img_max, canvas_width - img_max]
	// y --> [img_max , canvas_height - img_max]
	function recalcular_centro(){
		x = parseInt(img_max + (Math.random() * (canvas_width - 2 * img_max)), 10);
		y = parseInt(img_max + (Math.random() * (canvas_height - 2 * img_max)), 10);
	}
});