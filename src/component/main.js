import React, { useState } from 'react';

function main() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function getData(input) {
        setData(input.target.value);
        setPrint(false);
        console.log(input.target.value);
    }

    return (
        <div className="App">
        <h1>Hello there</h1>
        <input type="text" onChange={getData}/>
        <button onClick={()=>
            setPrint(true)
        }>Print Text</button>
        { 
            print ? <p>{data}</p> : null
        }
        
        </div>
    );
}

export default Main;
