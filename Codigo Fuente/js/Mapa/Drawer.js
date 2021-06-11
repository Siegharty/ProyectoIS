var Drawer = function() {
    return {        
		drawLocationInMap: drawLocationInMap
    }

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap(lat, long, map) {
		// Creamos un marker.		
		var p = L.marker(L.latLng(lat, long));
		p.addTo(map);
    
	}


}
