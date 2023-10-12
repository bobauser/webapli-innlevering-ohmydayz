"use client";

import React, { useState } from 'react';
import questionsData from '../lib/alternativ1.json';
import Quiz from '../components/quiz';
import Result from '../components/results';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const currentQuestion = questionsData.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleLastQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleChoice = (index) => {
    const newSelected = [...selected];
    newSelected[currentQuestionIndex] = index;
    setSelected(newSelected);
  }

  const handleRestart = () => {
    console.log(selected)
    setSelected([]); // Reset the selected state to an empty array
    setCurrentQuestionIndex(0);
    console.log(currentQuestionIndex);
  };

  return (
    <div>
      <h1>Testing med Spørsmål</h1>
      {currentQuestionIndex < questionsData.questions.length ? (
        <Quiz
          handleNextQuestion={handleNextQuestion}
          handleLastQuestion={handleLastQuestion}
          questionsData={questionsData}
          currentQuestionIndex={currentQuestionIndex}
          currentQuestion={currentQuestion}
          selected={selected}
          handleChoice={handleChoice}
        />
      ) : (
        <Result handleRestart={handleRestart} questions={questionsData.questions} answers={selected} />
      )}
    </div>
  );
}
