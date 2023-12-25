import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {


    const [answerState, setAnswerState] = useState('');

    // const [actveQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =
        answerState === '' ? userAnswers.length : userAnswers.length - 1; //userAnswers.length - 1; taken bcz so that we will stil stick to the old questions

    // const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // shuffledAnswers.sort(()=>Math.random()-0.5);

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setAnswerState('answered');
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer]
            });

            setTimeout(() => {
                if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {//added to the dependency bcz whenever the value changes the should be recreated
                    setAnswerState('correct');
                } else {
                    setAnswerState('wrong')
                }
            }, 1000);

            setTimeout(() => {
                setAnswerState('');
            }, 2000);

        }, [activeQuestionIndex]
    );// dependency is empty bcz we are not using any state or prop and also not using any value that depeend on prop

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return <div id='summary'>
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
        </div>
    }

    return (
        <div id="quiz">

            <Question 
            key={activeQuestionIndex}
            questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            answerState={answerState}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}