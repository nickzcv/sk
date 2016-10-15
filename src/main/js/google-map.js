(function($) {
    'use strict';
    var map_map_568fedca95c08 = null;
    var coordinate_map_568fedca95c08;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedca95c08 = null;
        var coordinate_map_568fedca95c08;
        coordinate_map_568fedca95c08 = new google.maps.LatLng(40.7774903, -73.9640812);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedca95c08,
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
        var map_map_568fedca95c08 = new google.maps.Map(document.getElementById('map_568fedca95c08'), mapOptions);
        var x = '';
        var marker_map_568fedca95c08 = new google.maps.Marker({
            position: new google.maps.LatLng(40.7774903, -73.9640812),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedca95c08,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedca95c08, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedca95c08, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedca95c08, 'resize');
            if (map_map_568fedca95c08 != null)
                map_map_568fedca95c08.setCenter(coordinate_map_568fedca95c08);
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
            if ($(map_map_568fedca95c08).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedca95c08).parents('.ult_modal-content')) {
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
        if (marker_map_568fedca95c08.getAnimation() != null) {
            marker_map_568fedca95c08.setAnimation(null);
        } else {
            marker_map_568fedca95c08.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    var map_map_568fedca99850 = null;
    var coordinate_map_568fedca99850;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedca99850 = null;
        var coordinate_map_568fedca99850;
        coordinate_map_568fedca99850 = new google.maps.LatLng(37.8090329, -122.2823462);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedca99850,
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
        var map_map_568fedca99850 = new google.maps.Map(document.getElementById('map_568fedca99850'), mapOptions);
        var x = '';
        var marker_map_568fedca99850 = new google.maps.Marker({
            position: new google.maps.LatLng(37.8090329, -122.2823462),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedca99850,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedca99850, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedca99850, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedca99850, 'resize');
            if (map_map_568fedca99850 != null)
                map_map_568fedca99850.setCenter(coordinate_map_568fedca99850);
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
            if ($(map_map_568fedca99850).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedca99850).parents('.ult_modal-content')) {
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
        if (marker_map_568fedca99850.getAnimation() != null) {
            marker_map_568fedca99850.setAnimation(null);
        } else {
            marker_map_568fedca99850.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    var map_map_568fedca9b1d0 = null;
    var coordinate_map_568fedca9b1d0;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedca9b1d0 = null;
        var coordinate_map_568fedca9b1d0;
        coordinate_map_568fedca9b1d0 = new google.maps.LatLng(24.483582, 54.607053);
        var mapOptions = {
            zoom: 15,
            center: coordinate_map_568fedca9b1d0,
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
            mapTypeId: google.maps.MapTypeId.SATELLITE,
        };
        var map_map_568fedca9b1d0 = new google.maps.Map(document.getElementById('map_568fedca9b1d0'), mapOptions);
        var x = '';
        var marker_map_568fedca9b1d0 = new google.maps.Marker({
            position: new google.maps.LatLng(24.483582, 54.607053),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedca9b1d0,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedca9b1d0, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedca9b1d0, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedca9b1d0, 'resize');
            if (map_map_568fedca9b1d0 != null)
                map_map_568fedca9b1d0.setCenter(coordinate_map_568fedca9b1d0);
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
            if ($(map_map_568fedca9b1d0).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedca9b1d0).parents('.ult_modal-content')) {
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
        if (marker_map_568fedca9b1d0.getAnimation() != null) {
            marker_map_568fedca9b1d0.setAnimation(null);
        } else {
            marker_map_568fedca9b1d0.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedca9ea0d = null;
    var coordinate_map_568fedca9ea0d;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedca9ea0d = null;
        var coordinate_map_568fedca9ea0d;
        coordinate_map_568fedca9ea0d = new google.maps.LatLng(25.1977476, 55.2743059);
        var mapOptions = {
            zoom: 17,
            center: coordinate_map_568fedca9ea0d,
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
        var map_map_568fedca9ea0d = new google.maps.Map(document.getElementById('map_568fedca9ea0d'), mapOptions);
        var x = '';
        var marker_map_568fedca9ea0d = new google.maps.Marker({
            position: new google.maps.LatLng(25.1977476, 55.2743059),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedca9ea0d,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedca9ea0d, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedca9ea0d, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedca9ea0d, 'resize');
            if (map_map_568fedca9ea0d != null)
                map_map_568fedca9ea0d.setCenter(coordinate_map_568fedca9ea0d);
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
            if ($(map_map_568fedca9ea0d).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedca9ea0d).parents('.ult_modal-content')) {
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
        if (marker_map_568fedca9ea0d.getAnimation() != null) {
            marker_map_568fedca9ea0d.setAnimation(null);
        } else {
            marker_map_568fedca9ea0d.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa0306 = null;
    var coordinate_map_568fedcaa0306;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa0306 = null;
        var coordinate_map_568fedcaa0306;
        coordinate_map_568fedcaa0306 = new google.maps.LatLng(40.692778, -73.990278);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa0306,
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
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.HYBRID, 'map_style']
            }
        };
        var styles = [{
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#9b9595"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "color": "#e1e143"
            }, {
                "weight": 0.6
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "gamma": 1.5
            }, {
                "visibility": "on"
            }, {
                "color": "#e91b02"
            }, {
                "weight": 0.3
            }]
        }];
        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });
        var map_map_568fedcaa0306 = new google.maps.Map(document.getElementById('map_568fedcaa0306'), mapOptions);
        map_map_568fedcaa0306.mapTypes.set('map_style', styledMap);
        map_map_568fedcaa0306.setMapTypeId('map_style');
        var x = '';
        var marker_map_568fedcaa0306 = new google.maps.Marker({
            position: new google.maps.LatLng(40.692778, -73.990278),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa0306,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa0306, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa0306, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa0306, 'resize');
            if (map_map_568fedcaa0306 != null)
                map_map_568fedcaa0306.setCenter(coordinate_map_568fedcaa0306);
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
            if ($(map_map_568fedcaa0306).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa0306).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa0306.getAnimation() != null) {
            marker_map_568fedcaa0306.setAnimation(null);
        } else {
            marker_map_568fedcaa0306.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa2aba = null;
    var coordinate_map_568fedcaa2aba;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa2aba = null;
        var coordinate_map_568fedcaa2aba;
        coordinate_map_568fedcaa2aba = new google.maps.LatLng(40.692778, -73.990278);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa2aba,
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
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        var map_map_568fedcaa2aba = new google.maps.Map(document.getElementById('map_568fedcaa2aba'), mapOptions);
        var x = '';
        var marker_map_568fedcaa2aba = new google.maps.Marker({
            position: new google.maps.LatLng(40.692778, -73.990278),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa2aba,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa2aba, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa2aba, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa2aba, 'resize');
            if (map_map_568fedcaa2aba != null)
                map_map_568fedcaa2aba.setCenter(coordinate_map_568fedcaa2aba);
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
            if ($(map_map_568fedcaa2aba).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa2aba).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa2aba.getAnimation() != null) {
            marker_map_568fedcaa2aba.setAnimation(null);
        } else {
            marker_map_568fedcaa2aba.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa49ba = null;
    var coordinate_map_568fedcaa49ba;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa49ba = null;
        var coordinate_map_568fedcaa49ba;
        coordinate_map_568fedcaa49ba = new google.maps.LatLng(40.692778, -73.990278);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa49ba,
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
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        var map_map_568fedcaa49ba = new google.maps.Map(document.getElementById('map_568fedcaa49ba'), mapOptions);
        var x = '';
        var marker_map_568fedcaa49ba = new google.maps.Marker({
            position: new google.maps.LatLng(40.692778, -73.990278),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa49ba,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa49ba, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa49ba, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa49ba, 'resize');
            if (map_map_568fedcaa49ba != null)
                map_map_568fedcaa49ba.setCenter(coordinate_map_568fedcaa49ba);
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
            if ($(map_map_568fedcaa49ba).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa49ba).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa49ba.getAnimation() != null) {
            marker_map_568fedcaa49ba.setAnimation(null);
        } else {
            marker_map_568fedcaa49ba.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa7e1e = null;
    var coordinate_map_568fedcaa7e1e;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa7e1e = null;
        var coordinate_map_568fedcaa7e1e;
        coordinate_map_568fedcaa7e1e = new google.maps.LatLng(53.474902, -2.2235922);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa7e1e,
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
        var map_map_568fedcaa7e1e = new google.maps.Map(document.getElementById('map_568fedcaa7e1e'), mapOptions);
        var x = '';
        var marker_map_568fedcaa7e1e = new google.maps.Marker({
            position: new google.maps.LatLng(53.474902, -2.2235922),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa7e1e,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa7e1e, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa7e1e, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa7e1e, 'resize');
            if (map_map_568fedcaa7e1e != null)
                map_map_568fedcaa7e1e.setCenter(coordinate_map_568fedcaa7e1e);
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
            if ($(map_map_568fedcaa7e1e).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa7e1e).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa7e1e.getAnimation() != null) {
            marker_map_568fedcaa7e1e.setAnimation(null);
        } else {
            marker_map_568fedcaa7e1e.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa8039 = null;
    var coordinate_map_568fedcaa8039;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa8039 = null;
        var coordinate_map_568fedcaa8039;
        coordinate_map_568fedcaa8039 = new google.maps.LatLng(53.474902, -2.2235922);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa8039,
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
            mapTypeId: google.maps.MapTypeId.SATELLITE,
        };
        var map_map_568fedcaa8039 = new google.maps.Map(document.getElementById('map_568fedcaa8039'), mapOptions);
        var x = '';
        var marker_map_568fedcaa8039 = new google.maps.Marker({
            position: new google.maps.LatLng(53.474902, -2.2235922),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa8039,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa8039, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa8039, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa8039, 'resize');
            if (map_map_568fedcaa8039 != null)
                map_map_568fedcaa8039.setCenter(coordinate_map_568fedcaa8039);
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
            if ($(map_map_568fedcaa8039).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa8039).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa8039.getAnimation() != null) {
            marker_map_568fedcaa8039.setAnimation(null);
        } else {
            marker_map_568fedcaa8039.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa8798 = null;
    var coordinate_map_568fedcaa8798;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa8798 = null;
        var coordinate_map_568fedcaa8798;
        coordinate_map_568fedcaa8798 = new google.maps.LatLng(53.474902, -2.2235922);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa8798,
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
            mapTypeId: google.maps.MapTypeId.HYBRID,
        };
        var map_map_568fedcaa8798 = new google.maps.Map(document.getElementById('map_568fedcaa8798'), mapOptions);
        var x = '';
        var marker_map_568fedcaa8798 = new google.maps.Marker({
            position: new google.maps.LatLng(53.474902, -2.2235922),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa8798,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa8798, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa8798, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa8798, 'resize');
            if (map_map_568fedcaa8798 != null)
                map_map_568fedcaa8798.setCenter(coordinate_map_568fedcaa8798);
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
            if ($(map_map_568fedcaa8798).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa8798).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa8798.getAnimation() != null) {
            marker_map_568fedcaa8798.setAnimation(null);
        } else {
            marker_map_568fedcaa8798.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaa89aa = null;
    var coordinate_map_568fedcaa89aa;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaa89aa = null;
        var coordinate_map_568fedcaa89aa;
        coordinate_map_568fedcaa89aa = new google.maps.LatLng(53.474902, -2.2235922);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcaa89aa,
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
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        var map_map_568fedcaa89aa = new google.maps.Map(document.getElementById('map_568fedcaa89aa'), mapOptions);
        var x = '';
        var marker_map_568fedcaa89aa = new google.maps.Marker({
            position: new google.maps.LatLng(53.474902, -2.2235922),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaa89aa,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaa89aa, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaa89aa, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaa89aa, 'resize');
            if (map_map_568fedcaa89aa != null)
                map_map_568fedcaa89aa.setCenter(coordinate_map_568fedcaa89aa);
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
            if ($(map_map_568fedcaa89aa).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaa89aa).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaa89aa.getAnimation() != null) {
            marker_map_568fedcaa89aa.setAnimation(null);
        } else {
            marker_map_568fedcaa89aa.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaac8ff = null;
    var coordinate_map_568fedcaac8ff;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaac8ff = null;
        var coordinate_map_568fedcaac8ff;
        coordinate_map_568fedcaac8ff = new google.maps.LatLng(51.510296, -0.126259);
        var mapOptions = {
            zoom: 10,
            center: coordinate_map_568fedcaac8ff,
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
        var map_map_568fedcaac8ff = new google.maps.Map(document.getElementById('map_568fedcaac8ff'), mapOptions);
        var x = '';
        var marker_map_568fedcaac8ff = new google.maps.Marker({
            position: new google.maps.LatLng(51.510296, -0.126259),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaac8ff,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaac8ff, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaac8ff, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaac8ff, 'resize');
            if (map_map_568fedcaac8ff != null)
                map_map_568fedcaac8ff.setCenter(coordinate_map_568fedcaac8ff);
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
            if ($(map_map_568fedcaac8ff).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaac8ff).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaac8ff.getAnimation() != null) {
            marker_map_568fedcaac8ff.setAnimation(null);
        } else {
            marker_map_568fedcaac8ff.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    var map_map_568fedcaad2fc = null;
    var coordinate_map_568fedcaad2fc;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaad2fc = null;
        var coordinate_map_568fedcaad2fc;
        coordinate_map_568fedcaad2fc = new google.maps.LatLng(51.510296, -0.126259);
        var mapOptions = {
            zoom: 13,
            center: coordinate_map_568fedcaad2fc,
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
        var map_map_568fedcaad2fc = new google.maps.Map(document.getElementById('map_568fedcaad2fc'), mapOptions);
        var x = '';
        var marker_map_568fedcaad2fc = new google.maps.Marker({
            position: new google.maps.LatLng(51.510296, -0.126259),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaad2fc,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaad2fc, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaad2fc, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaad2fc, 'resize');
            if (map_map_568fedcaad2fc != null)
                map_map_568fedcaad2fc.setCenter(coordinate_map_568fedcaad2fc);
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
            if ($(map_map_568fedcaad2fc).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaad2fc).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaad2fc.getAnimation() != null) {
            marker_map_568fedcaad2fc.setAnimation(null);
        } else {
            marker_map_568fedcaad2fc.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaadbc1 = null;
    var coordinate_map_568fedcaadbc1;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaadbc1 = null;
        var coordinate_map_568fedcaadbc1;
        coordinate_map_568fedcaadbc1 = new google.maps.LatLng(51.510296, -0.126259);
        var mapOptions = {
            zoom: 16,
            center: coordinate_map_568fedcaadbc1,
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
        var map_map_568fedcaadbc1 = new google.maps.Map(document.getElementById('map_568fedcaadbc1'), mapOptions);
        var x = '';
        var marker_map_568fedcaadbc1 = new google.maps.Marker({
            position: new google.maps.LatLng(51.510296, -0.126259),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaadbc1,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaadbc1, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaadbc1, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaadbc1, 'resize');
            if (map_map_568fedcaadbc1 != null)
                map_map_568fedcaadbc1.setCenter(coordinate_map_568fedcaadbc1);
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
            if ($(map_map_568fedcaadbc1).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaadbc1).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaadbc1.getAnimation() != null) {
            marker_map_568fedcaadbc1.setAnimation(null);
        } else {
            marker_map_568fedcaadbc1.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcaae489 = null;
    var coordinate_map_568fedcaae489;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcaae489 = null;
        var coordinate_map_568fedcaae489;
        coordinate_map_568fedcaae489 = new google.maps.LatLng(51.510296, -0.126259);
        var mapOptions = {
            zoom: 18,
            center: coordinate_map_568fedcaae489,
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
        var map_map_568fedcaae489 = new google.maps.Map(document.getElementById('map_568fedcaae489'), mapOptions);
        var x = '';
        var marker_map_568fedcaae489 = new google.maps.Marker({
            position: new google.maps.LatLng(51.510296, -0.126259),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcaae489,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcaae489, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcaae489, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcaae489, 'resize');
            if (map_map_568fedcaae489 != null)
                map_map_568fedcaae489.setCenter(coordinate_map_568fedcaae489);
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
            if ($(map_map_568fedcaae489).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcaae489).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcaae489.getAnimation() != null) {
            marker_map_568fedcaae489.setAnimation(null);
        } else {
            marker_map_568fedcaae489.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcab0628 = null;
    var coordinate_map_568fedcab0628;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcab0628 = null;
        var coordinate_map_568fedcab0628;
        coordinate_map_568fedcab0628 = new google.maps.LatLng(41.9038795, 12.4520834);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcab0628,
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
        var map_map_568fedcab0628 = new google.maps.Map(document.getElementById('map_568fedcab0628'), mapOptions);
        var x = '';
        var marker_map_568fedcab0628 = new google.maps.Marker({
            position: new google.maps.LatLng(41.9038795, 12.4520834),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcab0628,
            icon: ''
        });
        google.maps.event.addListener(marker_map_568fedcab0628, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcab0628, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcab0628, 'resize');
            if (map_map_568fedcab0628 != null)
                map_map_568fedcab0628.setCenter(coordinate_map_568fedcab0628);
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
            if ($(map_map_568fedcab0628).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcab0628).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcab0628.getAnimation() != null) {
            marker_map_568fedcab0628.setAnimation(null);
        } else {
            marker_map_568fedcab0628.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcab3c7f = null;
    var coordinate_map_568fedcab3c7f;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcab3c7f = null;
        var coordinate_map_568fedcab3c7f;
        coordinate_map_568fedcab3c7f = new google.maps.LatLng(37.765423, 37.765423);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcab3c7f,
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
        var map_map_568fedcab3c7f = new google.maps.Map(document.getElementById('map_568fedcab3c7f'), mapOptions);
        var x = '';
        var marker_map_568fedcab3c7f = new google.maps.Marker({
            position: new google.maps.LatLng(37.765423, 37.765423),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcab3c7f,
            icon: 'https://webuild.netbee.co/demo/wp-content/uploads/2015/11/pin_blue.png'
        });
        google.maps.event.addListener(marker_map_568fedcab3c7f, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcab3c7f, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcab3c7f, 'resize');
            if (map_map_568fedcab3c7f != null)
                map_map_568fedcab3c7f.setCenter(coordinate_map_568fedcab3c7f);
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
            if ($(map_map_568fedcab3c7f).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcab3c7f).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcab3c7f.getAnimation() != null) {
            marker_map_568fedcab3c7f.setAnimation(null);
        } else {
            marker_map_568fedcab3c7f.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    var map_map_568fedcab4bc1 = null;
    var coordinate_map_568fedcab4bc1;
    var isDraggable = $(document).width() > 641 ? true : true;
    try {
        var map_map_568fedcab4bc1 = null;
        var coordinate_map_568fedcab4bc1;
        coordinate_map_568fedcab4bc1 = new google.maps.LatLng(37.7711687, -122.4055669);
        var mapOptions = {
            zoom: 12,
            center: coordinate_map_568fedcab4bc1,
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
        var map_map_568fedcab4bc1 = new google.maps.Map(document.getElementById('map_568fedcab4bc1'), mapOptions);
        var x = '';
        var marker_map_568fedcab4bc1 = new google.maps.Marker({
            position: new google.maps.LatLng(37.7711687, -122.4055669),
            animation: google.maps.Animation.DROP,
            map: map_map_568fedcab4bc1,
            icon: 'https://webuild.netbee.co/demo/wp-content/uploads/2015/11/pin_yellow.png'
        });
        google.maps.event.addListener(marker_map_568fedcab4bc1, 'click', toggleBounce);
    } catch (e) {};
    jQuery(document).ready(function($) {
        google.maps.event.trigger(map_map_568fedcab4bc1, 'resize');
        $(window).resize(function() {
            google.maps.event.trigger(map_map_568fedcab4bc1, 'resize');
            if (map_map_568fedcab4bc1 != null)
                map_map_568fedcab4bc1.setCenter(coordinate_map_568fedcab4bc1);
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
            if ($(map_map_568fedcab4bc1).parents('.ult_exp_section')) {
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 200);
            }
        });
        $(document).on('onUVCModalPopupOpen', function() {
            if ($(map_map_568fedcab4bc1).parents('.ult_modal-content')) {
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
        if (marker_map_568fedcab4bc1.getAnimation() != null) {
            marker_map_568fedcab4bc1.setAnimation(null);
        } else {
            marker_map_568fedcab4bc1.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
})(jQuery);