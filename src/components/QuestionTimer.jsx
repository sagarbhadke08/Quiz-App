import { useState,useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {


    const[remainingTime, setRemainingTime] =useState(timeout);


    setTimeout(onTimeout, timeout);
    // setTimeout(()=>{

    //     onTimeout();

    // },timeout)

    setInterval(()=>{
        setRemainingTime(prevRemainingTime=>prevRemainingTime-100);
    },100)
    return <progress id="question-timer" />;
}