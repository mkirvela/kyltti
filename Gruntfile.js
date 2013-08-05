module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      all: [
        'public/stylesheets',
        '.sass-cache'
      ]
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'server/**/*.js',
        'db/**/*.js'
      ]
    },
    compass: {
      all: {
        options: {
          sassDir: 'public/sass',
          cssDir: 'public/stylesheets',
          imagesDir: 'public/images',
          fontsDir: 'public/fonts',
          relativeAssets: true,
          force: true
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/stylesheets',
        src: ['*.css', '!*.min.css'],
        dest: 'public/stylesheets',
        ext: '.min.css'
      }
    },
    "template-module": {
      compile: {
        options: {
          module: true,
          provider: 'underscore'
        },
        files: {
          "public/js/templates/templates.js": ["public/views/*.html"]
        }
      }    
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "public/js",
          mainConfigFile: "public/js/main.js",
          out: "public/js/test.js"
        }
      }
    },
    watch: {
      files: ['public/sass/**/*'],
      tasks: ['compass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-template-module');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['clean','jshint','compass','cssmin','requirejs','watch']);
};
