let container = document.getElementById('map');
const latlng = new kakao.maps.LatLng(33.442337, 126.571449);

let options = {
  center: latlng,
  level: 3
};

let map = new kakao.maps.Map(container, options);

let mapTypeControl = new kakao.maps.MapTypeControl();
let zoomControl = new kakao.maps.ZoomControl();

map.addControl(mapTypeControl);
map.addControl(zoomControl);

let marker = new kakao.maps.Marker({
    map: map,
    position: latlng
});

marker.setMap(map);
