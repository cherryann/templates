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
            module: '.image-mosaic',
            gridItem: '.image-mosaic__content',
            contentItem: '.image-mosaic__image',
            modal: '.image-mosaic__modal',
            modalClose: '.image-mosaic__modal-backdrop, .image-mosaic__modal-close, .image-mosaic__modal-window',
            modalOpen: 'image-mosaic__modal-open',
            helper: 'hidden',
            showModal: true
        },

        ready: function( element, options ) {
            this.element = $( element );
            this.options = $.extend( this.defaults, options );

            this.initMosaic();

            if ( this.options.showModal === true ) {
                this.initModal();
            }
        },

        initMosaic: function() {
            var iso = new Isotope( this.options.module, {
                itemSelector: this.options.gridItem,
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            } );

            imagesLoaded( this.options.module ).on( 'progress', function() {
                iso.layout();
            } );
        },

        initModal: function() {
            var that = this;

            $( this.options.contentItem ).on( 'click', function( event ) {
                event.preventDefault();

                var imgItem = '<img src="' + $( this ).attr( 'src' ) + '" class="image-mosaic__image" />';
                $( that.options.modal ).find( '.image-mosaic__modal-window' ).html( imgItem );
                $( that.options.modal ).removeClass( that.options.helper );
                $( 'body' ).addClass( that.options.modalOpen );
            } );

            $( this.options.modalClose ).on( 'click', function() {
                $( that.options.modal ).addClass( that.options.helper );
                $( 'body' ).removeClass( that.options.modalOpen );
            } );
        },

        events: function( element, options ) {
        }

    };
	} );

}( this, this.define, this.require ) );
