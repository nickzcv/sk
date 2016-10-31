$( document ).ready(function() {

	tinymce.init({
		selector: '#content',
		height: 500,
		theme: 'modern',
		plugins: [
			'advlist autolink lists link image charmap print preview hr anchor pagebreak',
			'searchreplace wordcount visualblocks visualchars code fullscreen',
			'insertdatetime media nonbreaking save table contextmenu directionality',
			'emoticons template paste textcolor colorpicker textpattern imagetools'
		],
		toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
		toolbar2: 'print preview media | forecolor backcolor emoticons',
		image_advtab: true


	});





});

(function ($) {
	'use strict';


	if( window.location.hash === '#exist' ){
		alert('Уже есть в базе.')
	}
	if( window.location.hash === '#eroor' ){
		alert('Произошла ошибка.')
	}


}($));
