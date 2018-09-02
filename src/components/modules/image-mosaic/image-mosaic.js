( function( window, define, require, undefined ) {
    'use strict';

    define( [
    'jquery',
    'vendor/isotope',
    'vendor/imagesLoaded'
	], function( $, Isotope, imagesLoaded ) {

    return {

        // Optional definition of constructor functions
        // Default:
        // constructors: [ 'ready', 'events' ],

        defaults: {
            item: '.image-mosaic__content',
            module: '.image-mosaic'
        },

        ready: function( element, options ) {
            this.element = $( element );
            this.options = $.extend( this.defaults, options );

            this.initMosaic();
            this.openModal();
        },

        initMosaic: function() {
            var iso = new Isotope( this.options.module, {
                itemSelector: this.options.item,
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            } );

            imagesLoaded( this.options.module ).on( 'progress', function() {
                iso.layout();
            } );
        },

        openModal: function() {
            $( '.image-mosaic__image', this.element ).on( 'click', function( event ) {
                event.preventDefault();

                var imgItem = '<img src="' + $( this ).attr( 'src' ) + '" class="image-mosaic__image" />';
                var modal =
                '<div class="modal">' +
                    '<span class="modal-close"></span>' +
                    '<div class="modal-window">' + imgItem + '</div>' +
                    '<div class="modal-backdrop"></div>' +
                '</div>';

                $( 'body' ).addClass( 'modal-open' ).append( modal );
                $( '.modal' ).css( 'display', 'block' );
            } );
        },

        events: function( element, options ) {

            $( '.modal-close' ).on( 'click', function () {
                $( 'body' ).removeClass( 'modal-open' );
                $( '.modal' ).css( 'display', 'none' );
            });
        }

    };
	} );

}( this, this.define, this.require ) );
