$( document ).ready(function() {
	$('.tiny').click(function(){
		//se realiza una copia de la imagen y se fija en el elemento de zoom pero
		//asignándole la clase de zoom en lugar de la tiny
		var zoom = $(this).clone();
		zoom.removeClass('tiny');
		zoom.addClass('zoom');
		$('#zoom_container').html(zoom);
		$('#zoom_container .zoom').width(405).height(405);
	});
});