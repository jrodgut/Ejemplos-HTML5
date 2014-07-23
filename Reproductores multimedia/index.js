$( document ).ready(function() {
	
	load('video');
	load('audio');
	
	function load(prefix){
		var player = $('#' + prefix + '_player').get(0);
		var status_display = $('#' + prefix + '_status');
		var now_display = $('#' + prefix + '_now');
		var duration_display = $('#' + prefix + '_duration');
		var progress_bar = $('#' + prefix + '_progress');
		
		var play_button = $('#' + prefix + '_play');
		var pause_button = $('#' + prefix + '_pause');
		var stop_button = $('#' + prefix + '_stop');
		var volume_range = $('#' + prefix + '_volume');
		var silence_button = $('#' + prefix + '_silence');
		//Se refresca cada 200ms para que quede más fluido
		var refresh_rate = 200;
		
		function setDuration(){
			duration_display.html(toHHMMSS(player.duration));
		}
		
		function setNow(){
			now_display.html(toHHMMSS(player.currentTime ))
			progress_bar.val(player.currentTime/player.duration);
		}
		
		var idSetInterval;
		function displayNow(){
			setNow();
			if(player.currentTime < player.duration){
				idSetInterval = setInterval(setNow, refresh_rate);
			}			
		}
		
		function stopSettingNow(){
			clearInterval(idSetInterval);
		}
		
		function setVolume(val){
			player.volume = val;
		}
		
		setVolume(1);
		
		play_button.click(function(){
			player.play();
			setDuration();
			displayNow();
			play_button.hide();
			pause_button.show();
			status_display.show();			
			return false;
		});
		
		pause_button.click(function(){
			player.pause();
			stopSettingNow();
			pause_button.hide();
			play_button.show();
			status_display.show();
			return false;
		});
		
		stop_button.click(function(){
			player.load();
			stopSettingNow();
			pause_button.hide();
			play_button.show();
			setNow();
			return false;
		});
		
		volume_range.change(function(){
			setVolume($(this).val());
			return false;
		});
		
		silence_button.click(function(){
			player.muted = !player.muted;
			silence_button.toggleClass('strike')
			return false;
		});
	}
	
	function toHHMMSS(val){
		var sec_num = parseInt(val, 10);
		var hours   = Math.floor(sec_num / 3600);
		var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		var seconds = sec_num - (hours * 3600) - (minutes * 60);

		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		var time    = hours+':'+minutes+':'+seconds;
		return time;
	}
	
	
});