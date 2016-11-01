(function($) {

	$(".fancybox").fancybox();


	$.ajax({
		type: 'GET',
		url: '/main-pages',
		dataType: 'json'
	}).success( function(data) {
		data.forEach( function (item)
		{
			var link = '<li><a href="/page/'+item.url+'" >'+item.title+'</a></li>';
			$(link).insertAfter('.navsk');
		});
	});

})(jQuery);