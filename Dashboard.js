import React, { useState } from "react";
import QuestionNumber from "../components/QuestionNumber";
import QuestionContent from "../components/QuestionContent";
import Recordbutton from "../components/Recordbutton";
import StopRecordbutton from "../components/StopRecordButton";
import NextButton from "../components/NextButton";

//audio stuff
import { AudioRecorder } from "react-audio-voice-recorder";
import AudioConverter from "../components/AudioConverter";

const Dashboard = () => {
  const questionsString =
    "What is your name?:What is your age?:What is your favorite color?";

  const questionsArray = questionsString.split(":");

  const [counter, setCounter] = useState(0);
  const [question, setQuestion] = useState("");

  const refresh = () => {
    increment();
    //refreshes page on nextbutton click
    //window.location.reload();
  };

  const newQuestion = () => {};

  const increment = () => {
    return setCounter(counter + 1);
  };

  return (
    <>
      <QuestionNumber questionNumberGetter={() => counter}></QuestionNumber>
      <QuestionContent
        QuestionContentGetter={() => "hello world!"}
      ></QuestionContent>
      <div>Dashboasdasdard</div>
      <AudioConverter></AudioConverter>
      <></>
      <NextButton NextButtonCall={refresh}></NextButton>
    </>
  );
};

export default Dashboard;