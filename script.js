// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [77.29136656678378,10.997833706736943 ],
  [77.29129447576753,11.007458338313771 ],
  [77.31968554012374,11.044947531057655 ],
  [ 77.33834468073994,11.063091809952034],
  [77.33995905703462,11.071083279370935 ],
  [77.34898149950054,11.097504805533436 ],
  [77.34625255966644,11.102064457439527 ]
  [77.34241729287258,11.10799913580392 ],

  // [-71.118625, 42.374863],
];
 
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ29raWxhLW0iLCJhIjoiY2t4NzVrb2I3MDM0ODMxcWM5dXFoN3luNSJ9.nKnw7gmBIY7d3UWw9acmAA';
 
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [77.31686414611,11.042243720068791 ],
  zoom: 12,
});
 
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker=new mapboxgl.Marker()
   .setLngLat([77.29136656678378,10.997833706736943 ])
  .addTo(map)
 
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() => {
    if(counter>=busStops.length)return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    
    
  },1000 );
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.

  

}