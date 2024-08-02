import React, { useState } from 'react'
import PrintLog from './PrintLog';


const ComponentA = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>click</button>
            <PrintLog value={'클릭'} />
        </div>
    )
}

export default ComponentA