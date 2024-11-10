import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    // Hardcoded data

    const transcript = {
        transcript: "My string transcript"
    };
    const sendTranscriptToFlask = async () => {
      try{
        const response = await axios.post('/proccess_audio',transcript)
        setResponseMessage(response.data.message);  // Display success message
        console.log(response.data);  // Log the entire response

      } catch (error)
      {
        setResponseMessage('Error submitting data');
        console.error('Error:', error);
      }
    };

    sendTranscriptToFlask();

  }, []);

  return (
    <div className="App">
      <h1>Sending Hardcoded Data to Flask</h1>
      <div>
        <h3>{responseMessage}</h3>  {/* Display response from Flask */}
      </div>
    </div>
  );
}

export default App;

