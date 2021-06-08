import DateHelper from "../js/Helper/Date.js";

var Infracciones = {
  obtenerInfraccionPorPatente: (patente) => {
    //TODO: Validar si la patente viene con info o no
    //TODO: Convertir la patente en mayusculas
    const urlService = `https://infraccionesweb.herokuapp.com/api/${patente}/infracciones/`;

    $.ajax({
      url: urlService,
      success: function (response) {
        //TODO: Si no tiene infracciones, mostrar que no hay infracciones disponibles

        Infracciones.dibujarTablaInfracciones(response.infracciones);

        console.log(response);
      },
    });
  },
  obtenerTiposInfracciones: () => {
    const urlService = `https://infraccionesweb.herokuapp.com/api/tiposInfraccion/`;

    return $.ajax({
      url: urlService,
      type:'GET'
    });
  },
  obtenerDescripcionInfraccionPorId: (tiposInfracciones, idTipo) => {
    return tiposInfracciones.find(x => x.id == idTipo).descripcion;
  },
  dibujarTablaInfracciones: async (infracciones) => {
    const tiposInfracciones = await Infracciones.obtenerTiposInfracciones();

    infracciones.map((infraccion, index) => {
      const infraccionesDescripcion = Infracciones.obtenerDescripcionInfraccionPorId(tiposInfracciones.tipos,infraccion.tipoInfraccion)
      //Dibujar tabla en html
      const row = `
      <tr>
        <td id="motivo">${infraccionesDescripcion}</td>
        <td id="fechaDeRegistro">${DateHelper.fechaDDMMYYYY(infraccion.fechaHoraRegistro)}</td>
        <td id="montoAPagar">${infraccion.montoAPagar}</td>
        <td id="existeCarreo">${infraccion.existeAcarreo ? 'Si' : 'No'}</td>
        <td id="direccionRegistrada">${infraccion.direccionRegistrada}</td>
      </tr>
      `;
      return $('#tablaInfracciones > tbody:last-child').append(row);
    });
  },
  init: () => {
    $('#content').load('../pages/Infracciones.html', function () {
      $('#enviar').click(() => {
        const patente = $('#buscador').val();
        Infracciones.obtenerInfraccionPorPatente(patente);
      });
    });
  },
};

export default Infracciones;
