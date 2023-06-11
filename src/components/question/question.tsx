import './question.css'

interface QuestionProps {
    text: string;
    answers: string[];
    correctAnswer: string;
    handleNextQuestion: () => void;
}

import React, { useState } from 'react';

function Question({ text, answers, correctAnswer,  handleNextQuestion}: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (selectedAnswer === correctAnswer) {
        setIsCorrect(true);
    } else {
        setIsCorrect(false);
    }
    console.log(selectedAnswer);
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <form onSubmit={handleSubmit}>
        <ul id='answers'>
          {answers.map((answer, index) => (
            <div key={index} >
              <input
                type="radio"
                id={`answer-${index}`}
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={handleAnswerChange}
              />
              <label id='choicesText' htmlFor={`answer-${index}`}>{answer}</label>
            </div>
          ))}
        </ul>
              { isSubmitted && <p>Alternativa correta: {correctAnswer}</p> }
              { isSubmitted && isCorrect && <p>Parabéns, você acertou!</p> }
              { isSubmitted && !isCorrect && <p>Que pena, você errou!</p> }
              <div >
                <button className='buttons' type="submit">Enviar</button>
                <button className='buttons' type="button" onClick={() => {setIsSubmitted(false); handleNextQuestion()}}>Proximo</button>
            </div>
      </form>
    </div>
  );
}

export default Question;

