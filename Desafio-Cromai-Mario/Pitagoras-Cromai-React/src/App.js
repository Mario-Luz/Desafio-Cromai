import React,{useState} from 'react';
import './App.css';

function App() {
  const [num1,setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function calc(){
    setResult(Math.hypot(num1,num2))
   console.log(result)
   

  }

  return (
    <>
    <strong> Cateto Adjacente </strong>
          <input placeholder='Insira o valor do Cateto ' id="num1" value={num1} type="text" onChange={(e) => setNum1(e.target.value)} ></input>
          <strong> Cateto Opositor </strong>
          <input placeholder='Insira o valor do Cateto' id="num2" value={num2} type="text" onChange={(e) => setNum2(e.target.value)} ></input>
          <button type='submit' onClick={calc} >Calcular</button>
          <h1 id='result'>A Hipotenusa é: {result}</h1>
         
    </>
    
  );
}

export default App;
