import DateHelper from '../js/Helper/Date.js';

var Infracciones = {
  obtenerInfraccionPorPatente: (patente) => {
    const urlService = `https://infraccionesweb.herokuapp.com/api/${patente}/infracciones/`;

    $.ajax({
      url: urlService,
      type: 'GET',
      success: (response) => {
        if (response.infracciones.length == 0) {
          const row = '<tr><td colspan="5">No hay infracciones registradas</td></tr>';
          return $('#tablaInfracciones > tbody:last-child').append(row);
        }

        Infracciones.dibujarTablaInfracciones(response.infracciones);
      },
    });
  },
  obtenerTiposInfracciones: () => {
    const urlService = `https://infraccionesweb.herokuapp.com/api/tiposInfraccion/`;

    return $.ajax({
      url: urlService,
      type: 'GET',
    });
  },
  obtenerDescripcionInfraccionPorId: (tiposInfracciones, idTipo) => {
    return tiposInfracciones.find((x) => x.id == idTipo).descripcion;
  },
  dibujarTablaInfracciones: async (infracciones) => {
    const tiposInfracciones = await Infracciones.obtenerTiposInfracciones();

    infracciones.map((infraccion) => {
      const infraccionesDescripcion = Infracciones.obtenerDescripcionInfraccionPorId(tiposInfracciones.tipos, infraccion.tipoInfraccion);
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
    $('#content').load('../pages/Infracciones.html', () => {
      //Handle de buscador de infracciones
      $('#enviar').click(() => {
        const patente = $('#buscador').val();
        if (patente.length < 6) {
          $('#mensajeError').show();
          return;
        }

        $('#tablaInfracciones').show();
        $('#tablaInfracciones > tbody').empty();
        $('#mensajeError').hide();

        Infracciones.obtenerInfraccionPorPatente(patente);
      });

      //Capitaliza texto
      $('#buscador').on('input', (event) => {
        event.target.value = event.target.value.toLocaleUpperCase();
      });
    });
  },
};

export default Infracciones;
