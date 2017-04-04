const extend = require('extend');

const lds = window.liveDemoSettings;

extend(window.liveDemoSettings, {
  codeElementDepth: 3,
  insertPosition  : 'beforeend',

  HTMLSelector : lds.HTMLSelector + ', .highlight.html code',
  CSSSelector  : lds.CSSSelector + ', .highlight.css code',
  JSSelector   : lds.JSSelector + ', .highlight.javascript code',
});

interact('.demo-area .js-label, .demo-area .html-label, .demo-area .css-label, .demo-area .demo-label')
  .on('tap', showTab);

// Hide demo code if the screen is initially narrow
if (window.innerWidth <= 570) {
  [].forEach.call(document.querySelectorAll('.demo-area .demo-label'), function (label) {
    showTab({ currentTarget: label });

    label.previousElementSibling.checked = true;
  });
}

function showTab (event) {
  const label = event.currentTarget,
    demoArea = label.parentNode,
    codeBlocks = demoArea.querySelectorAll('.js-code, .html-code, .css-code'),
    liveDemo = label.nextElementSibling;

  _.each(codeBlocks, function (block) {
    block.style.display = 'none';
  });

  if (liveDemo) {
    liveDemo.style.display = '';
  }
}

require('livedemo');
