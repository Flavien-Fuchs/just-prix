import { useState } from 'react'
import './App.css'
import Price from "./components/Price";

function App() {

  const [justPrice, setJustPrice] = useState(Math.round(Math.random(1) * 100))
  console.log("price : " + justPrice)
  const [page, setPage] = useState('accueil')
  const [indice, setIndice] = useState(null)
  const [essai, setEssai] = useState(0)

  function startPlaying() {
    setPage("game")
  }

  function replay() {
    setJustPrice(Math.round(Math.random(1) * 100))
    setEssai(0)
    setPage("game")
  }

  const handleClick = (value) => {
    event.preventDefault();
    setEssai(essai + 1)

    if (parseInt(value) === justPrice) {
      setPage("win")
      setIndice(null)
    }
    if (value < justPrice) {

      setIndice("C'est + !")
      setTimeout(() => {
        setIndice(null)
      }, "1500");
    }

    if (value > justPrice) {
      setIndice("C'est - !")
      setTimeout(() => {
        setIndice(null)
      }, "1500");
    }
  }


  return (
    <>
      <div className='header'><img src="./src/assets/images/logo.png" alt="logo" /></div>
      <div className="container">
        {indice && <p className='indice'>{indice}</p>}
        {page === "accueil" && <button onClick={startPlaying}>Jouer !</button>}
        {page === "game" && <div className='game'><p>Nombre d&apos;essai : {essai}</p><Price handleClick={handleClick} /></div>}
        {page === "win" && <div className='win'><h1>bravo</h1><p>Vous avez gagné en {essai} essai(s)</p><button onClick={replay}>Rejouer ?</button></div>}
      </div>
    </>
  )
}

export default App
