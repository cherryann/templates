/**
 * Grunt copy plugin
 * https://github.com/gruntjs/grunt-contrib-copy/
 */

module.exports = {

    js: {
        expand: true,
        cwd: '<%= srcPath %>components/',
        src: [
            '**/*.js',
            '!**/*.spec.js'
        ],
        dest: '<%= distPath %>js/'
    },

    font: {
        expand: true,
        cwd: '<%= srcPath %>fonts/',
        src: [
            '**/*.woff2'
        ],
        dest: '<%= distPath %>fonts/'
    }

};
