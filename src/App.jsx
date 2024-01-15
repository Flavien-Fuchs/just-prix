import { useState } from 'react'
import styles from './App.module.css'
import Price from "./components/Price"
import Input from "./components/Input"

function App() {
  const [valueInput, setValueInput] = useState(0)
  const [page, setPage] = useState('acceuil')
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("")
  const [justPrice, setJustPrice] = useState(Math.round(Math.random(1) * 100))

  const handleClick = (value) => {
    value = parseInt(value)
    setValueInput(value)
    verification(value)
  }
  const verification = (value) => {
    console.log(value)
    console.log(justPrice)
    if (justPrice === valueInput) {
      setMessage("GOOD JOB")
      setScore(score + 1)
    } else if (justPrice < value) {
      setMessage("C'est en dessous !")
    } else {
      setMessage("C'est au dessus !")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>LE JUST PRICE</h1>
      </div>
      <div className={styles.body}>
        {page === 'acceuil' && <div className={styles.accueil}>
          <div onClick={() => setPage("game")}>Jouer?</div>
        </div>}
        {page === 'game' && <div className={styles.game}>
          <p>{score}</p>
          <p>{message}</p>
          <Input handleClick={handleClick} />
          <Price justPrice={justPrice} />
        </div>}

      </div>

    </div>
  )
}

export default App