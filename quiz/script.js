var questions = [{
    queston: "who won ipl 2020?", 
    choices: ["MI", "DC","CSK","RCB"],
    correctAnswer: 0},
    {queston: "who won ipl 2019?", 
    choices: ["CSK", "DC","MI","RCB"],
    correctAnswer: 2},
    {queston: "who won ipl 2018?", 
    choices: ["CSK", "DC","MI","RCB"],
    correctAnswer: 0},
    {queston: "who won ipl 2017?", 
    choices: ["CSK", "MI","DC","RCB"],
    correctAnswer: 1},
    {queston: "who won ipl 2016?", 
    choices: ["CSK", "DC","MI","SRH"],
    correctAnswer: 3},
    {queston: "who won ipl 2015?", 
    choices: ["CSK", "DC","MI","RCB"],
    correctAnswer: 2}
];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click",function(){
        if(!quizOver){
            value = $("input[type='radio']:checked").val();
            if(value ==  undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if( currentQuestion<questions.length){
                    displayCurrentQuestion();

                } else {
                    displayScore();
                    $(document).find("nextButton").text("Play Again?");
                    quizOver=true;
                }
            }
        } else {
            quizOver=false;
            $(document).find("nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();


        }
    });
}
);
function displayCurrentQuestion(){
    console.log("In display current Question");

    var question = questions[currentQuestion].queston;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);
    $(choiceList).find("li").remove();

    var choice;
    for(i=0;i<numChoices;i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value='+i+' name="dynradio" />' + choice+ '<li>').appendTo(choiceList);
    }
}
function resetQuiz(){
    currentQuestion=0;
    correctAnswers=0;
    hideScore();
}
function displayScore(){
    $(document).find(".quizContainer > .result").text("You scored: " +correctAnswers + " out of : "+ questions.length);
    $(document).find(".quizContainer > .result").show();
}
function hideScore(){
    $(document).find(".result").hide();
}