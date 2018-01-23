(function() {
    function Question (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.showQuestion = function() {
        console.log(this.question);
    
        for(i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correctAnswer) {
            console.log('correct!');
        }
        else {
            console.log('incorrect :/');
        }
    }
    
    var q1 = new Question('What\'s your favourite city?', 
                        ['Kraków', 'Lizbon', 'Barcelona'], 0);
    
    var q2 = new Question('What\'s your favourite bike?', 
                        ['Giant Reign', 'Kross Moon','Trek Fuel'], 1);
    
    var q3 = new Question('Are you progressing constantly on JS?', 
                        ['Yes', 'No'], 0);
    
    var questions = [q1, q2, q3];


    function nextQuestion() {
        var randomQ = Math.floor(Math.random() * questions.length);
        questions[randomQ].showQuestion();
        var userAnswer = prompt('Please provide the answer');
        
        if(userAnswer !== 'exit') {
            questions[randomQ].checkAnswer(parseInt(userAnswer));
            nextQuestion();
        }
    }

    nextQuestion(); 
    
})();
