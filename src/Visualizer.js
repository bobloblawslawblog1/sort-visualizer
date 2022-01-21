import Nav from './components/Nav';
import ListElement from './components/ListElement';
import './Visualizer.css';

function Visualizer() {
  var arr = [200, 500, 20, 22,33,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8];
  return (
    <div className="App">
      <div className='View'> 
        {arr.map((x)=> <ListElement value={x}/>)}
      </div>
      <Nav />
    </div>
  );
}

//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(){
  let min = Math.ceil(5);
  let max = Math.floor(500);
  return Math.floor(Math.random() * (max - min) + min); 
}
export default Visualizer;
