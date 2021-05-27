async function setup() {
  let lat, lon;
  async function getdata() {
    const data = { lat, lon };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/hw', options);
  const json = await response.json();
  console.log(json);
  }

  if ('geolocation' in navigator) {
    console.log('Geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      getdata(lat,lon);
    });
  } else {
    console.log('Geolocation is not available');
  }
}

