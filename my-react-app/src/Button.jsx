import React, {useState} from 'react'

function Button() {

    const handlClic = (e) => e.target.style.backgroundColor = 'red';
    return(
        <button onClick={(e) => handlClic(e)}>button</button>
    )
}
export default Button