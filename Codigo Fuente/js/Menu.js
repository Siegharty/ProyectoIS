import loadCSS from '../js/Helper/loadCSS.js';

var Menu = {
    init: () => {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        $(window).resize(function(e) {
          if($(window).width()<=768){
            $("#wrapper").removeClass("toggled");
          }else{
            $("#wrapper").addClass("toggled");
          }
        });
        
        $("#menu").load("../pages/Components/Menu.html");
        loadCSS("../css/Menu.css");
    }
};

export default Menu;