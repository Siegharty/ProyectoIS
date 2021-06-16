var Drawer2 = function() {
    return {        
		drawLocationInMap2: drawLocationInMap2
    }

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap2(lat, long, map) {
		// Creamos un marker.		
		var p = L.marker(L.latLng(lat, long));
		p.addTo(map);
	}
}