
import { useState } from 'react';
import './Nav.css';

function Nav({stateChange, value, mergeBtn}){ 
    const [size,setSize] = useState(value);

    const handleSubmit = (event) => {
        event.preventDefault();
        stateChange(size);
    }
    
    const handleMergeBtn = (event) => {
        event.preventDefault();
        mergeBtn();
    }

    return(
        <div className='navbar'>
            <button onClick={handleMergeBtn}>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Bubble Sort</button>
            <button>Insertion Sort</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Array Size:
                    <input type="number" className='value' min="10" max="500" name='arrSize' value={size} onChange={(e) => setSize(e.target.value)}/>
                    <input type="range" min="10" max="500" step="1" name='arrSize' value={size} onChange={(e) => setSize(e.target.value)}/>
                </label> 
                <input type="submit" value="Enter"/>
            </form>
            
        </div>
    );
}
export default Nav;