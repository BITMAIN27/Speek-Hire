import React, { useState } from "react";
import QuestionNumber from "../components/QuestionNumber";
import QuestionContent from "../components/QuestionContent";
import NextButton from "../components/NextButton";
import axios from "axios";
//audio stuff
import AudioConverter from "../components/AudioConverter";

const Dashboard = () => {
  const questionsString =
    "What is your name?:What is your age?:What is your favorite color?";

  const questionsArray = questionsString.split(":");

  const [counter, setCounter] = useState(0);
  const [question, setQuestion] = useState("");
  const [transcriptquestion, setTranscriptQuestion] = useState("");
  const [transcript, setTranscript] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendTranscript = async (transcript) => {
    try {
      const transcriptResponse = await axios.post(
        "/proccess_audio",
        transcript
      );
      setResponseMessage(transcriptResponse.data.message); // Update message based on response
      console.log(transcriptResponse.data.message); // Log the transcript response
    } catch (error) {
      setResponseMessage("Error submitting data");
      console.error("Error:", error);
    }
  };

  const refresh = () => {
    increment();
    sendTranscript();
  };

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
      <AudioConverter setTranscript={setTranscript}></AudioConverter>

      <></>
      <NextButton NextButtonCall={refresh}></NextButton>
    </>
  );
};

export default Dashboard;
