import Estacionamientos from '../mockData/Estacionamientos.js';
import Zonas from '../mockData/Zonas.js';

var EstacionamientoLibre = {
  mostrarListadoDirecciones: () => {
    Estacionamientos.map((estacionamiento) => {
      const row = `
        <a href='#' class="list-group-item" value=${estacionamiento.id}>${estacionamiento.nombre}</a>
      `;
      return $('#listadoDirecciones > div:last-child').append(row);
    });
  },
  hacerZoomOnClick: () => {
    $('.list-group-item').click((event) => {
      $('.list-group-item.active').removeClass('active');
      $(event.target).addClass('active');

      var marcador = marcadores[event.target.getAttribute('value')];
      marcador.openPopup();
      mapa.setView(marcador._latlng, 16);
    });
  },
  actualizarEstado: () => {
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    Estacionamientos.map((estacionamiento, index) => {
      const marker = marcadores[index + 1];

      if (estacionamiento.estado == 0) {
        return marker.setIcon(greenIcon);
      } else {
        return marker.setIcon(redIcon);
      }
    });
  },
  init: () => {
    $('#content').load('../pages/EstacionamientoLibre.html', () => {
      $(mapa_est);
    });
  },
};

var mapa_est = function () {
  var map = createMap('mapEstacionamientos');
  var drawer = new Drawer();

  Estacionamientos.map((estacionamiento) => {
    return drawer.drawLocationInMap(estacionamiento.id, estacionamiento.nombre,estacionamiento.lat, estacionamiento.lon, map);
  });

  Zonas.map((zona) => {
    return L.polygon(zona.latLong, { color: zona.color }).addTo(map);
  });

  EstacionamientoLibre.actualizarEstado();
};

export default EstacionamientoLibre;
