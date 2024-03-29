import React, {useState} from "react";

function ColourPicker() {

    const [color, setName] = useState('#050505')
    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <>
        <div className='card' style={{backgroundColor: color}}>
        <h6>color: {color}</h6>
        </div>
        <input type="color" onChange={(e) => {handleChange(e)}} value={name}/>
        </>
    );
}

export default ColourPicker