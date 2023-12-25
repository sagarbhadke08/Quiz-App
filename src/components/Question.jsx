import QuestionTimer from "./QuestionTimer";

import Answers from "./Answers";

export default function Question({questionText ,answers , onSelectAnswer}) {

    return (
        <div id="question">
            <QuestionTimer
                key={activeQuestionIndex} // added key to recreate new component for question
                timeout={10000}
                onTimeout={handleSkipAnswer}
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <Answers
                key={activeQuestionIndex}
                answers={QUESTIONS[activeQuestionIndex].answers}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}