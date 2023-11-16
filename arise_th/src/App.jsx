import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [word, setWord] = useState("")

  return (
    <div className='main'>
      <p>{word}<span className='iconBlink'>|</span></p>
      {/* <div className='icon-blink'></div> */}
      <div className='keyboardContainer'>
        <div className='rowSet'>
          <button onClick={() => setWord((prev => prev+"K"))}>Q</button>
          <button onClick={() => setWord((prev => prev+"C"))}>W</button>
          <button onClick={() => setWord((prev => prev+"X"))}>E</button>
          <button onClick={() => setWord((prev => prev+"Z"))}>R</button>
          <button onClick={() => setWord((prev => prev+"V"))}>T</button>
          <button onClick={() => setWord((prev => prev+"T"))}>Y</button>
          <button onClick={() => setWord((prev => prev+"R"))}>U</button>
          <button onClick={() => setWord((prev => prev+"S"))}>I</button>
          <button onClick={() => setWord((prev => prev+"Y"))}>O</button>
          <button onClick={() => setWord((prev => prev+"J"))}>P</button>
        </div>
        <div className='rowSet'>
          <button onClick={() => setWord((prev => prev+"N"))}>A</button>
          <button onClick={() => setWord((prev => prev+"L"))}>S</button>
          <button onClick={() => setWord((prev => prev+"B"))}>D</button>
          <button onClick={() => setWord((prev => prev+"U"))}>F</button>
          <button onClick={() => setWord((prev => prev+"I"))}>G</button>
          <button onClick={() => setWord((prev => prev+"M"))}>H</button>
          <button onClick={() => setWord((prev => prev+"G"))}>J</button>
          <button onClick={() => setWord((prev => prev+"D"))}>K</button>
          <button onClick={() => setWord((prev => prev+"F"))}>L</button>
        </div>
        <div className='rowSet'>
          <button onClick={() => setWord((prev => prev+"E"))}>Z</button>
          <button onClick={() => setWord((prev => prev+"P"))}>X</button>
          <button onClick={() => setWord((prev => prev+"A"))}>C</button>
          <button onClick={() => setWord((prev => prev+"O"))}>V</button>
          <button onClick={() => setWord((prev => prev+"W"))}>B</button>
          <button onClick={() => setWord((prev => prev+"Q"))}>N</button>
          <button onClick={() => setWord((prev => prev+"H"))}>M</button>
        </div>
        <div className='rowSet'>
          <button onClick={() => setWord(" ")} className="double">clear</button>
          <button onClick={() => setWord((prev => prev+" "))} id="spaceBar"></button>
          <button onClick={() => setWord((prev => prev.length>0?prev.slice(0,-1):prev))} className="double">delete</button>
        </div>
      </div>
      {/* <button onClick={() => setWord(prev => prev+"\n\n")}>Enter</button> */}
    </div>
  )
}

export default App