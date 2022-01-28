
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
const v3_routes_url = "http://timetableapi.ptv.vic.gov.au/v3/routes?devid=3002044&signature=BAC47425470A9C091AAF926C6596FCD8434624D0";

// View all stops on a specific route
// GET /v3/stops/route/{route_id}/route_type/{route_type}
const v3_stops_alamein_url = 'http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?devid=3002044&signature=57CEFA51CD688E6D1B0833389E50A2371DEE3CA2';

// View directions that a route travels in
// GET /v3/directions/route/{route_id}
const v3_direction_alamein_url = 'http://timetableapi.ptv.vic.gov.au/v3/directions/route/1?devid=3002044&signature=42AAB0DC20393C9B483ADC815507CE2A1F605187';

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

// So to get the result back you can wrap this in an IIFE (Immediately Invoked Function Expression) like this:
(async () => {
  result = await mainFunction(v3_routes_url);
  const v3_routes_data = result.routes;
  const len = v3_routes_data.length;
  let train_route_names = [];
  let tram_route_names = [];
  let bus_route_names = [];
  for (let i = 0; i < len; i++) {
    if (v3_routes_data[i]['route_type'] == 0) {
      train_route_names.push(v3_routes_data[i]['route_name'], v3_routes_data[i]['route_number'] );
    }
    if (v3_routes_data[i]['route_type'] == 1) {
      tram_route_names.push(v3_routes_data[i]['route_name'], v3_routes_data[i]['route_number']);
    }
    if (v3_routes_data[i]['route_type'] == 2) {
      bus_route_names.push(v3_routes_data[i]['route_name'], v3_routes_data[i]['route_number']);
    }
  }
  console.log(train_route_names);
  console.log(tram_route_names);
  console.log(bus_route_names);
})()