import React, { useState } from 'react'

const UseState = () => {
  
  const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 1);
    }

    return (
    <>
        <div className='m-4'>
            <div>My Count is {count}</div>
            <button className='bg-slate-300 border border-slate-500 p-3.5' onClick={updateCount}>Update Count</button>
        </div>
        
    </>
  )
}

export default UseState