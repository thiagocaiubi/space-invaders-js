$(document).ready(function(){
	$.facebox.settings.closeImage = '/lib/facebox/closelabel.png';
	$.facebox.settings.loadingImage = '/lib/facebox/loading.gif';
	
	$(document).bind('afterReveal.facebox', function(){
		$('#info .play').click(function(){
			$(document).trigger('close.facebox');
		});
	});
	
	$.facebox({div: '#help'});
	
	$('#help').click(function(event){
		$.facebox({div: '#' + event.target.id});
	});
});