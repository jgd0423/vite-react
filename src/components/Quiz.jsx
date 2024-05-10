import { useState } from 'react';

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevAnswers => [selectedAnswer, ...prevAnswers]);
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = QUESTIONS.at(activeQuestionIndex).answers.toSorted(() => Math.random() - 0.5);
  console.log('RENDER');
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout="10000" onTimeout={() => handleSelectAnswer(null)} />
        <h2>{QUESTIONS.at(activeQuestionIndex).text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => {
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
