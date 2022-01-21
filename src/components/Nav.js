import './Nav.css';

function Nav(){
    const [arrSize,setArrSize];
    return(
        <div className='navbar'>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Bubble Sort</button>
            <button>Insertion Sort</button>
            <input type="range" min="10" max="1000"/>

        </div>
    );
}

export default Nav;