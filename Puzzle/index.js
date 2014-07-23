$( document ).ready(function() {
	var DATA_TARGET = 'dataTarget';
	var DATA_DROP_ITEM = 'dataDropItem';
	var total = $(".piece").length;
	$(".piece").each(function(){
		var dropTargetId = $(this).attr('data-target');
		var $dropTarget = $('#' + dropTargetId);
		var dropTarget = $dropTarget.get(0);
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
		
		dropTarget.addEventListener('dragenter', function(ev){
			//entrar
			return true;
		});
		
		dropTarget.addEventListener('dragover', function(ev){
			//encima
			var itemId = ev.dataTransfer.getData(DATA_TARGET);
			var targetId = ev.target.getAttribute('Id');
			if(itemId == targetId){
				ev.preventDefault();
				$('#' + targetId).removeClass('error').addClass('ok');
				return false;
			}else{
				$('#' + targetId).removeClass('ok').addClass('error');
				return true;
			}
		});
		
		dropTarget.addEventListener('drop', function(ev){
			ev.preventDefault();
			//soltar
			var id = ev.dataTransfer.getData(DATA_DROP_ITEM);
			ev.target.appendChild(document.getElementById(id));
			$('#' + id).removeClass('tiny').addClass('zoom');
			ev.stopPropagation();
			total--;
			if(total <= 0){
				$('body').addClass('ok');
			}
			return false;
		});
		
		dropTarget.addEventListener('dragleave', function(ev){
			//abortar
			$('.piece_container').removeClass('ok').removeClass('error');
			return true;
		});
	});
});