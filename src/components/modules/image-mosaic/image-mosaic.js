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
            contentMosaic: '.image-mosaic__grid',
            modal: '.image-mosaic__modal',
            modalClose: '.image-mosaic__modal-backdrop, .image-mosaic__modal-close, .image-mosaic__modal-window',
            modalOpen: 'image-mosaic__modal-open',
            helper: 'hidden',
            showModal: true
        },

        ready: function( element, options ) {
            this.element = $( element );
            this.options = $.extend( this.defaults, options );
            var that = this;

            this.fileLoad();

            setTimeout( function() {
                that.initMosaic();

                if ( that.options.showModal === true ) {
                    that.initModal();
                }
            }, 100 );
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

        fileLoad: function() {
            var dir = this.options.content;
            var fileextension = 'jpg|png|gif';
            var that = this;

            var allExtensions = fileextension.split( '|' );

            $.ajax( {
                url: dir,
                success: function( data ) {
                    /* jshint ignore:start */
                    for ( var i = 0; i < allExtensions.length; i++ ) {
                        $( data ).find( 'a:contains(' + allExtensions[ i ] + ')' ).each( function() {

                            var filename = '';
                            if ( window.location.pathname ) {
                                filename = this.href.replace( window.location.origin + window.location.pathname, '' );
                            } else {
                                filename = this.href.replace( window.location.href, '' );
                            }

                            var image = '<div class="image-mosaic__content"><img src="' + dir + filename + '" ' +
                                'class="image-mosaic__image"></div>';

                            $( that.options.contentMosaic ).append( image );
                        } );
                    }
                    /* jshint ignore:end */
                }
            } );

        },

        events: function( element, options ) {
        }

    };
	} );

}( this, this.define, this.require ) );
