(function()  // will be loaded once page is load
{
    angular.module("quiz")
    .controller("maincontroller", content);  // until we define this any angular code will not work

    content.$inject=['quizMetrics','dataService'];


    function content (quizMetrics, dataService)
    {
        var vm=this;
        vm.data=dataService.data;
        vm.search="";
        vm.activateQuiz=activateQuiz;
        vm.quizMetrics=quizMetrics;


        function activateQuiz()
        {
            quizMetrics.changeState("quiz", true);
        }
   
        
    };
   
    /*
    var contentlist=
    [
        
        {
            category:"Bootstrap",
            image_url:"images/icons/bootstrap_icon.jpg",
            functionality:"Popular HTML, CSS and JS framework for responsive web sites",
            Questions:20,
            tutorial:"https://www.google.co.in/search?safe=active&biw=1366&bih=638&ei=NbrxWc3CJMb_vgSHxoD4Cg&q=bootstrap+tutorial&oq=bootstrap+tutorial&gs_l=psy-ab.3...17462.21079.0.21485.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.CCtGAs8w7og"
        },
        {
            category:"Angularjs",
            image_url:"images/icons/angularjs_icon.jpg",
            functionality:"Client side JS framework for dynamic web Apps",
            Questions:20,
            tutorial:"https://www.google.co.in/search?safe=active&q=angularjs+tutorial&spell=1&sa=X&ved=0ahUKEwij0v2si47XAhVHp48KHYeFAzwQvwUIIigA&biw=1366&bih=638"
        },
        {
            category:"Nodejs",
            image_url:"images/icons/nodejs_icon.jpg",
            functionality:"Open source server framework for fast and scalable network applications",
            Questions:20,
            tutorial:"https://www.google.co.in/search?safe=active&biw=1366&bih=638&ei=FrrxWeO6HozfvATcnLWoCA&q=nodejs+tutorial&oq=nodejs+tutorial&gs_l=psy-ab.3...27919.29859.0.30233.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.kvpOOpREvOk"
        },
        {
            category:"Mongodb",
            image_url:"images/icons/mongodb_icon.jpg",
            functionality:"open-source cross-platform document-oriented database",
            Questions:20,
            tutorial:"https://www.google.co.in/search?safe=active&q=mongodb+tutorial&spell=1&sa=X&ved=0ahUKEwiwyp-li47XAhUmT48KHd4UC5cQvwUIIigA&biw=1366&bih=638"
        },
        {
            category:"Python",
            image_url:"images/icons/python_icon.jpg",
            functionality:"Dynamic, object oriented programming language for web & desktop applications",
            Questions:20,
            tutorial:"https://www.google.co.in/search?source=hp&ei=jbfxWcPDOIj5vATlp5qIDA&q=python+tutorial&oq=python+tutorial&gs_l=psy-ab.3...1232.3074.0.3369.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.spMJQ6tY3_E&safe=active"
        },
        {
            category:"django",
            image_url:"images/icons/python_icon.jpg",
            functionality:"Faster and reliable Web Development Framework in Python",
            Questions:20,
            tutorial:"https://www.google.co.in/search?safe=active&biw=1366&bih=638&ei=TLrxWfb2A8rhvgTBlZLACw&q=django+tutorial&oq=django+tutorial&gs_l=psy-ab.3...10768.12878.0.13708.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.jGPAy8-0Dhw"
        },
       
    ];
    */
}
)();