(function($) {
    'use strict';
	
	var map_map_569149f87ed0b = null;
var coordinate_map_569149f87ed0b;
var isDraggable = $(document).width() > 641 ? true : true;
try {
    var map_map_569149f87ed0b = null;
    var coordinate_map_569149f87ed0b;
    coordinate_map_569149f87ed0b = new google.maps.LatLng(51.507622, -0.127697);
    var mapOptions = {
        zoom: 12,
        center: coordinate_map_569149f87ed0b,
        scaleControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        scrollwheel: true,
        draggable: isDraggable,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map_map_569149f87ed0b = new google.maps.Map(document.getElementById('map_569149f87ed0b'), mapOptions);
    var x = '';
    var marker_map_569149f87ed0b = new google.maps.Marker({
        position: new google.maps.LatLng(51.507622, -0.127697),
        animation: google.maps.Animation.DROP,
        map: map_map_569149f87ed0b,
        icon: ''
    });
    google.maps.event.addListener(marker_map_569149f87ed0b, 'click', toggleBounce);
} catch (e) {};
jQuery(document).ready(function($) {
    google.maps.event.trigger(map_map_569149f87ed0b, 'resize');
    $(window).resize(function() {
        google.maps.event.trigger(map_map_569149f87ed0b, 'resize');
        if (map_map_569149f87ed0b != null)
            map_map_569149f87ed0b.setCenter(coordinate_map_569149f87ed0b);
    });
    $('.ui-tabs').bind('tabsactivate', function(event, ui) {
        if ($(this).find('.ultimate-map-wrapper').length > 0) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $('.ui-accordion').bind('accordionactivate', function(event, ui) {
        if ($(this).find('.ultimate-map-wrapper').length > 0) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $(window).load(function() {
        setTimeout(function() {
            $(window).trigger('resize');
        }, 200);
    });
    $('.ult_exp_section').select(function() {
        if ($(map_map_569149f87ed0b).parents('.ult_exp_section')) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $(document).on('onUVCModalPopupOpen', function() {
        if ($(map_map_569149f87ed0b).parents('.ult_modal-content')) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $(document).on('click', '.ult_tab_li', function() {
        $(window).trigger('resize');
        setTimeout(function() {
            $(window).trigger('resize');
        }, 200);
    });
});

function toggleBounce() {
    if (marker_map_569149f87ed0b.getAnimation() != null) {
        marker_map_569149f87ed0b.setAnimation(null);
    } else {
        marker_map_569149f87ed0b.setAnimation(google.maps.Animation.BOUNCE);
    }
}
	
	
	
    var map_map_569149f889d30 = null;
    var coordinate_map_569149f889d30;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_569149f889d30 = null;
        var coordinate_map_569149f889d30;
        coordinate_map_569149f889d30 = new google.maps.LatLng(53.408367, -2.991594);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_569149f889d30,
            scaleControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            scrollwheel: true,
            draggable: isDraggable,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var map_map_569149f889d30 = new google.maps.Map(document.getElementById('map_569149f889d30'), mapOptions);
        var x = '';
        var marker_map_569149f889d30 = new google.maps.Marker({
            position: new google.maps.LatLng(53.408367, -2.991594),
            animation: google.maps.Animation.DROP,
            map: map_map_569149f889d30,
            icon: ''
        });
        google.maps.event.addListener(marker_map_569149f889d30, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_569149f889d30, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_569149f889d30, 'resize');
            if (map_map_569149f889d30 != null)
                map_map_569149f889d30.setCenter(coordinate_map_569149f889d30);
        });
        $('.ui-tabs').bind('tabsactivate', function(event, ui) {
            if ($(this).find('.ultimate-map-wrapper').length > 0) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $('.ui-accordion').bind('accordionactivate', function(event, ui) {
            if ($(this).find('.ultimate-map-wrapper').length > 0) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(window).load(function() {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        });
        $('.ult_exp_section').select(function() {
            if ($(map_map_569149f889d30).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_569149f889d30).parents('.ult_modal-content')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('click', '.ult_tab_li', function() {
            $(window).trigger('resize');
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        });
    });

    function toggleBounce() {
        if (marker_map_569149f889d30.getAnimation() != null) {
            marker_map_569149f889d30.setAnimation(null);
        } else {
            marker_map_569149f889d30.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
	
	
	
	var map_map_569149f893994 = null;
var coordinate_map_569149f893994;
var isDraggable = $(document).width() > 641 ? true : true;
try {
    var map_map_569149f893994 = null;
    var coordinate_map_569149f893994;
    coordinate_map_569149f893994 = new google.maps.LatLng(53.480835, -2.242754);
    var mapOptions = {
        zoom: 12,
        center: coordinate_map_569149f893994,
        scaleControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        scrollwheel: true,
        draggable: isDraggable,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map_map_569149f893994 = new google.maps.Map(document.getElementById('map_569149f893994'), mapOptions);
    var x = '';
    var marker_map_569149f893994 = new google.maps.Marker({
        position: new google.maps.LatLng(53.480835, -2.242754),
        animation: google.maps.Animation.DROP,
        map: map_map_569149f893994,
        icon: ''
    });
    google.maps.event.addListener(marker_map_569149f893994, 'click', toggleBounce);
} catch (e) {};
jQuery(document).ready(function($) {
    google.maps.event.trigger(map_map_569149f893994, 'resize');
    $(window).resize(function() {
        google.maps.event.trigger(map_map_569149f893994, 'resize');
        if (map_map_569149f893994 != null)
            map_map_569149f893994.setCenter(coordinate_map_569149f893994);
    });
    $('.ui-tabs').bind('tabsactivate', function(event, ui) {
        if ($(this).find('.ultimate-map-wrapper').length > 0) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $('.ui-accordion').bind('accordionactivate', function(event, ui) {
        if ($(this).find('.ultimate-map-wrapper').length > 0) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $(window).load(function() {
        setTimeout(function() {
            $(window).trigger('resize');
        }, 200);
    });
    $('.ult_exp_section').select(function() {
        if ($(map_map_569149f893994).parents('.ult_exp_section')) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $(document).on('onUVCModalPopupOpen', function() {
        if ($(map_map_569149f893994).parents('.ult_modal-content')) {
            setTimeout(function() {
                $(window).trigger('resize');
            }, 200);
        }
    });
    $(document).on('click', '.ult_tab_li', function() {
        $(window).trigger('resize');
        setTimeout(function() {
            $(window).trigger('resize');
        }, 200);
    });
});

function toggleBounce() {
    if (marker_map_569149f893994.getAnimation() != null) {
        marker_map_569149f893994.setAnimation(null);
    } else {
        marker_map_569149f893994.setAnimation(google.maps.Animation.BOUNCE);
    }
}
})(jQuery);