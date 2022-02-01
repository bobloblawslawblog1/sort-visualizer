import './Visualizer.css';
import { useState } from 'react';
import mergeSort from './scripts/mergeSort';
import quickSort from './scripts/quickSort';
import React from 'react';
import { useEffect } from 'react/cjs/react.development';



function Visualizer() {
  const [arrSize, setArrSize] = useState(10);
  const [arr,setArr] = useState([]);
  
  useEffect(()=>{
    if(arr.length < 1){
      resetArr(arrSize);
    }
    console.log(arr);
  });

  const handleMsBtn = () => {
    let temp = [...arr];
    mergeSort(temp,0,temp.length-1);
    setArr(temp);
  }

  const handleQsBtn = () => {
    let temp = [...arr];
    quickSort(temp,0,temp.length-1);
    setArr(temp);
  }


  function resetArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
      arr.push(getRandomInt());
    }
    setArr(arr);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setArrSize(arrSize);
    resetArr(arrSize);
  }
  
  return (
    <div className="App">
      <div className='View'> 
        {arr.map((element,index) => <div key={index} className='element' style={{height: `${element/10}%`, background: "#77448f",
         alignSelf: "flex-end",flex: "1 0 0px", overflow: "hidden", margin: "0 .5px"}}>{element}</div>)}
      </div>
      <div className='navbar'>
            <button onClick={handleMsBtn}>Merge Sort</button>
            <button onClick={handleQsBtn}>Quick Sort</button>
            <button>Bubble Sort</button>
            <button>Insertion Sort</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Array Size:
                    <input type="number" className='value' min="10" max="500" name='arrSize' value={arrSize} onChange={(e) => setArrSize(e.target.value)} onInput={(e) => setArrSize(e.target.value)}/>
                    <input type="range" min="10" max="500" step="1" name='arrSize' value={arrSize} onChange={(e) => setArrSize(e.target.value)}/>
                </label> 
                <input type="submit" value="Enter"/>
            </form>
            
        </div>
    </div>
  );
}
export default Visualizer;



//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(){
  let min = Math.ceil(5);
  let max = Math.floor(1000);
  return Math.floor(Math.random() * (max - min) + min); 
}




