import React,{useState} from 'react';

import './App.css';

function App() {
  const[add,setAdd] = useState(0);

  //const[minus,setMinus]= useState();



  const increment = ()=>{
    setAdd(previousCount => previousCount+1);
    
  }
  const decrement =()=>{
    setAdd(add-1);
  }
  return (
    <div className="App">
     <button onClick = {increment}>+</button>
  <span>{add}</span>
     <button onClick = {decrement}>-</button>
    </div>
  );
}

export default App;
