import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [responseMessage, setResponseMessage] = useState('');
  const [currentQuestion,setCurrentQuestion] = useState('');

  useEffect(() => {
    // Hardcoded data

    const transcript = {
        transcript: "My string transcript"
    };
    const sendTranscriptToFlask = async () => {
      try{
        const response = await axios.post('/proccess_audio',transcript)
        setResponseMessage(response.data.message);  // Display success message
        console.log(response.data.message);  // Log the entire response

      } catch (error)
      {
        setResponseMessage('Error submitting data');
        console.error('Error:', error);
      }
    };

    const get_question = async () => {
        try{
          const response = await axios.get("/get_question")
          setCurrentQuestion(response.data.message)
          console.log(response.data.message)
        } catch (error){
          console.log(error)
        }
    };

    get_question();
    sendTranscriptToFlask();

  }, []);

  return (
    <div className="App">
      <h1>Sending Hardcoded Data to Flask</h1>
      <div>
          <h3>{currentQuestion || "Loading question..."}</h3>
      </div>
    </div>
  );
}

export default App;

