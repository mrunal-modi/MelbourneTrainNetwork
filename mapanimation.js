// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [145.079666, -37.8683167],
    [145.081345, -37.86197],
    [145.045837, -37.8224],
    [145.007553, -37.8275566],
    [145.0805, -37.8515625],
    [145.058685, -37.8265648],
    [144.99707, -37.8264046],
    [144.955658, -37.8119774],
    [144.966965, -37.81831],
    [145.036438, -37.8214645],
    [145.075562, -37.8439827],
    [145.0229, -37.8218231],
    [144.9626, -37.8099365],
    [144.9729, -37.8110542],
    [144.990158, -37.8240738],
    [145.069641, -37.8315],
    [144.95253, -37.8183327],
    [145.0703, -37.8357124],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibW1vZGkiLCJhIjoiY2t5YjE1d2wyMGI0MjJ3cTdxNnc2dzhjNSJ9.19wuyWyVN1CiV1Ol4lBzzw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [145.079666, -37.8683167],
    zoom: 10,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  let marker = new mapboxgl.Marker().setLngLat([145.079666, -37.8683167]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
      }, 1000);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  