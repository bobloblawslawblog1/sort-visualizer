import './Visualizer.css';
import { useState } from 'react';
import mergeSort from './scripts/mergeSort';
import quickSort from './scripts/quickSort';
import React from 'react';
import { useEffect } from 'react/cjs/react.development';



function Visualizer() {
  const [arrSize, setArrSize] = useState(100);
  const [arr,setArr] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [sorted,setSorted] = useState(false);
  const [colors,setColors] = useState([]);

  useEffect(()=>{
    resetArr(arrSize);
  },[]);

  useEffect(()=>{
    if(animations.length > 0){
      setTimeout(() => {
        let temp = [...animations];
        let temp2 = [...colors];
        if(colors.length > 1) {temp2.shift()};
        let i = temp.shift();
        console.log(temp);
        setArr([...i]);
        setAnimations(temp);
        setColors(temp2);
      }, 100); 
    }
  },[arr]);


  const handleMsBtn = () => {
    if(!sorted){
      let temp = [...arr];
      mergeSort(temp,0,temp.length-1,animations);
      setArr([...arr]);
      setSorted(true);
    }
  }

  const handleQsBtn = () => {
    if(!sorted){
      let temp = [...arr];
      quickSort(temp,0,temp.length-1,animations,colors,setColors);
      setArr([...arr]);
      setSorted(true);
    }
  }


  const resetArr = (len) => {
    let arr = [];
    let c = [];
    for(let i = 0; i < len; i++){
      arr.push(getRandomInt());
      c.push(0);
    }
    setArr(arr);
    setSorted(false);
    setColors([c]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setArrSize(arrSize);
    resetArr(arrSize);
    setAnimations([]);
  }
  
  return (
    <div className="App">
      <div className='View'> 
      {arr.map((element,index) => <div key={index} className='element' style={{height: `${element/10}%`, background: (colors[0][index] === 0)? "#77448f":(colors[0][index] === 1) ? "green":(colors[0][index] === 2) ? "red":{},
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




