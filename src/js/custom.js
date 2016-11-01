(function($) {

	$(".fancybox").fancybox();


	$.ajax({
		type: 'GET',
		url: '/main-pages',
		dataType: 'json'
	}).success( function(data) {
		data.forEach( function (item)
		{
			var link = '<li><a href="/'+item.url+'" >'+item.title+'</a></li>';
			$(link).insertAfter('.navsk');
		});
	});

})(jQuery);