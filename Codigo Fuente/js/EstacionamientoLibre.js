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
      $(".list-group-item.active").removeClass('active');
      $(event.target).addClass("active")

      var marcador = marcadores[event.target.getAttribute('value')];
      marcador.openPopup();
      mapa.setView(marcador._latlng, 16);

    });
  },
  init: () => {
    $('#content').load('../pages/EstacionamientoLibre.html', () => {
      EstacionamientoLibre.mostrarListadoDirecciones();
      EstacionamientoLibre.hacerZoomOnClick();
      $(mapa_est);
    });
  },
};

var mapa_est = function () {
  var map = createMap('mapEstacionamientos');
  var drawer = new Drawer();

  Estacionamientos.map((estacionamiento) => {
    return drawer.drawLocationInMap(estacionamiento.id, estacionamiento.lat, estacionamiento.lon, map);
  });

  Zonas.map((zona) => {
    return L.polygon(zona.latLong, { color: zona.color }).addTo(map);
  });
};

export default EstacionamientoLibre;
