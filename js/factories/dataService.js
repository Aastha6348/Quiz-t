(function()  // will be loaded once page is load
{
    angular.module("quiz") 
    .factory("dataService",DataFactory);
    
    function DataFactory()
    {
        var dataObj={
            data: contentlist,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        }; 
        
        return dataObj;
    }

    var correctAnswers = [0, 1, 3, 3, 2, 0, 0, 3, 0, 0, 0, 3, 2, 3, 1];


    var quizQuestions=
    [
        // bootstrap questions-2
        { 
            type:"text",
            text: "Which of the following bootstrap style is used for a basic button group?",
            possibilities: [
                {
                    answer:" .btn-group"
                },
                {
                    answer:" .btn-toolbar"
                },
                {
                    answer:".btn-group-lg"
                },
                {
                    answer:".btn-group-vertical"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "Which of the following bootstrap style can be used to get a muted look on a pager buttons?",
            possibilities: [
                {
                    answer:".pager-disabled"
                },
                {
                    answer:" .disabled"
                },
                {
                    answer:" .link-disabled"
                },
                {
                    answer:"none of the above mentioned"
                },
            ],
            selected:null,
            correct:null
        },
        // angularjs questions-3
        { 
            type:"text",
            text: "Which of the followings are validation directives?",
            possibilities: [
                {
                    answer:"ng-required"
                },
                {
                    answer:"ng-minlength"
                },
                {
                    answer:"ng-pattern"
                },
                {
                    answer:"All of the above"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "The argument to the controller function is called _____",
            possibilities: [
                {
                    answer:"$scopes"
                },
                {
                    answer:"app"
                },
                {
                    answer:"scope"
                },
                {
                    answer:"$scope"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "Which directive binds the innerHTML of the element to the application variable?",
            possibilities: [
                {
                    answer:"ng-contorller"
                },
                {
                    answer:"ng-model"
                },
                {
                    answer:"ng-bind"
                },
                {
                    answer:"ng-view"
                },
            ],
            selected:null,
            correct:null
        },
        // nodejs questions-3
        { 
            type:"text",
            text: "Which method of fs module is used to open a file?",
            possibilities: [
                {
                    answer:"fs.open(path, flags[, mode], callback)"
                },
                {
                    answer:"fs.openFile(path, flags[, mode], callback)"
                },
                {
                    answer:"fs.openPath(path, flags[, mode], callback)"
                },
                {
                    answer:"none of the mentioned"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "Node.js terminal (REPL) is used for _________.",
            possibilities: [
                {
                    answer:"testing node.js/JavaScript expressions"
                },
                {
                    answer:"executing browser’s JavaScript expressions."
                },
                {
                    answer:"the preview of node.js application."
                },
                {
                    answer:"none of the above"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "Simple or complex functionality organized in a single or multiple JavaScript files which can be reused throughout your Node.js application is called ________.",
            possibilities: [
                {
                    answer:"function"
                },
                {
                    answer:"library"
                },
                {
                    answer:"package"
                },
                {
                    answer:"module"
                },
            ],
            selected:null,
            correct:null
        },
        //python questions -2
        { 
            type:"text",
            text: "What is the output of the following program : print 'Hello World'[::-1]",
            possibilities: [
                {
                    answer:"dlroW olleH"
                },
                {
                    answer:"Hello Worl"
                },
                {
                    answer:"d"
                },
                {
                    answer:"Error"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "What is the output of print tinytuple * 2 if tinytuple = (123, 'john')?",
            possibilities: [
                {
                    answer:"(123, 'john', 123, 'john')"
                },
                {
                    answer:"(123, 'john') * 2"
                },
                {
                    answer:"Error"
                },
                {
                    answer:"none of the mentioned"
                },
            ],
            selected:null,
            correct:null
        },

        // mongodb questions-3
        { 
            type:"text",
            text: "What does the following query do: SELECT * FROM posts WHERE author like '%john%' ",
            possibilities: [
                {
                    answer:"db.posts.find( { author: /john/ } )"
                },
                {
                    answer:"db.posts.find( { author: {$like: /john/} } )"
                },
                {
                    answer:"db.posts.find( { like: {$author: /john/} } )"
                },
                {
                    answer:"db.posts.find( { author: /^john^/ } )"
                },
            ],
            selected:null,
            correct:null
        },
        
        { 
            type:"text",
            text: " Which of the following about Capped Collections is correct?",
            possibilities: [
                {
                    answer:"Fixed Size"
                },
                {
                    answer:"If the allocated space for a capped collection exceeds, it stops inserting new documents"
                },
                {
                    answer:"High-throughput operations that insert and retrieve documents based on insertion order"
                },
                {
                    answer:"Only a and c"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "What does the following query do: db.posts.update({_id:1},{Title:This is post with ID 1}) ",
            possibilities: [
                {
                    answer:" Updates the Title of the post"
                },
                {
                    answer:"Updating a document is possible only with $set"
                },
                {
                    answer:"Replaces the complete document with _id as 1 with the document specified in second parameter"
                },
                {
                    answer:"Syntax Error"
                },
            ],
            selected:null,
            correct:null
        },

        // django questions-2

        { 
            type:"text",
            text: "What is the default port used by built-in webserver in django",
            possibilities: [
                {
                    answer:"80"
                },
                {
                    answer:"88"
                },
                {
                    answer:"8080"
                },
                {
                    answer:"8000"
                },
            ],
            selected:null,
            correct:null
        },
        { 
            type:"text",
            text: "Which option with manage.py is used to change port number for in-built web server",
            possibilities: [
                {
                    answer:"runport"
                },
                {
                    answer:"runserver"
                },
                {
                    answer:"serverport"
                },
                {
                    answer:"portserver"
                },
            ],
            selected:null,
            correct:null
        }
    ];

    var contentlist=
    [
        
        {
            category:"Bootstrap",
            image_url:"images/icons/bootstrap_icon.jpg",
            functionality:"Popular HTML, CSS and JS framework for responsive web sites",
            tutorial:"https://www.google.co.in/search?safe=active&biw=1366&bih=638&ei=NbrxWc3CJMb_vgSHxoD4Cg&q=bootstrap+tutorial&oq=bootstrap+tutorial&gs_l=psy-ab.3...17462.21079.0.21485.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.CCtGAs8w7og"
        },
        {
            category:"Angularjs",
            image_url:"images/icons/angularjs_icon.jpg",
            functionality:"Client side JS framework for dynamic web Apps",
            tutorial:"https://www.google.co.in/search?safe=active&q=angularjs+tutorial&spell=1&sa=X&ved=0ahUKEwij0v2si47XAhVHp48KHYeFAzwQvwUIIigA&biw=1366&bih=638"
        },
        {
            category:"Nodejs",
            image_url:"images/icons/nodejs_icon.jpg",
            functionality:"Open source server framework for fast and scalable network applications",
            tutorial:"https://www.google.co.in/search?safe=active&biw=1366&bih=638&ei=FrrxWeO6HozfvATcnLWoCA&q=nodejs+tutorial&oq=nodejs+tutorial&gs_l=psy-ab.3...27919.29859.0.30233.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.kvpOOpREvOk"
        },
        {
            category:"Mongodb",
            image_url:"images/icons/mongodb_icon.jpg",
            functionality:"open-source cross-platform document-oriented database",
            tutorial:"https://www.google.co.in/search?safe=active&q=mongodb+tutorial&spell=1&sa=X&ved=0ahUKEwiwyp-li47XAhUmT48KHd4UC5cQvwUIIigA&biw=1366&bih=638"
        },
        {
            category:"Python",
            image_url:"images/icons/python_icon.jpg",
            functionality:"Dynamic, object oriented programming language for web & desktop applications",
            tutorial:"https://www.google.co.in/search?source=hp&ei=jbfxWcPDOIj5vATlp5qIDA&q=python+tutorial&oq=python+tutorial&gs_l=psy-ab.3...1232.3074.0.3369.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.spMJQ6tY3_E&safe=active"
        },
        {
            category:"django",
            image_url:"images/icons/django_icon.jpg",
            functionality:"Faster and reliable Web Development Framework in Python",
            tutorial:"https://www.google.co.in/search?safe=active&biw=1366&bih=638&ei=TLrxWfb2A8rhvgTBlZLACw&q=django+tutorial&oq=django+tutorial&gs_l=psy-ab.3...10768.12878.0.13708.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.jGPAy8-0Dhw"
        },
       
    ];
}
)();