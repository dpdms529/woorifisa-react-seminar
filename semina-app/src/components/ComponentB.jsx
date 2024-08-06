import React, { useState } from 'react'


const ComponentB = ({children}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>click</button>
            {children}
        </div>
    )
}

export default ComponentB