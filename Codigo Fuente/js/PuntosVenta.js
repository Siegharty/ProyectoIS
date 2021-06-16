var PuntosVenta = {
  init: () => {
    $('#content').load('../pages/PuntosVenta.html', () => {
      $(mapa_com);
    });
  },
};

var mapa_com = function () {

  var map = createMap('mapPuntosVenta');
  var drawer2 = new Drawer2();

  drawer2.drawLocationInMap2(-34.522451, -58.7019500, map);
  drawer2.drawLocationInMap2(-34.532903, -58.7015454, map);
  drawer2.drawLocationInMap2(-34.521872, -58.7012310, map);
  drawer2.drawLocationInMap2(-34.542395, -58.7103609, map);
  drawer2.drawLocationInMap2(-34.544059, -58.7093784, map);

};

export default PuntosVenta;
