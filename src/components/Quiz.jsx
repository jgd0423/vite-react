import { useState } from 'react';

import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevAnswers => [selectedAnswer, ...prevAnswers]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS.at(activeQuestionIndex).text}</h2>
        <ul id="answers">
          {QUESTIONS.at(activeQuestionIndex).answers.map(answer => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
