import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [word, setWord] = useState("")

  return (
    <>
      <h1>Arise Treasure Hunt</h1>
      <p>{word}</p>
      <div>
        <button onClick={() => setWord((prev => prev+"Q"))}>Q</button>
        <button onClick={() => setWord((prev => prev+"W"))}>W</button>
        <button onClick={() => setWord((prev => prev+"E"))}>E</button>
        <button onClick={() => setWord((prev => prev+"R"))}>R</button>
        <button onClick={() => setWord((prev => prev+"T"))}>T</button>
        <button onClick={() => setWord((prev => prev+"Y"))}>Y</button>
        <button onClick={() => setWord((prev => prev+"U"))}>U</button>
        <button onClick={() => setWord((prev => prev+"I"))}>I</button>
        <button onClick={() => setWord((prev => prev+"O"))}>O</button>
        <button onClick={() => setWord((prev => prev+"P"))}>P</button>
      </div>
      <div>
        <button onClick={() => setWord((prev => prev+"A"))}>A</button>
        <button onClick={() => setWord((prev => prev+"S"))}>S</button>
        <button onClick={() => setWord((prev => prev+"D"))}>D</button>
        <button onClick={() => setWord((prev => prev+"F"))}>F</button>
        <button onClick={() => setWord((prev => prev+"G"))}>G</button>
        <button onClick={() => setWord((prev => prev+"H"))}>H</button>
        <button onClick={() => setWord((prev => prev+"J"))}>J</button>
        <button onClick={() => setWord((prev => prev+"K"))}>K</button>
        <button onClick={() => setWord((prev => prev+"L"))}>L</button>
      </div>
      <button onClick={() => setWord((prev => prev+"Z"))}>Z</button>
      <button onClick={() => setWord((prev => prev+"X"))}>X</button>
      <button onClick={() => setWord((prev => prev+"C"))}>C</button>
      <button onClick={() => setWord((prev => prev+"V"))}>V</button>
      <button onClick={() => setWord((prev => prev+"B"))}>B</button>
      <button onClick={() => setWord((prev => prev+"N"))}>N</button>
      <button onClick={() => setWord((prev => prev+"M"))}>M</button>
      <button onClick={() => setWord((prev => prev+" "))}>Space Bar</button>
      <button onClick={() => setWord((prev => prev.length>0?prev.slice(0,-1):prev))}>BackSpace</button>
      <button onClick={() => setWord(" ")}>Clear</button>
      {/* <button onClick={() => setWord(prev => prev+"\n\n")}>Enter</button> */}
    </>
  )
}

export default App