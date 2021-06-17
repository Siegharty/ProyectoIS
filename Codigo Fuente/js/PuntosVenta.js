import Comercios from '../mockData/Comercios.js';

var PuntosVenta = {
  mostrarListadoDirecciones: () => {
    Comercios.map((comercio) => {
      const row = `
        <a href='#' class="list-group-item" value=${comercio.id}>${comercio.nombreEmpresa}</a>
      `;
      return $('#listadoDireccionesComercios > div:last-child').append(row);
    });
  },
  hacerZoomOnClick: () => {
    $('.list-group-item').click((event) => {
      $('.list-group-item.active').removeClass('active');
      $(event.target).addClass('active');

      var idComercio = event.target.getAttribute('value');
      var marcador = marcadores[idComercio];
      marcador.openPopup();
      mapa.setView(marcador._latlng, 16);
      PuntosVenta.mostrarDetalleComercio(idComercio);
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

    Comercios.map((comercio, index) => {
      const marker = marcadores[index + 1];

      if (comercio.estado == 0) {
        return marker.setIcon(greenIcon);
      } else {
        return marker.setIcon(redIcon);
      }
    });
  },
  mostrarDetalleComercio : (idComercio) => {
  var comercio = Comercios[idComercio - 1]
  $('#informacionComercio').show();
  $('#nombreEmpresaComercio').text(`${comercio.nombreEmpresa} - ${comercio.rubro}`);
  $('#direccionComercio').text(`${comercio.direccion}`);
  $('#horarioComercio').text(`Horarios: ${comercio.horario}`);
  },
  init: () => {
    $('#content').load('../pages/PuntosVenta.html', () => {
      PuntosVenta.mostrarListadoDirecciones();
      PuntosVenta.hacerZoomOnClick();
      $(mapa_com);
    });
  },
};

var mapa_com = function () {
  var map = createMap('mapPuntosVenta');
  var drawer = new Drawer();

  Comercios.map((comercio) => {
    return drawer.drawLocationInMap(comercio.id, comercio.nombreEmpresa, comercio.lat, comercio.lon, map);
  });

  PuntosVenta.actualizarEstado();
};

export default PuntosVenta;
