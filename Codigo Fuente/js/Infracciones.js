import DateHelper from '../js/Helper/Date.js';

var Infracciones = {
  obtenerInfraccionPorPatente: (patente) => {
    const urlService = `https://infraccionesweb.herokuapp.com/api/${patente}/infracciones/`;

    return $.ajax({
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
  mostrarAcarreos: () => {
    //Agrega evento para traer informacion del deposito
    $('#acarreo').click((event) => {
      if (event.target.text == 'No') {
        return;
      }
      const idInfraccionSeleccionada = event.target.getAttribute('data-id');
      const patente = $('#buscador').val();
      Infracciones.obtenerDepositoPorIdDeInfraccion(patente, idInfraccionSeleccionada);
    });
  },
  obtenerDepositoPorIdDeInfraccion: (patente, idInfraccion) => {
    const urlService = `https://infraccionesweb.herokuapp.com/api/${patente}/acarreos/${idInfraccion}`;
    $.ajax({
      url: urlService,
      type: 'GET',
      success: (response) => {
        const deposito = response.acarreo.deposito;
        $('#informacionAcarreo').show();
        $('#nombreAcarreo').text(`${deposito.nombre}`);
        $('#direccionAcarreo').text(`${deposito.direccion}`);
        $('#telefonoAcarreo').text(`Telefono: ${deposito.telefono}`);
        $('#horariosAcarreo').text(`Horarios: ${deposito.horarios}`);
        const ubicacion = deposito.ubicacion;
        Infracciones.dibujarMapaAcarreo(ubicacion.lat, ubicacion.lon);
      },
    });
  },
  dibujarMapaAcarreo: (lat, lon) => {
    var map = createMap('mapaAcarreo');
    var drawer = new Drawer();

    return drawer.drawLocationInMap(1, lat, lon, map);
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
        <td id="existeCarreo">${infraccion.existeAcarreo ? `<a href="#" id="acarreo" data-id=${infraccion.id}>Si - Más informacion</a>` : 'No'}</td>
        <td id="direccionRegistrada">${infraccion.direccionRegistrada}</td>
      </tr>
      `;
      return $('#tablaInfracciones > tbody:last-child').append(row);
    });

    Infracciones.mostrarAcarreos();
  },
  limpiarDatos: () => {
    $('#tablaInfracciones').show();
    $('#tablaInfracciones > tbody').empty();
    $('#mensajeError').hide();
    $('#informacionAcarreo').hide();
    $('#nombreAcarreo').text('');
    $('#direccionAcarreo').text('');
    $('#telefonoAcarreo').text('');
    $('#horariosAcarreo').text('');
  },
  init: () => {
    $('#content').load('../pages/Infracciones.html', () => {
      //Handle de buscador de infracciones
      $('#enviar').click(async () => {

        const patente = $('#buscador').val();
        let regexPatenteNueva = (/[a-zA-Z]{2}[\d]{3}[a-zA-Z]{2}$/gm).test(patente);
        let regexPatenteVieja = (/[a-zA-Z]{3}[\d]{3}$/gm).test(patente);

        if(!(regexPatenteNueva || regexPatenteVieja))
        {
          $('#mensajeError').show();
          return;
        }

        Infracciones.limpiarDatos();

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
