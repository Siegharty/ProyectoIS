/******************************************************************************
 * Función para crear un mapa.
 */
 var mapa;
 
 var createMap = function(nodeId, events) {
    // Ubicación de la UNGS.
    var ungsLocation = [-34.5221554, -58.7000067];

    // Creación del componente mapa de Leaflet.
    mapa = L.map(nodeId).setView(ungsLocation, 13);

    // Agregamos los Layers de OpenStreetMap.
    var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Agregamos el control para seleccionar Layers al mapa
    var layersControl = L.control.layers({
        "Base": baseLayer
    });
    layersControl.addTo(mapa);
    // hack:
    mapa.layersControl = layersControl;

    mapa.on('click', events);

    return mapa;
}
