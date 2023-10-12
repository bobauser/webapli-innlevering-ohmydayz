import React from 'react';

export default function Quiz({ handleNextQuestion,
    handleLastQuestion,
    questionsData,
    currentQuestionIndex,
    currentQuestion,
    selected,
    handleChoice, }) {
  return (
    <div>
      <h2 id="quiz-question">{questionsData.questions[currentQuestionIndex].title}</h2>
      <ul id='quiz-ullist'>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="quiz"
                value={index}
                checked={selected[currentQuestionIndex] == index}
                onChange={() => handleChoice(index)}
              />
              {answer.answer}
            </label>
          </li>
        ))}
        {
        <li key={4}>
            <label>
              <input
                type="radio"
                name="quiz"
                value={4}
                checked={selected[currentQuestionIndex] == 4}
                onChange={() => handleChoice(4)}
              />
              {"Vet ikke"}
            </label>
          </li>}
      </ul>
      <p id="quiz-hint">{questionsData.questions[currentQuestionIndex].helper.text}</p>
      
      {currentQuestionIndex > 0 ? (            
  <button id="quiz-last-button" onClick={handleLastQuestion}>Tilbake</button>
) : null}
{currentQuestionIndex === questionsData.questions.length - 1 ? (
  selected[currentQuestionIndex] !== null && selected[currentQuestionIndex] !== undefined ? (
    <button id="quiz-send-button" onClick={handleNextQuestion}>Send</button>
  ) : null
) : (
  selected[currentQuestionIndex] !== null && selected[currentQuestionIndex] !== undefined ? (
    <button id="quiz-next-button" onClick={handleNextQuestion}>Neste</button>
  ) : null
)}


    </div>
  );
} // <li id="quiz-opt1"><input type={'radio'} id="quiz-radio1" name='quiz' /><label></label></li>
//selected[currentQuestionIndex] == index


