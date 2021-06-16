import Infracciones from '../js/Infracciones.js';
import PuntosVenta from '../js/PuntosVenta.js';
import EstacionamientoLibre from '../js/EstacionamientoLibre.js';
import EstacionamientoActivo from '../js/EstacionamientoActivo.js';

var Menu = {
  onClickItem: (event) => {
    switch (event.target.text) {
      case 'Infracciones':
        Infracciones.init();
        break;
      case 'Puntos de venta':
        PuntosVenta.init();
        break;
      case 'Estacionamiento libre':
        EstacionamientoLibre.init();
        break;
      case 'Estacionamiento activo':
        EstacionamientoActivo.init();
        break;
    }
  },
  init: () => {
    $('#menu').load('../pages/Menu.html', () => {
      $('.nav-link').click((event) => Menu.onClickItem(event));
    });
  },
};

export default Menu;
