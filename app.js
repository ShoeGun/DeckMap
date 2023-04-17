const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicmljaGRvZ2ciLCJhIjoiY2xmbmV5b3AwMDZodzN0cGplcDBzeXVjcSJ9.R-qDLk6pI8ZUebwtrkLEYg';
const ELEVATION_TILE_URL = 'YOUR_ELEVATION_TILE_URL';
const TERRAIN_TEXTURE_URL = 'YOUR_TERRAIN_TEXTURE_URL';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.4194, 37.7749],
  zoom: 13,
  accessToken: MAPBOX_ACCESS_TOKEN
});

const terrainLayer = new deck.TerrainLayer({
  id: 'terrain-layer',
  minZoom: 0,
  maxZoom: 23,
  elevationDecoder: {
    rScaler: 256.0,
    gScaler: 1.0,
    bScaler: 1 / 256.0,
    offset: -32768
  },
  elevationData: ELEVATION_TILE_URL,
  texture: TERRAIN_TEXTURE_URL,
  wireframe: false
});

const deckgl = new deck.DeckGL({
  map: map,
  layers: [terrainLayer]
});
