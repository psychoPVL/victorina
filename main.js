(function () {
    class Question {
        constructor(theQuestionItselfF, answersF, correctAnswerOptionF) {
            this.theQuestionItself = theQuestionItselfF;
            this.answers = answersF;
            this.correctАnswer = correctAnswerOptionF;
        }
        answerOptions() {
            console.log(this.theQuestionItself);
            this.answers.forEach((element, index) => console.log(`${index} =>    ${element}`));
        }
        checkForCorrectAnswer(userResponse) {
            if (+userResponse === this.correctАnswer) {
                alert('CONGRATULATIONS this is the correct answer');
                totalPoints++;
                console.log(`point: ${totalPoints}`);
            } else if (userResponse !== null && userResponse !== 'exit') {
                alert('SORRY this is not the right answer');
                console.log(`total point: ${totalPoints}`);
            }
        }
        total() {
            console.log(`total point: ${totalPoints}`);
        }
    }

    let totalPoints = 0;

    const questionOne = new Question('strongest super hero?', ['batman', 'spider man', 'hulk'], 2);
    const questionTwo = new Question('the most agile super hero?', ['batman', 'spider man', 'hulk'], 1);
    const questionThree = new Question('richest super hero?', ['batman', 'spider man', 'hulk'], 0);

    const questions = [questionOne, questionTwo, questionThree];

    function endlessQuestion() {
        const randomQuestions = Math.floor(Math.random() * questions.length);

        questions[randomQuestions].answerOptions();

        const userResponse = prompt('choose the only correct answer', '(◕‿◕)');

        questions[randomQuestions].checkForCorrectAnswer(userResponse);

        if (userResponse === null || userResponse === 'exit') {
            alert('the game is over');
        } else {
            endlessQuestion();
        }
    }
    endlessQuestion();
})();
