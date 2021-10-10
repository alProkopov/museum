mapboxgl.accessToken = 'pk.eyJ1IjoicHJvdmFsIiwiYSI6ImNrdWs0aGI2cDBxNXgycG82ZDF1c3o2dXcifQ.4_NBySAEaoPUUgqBuHpP0g';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [2.3364, 48.86091],
zoom: 15.75
});
map.addControl(new mapboxgl.NavigationControl());

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({ color: 'grey'})
.setLngLat([2.3365, 48.8625])
.addTo(map);
