angular.module('notesApp.controllers', []).
controller('notesController', function($scope) {
    $scope.notesList = [

        {
          "name" : "Computer Science",
          "id" : "cs",
          "courses" : [
            {
              "name" : "Design and Analysis of Algorithms",
              "number" : "6.046",
              "id" : "6046",

              "school":"MIT",
              "schoolLink" : "http://mit.edu",
              "professor" : "Erik Demaine",
              "professorLink" : "http://erikdemaine.org/",
              "textbook" : "Cormen, Leiserson, Rivest, and Stein Introduction to Algorithms, Third Edition ",
              "textbookLink" : "http://mitpress.mit.edu/books/introduction-algorithms",

              "bgimg" : "6046.png",
              "notes" : "6.046.pdf",
              "notesSize" : "7.7 MB"
            },
            {
              "name" : "Introduction to Algorithms",
              "number" : "6.006",
              "id" : "6006",

              "school":"MIT",
              "schoolLink" : "http://mit.edu",
              "professor" : "Silvio Micali",
              "professorLink" : "https://people.csail.mit.edu/silvio/",
              "textbook" : "Cormen, Leiserson, Rivest, and Stein Introduction to Algorithms, Third Edition ",
              "textbookLink" : "http://mitpress.mit.edu/books/introduction-algorithms",

              "bgimg" : "6006.png",
              "notes" : "6.006.pdf",
              "notesSize" : "8.1 MB"
            },
            {
              "name" : "Artificial Intelligence",
              "number" : "6.034",
              "id" : "6034",

              "school":"MIT",
              "schoolLink" : "http://mit.edu",
              "professor" : "Patrick Winston",
              "professorLink" : "http://people.csail.mit.edu/phw/",
              "textbook" : "Winston Artificial Intelligence, Third Edition ",
              "textbookLink" : "http://courses.csail.mit.edu/6.034f/ai3/rest.pdf",

              "bgimg" : "6034.png",
              "notes" : "6.034.pdf",
              "notesSize" : "5.4 MB"
            },

          ],
        },

        {
          "name" : "Math",
          "id" : "math",

          "courses" : [
            {
              "name" : "Mathematics for Computer Science",
              "number" : "6.042",
              "id" : "6042",

              "school":"MIT",
              "schoolLink" : "http://mit.edu/",
              "professor" : "Tom Leighton",
              "professorLink" : "http://math.mit.edu/directory/profile.php?pid=144",
              "textbook" : "Leham, Leighton, Meyer, Mathematics for Computer Science",
              "textbookLink" : "http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/readings/MIT6_042JF10_notes.pdf",

              "bgimg" : "6042.png",
              "notes" : "6.042.pdf",
              "notesSize" : "19.1 MB"
            },
            {
              "name" : "Linear Algebra",
              "number" : "18.06",
              "id" : "1806",

              "school":"MIT",
              "schoolLink" : "http://mit.edu/",
              "professor" : "Gilbert Strang",
              "professorLink" : "http://www-math.mit.edu/~gs/",
              "textbook" : "Gilbert Strang, Introduction to Linear Algebra, 4th Edition",
              "textbookLink" : "http://math.mit.edu/linearalgebra/",

              "bgimg" : "1806.jpg",
              "notes" : "18.06.pdf",
              "notesSize" : "8.9 MB"
            },
            {
              "name" : "Multivariable Calculus",
              "number" : "18.02",
              "id" : "1802",

              "school":"MIT",
              "schoolLink" : "http://mit.edu/",
              "professor" : "William Minicozzi",
              "professorLink" : "https://math.mit.edu/people/profile.php?pid=1464",
              "textbook" : "Edwards and Penney, Multivariable calculus, 6th edition, 2002,",
              "textbookLink" : "http://www.amazon.com/exec/obidos/ASIN/0130339679/ref=nosim/mitopencourse-20",

              "bgimg" : "1802.jpg",
              "notes" : "18.02.pdf",
              "notesSize" : "15.7 MB"
            },
            {
              "name" : "Algebra II",
              "number" : "PreAP",
              "id" : "algII",

              "school":"Stratford High School",
              "schoolLink" : "http://ssh.springbranchisd.edu",
              "professor" : "Sue Heine",
              "professorLink" : "#",
              "textbook" : "Holt Algebra II Texas",
              "textbookLink" : "#",

              "bgimg" : "algebraII.jpg",
              "notes" : "Algebra II.pdf",
              "notesSize" : "17.1 MB"
            },
            {
              "name" : "Geometry",
              "number" : "PreAP",
              "id" : "geometry",

              "school":"Stratford High School",
              "schoolLink" : "http://ssh.springbranchisd.edu",
              "professor" : "Sue Heine",
              "professorLink" : "#",
              "textbook" : "Holt Geometry Texas",
              "textbookLink" : "#",

              "bgimg" : "geometry.jpg",
              "notes" : "Geometry.pdf",
              "notesSize" : "7.2 MB"
            },

          ],
        },



        {
          "name" : "Physics",
          "id" : "physics",

          "courses" : [
            {
              "name" : "Electricity and Magnetism",
              "number" : "8.02",
              "id" : "802",

              "school":"MIT",
              "schoolLink" : "http://mit.edu",
              "professor" : "Jesse Thaler ",
              "professorLink" : "http://web.mit.edu/physics/people/faculty/thaler_jesse.html",
              "textbook" : "Online Notes",
              "textbookLink" : "#",

              "bgimg" : "802.jpg",
              "notes" : "8.02.pdf",
              "notesSize" : "7.8 MB"
            },
            {
              "name" : "Classical Mechanics",
              "number" : "8.01",
              "id" : "801",

              "school":"MIT",
              "schoolLink" : "http://mit.edu",
              "professor" : "Peter Dourmashkin",
              "professorLink" : "http://web.mit.edu/physics/people/academic/dourmashkin_peter.html",
              "textbook" : "Online Notes",
              "textbookLink" : "#",

              "bgimg" : "801.png",
              "notes" : "8.01.pdf",
              "notesSize" : "5.5 MB"
            },

          ],
        },

        {
          "name" : "History",
          "id" : "history",

          "courses" : [
            {
              "name" : "AP United States History",
              "number" : "APUSH",
              "id" : "apush",

              "school":"Stratford High School",
              "schoolLink" : "http://ssh.springbranchisd.edu",
              "professor" : "Jane Duke ",
              "professorLink" : "http://ssh.springbranchisd.com/Faculty/Teachers/SocialStudies/JaneDuke/tabid/17575/Default.aspx",
              "textbook" : "The American Pageant",
              "textbookLink" : "http://teachersites.schoolworld.com/webpages/SColl/resources.cfm?subpage=1604124",

              "bgimg" : "apush.jpg",
              "notes" : "apush.pdf",
              "notesSize" : "48.5 MB"
            },

          ],
        },




    ];

});
