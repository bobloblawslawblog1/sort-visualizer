import Nav from './Nav';
import ListElement from './ListElement';
import './Visualizer.css';
import { useEffect, useState } from 'react';
import mergeSort from '../scripts/mergeSort';
import React from 'react';



function Visualizer(props) {
  const [arrSize, setArrSize] = useState(10);
  const [arr,setArr] = useState(randomArr(arrSize));
  
  
  function handleMergeBtn(){
    mergeSort(arr,0,arr.length-1);
    setArr(arr);
    console.log(arr);
  }
  
  return (
    <div className="App">
      <div className='View'> 
        {Object.keys(arr).map((keys) => <ListElement key={keys} value={arr[keys]}/>)}
      </div>
      <Nav value={arrSize} stateChange={setArrSize} mergeBtn={handleMergeBtn}/>
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

function randomArr(len){
  let arr = [];
  for(let i = 0; i < len; i++){
    arr[i] = getRandomInt();
  }
  return arr;
}
