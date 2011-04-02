$(document).ready(function(){
	$.facebox.settings.closeImage = '/lib/facebox/closelabel.png';
	$.facebox.settings.loadingImage = '/lib/facebox/loading.gif';
	$('#help').click(function(){
		$.facebox({div: '#help div'});	
	}).click();
});