(async () => {
    try {
      const res = await fetch('http://timetableapi.ptv.vic.gov.au/v3/stops/route/1/route_type/0?devid=3002044&signature=57CEFA51CD688E6D1B0833389E50A2371DEE3CA2')
      const out = await res.json()

      const stops = out.stops;
      const len = stops.length;

      let stop_names = '';
      let geoLocation = '';
      for (let i = 0; i < len; i++) {
          stop_names += stops[i]['stop_name'];
          geoLocation += "[" + stops[i]['stop_longitude'] +", " + stops[i]['stop_latitude'] + "],";
        }
        console.log(stop_names);
        console.log(geoLocation);

    } catch (err) {
      throw err
    }
  })()
