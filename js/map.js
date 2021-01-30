(function ($) {
    "use strict";
    var map;
    var InforObj = [];
    var centerCords = {
        lat: -25.844,
        lng: 131.036
    };
    var markersOnMap = [{
        address: "House - 1020 Avenue 9, ঢাকা 1216",
        email: "dlab20@droitlab.com",
        LatLng: [{
            lat: -25.844,
            lng: 131.036
        }]
    }];

    window.onload = function () {
        initMap();
    };

    function addMarkerInfo() {
        for (var i = 0; i < markersOnMap.length; i++) {
            var contentString = '<div id="content"><div class="single_location"> <div class="location_img"><img src="img/billy-map-popup-image.jpg"></div> <div class ="location_info"> <h2>Droitlab Office</h2><p>' + markersOnMap[i].address +
                '</p> <p>' + markersOnMap[i].email +
                '</p></div></div>';

            const marker = new google.maps.Marker({
                position: markersOnMap[i].LatLng[0],
                map: map,
                "icon": 'http://droitthemes.com/palash/Location_icon.png',
            });

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 200
            });

            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        }
    }

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: centerCords
        });
        addMarkerInfo();
    }
}(jQuery))
