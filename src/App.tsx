import { useState } from 'react';
import './App.css'
import Question from './components/question/question';
import QuestionsArray from './questions.json';

function getRandomArbitrary(min: number, max:number) {
    return Math.random() * (max - min) + min;
}


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(QuestionsArray[0]) 

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(getRandomArbitrary(0, QuestionsArray.length))
    setCurrentQuestion(QuestionsArray[randomIndex])     
  }

  return (
    <>
      <Question
        text={currentQuestion.text}
        answers={currentQuestion.answers}
        correctAnswer={currentQuestion.correctAnswer}
        handleNextQuestion={handleNextQuestion}
      />
    </>
  )
}

export default App
