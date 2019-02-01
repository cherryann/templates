( function( window, define, require, undefined ) {
    'use strict';

    define( [
    'utils/event',
    'utils/breakpoints'
	], function( Event, Breakpoints ) {

    return {

        // Optional definition of constructor functions
        // Default:
        // constructors: [ 'ready', 'events' ],

        ready: function( element, options ) {
            var imageSrc = element.getAttribute( 'data-image-src' );
            var breakpoint = Breakpoints.get();

            if ( breakpoint !== 'xsmall' && breakpoint !== 'small' ) {
                element.style.backgroundImage = 'url(\'' + imageSrc + '\')';
            } else {
                element.style.backgroundImage = 'none';
            }
        },

        events: function( element, options ) {
            Event.on( 'Breakpoint/change', function( e, breakpoint ) {
                var imageSrc = element.getAttribute( 'data-image-src' );

                if ( breakpoint !== 'xsmall' && breakpoint !== 'small' ) {
                    element.style.backgroundImage = 'url(\'' + imageSrc + '\')';
                } else {
                    element.style.backgroundImage = '';
                }
            }.bind( this ) );
        }

    };
	} );

}( this, this.define, this.require ) );
