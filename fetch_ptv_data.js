// (async () => {
//     try {
//       const response = await fetch('http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?devid=3002044&signature=57CEFA51CD688E6D1B0833389E50A2371DEE3CA2');
//       const data = await response.json();
//       const stops = data.stops;
//       const len = stops.length;
//       let stop_names = '';
//       let geoLocation = '';
//       for (let i = 0; i < len; i++) {
//           stop_names += stops[i]['stop_name'];
//           geoLocation += "[" + stops[i]['stop_longitude'] +", " + stops[i]['stop_latitude'] + "],";
//         }
//         console.log(stop_names);
//         console.log(geoLocation);

//     } catch (err) {
//       throw err
//     }
//   })()


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

  // Approach 1
  const asynchronousFunction = async () => {
    const response = await fetch('http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?devid=3002044&signature=57CEFA51CD688E6D1B0833389E50A2371DEE3CA2');
    const data = await response.json();
    return data;
  }

  const mainFunction = async () => {
    const result = await asynchronousFunction();
    return result;
  }

(async () => {
    console.log(await mainFunction());
  })()