(function()  // will be loaded once page is load
{
    angular.module("quiz")
    .controller("quizcontroller", quizController)
    ; 

    quizController.$inject=['quizMetrics','dataService'];

    function quizController(quizMetrics,dataService)
    {
        var vm=this;
        vm.quizMetrics=quizMetrics;
        vm.dataService=dataService;
        vm.activeQuestion=0;
        vm.questionAnswered=questionAnswered;
        vm.setActiveQuestion=setActiveQuestion;
        var numQuestionsAnswered=0;
        vm.selectAnswer=selectAnswer;
        vm.finaliseAnswers=finaliseAnswers;
        vm.error = false; 
        vm.finalise = false;
    

        function setActiveQuestion(index)
        {
            if(index === undefined)
            {
                var breakOut = false;
                var quizlength=dataService.quizQuestions.length-1;
            
                while(!breakOut)
                    {
                        vm.activeQuestion=vm.activeQuestion < quizlength?++vm.activeQuestion:0;

                        if(vm.activeQuestion === 0){
                            vm.error = true;
                        }

                        if(dataService.quizQuestions[vm.activeQuestion].selected === null)
                            {
                                breakOut=true;
                            }
                    }
            }
            else
            {
                vm.activeQuestion = index;
            }
        }

        function questionAnswered()
        {
            var quizLength=dataService.quizQuestions.length;

            if(dataService.quizQuestions[vm.activeQuestion].selected !== null)
                {
                    numQuestionsAnswered++;

                    if(numQuestionsAnswered>=quizLength)
                        {
                            // finalize question
                            for(var i = 0; i < quizLength; i++)
                            {
                                
                                if(dataService.quizQuestions[i].selected === null)
                                {
                                    setActiveQuestion(i);
                                    return;
                                }
                            }
                            vm.error = false;
                            vm.finalise = true;
                            return;
                        }
                }
            vm.setActiveQuestion();
        }

        function selectAnswer(index)
        {
            dataService.quizQuestions[vm.activeQuestion].selected=index;
        }

        function finaliseAnswers(){
            
               vm.finalise = false;
               numQuestionsAnswered = 0;
               vm.activeQuestion = 0;
               quizMetrics.markQuiz();
               quizMetrics.changeState("quiz", false);
               quizMetrics.changeState("results", true);
               
           }
        
    }
}
)();