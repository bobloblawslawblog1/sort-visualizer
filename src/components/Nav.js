import './Nav.css';

function Nav(){
    const [arrSize,setArrSize] = 100;
    return(
        <div className='navbar'>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Bubble Sort</button>
            <button>Insertion Sort</button>
            <input type="range" min="10" max="1000" onInput={(e)=> setArrSize(e.target.value)}/>
            <p>{arrSize}</p>
        </div>
    );
}


export default Nav;