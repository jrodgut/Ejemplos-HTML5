$( document ).ready(function() {
	$("#negrita").click(function(){
		document.execCommand('bold', false, null);
		return false;
	});
	
	$("#cursiva").click(function(){
		document.execCommand('italic', false, null);
		return false;
	});
	
	$("#subrayado").click(function(){
		document.execCommand('underline', false, null);
		return false;
	});
	
	$("#alini").click(function(){
		document.execCommand('justifyleft', false, null);
		return false;
	});
	
	$("#alinc").click(function(){
		document.execCommand('justifycenter', false, null);
		return false;
	});
	
	$("#alind").click(function(){
		document.execCommand('justifyright', false, null);
		return false;
	});
	
	$("#alinf").click(function(){
		document.execCommand('justifyfull', false, null);
		return false;
	});
	
	$("#lno").click(function(){
		document.execCommand('insertunorderedlist', false, null);
		return false;
	});
	
	$("#lor").click(function(){
		document.execCommand('insertorderedlist', false, null);
		return false;
	});
	
	$("#subi").click(function(){
		document.execCommand('subscript', false, null);
		return false;
	});
	
	$("#supi").click(function(){
		document.execCommand('superscript', false, null);
		return false;
	});
	
	$("#fco").click(function(){
		var color = $('#color').val();
		document.execCommand('forecolor', false, color);
		return false;
	});
	
	$("#bco").click(function(){
		var color = $('#color').val();
		document.execCommand('backcolor', false, color);
		return false;
	});
	
	$("#imagen").click(function(){
		var ruta = prompt('Introduzca la ruta de la imagen');
		document.execCommand('insertimage', false, ruta);
		return false;
	});
	
	$("#hipervinculo").click(
		function(){
			var direccion = prompt('Introduzca la dirección', 'http://');
			document.execCommand('createlink', false, direccion);
			return false;
		});
	
	$("#publicar").click(function(){
		var text = $('#editor').html();
		$('#section_containers').append('<section>' + text + '</section>' );
		return false;
	});
});