$( document ).ready(function() {
	var DATA_TARGET = 'dataTarget';
	var DATA_DROP_ITEM = 'dataDropItem';
	var count = 0;
	
	//Se agregan los listeners para las fotos de los ordenadores
	$(".piece").each(function(){
		var dropTargetId = $(this).attr('data-target');		
		var dropItem = $(this).get(0);
		
		dropItem.addEventListener('dragstart', function(ev){
			//empezar
			ev.dataTransfer.effectAllowed = 'move';
			ev.dataTransfer.setData(DATA_TARGET, ev.target.getAttribute('data-target'));
			ev.dataTransfer.setData(DATA_DROP_ITEM, ev.target.getAttribute('id'));
			ev.dataTransfer.setDragImage(ev.target, 0, 0);
			return true;
		});
		
		dropItem.addEventListener('dragend', function(ev){
			//terminar
			ev.dataTransfer.clearData(DATA_TARGET);
			return true;			
		});
	});
	
	//Se agregan los listeners para el carrito
	var carritoDropTarget = $("#carrito").get(0);
	
	carritoDropTarget.addEventListener('dragenter', function(ev){
		//entrar
		return true;
	});
	
	carritoDropTarget.addEventListener('dragover', function(ev){
		//encima
		var itemId = ev.dataTransfer.getData(DATA_TARGET);
		var targetId = ev.target.getAttribute('Id');
		if(itemId == targetId){
			ev.preventDefault();
			return false;
		}else{
			return true;
		}
	});
	
	carritoDropTarget.addEventListener('drop', function(ev){
		ev.preventDefault();
		//soltar
		var id = ev.dataTransfer.getData(DATA_DROP_ITEM);
		var descripcionId = $("#" + id).attr('data-name');
		var descripcion = $('#' + descripcionId).clone();
		descripcion.removeAttr('id');
		count++;
		descripcion.attr('id', 'compra' + count);
		descripcion.attr('draggable', 'true');
		descripcion.attr('data-target', 'papelera');
		descripcion.addClass('compra');
		addDropDragCompra(descripcion);
		$('#compra').append(descripcion);
		return false;
	});
	
	carritoDropTarget.addEventListener('dragleave', function(ev){
		//abortar
		return true;
	});
	
	//Función para agregar los listenes a cada compra
	function addDropDragCompra($el){
		var dropTargetId = $el.attr('data-target');		
		var dropItem = $el.get(0);
		
		dropItem.addEventListener('dragstart', function(ev){
			//empezar
			ev.dataTransfer.effectAllowed = 'move';
			ev.dataTransfer.setData(DATA_TARGET, ev.target.getAttribute('data-target'));
			ev.dataTransfer.setData(DATA_DROP_ITEM, ev.target.getAttribute('id'));
			ev.dataTransfer.setDragImage(ev.target, 0, 0);
			return true;
		});
		
		dropItem.addEventListener('dragend', function(ev){
			//terminar
			ev.dataTransfer.clearData(DATA_TARGET);
			return true;			
		});
	}
	
	//Se agregan los listeners para el papelera
	var papeleraDropTarget = $("#papelera").get(0);
	
	papeleraDropTarget.addEventListener('dragenter', function(ev){
		//entrar
		return true;
	});
	
	papeleraDropTarget.addEventListener('dragover', function(ev){
		//encima
		var itemId = ev.dataTransfer.getData(DATA_TARGET);
		var targetId = ev.target.getAttribute('Id');
		if(itemId == targetId){
			ev.preventDefault();
			return false;
		}else{
			return true;
		}
	});
	
	papeleraDropTarget.addEventListener('drop', function(ev){
		ev.preventDefault();
		//soltar
		var id = ev.dataTransfer.getData(DATA_DROP_ITEM);
		$("#" + id).remove();
		return false;
	});
	
	papeleraDropTarget.addEventListener('dragleave', function(ev){
		//abortar
		return true;
	});
});