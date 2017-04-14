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
            templateData: 'src/data.json',
            partials: ['src/partials/entry.hbs']
        }
    },

    copy: {
        js: {
            src:"build/main.js",
            dest:"build/main.min.js" //Just copy file, don't uglify
        },
        main: {
            files : [
              {expand: true, src: ['img/**'], dest: 'build/'},
            ]
        },
        notes : {
          files : [
            {expand: true, src: ['notes/**'], dest: 'build/'},
          ]
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
        tasks: ['sass']
      },
      pages: {
        files: ['src/*.hbs', 'src/partials/*.hbs', 'src/*.json'],
        tasks: ['clean', 'compile-handlebars']
      }
    },

    cssmin: {
      build: {
        files: {
          'build/style.css': ['build/style.css']
        }
      }
    },

    imagemin: {
       dist: {
          options: {
            optimizationLevel: 5
          },
          files: [{
             expand: true,
             cwd: 'img',
             src: ['**/*.{png,jpg,gif}'],
             dest: 'build/img'
          }]
       }
    },
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    },
    clean : ["build/index.html"]

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'concat', 'copy','copy:js', 'sass','compile-handlebars', 'watch']);
  grunt.registerTask('deploy', ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'compile-handlebars','imagemin','copy:notes', 'gh-pages']);
};
