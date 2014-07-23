$( document ).ready(function() {
	$('.ppal').click(function(){
		$('.ppal').not(this).css('background-color', '#994dbd');
		$(this).css('background-color', '#62c334');
		$('nav > ul  > li  > ul').hide();
		$(this).next('ul').show();
		return false;
	});
	
	$('.sec').click(function(){
	alert('sec');
		return false;
	});
});