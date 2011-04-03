$(document).ready(function(){
	$.facebox.settings.closeImage = '/lib/facebox/closelabel.png';
	$.facebox.settings.loadingImage = '/lib/facebox/loading.gif';
	$('#help').click(function(event){
		$.facebox({div: '#' + event.target.id});
	}).click();
});