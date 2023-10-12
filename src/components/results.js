export default function Result({ handleRestart, questions, answers }) {
    const correctAnswers = questions.reduce(
        (count, question, index) => 
          question.answers[answers[index]]?.correct ? count + 1 : count,
        0
      );
      
const failedAnswers = answers.filter(answer => answer === 4);
const numberOfFailedAnswers = failedAnswers.length;


    return (
        <div>
          <h2>
            Resultatet ditt: {correctAnswers} / {questions.length}
          </h2>
          <h3>
            Ubesvarte spørsmål: {numberOfFailedAnswers}
          </h3>
          <button onClick={handleRestart}>Start på nytt</button>
        </div>
      );
    }