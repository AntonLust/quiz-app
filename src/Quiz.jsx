import React from 'react'
import { useState } from "react";
import { resultInitialState } from './constants';

function Quiz({questions}) {
    const [currentQuestion, setCurrenQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitialState)
    const [showResult, setShowResult] = useState(false)

    const {question, choices, correctAnswer} = questions[currentQuestion];
    // der Wert von currentQuestion wird als Index verwendet, um das entsprechende Objekt im Array zu erhalten.
    const onAnswerClick = (answer, index) =>{
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else{
            setAnswer(false);
        }
    }

    const onClickeNext =()=>{
        setAnswerIdx(null);
        setResult((prev) => answer ? {...prev, score:prev.score +5, 
        correctAnswers: prev.correctAnswers +1} : {
            ...prev,wrongAnswers: prev.wrongAnswers +1,
        }
        )
        if(currentQuestion !== questions.length -1){
            setCurrenQuestion((prev)=> prev +1)
        } else{
            setCurrenQuestion(0)
            setShowResult(true)
        }
    }

    const onTryAgain =()=>{
        setResult(resultInitialState);
        setShowResult(false);

    }
        
  return (
    <div className='quiz-container'>
        {/* Wenn nicht results, render ich das hier, ansonsten div mit classname result */}
            {!showResult ? (<><span className='active-question-no'>{currentQuestion + 1}</span>
        <span className='total-question'>/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
            {choices.map((answer, index)=>(
                <li onClick={()=> onAnswerClick(answer, index)} key={index}
                className={answerIdx === index ? 'selected-answer':null}>
                    {answer}
                </li>
            ))}
        </ul>
        <div className="footer">
            <button onClick={onClickeNext} disabled ={answerIdx === null}>
                {currentQuestion === questions.length -1 ? "finished" : "next"}
            </button>
        </div></>) : <div className='result'>
            <h3>Results</h3>
            <p>Total Questions: <span>{questions.length}</span></p>
            <p>Score: <span>{result.length}</span></p>
            <p>Correct Questions: <span>{result.correctAnswers}</span></p>
            <p>Wrong Anwers: <span>{result.wrongAnswers}</span></p>
            <button onClick={onTryAgain}>Try Again</button>

            </div>}
        
        

    </div>
  )
}

export default Quiz;