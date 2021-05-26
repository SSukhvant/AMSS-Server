// getData();

// async function getData() {
//   const response = await fetch('/api');
//   const data = await response.json();
//   console.log(data);

  // for (item of data) {
  //   const root = document.createElement('p');
  //   const mood = document.createElement('div');
  //   const geo = document.createElement('div');
  //   const date = document.createElement('div');
  //   const image = document.createElement('img');

  //   mood.textContent = `mood: ${item.mood}`;
  //   geo.textContent = `${item.lat}°, ${item.lon}°`;
  //   const dateString = new Date(item.timestamp).toLocaleString();
  //   date.textContent = dateString;
  //   image.src = item.image64;
  //   image.alt = 'Dan Shiffman making silly faces.';

  //   root.append(mood, geo, date, image);
  //   document.body.append(root);
  // }
  // console.log(data);
//}


// fetch('http://localhost:3000')
// .then(res => res.json())
// .then(data1 => console.log(data1))

function getData() {
  console.log("Started")
  fetch('/api').then((response)=>{
    console.log("Inside First Then")
    return response.json();
  }).then((data)=>{
    console.log("Inside second then")
    console.log(data);
  })
}
getData()


// db.remove({}, { multi: true }, function (err, numRemoved) {

// });