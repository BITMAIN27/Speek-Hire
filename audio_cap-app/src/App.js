

import react, {useState,useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(()=> {
    fetch("/members").then(res => res.json()).then(data=> {setData(data); console.log(data);})}
    ,[])

  return (
    <div>
      Flask test server
    </div>
  );
}

export default App;
