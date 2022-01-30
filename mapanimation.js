// View all stops on a specific route
// GET /v3/stops/route/{route_id}/route_type/{route_type}?direction_id={direction_id}

// /v3/stops/route/1/route_type/0?direction_id=0
// const v3_stops_train_city_to_alamein_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?direction_id=0&devid=3002044&signature=B0200AF628E1D3363C360A92B1FDBFFE9347D5D0';
// /v3/stops/route/1/route_type/0?direction_id=1
const v3_stops_train_alamein_to_city_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?direction_id=1&devid=3002044&signature=6CF88A4FA70A46C46CF64B7AAD240ACD54C8119D';

// Problem: you are making an asynchronous call, and you need the result of that call to be returned from the original function.
// but asynchronousFunction() performs some asynchronous call in it (for example a fetch() call), 
// and can’t directly return the result value. Perhaps internally it has a promise it needs to wait for, or a callback.
const asynchronousFunction = async (url) => {
  const response = await fetch(url);            // You use the await keyword instead than a promise-based approach
  const data = await response.json();           // Return response with type json
  return data;
}

// In this case in mainFunction we need to add async to the function signature, and await before we call asynchronousFunction()
// Now this returns a promise, because it’s an async function
const mainFunction = async (url) => {
  const result = await asynchronousFunction(url);
  return result;
}

// Sort Object
function sortObj(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

// So to get the result back you can wrap this in an IIFE (Immediately Invoked Function Expression) like this:
(async () => {
  const trainData = await mainFunction(v3_stops_train_alamein_to_city_url);
  // const tramData = await mainFunction(v3_stops_tram_vermont_to_city_url);
  trainStops = trainData.stops;
  // tramStops = tramData.stops;

  train_stopNames_sorted = [];
  train_LngLat_sorted = [];

  for (let i = 0; i < trainStops.length; i++) {
    trainStops.sort((x, y) => x.stop_sequence - y.stop_sequence);
    train_stopNames_sorted.push(trainStops[i]['stop_name']);
    train_LngLat_sorted.push([trainStops[i]['stop_longitude'], trainStops[i]['stop_latitude']]);
  }
  console.log(train_stopNames_sorted);
  console.log(train_LngLat_sorted);
})()

  // This array contains the coordinates (Lng / Lat) for all stops
// const stops = [
//   [145.079666, -37.8683167],
//   [145.081345, -37.86197],
//   [145.045837, -37.8224],
//   [145.007553, -37.8275566],
//   [145.0805, -37.8515625],
//   [145.058685, -37.8265648],
//   [144.99707, -37.8264046],
//   [144.955658, -37.8119774],
//   [144.966965, -37.81831],
//   [145.036438, -37.8214645],
//   [145.075562, -37.8439827],
//   [145.0229, -37.8218231],
//   [144.9626, -37.8099365],
//   [144.9729, -37.8110542],
//   [144.990158, -37.8240738],
//   [145.069641, -37.8315],
//   [144.95253, -37.8183327],
//   [145.0703, -37.8357124],
// ];

// Below LongLat co-ordinates derived and stored in "train_LngLat_sorted" but that only works with Desktop with Signature
const stops = [
[145.079666, -37.8683167],
[145.081345, -37.86197],
[145.0805, -37.8515625],
[145.075562, -37.8439827],
[145.0703, -37.8357124],
[145.069641, -37.8315],
[145.058685, -37.8265648],
[145.045837, -37.8224],
[145.036438, -37.8214645],
[145.0229, -37.8218231],
[145.007553, -37.8275566],
[144.99707, -37.8264046],
[144.990158, -37.8240738],
[144.9729, -37.8110542],
[144.9626, -37.8099365],
[144.955658, -37.8119774],
[144.95253, -37.8183327],
[144.966965, -37.81831],
];




  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibW1vZGkiLCJhIjoiY2t5YjE1d2wyMGI0MjJ3cTdxNnc2dzhjNSJ9.19wuyWyVN1CiV1Ol4lBzzw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [145.079666, -37.8683167],
    zoom: 11,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array stops. The marker variable should be named "marker"
  let marker = new mapboxgl.Marker().setLngLat([145.079666, -37.8683167]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array stops
    // Make sure you call move() after you increment the counter.
    setTimeout(() => {
        if (counter >= stops.length) return;
        marker.setLngLat(stops[counter]);
        counter++;
        move();
      }, 1000);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  