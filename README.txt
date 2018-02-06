if the questions that we have are of image type then we can simply add them too 

go to index.html 

go to that section where we are showing possible answers and change the code.


for text type questions only


code was this:-

<div class="row">
   <div class="col-xs-6" 
   ng-repeat="answer in quizctrl.dataService.quizQuestions[quizctrl.activeQuestion].possibilities">
      <h5 class="answer" style="border-radius:5px; padding:15px 20px; border: 1px solid #bbb; color: #839392">
         <strong>{{answer.answer}}</strong>
      </h5>
   </div>
</div>


for both types- text and image

code should be

<div class="row" ng-if="quizctrl.dataService.quizQuestions[quizctrl.activeQuestion].type== 'text'">
   <div class="col-xs-6" 
   ng-repeat="answer in quizctrl.dataService.quizQuestions[quizctrl.activeQuestion].possibilities">
      <h5 class="answer" style="border-radius:5px; padding:15px 20px; border: 1px solid #bbb; color: #839392">
         <strong>{{answer.answer}}</strong>
      </h5>
   </div>
</div>

<div class="row" ng-if="quizctrl.dataService.quizQuestions[quizctrl.activeQuestion].type== 'image'">
   <div class="col-xs-6" 
   ng-repeat="answer in quizctrl.dataService.quizQuestions[quizctrl.activeQuestion].possibilities">
      <div class="image-answer" style="border-radius:5px; padding:15px 20px; border: 1px solid #bbb; height:350px; width:100%; overflow:hiddenss">
         <img ng-src="{{answer.answer}}">
      </div>
   </div>
</div>


and styling for image-answer class-

cursor:pointer

and for 

.image-answer img{
   width:100%;
   height:auto;
}




now displaying the questions in Results controller

for text type questions only.

<div class="row">
                                          
  <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
      
      <h4 class="answer"
      style="border-radius:5px; padding:15px 20px; border: 1px solid #bbb; color: #839392"
      ng-class="results.getAnswerClass($index)">
                                                
          {{answer.answer}}

          <p class="pull-right"
          ng-show="$index !== results.quizMetrics.correctAnswers[results.activeQuestion] && $index === results.dataService.quizQuestions[results.activeQuestion].selected">Your Answer</p>
                                                  
          <p class="pull-right"
          ng-show="$index === results.quizMetrics.correctAnswers[results.activeQuestion]">Correct Answer</p>
                                      
              
       </h4>
  </div>
</div>


for adding image type questions add another row also.

<div class="row"
ng-if="results.dataService.quizQuestions[results.activeQuestion].type === 'text'">
                                          
  <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
      
      <h4 class="answer"
      style="border-radius:5px; padding:15px 20px; border: 1px solid #bbb; color: #839392"
      ng-class="results.getAnswerClass($index)">
                                                
          {{answer.answer}}

          <p class="pull-right"
          ng-show="$index !== results.quizMetrics.correctAnswers[results.activeQuestion] && $index === results.dataService.quizQuestions[results.activeQuestion].selected">Your Answer</p>
                                                  
          <p class="pull-right"
          ng-show="$index === results.quizMetrics.correctAnswers[results.activeQuestion]">Correct Answer</p>
                                      
              
       </h4>
  </div>
</div>
<div class="row"
ng-if="results.dataService.quizQuestions[results.activeQuestion].type === 'image'">
                               
  <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
                               		
     <div class="image-answer" style="border-radius:5px; padding:15px 20px; border: 1px solid #bbb; height:350px; width:100%; overflow:hiddenss"
     ng-class="results.getAnswerClass($index)">
        <img ng-src="{{answer.answer}}">
     </div>
  </div>
</div>

and styling for image-answer class-

cursor:pointer

and for 

.image-answer img{
   width:100%;
   height:auto;
}
.image-answer.bg-success{
    border: 3px solid #5ea640;
}
.image-answer.bg-danger{
    border: 3px solid #b74848;
}