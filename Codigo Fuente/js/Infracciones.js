var Infracciones = {
  get: () => {
    $.ajax({
      url: 'https://infraccionesweb.herokuapp.com/api/',
      success: function(response){
        console.log(response);
      }
    });
  },
  init: () => {
    $('#content').load('../pages/Infracciones.html');
    Infracciones.get();
  },
};

export default Infracciones;
