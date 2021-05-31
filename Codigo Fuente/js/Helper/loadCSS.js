var loadCSS = (href) => {
  var cssLink = $('<link>');
  $('head').append(cssLink);

  cssLink.attr({
    rel: 'stylesheet',
    type: 'text/css',
    href: href,
  });

  return cssLink;
};

export default loadCSS;
