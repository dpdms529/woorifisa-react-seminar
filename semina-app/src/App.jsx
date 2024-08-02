import './App.css'
import ComponentA from './components/ComponentA'
import Parent from './components/Parent'
import Optimization from './components/Optimization'
import Unoptimized from './components/Unoptimized'

function App() {

  return (
    <>
      {/* <Parent/> */}
      <Unoptimized/>
      <Optimization/>
    </>
  )
}

export default App
