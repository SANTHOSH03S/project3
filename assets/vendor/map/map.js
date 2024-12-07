/* ===================

Name: Map Faster – Creative Multi-purpose HTML5 Template

*** All style created from https://mapstyle.withgoogle.com/
======================*/

/* ===================
    Table Of Content
======================
01 Standard
02 Dark
======================*/


(function ($) {
// USE STRICT
"use strict";

/*******************
   01 Standard
********************/
var standardMap = function() {
  function initialize(obj) {
    var lat = $("#"+obj).attr("data-lat");
    var lng = $("#"+obj).attr("data-lng");
    var contentString = $("#"+obj).attr("data-string");
    var myLatlng = new google.maps.LatLng(lat,lng);
    var map, marker, infowindow;
    var image = "assets/images/place.png";
    var zoomLevel = parseInt($("#"+obj).attr("data-zoom") ,10);   

    //Styles Start
    var styles = []
    //Styles End

    //Create a styled map using the above styles
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"}); 
    
    // Map options
    var mapOptions = {
      zoom: zoomLevel,
      disableDefaultUI: false,
      center: myLatlng,
      scrollwheel: false,
      mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
      }
    }
    
    map = new google.maps.Map(document.getElementById(obj), mapOptions);  
    
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    
    if( contentString != "" ) {
      infowindow = new google.maps.InfoWindow({
        content: contentString
      });
    }   
      
      marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image
    });

    google.maps.event.addListener(marker, "click", function() {
      infowindow.open(map,marker);
    });

  }
if( $( "#map-standard").length == 1 ) {
      initialize( "map-standard" );
}
}; 

/*******************
   02 Dark
********************/
var darkMap = function() {
	function initialize(obj) {
		var lat = $("#"+obj).attr("data-lat");
    var lng = $("#"+obj).attr("data-lng");
		var contentString = $("#"+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = "assets/images/place.png";
		var zoomLevel = parseInt($("#"+obj).attr("data-zoom") ,10);		

		//Styles Start
		var styles = [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]
    //Styles End

//Create a styled map using the above styles
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
    
		// Map options
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: false,
			center: myLatlng,
      scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);	
		
		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");
		
		if( contentString != "" ) {
			infowindow = new google.maps.InfoWindow({
				content: contentString
			});
		}		
	    
      marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map,marker);
		});
	}
if( $( "#map-dark").length == 1 ) {
			initialize( "map-dark" );
}
}; 

// BEGIN: Document Ready
$(document).ready(function () {
  standardMap();
  darkMap();
 
});

})(jQuery);