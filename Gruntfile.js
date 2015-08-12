module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    concat: {
        build: {
            src: [
                'bower_components/jquery/dist/jquery.min.js',
                'src/js/stick-anything.js',
                'src/js/main.js'
            ],
            dest: 'build/main.js'
        }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/main.js',
        dest: 'build/main.min.js'
      }
    },

    'compile-handlebars' : {
        allStatic: {
            files: [{
                src: "src/home.hbs",
                dest: "build/index.html"
            }],
            templateData: 'src/test.json',
            partials: ['src/partials/partials.hbs']
        }
    },

    copy: {
        main: {
            src:"build/main.js",
            dest:"build/main.min.js" //Just copy file, don't uglify
        }
    },

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'build/style.css': 'src/scss/style.scss'
            }
        }
    },

    watch: {
      scripts: {
        files: 'src/js/*.js',
        tasks: ['concat', 'copy'],
        options: {
          interrupt: true,
        },
      },
      css: {
        files: 'src/scss/*.scss',
        tasks: ['sass'],
      },
      pages: {
        files: ['src/*.hbs', 'src/partials/*.hbs'],
        tasks: ['compile-handlebars']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'copy', 'sass', 'compile-handlebars', 'watch']);
  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'compile-handlebars']);

};
