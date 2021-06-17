var EstacionamientoActivo = {
  init: () => {
    $('#content').load('../pages/EstacionamientoActivo.html', () => {
      $(mapa_est);
    });
  },
};

var mapa_est = function () {
  var map = createMap('mapEstacionamientosActivos');
  var drawer = new Drawer();

  var estacionamiento = {
    id: 12,
    nombre: 'Estacionamiento 12',
    estado: 1,
    lat: -34.520677904313416,
    lon: -58.71469015564158,
  };

  drawer.drawLocationInMap(estacionamiento.id, estacionamiento.nombre, estacionamiento.lat, estacionamiento.lon, map);

  mapa.setView(marcadores[12]._latlng, 16);
};

export default EstacionamientoActivo;
