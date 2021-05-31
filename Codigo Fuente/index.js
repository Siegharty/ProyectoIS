import Header from './js/Header.js';
import Menu from './js/Menu.js';

var Index = {
  init: () => {
    $(document).ready(function () {
      Header.init();
      Menu.init();
    });
  },
};

Index.init();

export default Index;
