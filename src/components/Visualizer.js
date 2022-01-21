import Nav from './Nav';
import ListElement from './ListElement';
import './Visualizer.css';
import { useEffect, useState } from 'react';

function Visualizer() {
  const [arrSize, setArrSize] = useState(500);
  var arr = [];
  for(let i = 0; i < arrSize; i++){
    arr[i] = getRandomInt();
  }


  return (
    <div className="App">
      <div className='View'> 
        {arr.map((x)=> <ListElement value={x}/>)}
      </div>
      <Nav value={arrSize} stateChange={setArrSize}/>
    </div>
  );
}
export default Visualizer;


//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(){
  let min = Math.ceil(5);
  let max = Math.floor(750);
  return Math.floor(Math.random() * (max - min) + min); 
}

