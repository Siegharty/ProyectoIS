import Perfil from '../js/Perfil.js';
import Saldo from '../js/Saldo.js';
import Infracciones from '../js/Infracciones.js';
import PuntosVenta from '../js/PuntosVenta.js';
import EstacionamientoLibre from '../js/EstacionamientoLibre.js';

var Menu = {
  onClickItem: (event) => {
    switch (event.target.text) {
      case 'Perfil':
        Perfil.init();
        break;
      case 'Saldo':
        Saldo.init();
        break;
      case 'Infracciones':
        Infracciones.init();
        break;
      case 'Puntos de venta':
        PuntosVenta.init();
        break;
      case 'Estacionamiento libre':
        EstacionamientoLibre.init();
        break;
      default:
        Saldo.init();
    }
  },
  init: () => {
    $('#menu').load('../pages/Menu.html', () => {
      $('.nav-link').click((event) => Menu.onClickItem(event));
    });
  },
};

export default Menu;
