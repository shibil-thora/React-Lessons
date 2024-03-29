import React, {useState} from 'react'; 

function Counter() {
    const [count, setCount] = useState(0)

    const incCount = () => setCount(count+1);
    const decCount = () => setCount(count-1); 
    const resetCount = () => setCount(0); 

    return(
        <>
        <div className='card'>
            <p><b>{count}</b></p>
        </div> 
        <div>
        <button onClick={() => {decCount()}}>-</button>
        <button onClick={() => {resetCount()}}>reset</button>
        <button onClick={() => {incCount()}}>+</button>
        </div>
        </>
    );
}

export default Counter