
import './Visualizer.css';
import { useState } from 'react';
import mergeSort from '../scripts/mergeSort';
import React from 'react';



function Visualizer() {
  const [arrSize, setArrSize] = useState(10);
  const [arr,setArr] = useState([]);

  const handleMergeBtn = () => {
    console.log(arr);
    mergeSort(arr,0,arr.length-1);
    setArr(arr);
    console.log(arr);
  }

  function randomArr(len){
    let arr = [];
    for(let i = 0; i < len; i++){
      arr[i] = getRandomInt();
    }
    setArr(arr);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setArrSize(arrSize);
    randomArr(arrSize);
  }
  
  return (
    <div className="App">
      <div className='View'> 
        {arr.map((element,index) => <div key={index} style={{height: `${element/10}%`, background: "#77448f",
         alignSelf: "flex-end",flex: "1 0 0px", overflow: "hidden", margin: "0 .5px"}}>{element}</div>)}
      </div>
      <div className='navbar'>
            <button onClick={handleMergeBtn}>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Bubble Sort</button>
            <button>Insertion Sort</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Array Size:
                    <input type="number" className='value' min="10" max="500" name='arrSize' value={arrSize} onChange={(e) => setArrSize(e.target.value)}/>
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
function getRandomInt(){
  let min = Math.ceil(5);
  let max = Math.floor(1000);
  return Math.floor(Math.random() * (max - min) + min); 
}


