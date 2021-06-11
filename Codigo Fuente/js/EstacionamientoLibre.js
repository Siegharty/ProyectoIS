var EstacionamientoLibre = {
  init: () => {
    $('#content').load('../pages/EstacionamientoLibre.html', () => {
      $(mapa_est);
    });
  },
};

var mapa_est = function () {

  var map = createMap('mapEstacionamientos');
  var drawer = new Drawer();
  
  drawer.drawLocationInMap(-34.5408936, -58.7131234, map);
  drawer.drawLocationInMap(-34.5415345, -58.7139824, map);
  drawer.drawLocationInMap(-34.5389316, -58.7154211, map);
  drawer.drawLocationInMap(-34.5398986, -58.7145535, map);
  drawer.drawLocationInMap(-34.5395412, -58.7124483, map);
  

  L.polygon([
    L.latLng(-34.515594, -58.705654),
    L.latLng(-34.523503, -58.714062),
    L.latLng(-34.519177, -58.719890),
    L.latLng(-34.511089, -58.711374),
    L.latLng(-34.514062, -58.707909),
    L.latLng(-34.513824, -58.707584)
  ],{
    color: 'blue'
  }).addTo(map);
  
  L.polygon([
    L.latLng(-34.537242, -58.715502),
    L.latLng(-34.540830, -58.710599),
    L.latLng(-34.542881, -58.712874),
    L.latLng(-34.539372, -58.717745)

  ],{
    color: 'green'
  }).addTo(map);

  L.polygon([
    L.latLng(-34.535415775764804, -58.71359892033557),
    L.latLng(-34.532949893513816, -58.71698923251725),
    L.latLng(-34.5360963110612, -58.72030444284573),
    L.latLng(-34.53852674881247, -58.716924859498235)

  ],{
    color: 'blue'
  }).addTo(map);


L.polygon([
  L.latLng(-34.53038047960603, -58.70835784076817),
  L.latLng(-34.53365077348545, -58.703916098429595),
  L.latLng(-34.535029543736385, -58.70546105081425),
  L.latLng(-34.53177702346993, -58.70990278892015)

],{
  color: 'green'
}).addTo(map);

L.polygon([
  L.latLng(-34.54387606334513, -58.70802528983737),
  L.latLng(-34.542254632189746, -58.71024165031463),
  L.latLng(-34.53974476405871, -58.70760235665752),
  L.latLng(-34.541441584603405, -58.70539221644057)

],{
  color: 'green'
}).addTo(map);

L.polygon([
  L.latLng(-34.541666376441775, -58.72631839671998),
  L.latLng(-34.539227192619286, -58.72370056073487),
  L.latLng(-34.541754751325456, -58.72026733321341),
  L.latLng(-34.54412316325387, -58.722906626870525)

],{
  color: 'blue'
}).addTo(map);

};

export default EstacionamientoLibre;
