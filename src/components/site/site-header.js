( function( window, define, require, undefined ) {
    'use strict';

    define( [
        'jquery'
    ], function( $ ) {

    return {

        ready: function() {
            var urlHash = window.location.hash.substr(1);
            var that = this;

            if ( urlHash ) {
                setTimeout(function() {
                    that.scrollToAnchor( urlHash );
                });
            }
        },

        events: function() {
            var that = this;

            $('.site-header__navigation a').on('click', function () {
                that.scrollToAnchor( this.href.split('#')[1] );
            });

        },

        scrollToAnchor: function( aid ) {
            var aTag = $('#' + aid);

            $( 'html,body' ).animate({
                scrollTop: aTag.offset().top - 30
            },'slow');
        }

    };
	} );

}( this, this.define, this.require ) );
