import React from 'react'
import PrintLog from './PrintLog'
import ComponentB from './ComponentB'


const Optimization = () => {
  return (
    <>
      <ComponentB>
        <PrintLog value={'클릭'}/>
      </ComponentB>
    </>
  )
}

export default Optimization