module.exports = function(grunt) {

    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: { }
        },
    	copy: {
        	local:{
        		files:[
        		       	{src: ['environments/local/manifest.yml'], dest: 'manifest.yml'},
        		       	{src: ['environments/local/server-config.js'], dest: 'common/config/config.js'}
        		       ]
        	},
        	office:{
        		files:[
        		       	{src: ['environments/office/manifest.yml'], dest: 'manifest.yml'},
        		       	{src: ['environments/office/server-config.js'], dest: 'common/config/config.js'}
        		       ]
        	},
        	production:{
        		files:[
        		       	{src: ['environments/production/manifest.yml'], dest: 'manifest.yml'},
        		       	{src: ['environments/production/server-config.js'], dest: 'common/config/config.js'}
        		       ]
        	}
    	},
        nodemon: {
            dev: {
                script: 'server/server.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-installer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('local', ['copy:local']);
    grunt.registerTask('office', ['copy:office']);
    grunt.registerTask('production', ['copy:production']);

    grunt.registerTask('start', ['nodemon']);

    grunt.registerTask('default', ['local']);
};
