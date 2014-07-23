$( document ).ready(function() {
	
	//constantes del tamaño del rectángulo/cuadrado rojo
	var rect_height = 100;
	var rect_width = 150;
	
	//Canvas para pintar la imagen global
	var $canvas_zoom = $('#canvas_zoom');
	var canvas_zoom = $canvas_zoom.get(0);
	var canvas_zoom_ctx = canvas_zoom.getContext('2d');
	var canvas_zoom_height = parseInt($canvas_zoom.attr('height'));
	var canvas_zoom_width = parseInt($canvas_zoom.attr('width'));
	
	//Canvas para pintar el zoom de la imagen	
	var $canvas_img = $('#canvas_img');
	var canvas_img = $canvas_img.get(0);
	var canvas_img_ctx = canvas_img.getContext('2d');
	canvas_img_ctx.strokeStyle = '#ff0000';
	var canvas_img_height = parseInt($canvas_img.attr('height'));
	var canvas_img_width = parseInt($canvas_img.attr('width'));
	
	//Imagen a pintar
	var img = new Image();
	img.src = 'paisaje.jpg';
	
	//Se pinta la imagen inicialmente y se le asocia un evento para seguir 
	//la posición del ratón
	function pintarImagenInicial(){
		img.onload = function(){
			canvas_img_ctx.drawImage(img, 0, 0, canvas_img_width, canvas_img_height);
			$canvas_img.mousemove(function( event ) {
				pintar(event.pageX, event.pageY);
			});			
		}
	}
	pintarImagenInicial();
	
	function pintar(x0, y0){
		//Calcula las coordenadas de la esquina superior izquierda del rectángulo
		var pos = calcularCentro(x0, y0);
		//Repinta la imagen global
		pintarImagen();
		//Pinta el rectángulo rojo
		pintarRectangulo();
		//Pinta la imagen del zoom
		pintarZoom();
		
		function pintarImagen(){
			canvas_img_ctx.drawImage(img, 0, 0, canvas_img_width, canvas_img_height);
		}
		
		function pintarRectangulo(){
			canvas_img_ctx.strokeRect(pos.x, pos.y, rect_width, rect_height);
		}
		
		function pintarZoom(){
			canvas_zoom_ctx.drawImage(img, pos.x, pos.y,rect_width, rect_height, 0, 0, canvas_zoom_width, canvas_zoom_height);
		}
		
		function calcularCentro(x, y){
			var pos = {};
			pos.x = x - rect_width / 2;
			if(pos.x < 0){
				pos.x = 0;
			}
			if(pos.x > (canvas_img_width - rect_width)){
				pos.x = canvas_img_width - rect_width;
			}
			pos.y = y - rect_height / 2;
			if(pos.y < 0){
				pos.y = 0;
			}
			if(pos.y > (canvas_img_height - rect_height)){
				pos.y = canvas_img_height - rect_height;
			}
			return pos;
		}
	}
	
	
	
	
	
	
	
	
	
		
	
	//pintamos la imagen
	
	//pintamos el zoom
	
	
});