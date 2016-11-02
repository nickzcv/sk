(function($) {

	$(".fancybox").fancybox();


	$.ajax({
		type: 'GET',
		url: '/main-pages',
		dataType: 'json'
	}).success( function(data) {
		data.forEach( function (item)
		{
			var link = '<li><a href="/page/'+item.url+'" class=" pro-link pro-link-depth-0 pro-sticky-item">'+item.title+'</a></li>';
			$(link).insertAfter('.navsk');
		});
	});

})(jQuery);