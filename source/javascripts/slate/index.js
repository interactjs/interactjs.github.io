const $ = require('jquery');

module.exports = {
  $     : $,
  lang  : require('./lang'),
  search: require('./search'),
  toc   : require('./toc'),
};


function reposad () {
  var ad = document.getElementById('ad-contain');

  if (!ad) { return; }

  var wrap = document.querySelector('.ad-wrap');

  if (window.innerWidth <= 700 && wrap.lastElementChild === ad) {
    $('.content h1:nth-of-type(2)').before(ad);
  }
  else if (window.innerWidth > 700 && wrap.lastElementChild !== ad) {
    wrap.appendChild(ad);
  }
}

window.addEventListener('resize', reposad);

document.addEventListener('DOMContentLoaded', function() {
  reposad();
  module.exports.lang.setupLanguages(window.slateLanguages);
});
