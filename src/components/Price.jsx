/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../App.css'


function Price({ handleClick }) {
    const [input, setInput] = useState(0)

    const handleInputChange = (event) => {
        const value = event.target.value
        setInput(value)
    }

    return (
        <form className='Input'>
            <input type='number' placeholder="quel est le prix?" onChange={handleInputChange} autoFocus />
            <button onClick={() => handleClick(input)}>Valider</button>
        </form >
    )
}

export default Price