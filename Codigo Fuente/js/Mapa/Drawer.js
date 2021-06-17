var marcadores = [];
var Drawer = function () {
  return {
    drawLocationInMap: drawLocationInMap,
  };

  /******************************************************************************
   * Función para dibujar una ubicacion en un mapa.
   */
  function drawLocationInMap(id, nombre, lat, long, map) {
    // Creamos un marker.
    marcadores[id] = L.marker(L.latLng(lat, long)).addTo(map).bindPopup(`${nombre}`);
  }
};
