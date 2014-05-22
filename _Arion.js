(function () {
    'use strict';
    /*===========================
    Base3 Framework
    ===========================*/
    window.Arion = function (params) {

        // App
        var app = this;

        // Version
        app.version = '0.0.1';

        // Animation Frame
        app._animationFrame = function (callback) {
            if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
            else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
            else if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(callback);
            else {
                return window.setTimeout(callback, 1000 / 60);
            }
        };

        // Default Parameters
        app.params = {
            // Auto init
            init:       true,
            // set up some page element selectors
            headerEl:   'header',
            mainEl:     'main',
            footerEl:   'footer',

        };

        // Extend defaults with parameters
        for (var param in params) {
            app.params[param] = params[param];
        }

        // Expose DOM lib
        // app.$ = $;

        // Touch events
        app.touchEvents = {
            start: app.support.touch ? 'touchstart' : 'mousedown',
            move: app.support.touch ? 'touchmove' : 'mousemove',
            end: app.support.touch ? 'touchend' : 'mouseup'
        };

        // Link to local storage
        app.localStorage = localStorage;

        // Return instance
        return app;

    };

})();
