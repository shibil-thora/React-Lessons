import React, {useState} from 'react'

function State() {
    const [a, setA] = useState(5)


    function changeValue() {
        setA(a + 10)
        console.log(a)
    }
    return(
        <>
        <h1>value of a: {a}</h1>
        <button onClick={() => {changeValue()}}>Click</button>
        </>
    );
}

export default State