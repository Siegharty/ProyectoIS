import Estacionamientos from '../mockData/Estacionamientos.js';
import Zonas from '../mockData/Zonas.js';

var EstacionamientoLibre = {
  init: () => {
    $('#content').load('../pages/EstacionamientoLibre.html', () => {
      $(mapa_est);
      console.log(Estacionamientos);
      console.log(Zonas);
    });
  },
};

var mapa_est = function () {
  var map = createMap('mapEstacionamientos');
  var drawer = new Drawer();

  Estacionamientos.map((estacionamiento) => {
    return drawer.drawLocationInMap(estacionamiento.lat, estacionamiento.lon, map);
  });

  Zonas.map((zona) => {
    return L.polygon(zona.latLong, { color: zona.color }).addTo(map);
  });
};

export default EstacionamientoLibre;
