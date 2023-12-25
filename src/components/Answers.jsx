import { useRef } from "react";

export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    onSelect
}) {

    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        //Added the code here bcz it was trying to access which the quiz was completed and the code exe fails
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (

        <ul id='answers'>
            {shuffledAnswers.current.map((answer) => {
                // const isSelected = userAnswers[userAnswers.length - 1] === answer;
                const isSelected = selectedAnswer === answer;

                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClasses = answerState;
                }

                return (
                    <li key={answer} className='answer'>
                        <button onClick={() => onSelect(answer)} className={cssClasses}>
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>

    );
}