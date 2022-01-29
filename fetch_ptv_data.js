
// async function fetchDataFromURL() {
//   let url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?devid=3002044&signature=57CEFA51CD688E6D1B0833389E50A2371DEE3CA2';
//   const res = await fetch(url);
//   const data = await res.json();
//   const stops = data.stops;
//   const len = stops.length;

//   let stop_names = '';
//   let geoLocation = '';
//   for (let i = 0; i < len; i++) {
//     stop_names += stops[i]['stop_name'];
//     geoLocation += "[" + stops[i]['stop_longitude'] +", " + stops[i]['stop_latitude'] + "],";
//   }
//   console.log(stop_names);
//   console.log(geoLocation);
// }
// fetchDataFromURL();

// View route names and numbers for all routes
// GET /v3/routes
// const v3_routes_url = 'http://timetableapi.ptv.vic.gov.au/v3/routes?devid=3002044&signature=BAC47425470A9C091AAF926C6596FCD8434624D0';

// Alamein Train = "route_type": 0, "route_id": 1, "route_name": "Alamein", "route_number": ""
// 75 Tram = "route_type": 1, "route_id": 958, "route_name": "Vermont South - Central Pier Docklands", "route_number": "75"


// View directions that a route travels in
// GET /v3/directions/route/{route_id}
// const v3_direction_train_alamein_url = 'http://timetableapi.ptv.vic.gov.au/v3/directions/route/1?devid=3002044&signature=42AAB0DC20393C9B483ADC815507CE2A1F605187';
// const v3_direction_tram_75_url = 'http://timetableapi.ptv.vic.gov.au/v3/directions/route/958?devid=3002044&signature=0F02314853861F7C18D7610C8FCEAB4FB81789B7';

// Alamein Train = "direction_id": 0, "direction_name": "Alamein" | "direction_id": 1, "direction_name": "City (Flinders Street)",
// 75 Tram = "direction_id": 15, "direction_name": "Central Pier Docklands" | "direction_id": 29, "direction_name": "Vermont South",


// View all stops on a specific route
// GET /v3/stops/route/{route_id}/route_type/{route_type}?direction_id={direction_id}

// /v3/stops/route/1/route_type/0?direction_id=0
// const v3_stops_train_city_to_alamein_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?direction_id=0&devid=3002044&signature=B0200AF628E1D3363C360A92B1FDBFFE9347D5D0';
// /v3/stops/route/1/route_type/0?direction_id=1
const v3_stops_train_alamein_to_city_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?direction_id=1&devid=3002044&signature=6CF88A4FA70A46C46CF64B7AAD240ACD54C8119D';

// /v3/stops/route/958/route_type/1?direction_id=15
// const v3_stops_tram_city_to_vermont_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/958/route_type/1?direction_id=15&devid=3002044&signature=0CF883865842078EAE9AFEC0F2816BE80047B651';
// /v3/stops/route/958/route_type/1?direction_id=29
const v3_stops_train_vermont_to_city_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/958/route_type/1?direction_id=29&devid=3002044&signature=16199E8FE64532D3081079A338BAC2169022D25E';



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
  trainData = await mainFunction(v3_stops_train_alamein_to_city_url);
  tramData = await mainFunction(v3_stops_train_vermont_to_city_url);
  trainStops = sortObj(trainData.stops);
  tramStops = sortObj(tramData.stops);
  console.log(trainStops);
  console.log(tramStops);
  // const v3_routes_data = routesData.routes;
  // const len = v3_routes_data.length;
  // let train_stops = [];
  // for (let i = 0; i < len; i++) {

  // }
  // console.log(train_stops);
})()