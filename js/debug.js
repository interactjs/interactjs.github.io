(function () {
    'use strict';

    var debugMatch = location.search.match(/[?&]debug=([^&]+)/),
        debugVersion = debugMatch && debugMatch[1];

    if (debugVersion) {
        window._interact = window.interact;

        var newScript = document.createElement('script');

        if (/.\/./.test(debugVersion)) {
            var user = debugVersion.match(/^[^/]+/)[0],
                version = debugVersion.match(/[^/]+$/)[0];

            newScript.src = '//rawgit.com/' + user + '/interact.js/' + version + '/interact.js';
        }
        else {
            newScript.src = '//rawgit.com/taye/interact.js/' + debugVersion + '/interact.js';
        }

        document.head.appendChild(newScript);
    }
}());
